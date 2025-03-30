import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GraphQLClient } from 'graphql-request'
import { getForms } from '../src/services/api.js'
import type { Connection, Form } from '../src/types/index.js'

vi.mock('graphql-request', () => {
  const GraphQLClient = vi.fn()
  GraphQLClient.prototype.request = vi.fn()
  return { GraphQLClient }
})

describe('Forms Service', () => {
  const mockClient = new GraphQLClient('http://fake-api.com')
  const originalGraphQLClient = global.GraphQLClient

  beforeEach(() => {
    global.GraphQLClient = mockClient
  })

  afterEach(() => {
    global.GraphQLClient = originalGraphQLClient
    vi.clearAllMocks()
  })

  describe('getForms', () => {
    it('should return a paginated list of forms', async () => {
      const mockForms: Connection<Form> = {
        edges: [
          {
            cursor: 'cursor1',
            node: {
              id: '1',
              nodeId: '1',
              createdAt: '2024-03-30T00:00:00Z',
              title: 'Test Form',
              description: 'Test Description'
            }
          }
        ],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: 'cursor1',
          endCursor: 'cursor1'
        },
        totalCount: 1
      }

      const mockResponse = {
        formsCollection: mockForms
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const result = await getForms({ first: 1 })

      expect(mockClient.request).toHaveBeenCalledWith(
        expect.stringContaining('query GetForms'),
        expect.objectContaining({
          first: 1,
          after: undefined,
          filter: undefined,
          orderBy: undefined
        })
      )

      expect(result).toEqual(mockForms)
      expect(result.edges).toHaveLength(1)
      expect(result.totalCount).toBe(1)
      expect(result.pageInfo).toEqual({
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'cursor1',
        endCursor: 'cursor1'
      })

      const form = result.edges[0].node
      expect(form).toEqual({
        id: '1',
        nodeId: '1',
        createdAt: '2024-03-30T00:00:00Z',
        title: 'Test Form',
        description: 'Test Description'
      })
    })
  })
}) 