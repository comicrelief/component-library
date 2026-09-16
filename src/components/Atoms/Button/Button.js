import React from 'react';
import PropTypes from 'prop-types';
import { isString } from 'lodash';
import { StyledButton, IconWrapper } from './Button.style';
import buttonTypes from '../../../theme/crTheme/buttonTypes';
import Picture from '../Picture/Picture';

const Button = React.forwardRef(({
  children,
  color = 'red',
  icon = null,
  wrapper = false,
  fullWidth = false,
  buttonType = buttonTypes.PRIMARY,
  ...rest
}, ref) => {
  const hasIcon = Boolean(icon);
  const hasIconPath = isString(icon);

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
      $hasIconPath={hasIconPath}
    >

      {hasIcon
      // Wrapping span to allow for positioning
        ? <span>{children}</span>
        : children
      }

      {hasIcon && (
        <IconWrapper>
          {hasIconPath ? (
            <Picture
              alt=""
              image={icon}
              objectFit="contain"
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
    PropTypes.node,
    PropTypes.string,
    PropTypes.object
  ]),
  // Primary will the default for the vast majority of contexts; with
  // Secondary and Tertirary being manually set by developers where required
  buttonType: PropTypes.oneOf([
    buttonTypes.PRIMARY,
    buttonTypes.SECONDARY,
    buttonTypes.TERTIARY
  ])
};

export default Button;
