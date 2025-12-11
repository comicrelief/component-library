import styled, { css } from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import zIndex from '../../../../theme/shared/zIndex';
import Text from '../../../Atoms/Text/Text';

const transitionDuration = 0.2;

const NavLinkClass = styled(Link)`
  display: inline-block;
  border: 0;
  padding: 25px;
  line-height: 1rem;
  height: auto;
  font-weight: 700;
  width: 100%;
  color: ${({ theme }) => theme.color('black')};
  transition: color ${transitionDuration}s ease;
  text-decoration: none;

  :hover,
  :focus,
  :focus-within {
    border: 0;
  }

  // No hover state for mobile, so targetting Medium+:
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    :hover,
    :focus {
      color: ${({ theme }) => theme.color('red')};
      background-color: ${({ theme }) => theme.color('grey_extra_light')};
      font-weight: inherit;
    }

    :focus-within {
      // Reset the colour of a parent...
      background-color: ${({ theme }) => theme.color('white')};

      // ...unless it's also being hovered
      &:hover {
        background-color: ${({ theme }) => theme.color('grey_extra_light')};
      }
    }
  }

  // Chevron icon????
  // > div {
  //     transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
  //     @media ${({ theme }) => theme.allBreakpoints('L')} {
  //       transform: rotate(90deg);
  //       ${({ isExpanded }) => (isExpanded && css`
  //         transform: rotate(-90deg);
  //       `)}
  //     }
  // }
`;

/**
 * Sub Navigation Menu (second level)
 */
const SubNavMenu = styled.ul`
  visibility: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'visible' : 'hidden')};
  display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'flex' : 'none')};
  padding: 0;
  position: relative;
  list-style: none outside;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color('white')};
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};

  // DESKTOP:
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: flex;
    width: 330px;
    height: auto;
    padding: 0;
    position: absolute;
    top: 86px;
    left: -29px;
    border-radius: 0 0 25px 25px;
    transition: opacity ${transitionDuration}s linear;
    opacity: 0;
    box-shadow: 0px 13px 15px 0 rgba(0, 0, 0, 0.05);
  }
`;

/**
 * Sub Menu list items
 */
const SubNavItem = styled.li`
  padding: 0;
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};
  position: relative;
  transition: background-color ${transitionDuration}s ease;

  &:first-of-type {
    border-top: none;
  }

  span {
    font-weight: 100;
  }
`;

/**
 * Sub menu link item
 */
const SubNavLink = styled(NavLinkClass)`
  padding: 20px 25px 22px 42px;
  color: ${({ theme }) => theme.color('black')};
  height: auto;
  position: relative;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding: 20px 30px 22px;
  }

`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)`
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};

  ${({ isExpanded, theme }) => (isExpanded && css`
    &,
    &:hover,
    &:focus-within,
    &:focus {
      color: ${theme.color('red')};
    }
  `)}

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    height: auto;

    :hover, :focus-within, :focus {
      + ${SubNavMenu} {
      display: flex;
      opacity: 1;
    }}

    ${({ hasSubMenu }) => (hasSubMenu && css`
      padding: 10px 16px 10px 0;
    `)}
  }
`;

const DesktopNavLink = styled(NavLink)`
  &,
  &:hover,
  &:focus,
  &:focus-within {
    background-color: ${({ theme }) => theme.color('white')};
  }
`;

/**
 * Menu list items
 */
const StyledNavItem = styled.li`
  ${zIndex('medium')};
  position: relative;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.color('grey_medium')};

  li {
    span {
      border-bottom: none;
      padding-bottom: 0;
    }

    :hover,
    :focus,
    :focus-within {
      span {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }

  // Chevron icon:
  span > a > div {
    transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
  }

  :hover,
  :focus,
  :focus-within {
    li {
      span {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    // Chevron icon:
    span > a {
      color: ${({ theme }) => theme.color('red')};
      > div {
        transform: rotate(-180deg);
        img {
          // Use fancy filter to colour 'img' version of SVG
          filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
        }
      }
    }
  }


  @media ${({ theme }) => theme.breakpoints2026('L')} {
    height: 100%;
    display: flex;
    align-items: center;

    :hover,
    :focus,
    :focus-within {
      > ${SubNavMenu}, :focus-within > ${SubNavMenu} {
        visibility: visible;
        opacity: 1;
        display: flex;
      }
    }

    :hover,
    :focus,
    :focus-within {
      background-color: transparent;
      ${zIndex('high')};

      span {
        border-bottom: 2px solid ${({ theme }) => theme.color('black')};
        padding-bottom: 2px;
      }

      ${SubNavMenu} {
        display: flex;
        opacity: 1;
        visibility: visible;
        flex-direction: column;
      }
    }
  }
`;

const ChevronWrapper = styled.div`
  position: absolute;
  top: 28px;
  right: 30px;
  width: 8px;

  img {
    width: 100%;
    display: block;
    height: auto;
    @media ${({ theme }) => theme.breakpoints2026('L')} {
      transform: rotate(90deg);
    }
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    top: 12px;
    right: 0;
    width: 7px;
  }
`;

const StyledText = styled(Text)`
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-size: 15px;
  }
`;

export {
  StyledNavItem,
  NavLink,
  DesktopNavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink,
  ChevronWrapper,
  StyledText
};
