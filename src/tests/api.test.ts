import { describe, it, expect, vi } from 'vitest';
import { getLoomersInArea, getLoomers, getTalks, getPosts, getVideos, checkStatus } from '../services/api.js';
import type { Loomer, Talk, Post, Video } from '../types/index.js';

// Mock GraphQL client responses
vi.mock('graphql-request', () => ({
  GraphQLClient: vi.fn().mockImplementation(() => ({
    request: vi.fn().mockImplementation(async (query: string, variables: unknown) => {
      if (query.includes('GetLoomersCount')) {
        return { loomers: { total: 5 } };
      }
      if (query.includes('GetLoomers')) {
        return {
          loomers: {
            items: [
              {
                id: '1',
                name: 'John Doe',
                role: 'Developer',
                area: { id: '1', name: 'Engineering', description: 'Engineering team' },
              },
            ],
            total: 1,
          },
        };
      }
      if (query.includes('GetTalks')) {
        return {
          talks: {
            items: [
              {
                id: '1',
                title: 'Introduction to MCP',
                date: '2024-03-30',
                description: 'Learn about MCP',
                speaker: {
                  id: '1',
                  name: 'John Doe',
                  area: { id: '1', name: 'Engineering' },
                },
              },
            ],
            total: 1,
          },
        };
      }
      if (query.includes('GetPosts')) {
        return {
          posts: {
            items: [
              {
                id: '1',
                title: 'MCP Overview',
                content: 'MCP is a protocol...',
                publishedAt: '2024-03-30',
                author: {
                  id: '1',
                  name: 'John Doe',
                  area: { id: '1', name: 'Engineering' },
                },
              },
            ],
            total: 1,
          },
        };
      }
      if (query.includes('GetVideos')) {
        return {
          videos: {
            items: [
              {
                id: '1',
                title: 'MCP Tutorial',
                url: 'https://example.com/video',
                publishedAt: '2024-03-30',
                description: 'Learn MCP',
                creator: {
                  id: '1',
                  name: 'John Doe',
                  area: { id: '1', name: 'Engineering' },
                },
              },
            ],
            total: 1,
          },
        };
      }
      if (query.includes('CheckStatus')) {
        return { status: true };
      }
      throw new Error('Unknown query');
    })),
  })),
}));

describe('API Service', () => {
  describe('getLoomersInArea', () => {
    it('should return the number of Loomers in an area', async () => {
      const count = await getLoomersInArea('Engineering');
      expect(count).toBe(5);
    });
  });

  describe('getLoomers', () => {
    it('should return a paginated list of Loomers', async () => {
      const response = await getLoomers();
      expect(response.total).toBe(1);
      expect(response.items).toHaveLength(1);
      expect(response.items[0]).toMatchObject<Partial<Loomer>>({
        name: 'John Doe',
        role: 'Developer',
      });
    });
  });

  describe('getTalks', () => {
    it('should return a paginated list of talks', async () => {
      const response = await getTalks();
      expect(response.total).toBe(1);
      expect(response.items).toHaveLength(1);
      expect(response.items[0]).toMatchObject<Partial<Talk>>({
        title: 'Introduction to MCP',
        date: '2024-03-30',
      });
    });
  });

  describe('getPosts', () => {
    it('should return a paginated list of posts', async () => {
      const response = await getPosts();
      expect(response.total).toBe(1);
      expect(response.items).toHaveLength(1);
      expect(response.items[0]).toMatchObject<Partial<Post>>({
        title: 'MCP Overview',
        content: 'MCP is a protocol...',
      });
    });
  });

  describe('getVideos', () => {
    it('should return a paginated list of videos', async () => {
      const response = await getVideos();
      expect(response.total).toBe(1);
      expect(response.items).toHaveLength(1);
      expect(response.items[0]).toMatchObject<Partial<Video>>({
        title: 'MCP Tutorial',
        url: 'https://example.com/video',
      });
    });
  });

  describe('checkStatus', () => {
    it('should return true when API is available', async () => {
      const status = await checkStatus();
      expect(status).toBe(true);
    });

    it('should return false when API request fails', async () => {
      vi.mocked(GraphQLClient).mockImplementationOnce(() => ({
        request: vi.fn().mockRejectedValue(new Error('API error')),
      }));

      const status = await checkStatus();
      expect(status).toBe(false);
    });
  });
}); 