import { useLayoutEffect } from 'react';

let scrollPadding;

/**
 * small utility component that allows us to lock the main window scrolling,
 * while also avoiding flicker/judder as the scrollbar is added and removed from the DOM.
 * used in the Lightbox component to ensure the scrollbar is hidden when the lightbox is open.
 */
export default function ScrollFix() {
  // create a DOM element with a known width and a scrollbar,
  // then measure an inner element to find the missing width taken up by the scrollbar
  if (scrollPadding === undefined) {
    const container = document.createElement('div');
    container.className = 'scroll-fix-container';
    container.style.setProperty('position', 'absolute');
    container.style.setProperty('top', '0');
    container.style.setProperty('left', '-9999px');
    container.style.setProperty('width', '100px');
    container.style.setProperty('height', '100px');
    container.style.setProperty('overflow-y', 'scroll');

    const inner = document.createElement('div');
    inner.style.setProperty('width', '100%');

    container.appendChild(inner);
    // edge needs the element to be in the DOM to measure the scrollbar width
    document.body.appendChild(container);

    scrollPadding = 100 - inner.getBoundingClientRect().width;
    // remove the element from the DOM
    document.body.removeChild(container);
  }

  // when the component mounts, add a padding to the document to compensate for the scrollbar;
  // this is then removed when the component unmounts
  useLayoutEffect(() => {
    function resetScrollbar() {
      document.documentElement.style.setProperty('overflow', 'auto');
      document.documentElement.style.setProperty('padding-right', '0px');
    }

    // check that the page content is longer than the viewport
    if (document.documentElement.scrollHeight <= window.innerHeight) {
      resetScrollbar();
    } else {
      document.documentElement.style.setProperty('overflow', 'hidden');
      document.documentElement.style.setProperty(
        'padding-right',
        `${scrollPadding}px`
      );
    }

    return () => {
      resetScrollbar();
    };
  }, []);

  return null;
}
