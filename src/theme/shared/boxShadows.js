import { css } from 'styled-components';

/**
 * Reusable defaultBoxShadow snippet
 * @param {boolean} hovered - switch out the opacity value, typically used
 * for hover/active states, but can just be used for a more exaggerated shadow.
 *
 * As markup varies from component to component, it made sense to apply just
 * the CSS rules here, and build context-specific selectors around the usage.
 *
 * @returns {css} template literal
 */
const defaultBoxShadow = (hovered = false) => css`
  box-shadow: rgba(0, 0, 0, ${hovered ? 0.25 : 0.15}) 0px 0px 1rem;
`;

export default defaultBoxShadow;
