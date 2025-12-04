import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import fontHelper from '../../../theme/crTheme/fontHelper';

/** Text component */
export const BaseText = styled.span`

  // Use our helper function to streamline styling, laying the groundwork for the new styling:
  ${({ as, theme }) => (as !== undefined && css`
    ${fontHelper(theme, as)}
  `)};

  // Then, override with the pre-existing base styles *but only when props are provided.*
  // Part of this new work is to phase-out all usage of these 'customisation' props, 
  // so that all tags will use the standardised styles set in fontHelper

  // (Not a typo; crummy old styles matched line-heights to font-sizes by design)
  ${({ size, theme }) => (size && `line-height: ${theme.fontSize(size)}`)};
  ${({ size, theme }) => (size && `font-size: ${theme.fontSize(size)}`)};

  ${({ family, theme }) => (family && `font-family: ${theme.fontFamilies(family)}`)};
  ${({ weight }) => (weight && `font-weight: ${weight}`)};
  ${({ height }) => (height && `line-height: ${height}`)};

  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};

  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

  ${({ mobileColor, theme }) => mobileColor && css`
    @media (max-width: ${breakpointValues.L - 1}px) {
      color: ${theme.color(mobileColor)};
    }
  `};

`;

/** Text renders different elements based on the `tag` prop
 *  Weight is checked for existence to prevent overriding the tag's css
 */
const Text = ({
  tag = 'span',
  size = 's',
  color = 'inherit',
  children = undefined,
  uppercase = false,
  height = undefined,
  weight = undefined,
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
