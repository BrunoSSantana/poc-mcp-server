import { describe, it, after } from 'node:test';
import assert from 'node:assert';
import { createMcpClient } from './setup.ts';
import { TOOL_CONFIG } from '../src/config/api.ts';
import type { McpToolResponse } from './types.ts';

describe('Loomers API Tests', async () => {
  const client = await createMcpClient();
  
  after(async () => {
    await client.disconnect();
  });

  it('should get a list of loomers with default pagination', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.loomers.name,
      arguments: {}
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
    const meta = result._meta;
  });

  it('should get a limited number of loomers', async () => {
    const first = 2;
    const result = await client.callTool({
      name: TOOL_CONFIG.loomers.name,
      arguments: { first }
    }) as McpToolResponse;
    
    const lines = result.content[0].text.split('\n').filter(line => line.startsWith('-'));
    assert.equal(lines.length, first);
  });

  it('should filter loomers by area', async () => {
    const areaId = 'test-area-id';
    const result = await client.callTool({
      name: TOOL_CONFIG.loomers.name,
      arguments: { 
        filter: {
          area_id: {
            eq: areaId
          }
        }
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should count loomers in area', async () => {
    const areaId = 'test-area-id';
    const result = await client.callTool({
      name: TOOL_CONFIG.loomersInArea.name,
      arguments: { areaId }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('area'));
  });
}); 