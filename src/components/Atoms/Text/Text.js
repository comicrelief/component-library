import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';
import fontHelper from '../../../theme/crTheme/fontHelper';

/** Text component */
export const BaseText = styled.span`

  // TO-DO: MAKES THESE ALL CONDITIONAL
  // Prop overrides
  // font-size: ${({ size, theme }) => theme.fontSize(size)};
  // line-height: ${({ size, theme }) => theme.lineHeight(size)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'inherit')};
  color: ${({ color, theme }) => (color ? theme.color(color) : 'inherit')};

  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
  ${({ weight }) => (weight ? `font-weight: ${weight}` : null)};
  ${({ height }) => (height ? `line-height: ${height}` : null)};
  ${({ as }) => (as === 'p' || as === 'span' ? 'line-height: normal;' : null)};

  font-family: ${({ family, theme }) => (family
    ? theme.fontFamilies(family)
    : theme.fontFamilies(theme.font.regular))};
  
  // Anton customisation:
  ${({ family }) => (family === 'Anton' ? 'letter-spacing: 0.03rem' : null)};

  ${({ mobileColor, theme }) => mobileColor && css`
  @media (max-width: ${breakpointValues.L - 1}px) {
    color: ${theme.color(mobileColor)};
  }
`};

  //**** WEBSITE PROJECT ******
  // Use our helper function to streamline things:
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
  /** Sizes */
  size: PropTypes.string, // TO BE DEPRECATED
  /** Line height */
  height: PropTypes.string, // TO BE DEPRECATED
  /** Text Align */
  textAlign: PropTypes.string,
  /** Font family */
  family: PropTypes.string,
  /** Font weight */
  weight: PropTypes.string,
  /** Sets text transform to uppercase. */
  uppercase: PropTypes.bool,
  /** Colors */
  color: PropTypes.string,
  /** Tag type */
  tag: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  mobileColor: PropTypes.string
};

export default Text;
