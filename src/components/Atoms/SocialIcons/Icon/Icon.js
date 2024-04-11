import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import hideVisually from '../../../../theme/shared/hideVisually';
import { NavIconHoverOn, NavIconHoverOff } from '../../../../theme/shared/animations.style';
import Text from '../../Text/Text';

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  position: relative;

  ${({ isHeader }) => isHeader && css`
    overflow: hidden;
    padding-right: 0px;
    animation-duration: 0.35s;
    animation-fill-mode: both;
    animation-name: ${NavIconHoverOff};
    &:hover,
    &:focus {
      animation-name: ${NavIconHoverOn};

      img {
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }
  `}
`;

const RevealText = styled(Text)`
  width: 50px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.color('red')};
  position: absolute;
  top: 10px;
  left: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const HelperText = styled.span`
  ${hideVisually};
`;

const Icon = ({
  href, target, icon, brand, title, isHeader, ...restProps
}) => (
  <StyledLink
    href={href}
    target={`_${target}`}
    {...restProps}
    title={title}
    rel="noopener noreferrer"
    /* TODO: needs to be dynamic; it's using the same for every icon currently... */
    data-test="header-esu-icon"
    isHeader={isHeader}
  >
    <StyledImage src={icon} alt={brand} />

    { isHeader && (
    <RevealText>{title}</RevealText>
    )}

    {/* This is terrible and should be changed */}
    {title !== 'Sign up for emails' && (
      <HelperText>(opens in new window)</HelperText>
    )}
  </StyledLink>
);

Icon.defaultProps = {
  isHeader: false
};

Icon.propTypes = {
  brand: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isHeader: PropTypes.bool
};

export default Icon;
