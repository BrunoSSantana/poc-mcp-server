import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GraphQLClient } from 'graphql-request'
import { getLoomersInArea, getLoomers } from '../src/services/api.ts'
import type { Connection, Loomer } from '../src/types/index.ts'

vi.mock('graphql-request', () => {
  const GraphQLClient = vi.fn()
  GraphQLClient.prototype.request = vi.fn()
  return { GraphQLClient }
})

describe('API Services', () => {
  const mockClient = new GraphQLClient('http://fake-api.com')
  const originalGraphQLClient = global.GraphQLClient

  beforeEach(() => {
    global.GraphQLClient = mockClient
  })

  afterEach(() => {
    global.GraphQLClient = originalGraphQLClient
    vi.clearAllMocks()
  })

  describe('getLoomersInArea', () => {
    it('should return the number of loomers in an area', async () => {
      const mockResponse = {
        GetLoomersCount: {
          count: 42
        }
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const count = await getLoomersInArea('test-area')

      expect(count).toBe(42)
      expect(mockClient.request).toHaveBeenCalledTimes(1)
    })
  })

  describe('getLoomers', () => {
    it('should return a paginated list of loomers', async () => {
      const mockLoomers: Connection<Loomer> = {
        edges: [
          {
            cursor: 'cursor1',
            node: {
              id: '1',
              nodeId: '1',
              createdAt: '2024-03-30T00:00:00Z',
              name: 'Test Loomer',
              email: 'test@example.com',
              hireDate: '2024-01-01',
              birthday: '1990-01-01',
              areaId: '1',
              area: {
                id: '1',
                nodeId: '1',
                createdAt: '2024-03-30T00:00:00Z',
                name: 'Engineering'
              }
            }
          }
        ],
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          endCursor: undefined
        },
        totalCount: 1
      }

      const mockResponse = {
        GetLoomers: mockLoomers
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const result = await getLoomers()

      expect(result).toEqual(mockLoomers)
      expect(mockClient.request).toHaveBeenCalledTimes(1)
      expect(result.edges[0].node).toEqual({
        id: '1',
        nodeId: '1',
        createdAt: '2024-03-30T00:00:00Z',
        name: 'Test Loomer',
        email: 'test@example.com',
        hireDate: '2024-01-01',
        birthday: '1990-01-01',
        areaId: '1',
        area: {
          id: '1',
          nodeId: '1',
          createdAt: '2024-03-30T00:00:00Z',
          name: 'Engineering'
        }
      })
    })
  })
}) 