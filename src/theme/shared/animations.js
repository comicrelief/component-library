import { css } from 'styled-components';

/**
 * Spring scale animation on hover
 * Applies a smooth spring-like scale transition that expands the element on hover/focus
 * @param {boolean} animateScale - Whether to enable the scale animation
 * @param {number} scaleFactor - Scale factor to apply on hover (default 8%)
 * @param {number} bounceIntensity - Intensity of the springy bounce effect (0-3, default: 1)
 * @returns {css} template literal for the animation
 */
const springScaleAnimation = (animateScale, scaleFactor = 1.08, bounceIntensity = 1) => {
  if (!animateScale) {
    return css``;
  }

  // More negative pull-back and higher overshoot = more bounce
  // Default intensity (1) gives: cubic-bezier(0.68, -0.85, 0.265, 1.95)
  // Higher intensity = more pronounced bounce effect
  const pullBack = -0.55 - (bounceIntensity * 0.3);
  const overshoot = 1.55 + (bounceIntensity * 0.4);
  const duration = 0.2 + (bounceIntensity * 0.1);

  return css`
    transition: transform ${duration}s cubic-bezier(0.68, ${pullBack}, 0.265, ${overshoot});
    transform-origin: center;

    &:hover,
    &:focus {
      transform: scale(${scaleFactor});
    }
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
