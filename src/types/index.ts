/**
 * Core types for the MCP server implementation
 */

export interface Area {
  id: string;
  name: string | null;
  created_at: string;
}

export interface Loomer {
  id: string;
  name: string | null;
  email: string | null;
  hire_date: string | null;
  birthday: string | null;
  area_id: string;
  created_at: string;
  area?: Area;
}

export interface Form {
  id: string;
  title: string | null;
  description: string | null;
  created_at: string;
}

export interface FormResponse {
  id: string;
  form_id: string;
  loomer_id: string;
  responses: Record<string, unknown>;
  created_at: string;
  form?: Form;
  loomer?: Loomer;
}

export interface Project {
  id: string;
  name: string | null;
  created_at: string;
}

export interface QueryOptions {
  first?: number;
  after?: string;
  filter?: Record<string, unknown>;
  orderBy?: Array<{
    field: string;
    direction: 'AscNullsFirst' | 'AscNullsLast' | 'DescNullsFirst' | 'DescNullsLast';
  }>;
}

export interface PageInfo {
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
}

export interface Connection<T> {
  edges: Array<{
    cursor: string;
    node: T;
  }>;
  pageInfo: PageInfo;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
} 