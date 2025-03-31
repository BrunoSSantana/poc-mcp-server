import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GraphQLClient } from 'graphql-request'
import { getLoomersInArea, getLoomers } from '../src/services/api.js'
import type { Connection, Loomer } from '../src/types/index.js'

vi.mock('graphql-request', () => {
  const GraphQLClient = vi.fn()
  GraphQLClient.prototype.request = vi.fn()
  return { GraphQLClient }
})

describe('Loomers Service', () => {
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
        loomersCollection: {
          edges: Array(42).fill({
            node: {
              id: '1'
            }
          })
        }
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const count = await getLoomersInArea('test-area')

      expect(count).toBe(42)
      expect(mockClient.request).toHaveBeenCalledWith(
        expect.stringContaining('query GetLoomersCount'),
        expect.objectContaining({
          filter: { area_id: { eq: 'test-area' } }
        })
      )
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
          startCursor: 'cursor1',
          endCursor: 'cursor1'
        },
      }

      const mockResponse = {
        loomersCollection: mockLoomers
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const result = await getLoomers({ first: 1 })

      expect(mockClient.request).toHaveBeenCalledWith(
        expect.stringContaining('query GetLoomers'),
        expect.objectContaining({
          first: 1,
          after: undefined,
          filter: undefined,
          orderBy: undefined
        })
      )

      expect(result).toEqual(mockLoomers)
      expect(result.edges).toHaveLength(1)
      expect(result.pageInfo).toEqual({
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'cursor1',
        endCursor: 'cursor1'
      })

      const loomer = result.edges[0].node
      expect(loomer).toEqual({
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