import { getForms } from '../services/api.js';
import { formatDate, truncateText } from '../utils/language.js';
import type { QueryOptions } from '../types/index.js';

/**
 * Tool for getting forms with optional filtering and pagination
 */
export async function getFormsTool(options: QueryOptions = {}): Promise<string> {
  const response = await getForms(options);
  
  if (response.edges.length === 0) {
    return 'No forms found.';
  }

  const formList = response.edges.map(({ node: form }) => {
    const title = truncateText(form.title || 'Untitled', 50);
    const description = form.description ? truncateText(form.description, 100) : 'No description available.';
    const date = formatDate(form.created_at);
    
    return `- ${title} (Created: ${date})\n  ${description}`;
  }).join('\n\n');

  const totalMessage = `Found ${response.edges.length} form${response.edges.length === 1 ? '' : 's'}.`;
  const paginationInfo = response.pageInfo.hasNextPage ? 
    'There are more results available. Use the cursor for pagination.' : 
    'No more results available.';

  return `${totalMessage}\n${paginationInfo}\n\n${formList}`;
} 