import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { kebabCase } from 'lodash';
import hideVisually from '../../../../theme/shared/hideVisually';
import Text from '../../Text/Text';

const RevealTextWidth = 75;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  position: relative;

  ${({ isHeader }) => isHeader && css`
    overflow: hidden;
    padding-right: 0px;
    transition: padding-right 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);

    &:hover,
    &:focus {
      padding-right: ${RevealTextWidth}px;

      img {
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);

        & + span {
          // Show the Reveal text  
          display: block;
        }
      }
    }
  `}
`;

const RevealText = styled(Text)`
  width: auto;
  color: ${({ theme }) => theme.color('black')};
  position: absolute;
  top: 19px;
  left: 55px;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 8px;
    left: calc(50% + 17px);
    transform: translateX(-50%);
    display: none;
    color: ${({ theme }) => theme.color('red')};
  }
`;

const StyledImage = styled.img`
  width: 100%;
`;

const HelperText = styled.span`
  ${hideVisually};
`;

const Icon = ({
  href, target, icon, brand, title, isHeader, id, ...restProps
}) => (
  <StyledLink
    href={href}
    target={`_${target}`}
    {...restProps}
    title={title}
    rel="noopener noreferrer"
    /* TODO: needs to be dynamic; it's using the same for every icon currently... */
    data-test={`header-${kebabCase(id)}`}
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
  isHeader: PropTypes.bool,
  id: PropTypes.string.isRequired
};

export default Icon;
