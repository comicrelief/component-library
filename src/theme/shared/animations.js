import { css } from 'styled-components';

/**
 * Logo rotation animation on hover
 * Applies a rotation transition that rotates the logo (or whatever else)
 * -14deg on hover/focus
 * @param {boolean} animateRotate - Whether to enable the rotation animation
 * @returns {css} template literal for the animation
 */
const logoRotateAnimation = animateRotate => {
  if (!animateRotate) {
    return css``;
  }

  return css`
    img {
      transition: transform 0.6s cubic-bezier(0.41, 1.64, 0.41, 0.8);
    }

    &:hover,
    &:focus {
      img {
        transform: rotate(-14deg);
      }
    }
  `;
};

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
 * TranslateY animation on hover
 * Applies a smooth spring-like scale transition that expands the element on hover/focus
 * @param {boolean} animateScale - Whether to enable the scale animation
 * @param {number} pixelMovement - Scale factor to apply on hover (default 8%)
 * @param {number} bounceIntensity - Intensity of the springy bounce effect (0-3, default: 1)
 * @returns {css} template literal for the animation
 */
const bounceUpAnimation = (animateScale, pixelMovement = 10, bounceIntensity = 1) => {
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
      transform: translateY(-${pixelMovement}px);
    }
  `;
};

export { logoRotateAnimation, springScaleAnimation, bounceUpAnimation };
