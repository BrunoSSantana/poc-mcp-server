import { describe, it, expect } from 'vitest';
import { getLoomersInArea, getLoomers, getForms, getFormResponses, getProjects } from '../../src/services/api.js';
import type { Connection, Loomer, Form, FormResponse, Project } from '../../src/types/index.js';

describe('API Services', () => {
  describe('getLoomers', () => {
    it('should return a paginated list of loomers', async () => {
      const result = await getLoomers({ first: 10 });
      // Validate response structure
      expect(result.edges).toBeDefined();
      expect(result.pageInfo).toBeDefined();
      expect(Array.isArray(result.edges)).toBe(true);

      // Validate loomer data
      if (result.edges.length > 0) {
        const firstLoomer = result.edges[0].node;
        expect(firstLoomer.id).toBeDefined();
        expect('name' in firstLoomer).toBe(true);
        expect('email' in firstLoomer).toBe(true);
      }

      // Validate pagination info
      expect('hasNextPage' in result.pageInfo).toBe(true);
      expect('hasPreviousPage' in result.pageInfo).toBe(true);
      expect('startCursor' in result.pageInfo).toBe(true);
      expect('endCursor' in result.pageInfo).toBe(true);
    });

    it('should filter loomers by name', async () => {
      const filter = { name: { like: 'Bruno' } };
      const result = await getLoomers({ filter });

      // Validate filtered results
      result.edges.forEach(({ node }) => {
        expect(node.name?.includes('Bruno')).toBe(true);
      });
    });

    it('should sort loomers by name', async () => {
      const orderBy = [{ field: 'name', direction: 'AscNullsLast' as const }];
      const result = await getLoomers({ orderBy });

      // Validate sorting
      if (result.edges.length > 1) {
        const names = result.edges.map(({ node }) => node.name).filter((name): name is string => name !== null);
        const sortedNames = [...names].sort();
        expect(names).toEqual(sortedNames);
      }
    });
  });

  describe('getLoomersInArea', () => {
    it('should return the number of loomers in an area', async () => {
      const areaId = '042fa576-56d3-48bc-a295-6886adda528d'; // Use a known area ID
      const count = await getLoomersInArea(areaId);

      expect(typeof count).toBe('number');
      expect(count >= 0).toBe(true);
    });
  });

  describe('getForms', () => {
    it('should return a paginated list of forms', async () => {
      const result = await getForms({ first: 10 });

      // Validate response structure
      expect(result.edges).toBeDefined();
      expect(result.pageInfo).toBeDefined();
      expect(Array.isArray(result.edges)).toBe(true);

      // Validate form data
      if (result.edges.length > 0) {
        const firstForm = result.edges[0].node;
        expect(firstForm.id).toBeDefined();
        expect('title' in firstForm).toBe(true);
        expect('description' in firstForm).toBe(true);
      }
    });

    it('should filter forms by title', async () => {
      const filter = { title: { like: 'Test' } };
      const result = await getForms({ filter });

      // Validate filtered results
      result.edges.forEach(({ node }) => {
        expect(node.title?.includes('Test')).toBe(true);
      });
    });
  });

  describe('getFormResponses', () => {
    it('should return a paginated list of form responses', async () => {
      const result = await getFormResponses({ first: 10 });

      // Validate response structure
      expect(result.edges).toBeDefined();
      expect(result.pageInfo).toBeDefined();
      expect(Array.isArray(result.edges)).toBe(true);

      // Validate form response data
      if (result.edges.length > 0) {
        const firstResponse = result.edges[0].node;
        expect(firstResponse.id).toBeDefined();
        expect('form_id' in firstResponse).toBe(true);
        expect('loomer_id' in firstResponse).toBe(true);
        expect(firstResponse.responses).toBeDefined();
      }
    });

    it('should filter form responses by formId', async () => {
      const formId = '1'; // Use a known form ID
      const filter = { form_id: { eq: formId } };
      const result = await getFormResponses({ filter });

      // Validate filtered results
      result.edges.forEach(({ node }) => {
        expect(node.form_id).toBe(formId);
      });
    });
  });

  describe('getProjects', () => {
    it('should return a paginated list of projects', async () => {
      const result = await getProjects({ first: 10 });

      // Validate response structure
      expect(result.edges).toBeDefined();
      expect(result.pageInfo).toBeDefined();
      expect(Array.isArray(result.edges)).toBe(true);

      // Validate project data
      if (result.edges.length > 0) {
        const firstProject = result.edges[0].node;
        expect(firstProject.id).toBeDefined();
        expect('name' in firstProject).toBe(true);
        expect(firstProject.createdAt).toBeDefined();
      }
    });

    it('should filter projects by name', async () => {
      const filter = { name: { like: 'Test' } };
      const result = await getProjects({ filter });

      // Validate filtered results
      result.edges.forEach(({ node }) => {
        expect(node.name?.includes('Test')).toBe(true);
      });
    });
  });
}); 