import { css } from 'styled-components';

/**
 * Spring scale animation transition
 * Applies a smooth spring-like scale transition. Use this for the transition CSS,
 * then apply the scale transform separately (via hover, focus, or props).
 * @param {boolean} animateScale - Whether to enable the scale animation
 * @param {number} duration - Duration of the transition in seconds (default 0.3)
 * @param {number} bezierX1 - First X value for cubic-bezier (default 0.68)
 * @param {number} bezierY1 - First Y value for cubic-bezier (default 0)
 * @param {number} bezierX2 - Second X value for cubic-bezier (default 0.265)
 * @param {number} bezierY2 - Second Y value for cubic-bezier (default 1.4)
 * @param {boolean} includeHoverFocus - Whether to include :hover and :focus
 * selectors with scale transform (default: false)
 * @param {number} scaleFactor - Scale factor to apply on hover/focus (default
 * 1.1 = 10%, only used if includeHoverFocus is true)
 * @returns {css} template literal for the animation
 */
const springScaleAnimation = (animateScale, duration = 0.3, bezierX1 = 0.68, bezierY1 = 0,
  bezierX2 = 0.265, bezierY2 = 1.4, includeHoverFocus = false, scaleFactor = 1.1) => {
  if (!animateScale) {
    return css``;
  }

  const easing = `cubic-bezier(${bezierX1}, ${bezierY1}, ${bezierX2}, ${bezierY2})`;

  return css`
    transition: transform ${duration}s ${easing};
    transform-origin: center;

    ${includeHoverFocus && css`
      &:hover,
      &:focus {
        transform: scale(${scaleFactor});
      }
    `}
  `;
};

/**
 * Bounce up animation on hover
 * Applies a smooth spring-like upward movement with bounce effect (no scaling)
 * @param {boolean} animateUp - Whether to enable the animation
 * @param {number} moveFactor - Factor/percentage for how far up to move (default 0.02 = 2%)
 * @param {number} bounceIntensity - Intensity of the springy bounce effect (0-3, default: 1)
 * @returns {css} template literal for the animation
 */
const bounceUpAnimation = (animateUp, moveFactor = 0.02, bounceIntensity = 1) => {
  if (!animateUp) {
    return css``;
  }

  const pullBack = -0.55 - (bounceIntensity * 0.3);
  const overshoot = 1.55 + (bounceIntensity * 0.4);
  const duration = 0.2 + (bounceIntensity * 0.1);
  // Convert factor to percentage for translateY (negative moves up)
  const translateY = -(moveFactor * 100);

  return css`
    transition: transform ${duration}s cubic-bezier(0.68, ${pullBack}, 0.265, ${overshoot});
    transform-origin: center;

    &:hover,
    &:focus {
      transform: translateY(${translateY}%);
    }
  `;
};

export { springScaleAnimation, bounceUpAnimation };
