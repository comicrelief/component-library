import { css } from 'styled-components';

/**
 * Reusable imageZoom snippet
 *
 * @param {object} params - allows us to stipulate specific params based on need.
 *
 * @param {boolean} params.zoomed - whether or not we're applying our base styles or
 * the active/hovered styles, typically when a parent element has been hovered.
 *
 * @param {float} params.initialScale - how scaled the image is initially, zooming the image
 * in slightly by default so the 'bounce' animation doesn't cause aesthetic nastiness
 * when the image is temporarily smaller than the container).
 *
 * @param {float} params.finalScale - how scaled the image is after the transition.
 *
 * Note that this doesn't define specific markup relationships due to the the differing
 * contexts it's used in.
 *
 * @returns {css} template literal
 */
const imageZoom = (params = {}) => {
  const { zoomed = false, initialScale = 1.02, finalScale = 1.04 } = params;

  return !zoomed ? css`
    transform: scale(${initialScale});
    transition: transform 0.3s cubic-bezier(0.65, -0.19, 0.37, 1.16);
  ` : css`
    transform: scale(${finalScale});
  `;
};
export default imageZoom;
