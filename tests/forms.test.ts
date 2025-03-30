import { describe, it, after } from 'node:test';
import assert from 'node:assert';
import { createMcpClient } from './setup.ts';
import { TOOL_CONFIG } from '../src/config/api.ts';
import type { McpToolResponse } from './types.ts';

describe('Forms API Tests', async () => {
  const client = await createMcpClient();
  
  after(async () => {
    await client.close();
  });

  it('should get a list of forms with default pagination', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.forms.name,
      arguments: {}
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should get a limited number of forms', async () => {
    const first = 2;
    const result = await client.callTool({
      name: TOOL_CONFIG.forms.name,
      arguments: { first }
    }) as McpToolResponse;
    
    const lines = result.content[0].text.split('\n').filter(line => line.startsWith('-'));
    assert.equal(lines.length, first);
  });

  it('should filter forms by title', async () => {
    const title = 'Test Form';
    const result = await client.callTool({
      name: TOOL_CONFIG.forms.name,
      arguments: { 
        filter: {
          title: {
            ilike: `%${title}%`
          }
        }
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should order forms by creation date', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.forms.name,
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