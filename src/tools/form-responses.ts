import { getFormResponses } from '../services/api.js';
import { formatDate } from '../utils/language.js';
import type { QueryOptions } from '../types/index.js';

/**
 * Tool for getting form responses with optional filtering and pagination
 */
export async function getFormResponsesTool(options: QueryOptions = {}): Promise<string> {
  const response = await getFormResponses(options);
  
  if (response.edges.length === 0) {
    return 'No form responses found.';
  }

  const responseList = response.edges.map(({ node: formResponse }) => {
    const date = formatDate(formResponse.created_at);
    const formTitle = formResponse.forms?.title || 'Unknown Form';
    const loomerName = formResponse.loomers?.name || 'Unknown User';
    const responseCount = Object.keys(formResponse.responses).length;
    
    return `- Response to "${formTitle}" by ${loomerName} (${date})\n  Contains ${responseCount} answer${responseCount === 1 ? '' : 's'}`;
  }).join('\n\n');

  const totalMessage = `Found ${response.edges.length} form response${response.edges.length === 1 ? '' : 's'}.`;
  const paginationInfo = response.pageInfo.hasNextPage ? 
    'There are more results available. Use the cursor for pagination.' : 
    'No more results available.';

  return `${totalMessage}\n${paginationInfo}\n\n${responseList}`;
} 