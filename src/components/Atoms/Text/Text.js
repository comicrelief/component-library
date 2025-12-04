import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import fontHelper from '../../../theme/crTheme/fontHelper';

/** Text component */
export const BaseText = styled.span`
  // The pre-existing base styles (using the pre-existing Props that
  // we're trying to phase out), just to keep things sane and non-explodey:
  font-size: ${({ size, theme }) => theme.fontSize(size)};

  line-height: ${({ size, theme }) => theme.fontSize(size)};

  ${({ weight }) => (weight ? `font-weight: ${weight}` : null)};
  ${({ height }) => (height ? `line-height: ${height}` : null)};

  font-family: ${({ family, theme }) => (family
    ? theme.fontFamilies(family)
    : theme.fontFamilies(theme.font.regular))};

  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

  ${({ mobileColor, theme }) => mobileColor && css`
    @media (max-width: ${breakpointValues.L - 1}px) {
      color: ${theme.color(mobileColor)};
    }
  `};

  // Use our helper function to streamline styling, overriding the 
  // above rules when we've got config for this tag:
  ${({ as, theme }) => (as !== undefined && css`
    ${fontHelper(theme, as)}
  `)};
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
  size: PropTypes.string, // TO BE DEPRECATED EVENTUALLY
  height: PropTypes.string, // TO BE DEPRECATED EVENTUALLY
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
