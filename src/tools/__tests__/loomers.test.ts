import { getLoomersTool, getLoomersInAreaTool } from '../loomers.js';

describe('Loomers Tools', () => {
  describe('getLoomersTool', () => {
    it('should have correct name', () => {
      expect(getLoomersTool.name).toBe('getLoomers');
    });

    it('should have a description', () => {
      expect(getLoomersTool.description).toBeTruthy();
    });

    it('should have parameters schema', () => {
      expect(getLoomersTool.parameters).toBeDefined();
    });

    it('should have a handler function', () => {
      expect(typeof getLoomersTool.handler).toBe('function');
    });
  });

  describe('getLoomersInAreaTool', () => {
    it('should have correct name', () => {
      expect(getLoomersInAreaTool.name).toBe('getLoomersInArea');
    });

    it('should have a description', () => {
      expect(getLoomersInAreaTool.description).toBeTruthy();
    });

    it('should have parameters schema', () => {
      expect(getLoomersInAreaTool.parameters).toBeDefined();
    });

    it('should have a handler function', () => {
      expect(typeof getLoomersInAreaTool.handler).toBe('function');
    });
  });
}); 