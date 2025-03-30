import type { McpResponse, McpContent } from '../src/types/index.ts';

export interface McpToolResponse extends McpResponse {
  content: McpContent[];
}

export interface McpClient {
  callTool: (params: {
    name: string;
    arguments: Record<string, unknown>;
  }) => Promise<McpToolResponse>;
  close: () => Promise<void>;
} 