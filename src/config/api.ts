import { config } from "dotenv";
import { z } from "zod";
import { createClient } from "../../operations-sdk";
config();

/**
 * Environment variables schema validation
 */
const envSchema = z.object({
	GRAPHQL_API: z.string().url(),
	API_KEY: z.string(),
	MCP_SERVER_NAME: z.string().default("mcp-api-service"),
	MCP_SERVER_VERSION: z.string().default("1.0.0"),
	PORT: z.string().transform(Number).default("3000"),
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
});

/**
 * Validated environment variables
 */
export const env = envSchema.parse(process.env);

export const client = createClient({
	url: env.GRAPHQL_API,
	headers: {
		apikey: env.API_KEY,
	},
});

/**
 * Server configuration
 */
export const SERVER_CONFIG = {
	name: "poc-mcp-server",
	version: "1.0.0",
	description: "Proof of concept MCP server",
} as const;

/**
 * Tool configuration
 */
export const TOOL_CONFIG = {
	loomers: {
		name: "get_loomers",
		description:
			"Get a list of Loomers with optional filtering and pagination.",
	},
	loomersInArea: {
		name: "get_loomers_in_area",
		description: "Get the number of Loomers in a specified area.",
	},
	forms: {
		name: "get_forms",
		description: "Get a list of forms with optional filtering and pagination.",
	},
	formResponses: {
		name: "get_form_responses",
		description:
			"Get a list of form responses with optional filtering and pagination.",
	},
	projects: {
		name: "get_projects",
		description:
			"Get a list of projects with optional filtering and pagination.",
	},
} as const;

/**
 * GraphQL API configuration
 */
export const API_CONFIG = {
	url: env.GRAPHQL_API,
	apiKey: env.API_KEY,
	defaultQueryOptions: {
		limit: 10,
	},
} as const;
