import { z } from 'zod';
import type { QueryOptions, McpResponse, McpTextContent, Connection, Project } from '../types/index.ts';
import { getProjects } from '../services/api.ts';
import { TOOL_CONFIG } from '../config/api.ts';
import { formatDate } from '../utils/language.ts';

/**
 * MCP tool definition for getting projects
 */
export const getProjectsTool = {
  name: TOOL_CONFIG.projects.name,
  description: TOOL_CONFIG.projects.description,
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
      const response: Connection<Project> = await getProjects(params);
      
      if (response.edges.length === 0) {
        const content: McpTextContent = {
          type: 'text',
          text: 'No projects found.'
        };

        return {
          content: [content],
          _meta: { totalCount: 0 }
        };
      }

      const projectList = response.edges.map(({ node: project }) => {
        const date = formatDate(project.createdAt);
        return `- ${project.name || 'Unnamed Project'} (Created: ${date})`;
      }).join('\n');

      const totalMessage = `Found ${response.edges.length} project${response.edges.length === 1 ? '' : 's'}.`;
      const paginationInfo = response.pageInfo.hasNextPage ? 
        'There are more results available. Use the cursor for pagination.' : 
        'No more results available.';

      const content: McpTextContent = {
        type: 'text',
        text: `${totalMessage}\n${paginationInfo}\n\n${projectList}`
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
        text: `Failed to fetch projects: ${error}`
      };

      return {
        content: [content],
        isError: true
      };
    }
  }
}; 