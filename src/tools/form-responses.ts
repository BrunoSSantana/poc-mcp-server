import { z } from 'zod';
import type { QueryOptions, McpResponse, McpTextContent, Connection, FormResponse } from '../types/index.ts';
import { getFormResponses } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import { formatDate } from '../utils/language.ts';

/**
 * MCP tool definition for getting form responses
 */
export const getFormResponsesTool = {
  name: TOOL_CONFIG.formResponses.name,
  description: TOOL_CONFIG.formResponses.description,
  parameters: {
    first: z.number().optional().describe('Number of items to return'),
    after: z.string().optional().describe('Cursor for pagination'),
    filter: z.record(z.unknown()).optional().describe('Filter criteria'),
    orderBy: z.array(z.object({
      field: z.string(),
      direction: z.enum(['AscNullsFirst', 'AscNullsLast', 'DescNullsFirst', 'DescNullsLast']),
    })).optional().describe('Sorting criteria'),
  },
  handler: async (params: QueryOptions): Promise<McpResponse> => {
    try {
      const response: Connection<FormResponse> = await getFormResponses(params);
      
      if (response.edges.length === 0) {
        const content: McpTextContent = {
          type: 'text',
          text: 'No form responses found.'
        };

        return {
          content: [content],
          _meta: { totalCount: 0 }
        };
      }

      const responseList = response.edges.map(({ node: formResponse }) => {
        const date = formatDate(formResponse.createdAt);
        const formTitle = formResponse.form?.title || 'Unknown Form';
        const loomerName = formResponse.loomer?.name || 'Unknown User';
        const responseCount = Object.keys(formResponse.responses).length;
        
        return `- Response to "${formTitle}" by ${loomerName} (${date})\n  Contains ${responseCount} answer${responseCount === 1 ? '' : 's'}`;
      }).join('\n\n');

      const totalMessage = `Found ${response.edges.length} form response${response.edges.length === 1 ? '' : 's'}.`;
      const paginationInfo = response.pageInfo.hasNextPage ? 
        'There are more results available. Use the cursor for pagination.' : 
        'No more results available.';

      const content: McpTextContent = {
        type: 'text',
        text: `${totalMessage}\n${paginationInfo}\n\n${responseList}`
      };

      return {
        content: [content],
        _meta: {
          totalCount: response.totalCount,
          hasNextPage: response.pageInfo.hasNextPage,
          endCursor: response.pageInfo.endCursor
        }
      };
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Unknown error occurred';
      const content: McpTextContent = {
        type: 'text',
        text: `Failed to fetch form responses: ${error}`
      };

      return {
        content: [content],
        isError: true
      };
    }
  }
}; 