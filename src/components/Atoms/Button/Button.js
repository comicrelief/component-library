import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, IconWrapper, Copywrapper } from './Button.style';
import buttonTypes from '../../../theme/crTheme/buttonTypes';
import Picture from '../Picture/Picture';

const Button = React.forwardRef(({
  children,
  color = 'red',
  icon = null,
  iconDescription = 'Icon',
  wrapper = false,
  fullWidth = false,
  buttonType = buttonTypes.PRIMARY,
  ...rest
}, ref) => {
  const hasIcon = Boolean(icon);
  const hasIconPath = hasIcon && (typeof icon === 'string' || icon instanceof String);

  return (
    <StyledButton
      {...rest}
      as={wrapper ? 'span' : 'button'}
      ref={ref}
      $fullWidth={fullWidth}
      $color={color}
      $buttonType={buttonType}
      data-testid="Button"
      $hasIcon={hasIcon}
    >

      {hasIcon
        // Wrapping span to allow for grid positioning alongside icon
        ? <Copywrapper>{children}</Copywrapper>
        : children
      }

      {hasIcon && (
        <IconWrapper className="icon-wrapper">
          {hasIconPath ? (
            <Picture
              image={icon}
              objectFit="contain"
              alt={iconDescription}
            />
          ) : (icon)}
        </IconWrapper>
      )}

    </StyledButton>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  wrapper: PropTypes.bool, // Buttons as span
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.oneOfType([
    // SVG / React component wrapping SVG code:
    PropTypes.node,
    // Icon URL
    PropTypes.string
  ]),
  iconDescription: PropTypes.string,
  // Primary will the default for the vast majority of contexts; with
  // Secondary and Tertirary being manually set by developers where required
  buttonType: PropTypes.oneOf([
    buttonTypes.PRIMARY,
    buttonTypes.SECONDARY,
    buttonTypes.TERTIARY
  ])
};

export default Button;
