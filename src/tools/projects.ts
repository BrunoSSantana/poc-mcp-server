import { getProjects } from '../services/api.js';
import { formatDate } from '../utils/language.js';
import type { QueryOptions } from '../types/index.js';

/**
 * Tool for getting projects with optional filtering and pagination
 */
export async function getProjectsTool(options: QueryOptions = {}): Promise<string> {
  const response = await getProjects(options);
  
  if (response.edges.length === 0) {
    return 'No projects found.';
  }

  const projectList = response.edges.map(({ node: project }) => {
    const date = formatDate(project.created_at);
    return `- ${project.name || 'Unnamed Project'} (Created: ${date})`;
  }).join('\n');

  const totalMessage = `Found ${response.edges.length} project${response.edges.length === 1 ? '' : 's'}.`;
  const paginationInfo = response.pageInfo.hasNextPage ? 
    'There are more results available. Use the cursor for pagination.' : 
    'No more results available.';

  return `${totalMessage}\n${paginationInfo}\n\n${projectList}`;
} 