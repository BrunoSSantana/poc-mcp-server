import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GraphQLClient } from 'graphql-request'
import { getProjects } from '../src/services/api.js'
import type { Connection, Project } from '../src/types/index.js'

vi.mock('graphql-request', () => {
  const GraphQLClient = vi.fn()
  GraphQLClient.prototype.request = vi.fn()
  return { GraphQLClient }
})

describe('Projects Service', () => {
  const mockClient = new GraphQLClient('http://fake-api.com')
  const originalGraphQLClient = global.GraphQLClient

  beforeEach(() => {
    global.GraphQLClient = mockClient
  })

  afterEach(() => {
    global.GraphQLClient = originalGraphQLClient
    vi.clearAllMocks()
  })

  describe('getProjects', () => {
    it('should return a paginated list of projects', async () => {
      const mockProjects: Connection<Project> = {
        edges: [
          {
            cursor: 'cursor1',
            node: {
              id: '1',
              nodeId: '1',
              createdAt: '2024-03-30T00:00:00Z',
              name: 'Test Project'
            }
          }
        ],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: 'cursor1',
          endCursor: 'cursor1'
        },
      }

      const mockResponse = {
        projectsCollection: mockProjects
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const result = await getProjects({ first: 1 })

      expect(mockClient.request).toHaveBeenCalledWith(
        expect.stringContaining('query GetProjects'),
        expect.objectContaining({
          first: 1,
          after: undefined,
          filter: undefined,
          orderBy: undefined
        })
      )

      expect(result).toEqual(mockProjects)
      expect(result.edges).toHaveLength(1)
      expect(result.pageInfo).toEqual({
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'cursor1',
        endCursor: 'cursor1'
      })

      const project = result.edges[0].node
      expect(project).toEqual({
        id: '1',
        nodeId: '1',
        createdAt: '2024-03-30T00:00:00Z',
        name: 'Test Project'
      })
    })
  })
}) 