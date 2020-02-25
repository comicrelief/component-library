import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hideVisually from '../../../../theme/shared/hideVisually';

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const HelperText = styled.span`
  ${hideVisually};
`;

const Icon = ({ href, target, icon, brand, title, ...restProps }) => (
  <StyledLink
    href={href}
    target={`_${target}`}
    {...restProps}
    title={title}
    rel="noopener noreferrer"
    data-test="header-esu"
  >
    <StyledImage src={icon} alt={brand} />
    {title !== 'Sign up for emails' && (
      <HelperText>(opens in new window)</HelperText>
    )}
  </StyledLink>
);

Icon.propTypes = {
  brand: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Icon;
