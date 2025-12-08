import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointValues2026 } from '../../../theme/shared/breakpoints2026';
import fontHelper from '../../../theme/crTheme/fontHelper';

/** Text component */
export const BaseText = styled.span`

  // Use our helper function to streamline styling, laying the groundwork for updated theme:
  ${({ as, theme }) => (as !== undefined && css`
    ${fontHelper(theme, as)}

    & {
      // Then increase specificity, and override with the pre-existing base styles...
      // * but only when the associated props are provided. *
      //
      // Part of this new work is to phase-out usage of these 'customisation' props (so that 
      // all tags will use the new standardised styles set in fontHelper), but, in order to ensure
      // things don't break/look bad accidentally, it'll require intentional, in-situ prop removal.

      ${({ size }) => (size && `font-size: ${theme.fontSize(size)}`)};
      ${({ size }) => (size && 'line-height: normal')};

      ${({ family }) => (family && `font-family: ${theme.fontFamilies(family)}`)};
      ${({ weight }) => (weight && `font-weight: ${weight}`)};
      ${({ height }) => (height && `line-height: ${height}`)};
      ${({ uppercase }) => (uppercase && 'text-transform: uppercase')};

      color: ${({ color }) => (color ? theme.color(color) : 'inherit')};

      ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

      ${({ size }) => (size === 'super' && css`
        font-size: ${theme.fontSize('xxl')};
        line-height: 3rem;

        @media ${theme.breakpoints2026('M')} {
          font-size: ${theme.fontSize('big')};
          line-height: ${theme.fontSize('big')};
          margin-bottom: 2rem;
        }

        @media ${theme.breakpoints2026('L')} {
          font-size: ${theme.fontSize('super')};
          line-height: ${theme.fontSize('super')};
          margin-bottom: 2rem;
        }
      `)};

      ${({ mobileColor }) => mobileColor && css`
        @media (max-width: ${breakpointValues2026.L - 1}px) {
          color: ${theme.color(mobileColor)};
        }
      `};
    }
  `)};
`;

/** Text renders different elements based on the `tag` prop
 *  Weight is checked for existence to prevent overriding the tag's css
 */
const Text = ({
  tag = 'span',
  color = 'inherit',
  size = undefined,
  children = undefined,
  height = undefined,
  weight = undefined,
  uppercase = false,
  family = null,
  mobileColor = null,
  textAlign = null,
  ...rest
}) => (
  <BaseText
    {...rest}
    as={tag}
    color={color}
    size={size}
    uppercase={uppercase}
    height={height}
    weight={weight}
    family={family}
    mobileColor={mobileColor}
    textAlign={textAlign}
  >
    {children}
  </BaseText>
);

Text.propTypes = {
  size: PropTypes.string, // To be deprecated eventually
  height: PropTypes.string, // To be deprecated eventually
  textAlign: PropTypes.string,
  family: PropTypes.string,
  weight: PropTypes.string,
  uppercase: PropTypes.bool,
  color: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  mobileColor: PropTypes.string
};

export default Text;
