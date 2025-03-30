import { z } from 'zod';

/**
 * Query options for paginated requests
 */
export type QueryOptions = {
  first?: number;
  after?: string;
  filter?: Record<string, unknown>;
  orderBy?: Array<{
    field: string;
    direction: 'AscNullsFirst' | 'AscNullsLast' | 'DescNullsFirst' | 'DescNullsLast';
  }>;
};

/**
 * MCP response with text content
 */
export type McpResponse = {
  content: McpContent[];
  _meta?: Record<string, unknown>;
  isError?: boolean;
};

/**
 * MCP text content
 */
export type McpTextContent = {
  type: "text";
  text: string;
  [key: string]: unknown;
};

/**
 * MCP image content
 */
export type McpImageContent = {
  type: "image";
  data: string;
  mimeType: string;
  [key: string]: unknown;
};

/**
 * MCP resource content
 */
export type McpResourceContent = {
  type: "resource";
  resource: {
    text: string;
    uri: string;
    mimeType?: string;
    [key: string]: unknown;
  } | {
    uri: string;
    blob: string;
    mimeType?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

/**
 * MCP content
 */
export type McpContent = McpTextContent | McpImageContent | McpResourceContent;

/**
 * Loomer type
 */
export type Loomer = {
  id: string;
  name: string;
  email: string | null;
  area: Area | null;
};

/**
 * Form type
 */
export type Form = {
  id: string;
  title: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

/**
 * Form response type
 */
export type FormResponse = {
  id: string;
  form: Form;
  loomer: Loomer;
  answers: Array<{
    questionId: string;
    answer: string;
  }>;
  createdAt: string;
  updatedAt: string;
};

/**
 * Project type
 */
export type Project = {
  id: string;
  name: string;
  description: string | null;
  status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  createdAt: string;
  updatedAt: string;
};

/**
 * Area type
 */
export type Area = {
  id: string;
  name: string;
};

/**
 * GraphQL response types
 */
export type PageInfo = {
  hasNextPage: boolean;
  endCursor?: string;
};

export type Edge<T> = {
  node: T;
  cursor: string;
};

export type Connection<T> = {
  edges: Edge<T>[];
  pageInfo: PageInfo;
  totalCount: number;
}; 