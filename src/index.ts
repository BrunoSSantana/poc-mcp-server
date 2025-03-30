import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { SERVER_CONFIG, TOOL_CONFIG } from './config/api.js';
import { getLoomersInAreaTool, getLoomersTool } from './tools/loomers.js';
import { getFormsTool } from './tools/forms.js';
import { getFormResponsesTool } from './tools/form-responses.js';
import { getProjectsTool } from './tools/projects.js';

/**
 * Schema for tool parameters
 */
const toolSchemas = {
  [TOOL_CONFIG.loomers.name]: z.object({
    first: z.number().optional(),
    after: z.string().optional(),
    filter: z.record(z.unknown()).optional(),
    orderBy: z.array(z.object({
      field: z.string(),
      direction: z.enum(['AscNullsFirst', 'AscNullsLast', 'DescNullsFirst', 'DescNullsLast']),
    })).optional(),
  }),
  [TOOL_CONFIG.loomersInArea.name]: z.object({
    areaId: z.string(),
  }),
  [TOOL_CONFIG.forms.name]: z.object({
    first: z.number().optional(),
    after: z.string().optional(),
    filter: z.record(z.unknown()).optional(),
    orderBy: z.array(z.object({
      field: z.string(),
      direction: z.enum(['AscNullsFirst', 'AscNullsLast', 'DescNullsFirst', 'DescNullsLast']),
    })).optional(),
  }),
  [TOOL_CONFIG.formResponses.name]: z.object({
    first: z.number().optional(),
    after: z.string().optional(),
    filter: z.record(z.unknown()).optional(),
    orderBy: z.array(z.object({
      field: z.string(),
      direction: z.enum(['AscNullsFirst', 'AscNullsLast', 'DescNullsFirst', 'DescNullsLast']),
    })).optional(),
  }),
  [TOOL_CONFIG.projects.name]: z.object({
    first: z.number().optional(),
    after: z.string().optional(),
    filter: z.record(z.unknown()).optional(),
    orderBy: z.array(z.object({
      field: z.string(),
      direction: z.enum(['AscNullsFirst', 'AscNullsLast', 'DescNullsFirst', 'DescNullsLast']),
    })).optional(),
  }),
} as const;

type ToolParams = {
  [TOOL_CONFIG.loomers.name]: z.infer<typeof toolSchemas[typeof TOOL_CONFIG.loomers.name]>;
  [TOOL_CONFIG.loomersInArea.name]: z.infer<typeof toolSchemas[typeof TOOL_CONFIG.loomersInArea.name]>;
  [TOOL_CONFIG.forms.name]: z.infer<typeof toolSchemas[typeof TOOL_CONFIG.forms.name]>;
  [TOOL_CONFIG.formResponses.name]: z.infer<typeof toolSchemas[typeof TOOL_CONFIG.formResponses.name]>;
  [TOOL_CONFIG.projects.name]: z.infer<typeof toolSchemas[typeof TOOL_CONFIG.projects.name]>;
};

type ToolRequest<T extends keyof ToolParams> = {
  method: `tools/${T}`;
  params?: ToolParams[T];
};

type ToolResponse = {
  result: string;
};

/**
 * Create and configure the MCP server
 */
async function main() {
  const server = new Server(SERVER_CONFIG, {
    capabilities: {
      tools: {
        tools: [
          {
            name: TOOL_CONFIG.loomers.name,
            description: TOOL_CONFIG.loomers.description,
            parameters: toolSchemas[TOOL_CONFIG.loomers.name],
          },
          {
            name: TOOL_CONFIG.loomersInArea.name,
            description: TOOL_CONFIG.loomersInArea.description,
            parameters: toolSchemas[TOOL_CONFIG.loomersInArea.name],
          },
          {
            name: TOOL_CONFIG.forms.name,
            description: TOOL_CONFIG.forms.description,
            parameters: toolSchemas[TOOL_CONFIG.forms.name],
          },
          {
            name: TOOL_CONFIG.formResponses.name,
            description: TOOL_CONFIG.formResponses.description,
            parameters: toolSchemas[TOOL_CONFIG.formResponses.name],
          },
          {
            name: TOOL_CONFIG.projects.name,
            description: TOOL_CONFIG.projects.description,
            parameters: toolSchemas[TOOL_CONFIG.projects.name],
          },
        ],
      },
    },
  });

  // Register tool handlers
  server.setRequestHandler(
    z.object({ method: z.literal(`tools/${TOOL_CONFIG.loomers.name}`), params: toolSchemas[TOOL_CONFIG.loomers.name] }),
    async (request) => {
      const { first, after, filter, orderBy } = request.params;
      return { result: await getLoomersTool({ first, after, filter, orderBy }) };
    }
  );

  server.setRequestHandler(
    z.object({ method: z.literal(`tools/${TOOL_CONFIG.loomersInArea.name}`), params: toolSchemas[TOOL_CONFIG.loomersInArea.name] }),
    async (request) => {
      const { areaId } = request.params;
      return { result: await getLoomersInAreaTool(areaId) };
    }
  );

  server.setRequestHandler(
    z.object({ method: z.literal(`tools/${TOOL_CONFIG.forms.name}`), params: toolSchemas[TOOL_CONFIG.forms.name] }),
    async (request) => {
      const { first, after, filter, orderBy } = request.params;
      return { result: await getFormsTool({ first, after, filter, orderBy }) };
    }
  );

  server.setRequestHandler(
    z.object({ method: z.literal(`tools/${TOOL_CONFIG.formResponses.name}`), params: toolSchemas[TOOL_CONFIG.formResponses.name] }),
    async (request) => {
      const { first, after, filter, orderBy } = request.params;
      return { result: await getFormResponsesTool({ first, after, filter, orderBy }) };
    }
  );

  server.setRequestHandler(
    z.object({ method: z.literal(`tools/${TOOL_CONFIG.projects.name}`), params: toolSchemas[TOOL_CONFIG.projects.name] }),
    async (request) => {
      const { first, after, filter, orderBy } = request.params;
      return { result: await getProjectsTool({ first, after, filter, orderBy }) };
    }
  );

  // Connect to the transport
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.log('MCP server started successfully.');
}

main().catch((error: Error) => {
  console.error('Failed to start MCP server:', error);
  // eslint-disable-next-line no-process-exit
  process.exit(1);
});