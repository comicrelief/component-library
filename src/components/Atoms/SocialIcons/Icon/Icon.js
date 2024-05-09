import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { kebabCase } from 'lodash';
import hideVisually from '../../../../theme/shared/hideVisually';
import Text from '../../Text/Text';

const RevealTextWidth = 58;

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
      // Default
      padding-right: ${RevealTextWidth}px;

      // Tweak for ESU's longer text:
      &[data-testid="header-esu"] {
        padding-right: 95px;
      }

      // Tweak for Shop 's shorter text:
      &[data-testid="header-shop"] {
        padding-right: 52px;
      }

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
  href, target, icon, brand, title, isHeader, id, ...restProps
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
