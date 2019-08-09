import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  transition: opacity 0.2s;
  
  &:hover,
  &:focus {
    opacity: 0.6;
   }
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Icon = ({ href, target, icon, brand, title, ...restProps }) => (
  <StyledLink
    href={href}
    target={`_${target}`}
    {...restProps}
    title={title}
    rel="noopener noreferrer"
  >
    <StyledImage src={icon} alt={brand} />
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
