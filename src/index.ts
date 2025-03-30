import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { SERVER_CONFIG } from './config/api.js';
import { getLoomersTool, getLoomersInAreaTool } from './tools/loomers.js';
import { getFormsTool } from './tools/forms.js';
import { getFormResponsesTool } from './tools/form-responses.js';
import { getProjectsTool } from './tools/projects.js';

/**
 * Initialize the MCP server and register all tools
 */
async function initializeServer() {
  // Create server instance
  const server = new McpServer({
    name: SERVER_CONFIG.name,
    version: SERVER_CONFIG.version,
    description: SERVER_CONFIG.description,
  });

  // Register all tools
  server.tool(
    getLoomersTool.name,
    getLoomersTool.description,
    getLoomersTool.parameters,
    getLoomersTool.handler
  );

  server.tool(
    getLoomersInAreaTool.name,
    getLoomersInAreaTool.description,
    getLoomersInAreaTool.parameters,
    getLoomersInAreaTool.handler
  );

  server.tool(
    getFormsTool.name,
    getFormsTool.description,
    getFormsTool.parameters,
    getFormsTool.handler
  );

  server.tool(
    getFormResponsesTool.name,
    getFormResponsesTool.description,
    getFormResponsesTool.parameters,
    getFormResponsesTool.handler
  );

  server.tool(
    getProjectsTool.name,
    getProjectsTool.description,
    getProjectsTool.parameters,
    getProjectsTool.handler
  );

  return server;
}

/**
 * Main entry point
 */
async function main() {
  // Initialize the server
  const server = await initializeServer();
  
  // Connect to stdio transport
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error('MCP server started successfully on stdio');
}

// Start the server
main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});