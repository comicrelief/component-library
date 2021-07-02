import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hideVisually from '../../../../theme/shared/hideVisually';
import spacing from '../../../../theme/shared/spacing';
import Text from '../../Text/Text';

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  width: ${({ size }) => size};
  margin-right: ${spacing('sm')};
`;

const HelperText = styled.span`
  ${hideVisually};
`;

const Icon = ({
  href, target, icon, brand, title, size, hideLabel, ...restProps
}) => (
  <StyledLink
    href={href}
    target={`_${target}`}
    {...restProps}
    title={title}
    rel="noopener noreferrer"
    data-test="header-esu-icon"
    hideLabel={hideLabel}
  >
    <StyledImage size={size} src={icon} alt={brand} />
    {title !== 'Sign up for emails' && (
      <HelperText>(opens in new window)</HelperText>
    )}
    {!hideLabel ? (
      <Text size="md" color="black">
        {title}
      </Text>
    ) : null}
  </StyledLink>
);

Icon.propTypes = {
  brand: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  size: PropTypes.string
};

Icon.defaultProps = {
  hideLabel: true,
  size: 'auto'
};

export default Icon;
