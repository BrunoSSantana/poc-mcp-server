import { z } from 'zod';
import type { QueryOptions, McpResponse, McpTextContent, Connection, Loomer } from '../types/index.ts';
import { getLoomers, getLoomersInArea } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import { generateCountResponse } from '../utils/language.ts';

/**
 * MCP tool definition for getting Loomers
 */
export const getLoomersTool = {
  name: TOOL_CONFIG.loomers.name,
  description: TOOL_CONFIG.loomers.description,
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
      const response: Connection<Loomer> = await getLoomers(params);
      
      if (response.edges.length === 0) {
        const content: McpTextContent = {
          type: 'text',
          text: 'No Loomers found.'
        };

        return {
          content: [content],
          _meta: { totalCount: 0 }
        };
      }

      const loomerList = response.edges.map(({ node: loomer }) => {
        const role = loomer.email ? ` (${loomer.email})` : '';
        return `- ${loomer.name || 'Unnamed'}${role} in ${loomer.area?.name || 'Unknown Area'}`;
      }).join('\n');

      const totalMessage = `Found ${response.edges.length} Loomer${response.edges.length === 1 ? '' : 's'}.`;
      const paginationInfo = response.pageInfo.hasNextPage ? 
        'There are more results available. Use the cursor for pagination.' : 
        'No more results available.';

      const content: McpTextContent = {
        type: 'text',
        text: `${totalMessage}\n${paginationInfo}\n\n${loomerList}`
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
        text: `Failed to fetch Loomers: ${error}`
      };

      return {
        content: [content],
        isError: true
      };
    }
  }
};

/**
 * MCP tool definition for getting Loomers in an area
 */
export const getLoomersInAreaTool = {
  name: TOOL_CONFIG.loomersInArea.name,
  description: TOOL_CONFIG.loomersInArea.description,
  parameters: {
    areaId: z.string().describe('ID of the area to count Loomers in'),
  },
  handler: async (params: { areaId: string }): Promise<McpResponse> => {
    try {
      const count = await getLoomersInArea(params.areaId);
      const text = generateCountResponse(count, 'Loomer', params.areaId);

      const content: McpTextContent = {
        type: 'text',
        text
      };

      return {
        content: [content],
        _meta: { count }
      };
    } catch (err) {
      const error = err instanceof Error ? err.message : 'Unknown error occurred';
      const content: McpTextContent = {
        type: 'text',
        text: `Failed to count Loomers in area: ${error}`
      };

      return {
        content: [content],
        isError: true
      };
    }
  }
}; 