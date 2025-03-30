import { describe, it, after } from 'node:test';
import assert from 'node:assert';
import { createMcpClient } from './setup.ts';
import { TOOL_CONFIG } from '../src/config/api.ts';
import type { McpToolResponse } from './types.ts';

describe('Projects API Tests', async () => {
  const client = await createMcpClient();
  
  after(async () => {
    await client.close();
  });

  it('should get a list of projects with default pagination', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.projects.name,
      arguments: {}
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should get a limited number of projects', async () => {
    const first = 2;
    const result = await client.callTool({
      name: TOOL_CONFIG.projects.name,
      arguments: { first }
    }) as McpToolResponse;
    
    const lines = result.content[0].text.split('\n').filter(line => line.startsWith('-'));
    assert.equal(lines.length, first);
  });

  it('should filter projects by name', async () => {
    const name = 'Test Project';
    const result = await client.callTool({
      name: TOOL_CONFIG.projects.name,
      arguments: { 
        filter: {
          name: {
            ilike: `%${name}%`
          }
        }
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should order projects by creation date', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.projects.name,
      arguments: { 
        orderBy: [{
          field: 'created_at',
          direction: 'DescNullsLast'
        }],
        first: 2
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });
}); 