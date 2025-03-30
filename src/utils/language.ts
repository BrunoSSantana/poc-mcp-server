/**
 * Utility functions for text processing and language operations
 */

/**
 * Format a number with its corresponding unit
 */
export function formatCount(count: number, unit: string): string {
  const pluralUnit = unit.endsWith('s') ? unit : `${unit}s`;
  return count === 1 ? `${count} ${unit}` : `${count} ${pluralUnit}`;
}

/**
 * Format a date string to a human-readable format
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength - 3)}...`;
}

/**
 * Convert a string to title case
 */
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate a response for the number of items in an area
 */
export function generateCountResponse(count: number, itemType: string, area: string): string {
  const formattedCount = formatCount(count, itemType);
  const formattedArea = toTitleCase(area);
  
  return `There ${count === 1 ? 'is' : 'are'} ${formattedCount} in the ${formattedArea} area.`;
} 