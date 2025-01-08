import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { kebabCase } from 'lodash';
import hideVisually from '../../../../theme/shared/hideVisually';
import Text from '../../Text/Text';

const RevealTextWidth = 55;
const RevealTextSpeed = 0.35;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  position: relative;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  // 'isHeader' is only set and passed in Header2025, so the pre-existing Header isn't affected:
  ${({ isHeader }) => isHeader && css`
    overflow: hidden;
    padding-right: 0px;
    transition: padding-right ${RevealTextSpeed}s cubic-bezier(0.5, 1.5, 0.5, 0.75);

    &:hover,
    &:focus {
      opacity: 1;
      
      img {
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }

    @media ${({ theme }) => theme.allBreakpoints('NavWide')} {
      &:hover,
      &:focus {
        // Default
        padding-right: ${RevealTextWidth}px;
  
        // Tweak for ESU's longer text:
        &[data-testid="header-esu"] {
          padding-right: 92px;
        }
  
        // Tweak for Shop's shorter text:
        &[data-testid="header-shop"] {
          padding-right: 48px;
        }
        
        // Show the Reveal text  
        img + span {
          display: block;
        }
      }
    `}
    };
`;

const RevealText = styled(Text)`
  width: auto;
  color: ${({ theme }) => theme.color('black')};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 70px;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 8px;
    left: 15px;
    transform: translateX(0);
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
  href, target, icon, brand, title, isHeader = false, id, ...restProps
}) => (
  <StyledLink
    href={href}
    target={`_${target}`}
    {...restProps}
    title={title}
    rel="noopener noreferrer"
    data-testid={`${isHeader ? 'header' : 'icon'}-${kebabCase(id)}`}
    isHeader={isHeader}
  >
    <StyledImage src={icon} alt={brand} />

    { isHeader && (
      <RevealText>{title}</RevealText>
    )}

    {id === 'esu' && (
      <HelperText>(opens in new window)</HelperText>
    )}
  </StyledLink>
);

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
