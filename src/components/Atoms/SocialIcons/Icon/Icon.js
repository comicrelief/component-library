import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  cursor: point;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Icon = ({ href, target, icon, brand, ...restProps }) => (
  <StyledLink href={href} target={`_${target}`} {...restProps}>
    <StyledImage src={icon} alt={brand} />
  </StyledLink>
);

Icon.propTypes = {
  brand: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
