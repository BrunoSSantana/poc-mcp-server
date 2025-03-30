import { GraphQLClient } from 'graphql-request';
import { API_CONFIG } from '../config/api.ts';
import type { Area, Loomer, Form, FormResponse, Project, QueryOptions, Connection } from '../types/index.ts';

/**
 * GraphQL API client instance
 */
const client = new GraphQLClient(API_CONFIG.url);

/**
 * Get the number of Loomers in a specific area
 */
export async function getLoomersInArea(areaId: string): Promise<number> {
  const query = `
    query GetLoomersCount($filter: loomersFilter) {
      loomersCollection(filter: $filter) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const response = await client.request<{ loomersCollection: Connection<Loomer> }>(query, {
    filter: { area_id: { eq: areaId } }
  });
  return response.loomersCollection.edges.length;
}

/**
 * Get Loomers with pagination and filtering
 */
export async function getLoomers(options: QueryOptions = {}): Promise<Connection<Loomer>> {
  const { first = API_CONFIG.defaultQueryOptions.limit, after, filter, orderBy } = options;

  const query = `
    query GetLoomers($first: Int, $after: Cursor, $filter: loomersFilter, $orderBy: [loomersOrderBy!]) {
      loomersCollection(first: $first, after: $after, filter: $filter, orderBy: $orderBy) {
        edges {
          cursor
          node {
            id
            name
            email
            hire_date
            birthday
            created_at
            area {
              id
              name
              created_at
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const response = await client.request<{ loomersCollection: Connection<Loomer> }>(
    query, 
    { first, after, filter, orderBy }
  );

  return response.loomersCollection;
}

/**
 * Get forms with pagination and filtering
 */
export async function getForms(options: QueryOptions = {}): Promise<Connection<Form>> {
  const { first = API_CONFIG.defaultQueryOptions.limit, after, filter, orderBy } = options;

  const query = `
    query GetForms($first: Int, $after: Cursor, $filter: formsFilter, $orderBy: [formsOrderBy!]) {
      formsCollection(first: $first, after: $after, filter: $filter, orderBy: $orderBy) {
        edges {
          cursor
          node {
            id
            title
            description
            created_at
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const response = await client.request<{ formsCollection: Connection<Form> }>(
    query,
    { first, after, filter, orderBy }
  );
  return response.formsCollection;
}

/**
 * Get form responses with pagination and filtering
 */
export async function getFormResponses(options: QueryOptions = {}): Promise<Connection<FormResponse>> {
  const { first = API_CONFIG.defaultQueryOptions.limit, after, filter, orderBy } = options;

  const query = `
    query GetFormResponses($first: Int, $after: Cursor, $filter: form_responsesFilter, $orderBy: [form_responsesOrderBy!]) {
      form_responsesCollection(first: $first, after: $after, filter: $filter, orderBy: $orderBy) {
        edges {
          cursor
          node {
            id
            form_id
            loomer_id
            responses
            created_at
            forms {
              id
              title
              description
            }
            loomers {
              id
              name
              email
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const response = await client.request<{ form_responsesCollection: Connection<FormResponse> }>(
    query,
    { first, after, filter, orderBy }
  );
  return response.form_responsesCollection;
}

/**
 * Get projects with pagination and filtering
 */
export async function getProjects(options: QueryOptions = {}): Promise<Connection<Project>> {
  const { first = API_CONFIG.defaultQueryOptions.limit, after, filter, orderBy } = options;

  const query = `
    query GetProjects($first: Int, $after: Cursor, $filter: projectsFilter, $orderBy: [projectsOrderBy!]) {
      projectsCollection(first: $first, after: $after, filter: $filter, orderBy: $orderBy) {
        edges {
          cursor
          node {
            id
            name
            created_at
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const response = await client.request<{ projectsCollection: Connection<Project> }>(
    query,
    { first, after, filter, orderBy }
  );
  return response.projectsCollection;
} 
