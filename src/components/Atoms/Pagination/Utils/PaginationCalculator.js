import { range } from 'lodash';

/**
 * Determines the number of displayed pages
 * @param  {Integer} maxPages
 * @param  {Integer} totalPages
 * @return {Integer}
 */
export const calculateDisplayedPages = (maxPages, totalPages) =>
  // Use totalPages as displayed pages if it is less than allowed max number of pages
  Math.min(maxPages, totalPages)
;

/**
 * Determines the number of displayed pages to the left
 * By using half total pages unless current page is inside that half
 * Then pages to the left would be current page after subtracting one from it
 * @param  {Integer} currentPage
 * @param  {Integer} displayedPages
 * @param  {Integer} totalPages
 * @return {Integer}
 */
export const calculatePagesToTheLeft = (
  currentPage,
  displayedPages,
  totalPages
) => {
  const oneSidePages = Math.floor(displayedPages / 2);
  // if current page is closer to the start
  // pages to the left will be current page minus one -for the current page item itself-
  if (currentPage <= oneSidePages) {
    return currentPage - 1;
  }
  // if current page is closer to the end
  // pages to the left will be displayed pages
  // minus pages on the right side minus one -for the current page item itself-
  if (totalPages - currentPage <= oneSidePages) {
    return displayedPages - (totalPages - currentPage) - 1;
  }
  return oneSidePages;
};

/**
 * Determines the number of displayed pages to the right
 * By subtracting pages to the left and the current page itself from displayed pages total
 * @param  {Integer} currentPage
 * @param  {Integer} displayedPages
 * @param  {Integer} totalPages
 * @return {Integer}
 */
export const calculatePagesToTheRight = (
  currentPage,
  displayedPages,
  totalPages
) => (
  displayedPages
    - calculatePagesToTheLeft(currentPage, displayedPages, totalPages)
    - 1
);

/**
 * Retrieves the correct page range
 * @param  {Integer} currentPage
 * @param  {Integer} maxPages
 * @param  {Integer} totalPages
 * @return {Integer}
 */
export const getPages = (currentPage, maxPages, totalPages) => {
  const displayedPages = calculateDisplayedPages(maxPages, totalPages);
  // If all pages are allowed, return the entire page range
  if (displayedPages === totalPages) {
    return range(1, totalPages + 1);
  }

  const pagesToTheLeft = calculatePagesToTheLeft(
    currentPage,
    displayedPages,
    totalPages
  );
  const pagesToTheRight = calculatePagesToTheRight(
    currentPage,
    displayedPages,
    totalPages
  );

  const first = currentPage - pagesToTheLeft;
  const last = currentPage + pagesToTheRight;
  return range(first, last + 1);
};
