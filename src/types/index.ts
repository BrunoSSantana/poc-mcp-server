/**
 * Query options for paginated requests
 */
export interface QueryOptions {
	first?: number;
	after?: string;
	filter?: Record<string, unknown>;
	orderBy?: Array<{
		field: string;
		direction:
			| "AscNullsFirst"
			| "AscNullsLast"
			| "DescNullsFirst"
			| "DescNullsLast";
	}>;
}

/**
 * MCP response with text content
 */
export interface McpResponse {
	content: McpContent[];
	_meta?: Record<string, unknown>;
	isError?: boolean;
	[key: string]: unknown;
}

/**
 * MCP text content
 */
export interface McpTextContent {
	type: "text";
	text: string;
	[key: string]: unknown;
}

/**
 * MCP image content
 */
export interface McpImageContent {
	type: "image";
	data: string;
	mimeType: string;
	[key: string]: unknown;
}

/**
 * MCP resource content
 */
export interface McpResourceContent {
	type: "resource";
	resource:
		| {
				text: string;
				uri: string;
				mimeType?: string;
				[key: string]: unknown;
		  }
		| {
				uri: string;
				blob: string;
				mimeType?: string;
				[key: string]: unknown;
		  };
	[key: string]: unknown;
}

/**
 * MCP content
 */
export type McpContent = McpTextContent | McpImageContent | McpResourceContent;

/**
 * Loomer type
 */
export interface Loomer {
	nodeId: string;
	id: string;
	createdAt: string;
	name: string | null;
	email: string | null;
	hireDate: string | null;
	birthday: string | null;
	areaId: string | null;
	area: Area | null;
	formResponses?: Connection<FormResponse>;
}

/**
 * Form type
 */
export interface Form {
	nodeId: string;
	id: string;
	createdAt: string;
	title: string | null;
	description: string | null;
	formResponses?: Connection<FormResponse>;
}

/**
 * Form response type
 */
export interface FormResponse {
	nodeId: string;
	id: string;
	createdAt: string;
	form_id: string | null;
	loomerId: string | null;
	responses: Record<string, unknown>;
	form: Form | null;
	loomer: Loomer | null;
}

/**
 * Project type
 */
export interface Project {
	nodeId: string;
	id: string;
	createdAt: string;
	name: string | null;
}

/**
 * Area type
 */
export interface Area {
	nodeId: string;
	id: string;
	createdAt: string;
	name: string | null;
	loomers?: Connection<Loomer>;
}

/**
 * GraphQL response types
 */
export interface PageInfo {
	endCursor?: string | null;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	startCursor?: string | null;
}

export interface Edge<T> {
	cursor: string;
	node: T;
}

export interface Connection<T> {
	edges: Edge<T>[];
	pageInfo: PageInfo;
}
