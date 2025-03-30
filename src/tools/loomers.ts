import { getLoomers, getLoomersInArea } from '../services/api.js';
import { generateCountResponse } from '../utils/language.js';
import type { QueryOptions } from '../types/index.js';

/**
 * Tool for getting the number of Loomers in a specific area
 */
export async function getLoomersInAreaTool(areaId: string): Promise<string> {
  const count = await getLoomersInArea(areaId);
  return generateCountResponse(count, 'Loomer', areaId);
}

/**
 * Tool for getting Loomers with optional filtering and pagination
 */
export async function getLoomersTool(options: QueryOptions = {}): Promise<string> {
  const response = await getLoomers(options);
  
  if (response.edges.length === 0) {
    return 'No Loomers found.';
  }

  const loomerList = response.edges.map(({ node: loomer }) => {
    const role = loomer.email ? ` (${loomer.email})` : '';
    return `- ${loomer.name || 'Unnamed'}${role} in ${loomer.area?.name || 'Unknown Area'}`;
  }).join('\n');

  const totalMessage = `Found ${response.edges.length} Loomer${response.edges.length === 1 ? '' : 's'}.`;
  const paginationInfo = response.pageInfo.hasNextPage ? 
    'There are more results available. Use the cursor for pagination.' : 
    'No more results available.';

  return `${totalMessage}\n${paginationInfo}\n\n${loomerList}`;
} 