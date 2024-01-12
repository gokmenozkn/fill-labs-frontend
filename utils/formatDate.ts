
/**
 * Converts a date string in the format "yyyy-mm-ddThh:mm:ssZ" to "dd-mm-yyyy" format.
 * @param {string} inputDate - The input date string in "yyyy-mm-ddThh:mm:ssZ" format.
 * @returns {string} - The formatted date string in "dd-mm-yyyy" format.
 */
export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  
  // Extract day, month, and year from the UTC date object
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getUTCFullYear();

  return `${day}-${month}-${year}`;
}