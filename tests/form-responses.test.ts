import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GraphQLClient } from 'graphql-request'
import { getFormResponses } from '../src/services/api.js'
import type { Connection, FormResponse } from '../src/types/index.js'

vi.mock('graphql-request', () => {
  const GraphQLClient = vi.fn()
  GraphQLClient.prototype.request = vi.fn()
  return { GraphQLClient }
})

describe('Form Responses Service', () => {
  const mockClient = new GraphQLClient('http://fake-api.com')
  const originalGraphQLClient = global.GraphQLClient

  beforeEach(() => {
    global.GraphQLClient = mockClient
  })

  afterEach(() => {
    global.GraphQLClient = originalGraphQLClient
    vi.clearAllMocks()
  })

  describe('getFormResponses', () => {
    it('should return a paginated list of form responses', async () => {
      const mockFormResponses: Connection<FormResponse> = {
        edges: [
          {
            cursor: 'cursor1',
            node: {
              id: '1',
              nodeId: '1',
              createdAt: '2024-03-30T00:00:00Z',
              formId: '1',
              loomerId: '1',
              responses: {
                question1: 'answer1',
                question2: 'answer2'
              },
              form: {
                id: '1',
                nodeId: '1',
                createdAt: '2024-03-30T00:00:00Z',
                title: 'Test Form',
                description: 'Test Description'
              },
              loomer: {
                id: '1',
                nodeId: '1',
                createdAt: '2024-03-30T00:00:00Z',
                name: 'Test Loomer',
                email: 'test@example.com',
                hireDate: '2024-01-01',
                birthday: '1990-01-01',
                areaId: '1',
                area: null
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
        totalCount: 1
      }

      const mockResponse = {
        form_responsesCollection: mockFormResponses
      }

      vi.mocked(mockClient.request).mockResolvedValueOnce(mockResponse)

      const result = await getFormResponses({ first: 1 })

      expect(mockClient.request).toHaveBeenCalledWith(
        expect.stringContaining('query GetFormResponses'),
        expect.objectContaining({
          first: 1,
          after: undefined,
          filter: undefined,
          orderBy: undefined
        })
      )

      expect(result).toEqual(mockFormResponses)
      expect(result.edges).toHaveLength(1)
      expect(result.totalCount).toBe(1)
      expect(result.pageInfo).toEqual({
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: 'cursor1',
        endCursor: 'cursor1'
      })

      const formResponse = result.edges[0].node
      expect(formResponse).toEqual({
        id: '1',
        nodeId: '1',
        createdAt: '2024-03-30T00:00:00Z',
        formId: '1',
        loomerId: '1',
        responses: {
          question1: 'answer1',
          question2: 'answer2'
        },
        form: {
          id: '1',
          nodeId: '1',
          createdAt: '2024-03-30T00:00:00Z',
          title: 'Test Form',
          description: 'Test Description'
        },
        loomer: {
          id: '1',
          nodeId: '1',
          createdAt: '2024-03-30T00:00:00Z',
          name: 'Test Loomer',
          email: 'test@example.com',
          hireDate: '2024-01-01',
          birthday: '1990-01-01',
          areaId: '1',
          area: null
        }
      })
    })
  })
}) 