import { describe, it, after } from 'node:test';
import assert from 'node:assert';
import { createMcpClient } from './setup.ts';
import { TOOL_CONFIG } from '../src/config/api.ts';
import type { McpToolResponse } from './types.ts';

describe('Form Responses API Tests', async () => {
  const client = await createMcpClient();
  
  after(async () => {
    await client.close();
  });

  it('should get a list of form responses with default pagination', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.formResponses.name,
      arguments: {}
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
    const meta = result._meta;
    assert.ok(typeof meta?.totalCount === 'number');
    assert.ok(typeof meta?.hasNextPage === 'boolean');
  });

  it('should get a limited number of form responses', async () => {
    const first = 2;
    const result = await client.callTool({
      name: TOOL_CONFIG.formResponses.name,
      arguments: { first }
    }) as McpToolResponse;
    
    const lines = result.content[0].text.split('\n').filter(line => line.startsWith('-'));
    assert.equal(lines.length, first);
  });

  it('should filter form responses by form id', async () => {
    const formId = 'test-form-id';
    const result = await client.callTool({
      name: TOOL_CONFIG.formResponses.name,
      arguments: { 
        filter: {
          form_id: {
            eq: formId
          }
        }
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should filter form responses by loomer id', async () => {
    const loomerId = 'test-loomer-id';
    const result = await client.callTool({
      name: TOOL_CONFIG.formResponses.name,
      arguments: { 
        filter: {
          loomer_id: {
            eq: loomerId
          }
        }
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
  });

  it('should order form responses by creation date', async () => {
    const result = await client.callTool({
      name: TOOL_CONFIG.formResponses.name,
      arguments: { 
        orderBy: [{
          field: 'created_at',
          direction: 'DescNullsLast'
        }],
        first: 2
      }
    }) as McpToolResponse;
    
    assert.ok(result.content[0].text.includes('Found'));
    const meta = result._meta;
    assert.ok(typeof meta?.totalCount === 'number');
  });
}); 