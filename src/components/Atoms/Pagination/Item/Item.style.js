import styled, { css } from 'styled-components';

const StyledItem = styled.a`
  padding: 9px 14px 9px 14px;
  border-radius: 30px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  cursor: ${({ selected, disabled }) =>
    selected || disabled ? 'default' : 'pointer'};
  background: ${({
    theme,
    selected,
    disabled,
    backgroundColor,
    selectedBackgroundColor,
    disabledBackgroundColor
  }) => {
    let processedBackgroundColor = backgroundColor;
    if (disabled) {
      processedBackgroundColor = disabledBackgroundColor;
    } else if (selected) {
      processedBackgroundColor = selectedBackgroundColor;
    }
    return theme.color(processedBackgroundColor);
  }};
  color: ${({
    theme,
    selected,
    disabled,
    color,
    selectedColor,
    disabledColor
  }) => {
    let processedColor = color;
    if (disabled) {
      processedColor = disabledColor;
    } else if (selected) {
      processedColor = selectedColor;
    }
    return theme.color(processedColor);
  }};
  ${({ theme, selected, disabled, backgroundColorOnHover, colorOnHover }) => {
    if (!(selected || disabled)) {
      return css`
        :hover {
          background: ${theme.color(backgroundColorOnHover)};
          color: ${theme.color(colorOnHover)};
        }
      `;
    }
    return null;
  }};
`;

export default StyledItem;
