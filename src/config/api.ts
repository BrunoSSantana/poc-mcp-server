import { z } from 'zod';
import { config } from 'dotenv';

config();

/**
 * Environment variables schema validation
 */
const envSchema = z.object({
  GRAPHQL_API: z.string().url(),
  MCP_SERVER_NAME: z.string().default('mcp-api-service'),
  MCP_SERVER_VERSION: z.string().default('1.0.0'),
  PORT: z.string().transform(Number).default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

/**
 * Validated environment variables
 */
export const env = envSchema.parse(process.env);

/**
 * Server configuration
 */
export const SERVER_CONFIG = {
  name: env.MCP_SERVER_NAME,
  version: env.MCP_SERVER_VERSION,
  description: 'A service that provides access to MCP-related data, including Loomers, forms, form responses, and projects.',
} as const;

/**
 * Tool configuration
 */
export const TOOL_CONFIG = {
  loomers: {
    name: 'get_loomers',
    description: 'Get a list of Loomers with optional filtering and pagination.',
  },
  loomersInArea: {
    name: 'get_loomers_in_area',
    description: 'Get the number of Loomers in a specified area.',
  },
  forms: {
    name: 'get_forms',
    description: 'Get a list of forms with optional filtering and pagination.',
  },
  formResponses: {
    name: 'get_form_responses',
    description: 'Get a list of form responses with optional filtering and pagination.',
  },
  projects: {
    name: 'get_projects',
    description: 'Get a list of projects with optional filtering and pagination.',
  },
} as const;

/**
 * GraphQL API configuration
 */
export const API_CONFIG = {
  url: env.GRAPHQL_API,
  defaultQueryOptions: {
    limit: 10,
  },
} as const; 