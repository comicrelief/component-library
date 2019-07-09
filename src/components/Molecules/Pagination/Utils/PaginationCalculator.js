import { range } from 'lodash';

/**
 * Determines the number of displayed pages
 * @param  {Integer} totalPages
 * @param  {Integer} maxPages
 * @return {Integer}
 */
export const calculateDisplayedPages = (totalPages, maxPages) => {
  // Use totalPages as displayed pages if it is less than allowed max number of pages
  return Math.min(totalPages, maxPages);
};

/**
 * Determines the number of displayed pages to the left
 * By using half total pages unless current page is inside that half
 * Then pages to the left would be current page after subtracting one from it
 * @param  {Integer} currentPage
 * @param  {Integer} totalPages
 * @return {Integer}
 */
export const calculatePagesToTheLeft = (currentPage, totalPages) => {
  const oneSidePages = Math.floor(totalPages / 2);
  if (currentPage <= oneSidePages) {
    return currentPage - 1;
  }

  return oneSidePages;
};

/**
 * Determines the number of displayed pages to the right
 * By subtracting pages to the left and the current page itself from displayed pages total
 * @param  {Integer} currentPage
 * @param  {Integer} totalPages
 * @param  {Integer} displayedPages
 * @return {Integer}
 */
export const calculatePagesToTheRight = (
  currentPage,
  totalPages,
  displayedPages
) => {
  return displayedPages - calculatePagesToTheLeft(currentPage, totalPages) - 1;
};

/**
 * Retrieves the correct page range
 * @param  {Integer} currentPage
 * @param  {Integer} maxPages
 * @param  {Integer} totalPages
 * @return {Integer}
 */
export const getPages = (currentPage, maxPages, totalPages) => {
  const displayedPages = calculateDisplayedPages(totalPages, maxPages);
  // If all pages are allowed, return the entire page range
  if (displayedPages === maxPages) {
    return range(1, maxPages + 1);
  }

  const pagesToTheLeft = calculatePagesToTheLeft(currentPage, totalPages);
  const pagesToTheRight = calculatePagesToTheRight(
    currentPage,
    totalPages,
    displayedPages
  );

  const first = currentPage - pagesToTheLeft;
  const last = currentPage + pagesToTheRight;
  return range(first, last + 1);
};
