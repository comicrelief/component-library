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
      font-weight: 700;
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
 * Secondary Navigation Menu
 */
const SecondaryNavMenu = styled.ul`
  display: flex;
  padding: 0;
  list-style: none outside;
  left: 0;
  top: 0;

  position: absolute;
  width: 100%;
  ${zIndex('higher')};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color('white')};
  border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};

  /* Mobile slide-in animation */
  transform: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.15s ease-out;
  visibility: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'visible' : 'hidden')};
  border-radius: 16px;

  /* When tertiary menu is open, maintain height and hide secondary items */
  ${({ isTertiaryOpen }) => isTertiaryOpen && css`
    min-height: 100vh;

    > li {
      display: none;
    }
  `}

  // DESKTOP:
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: auto;
    min-width: 600px;
    height: auto;
    padding: 0;
    position: absolute;
    top: 86px;
    left: -29px;
    border-radius: 0 0 25px 25px;
    transition: opacity ${transitionDuration}s linear;
    transform: none;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 13px 15px 0 rgba(0, 0, 0, 0.05);
    align-items: start;
  }
`;

/**
 * Column wrapper for grouping links in desktop 3-column layout
 */
const ColumnWrapper = styled.div`
  display: contents;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: flex;
    flex-direction: column;
  }
`;

/**
 * Secondary Menu list items
 */
const SecondaryNavItem = styled.li`
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
 * Secondary menu link item
 */
const SecondaryNavLink = styled(NavLinkClass)`
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
      + ${SecondaryNavMenu} {
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
  position: static;
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
    opacity: 0.6;
    transition: opacity 0.3s ease-out;
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
        opacity: 1;
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
    border-bottom: none;

    :hover,
    :focus,
    :focus-within {
      > ${SecondaryNavMenu}, :focus-within > ${SecondaryNavMenu} {
        visibility: visible;
        opacity: 1;
        display: grid;
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

      ${SecondaryNavMenu} {
        display: grid;
        opacity: 1;
        visibility: visible;
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

/**
 * Column 1 Nav Item - Red border
 */
const Column1NavItem = styled(SecondaryNavItem)`
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    border-left: 4px solid ${({ theme }) => theme.color('red')};
  }
`;

/**
 * Column 2 Nav Item - Blue border
 */
const Column2NavItem = styled(SecondaryNavItem)`
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    border-left: 4px solid ${({ theme }) => theme.color('blue')};
  }
`;

/**
 * Column 3 Nav Item - Green border
 */
const Column3NavItem = styled(SecondaryNavItem)`
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    border-left: 4px solid ${({ theme }) => theme.color('green')};
  }
`;

/**
 * Tertiary Navigation Menu (3rd level) - covers the secondary menu completely
 */
const TertiaryNavMenu = styled.ul`
  display: block;
  padding: 0;
  list-style: none outside;
  left: 0;
  top: 0;

  position: absolute;
  width: 100%;
  height: auto;
  ${zIndex('higher')};

  background-color: ${({ theme }) => theme.color('white')};

  /* Mobile slide-in animation */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.15s ease-out;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  border-radius: 16px;

  // DESKTOP - hide on desktop for now
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

/**
 * Tertiary Nav Item
 */
const TertiaryNavItem = styled.li`
  padding: 0;
  height: auto;
  width: 100%;
  flex: 0 0 auto;
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
 * Tertiary menu link item
 */
const TertiaryNavLink = styled(NavLinkClass)`
  padding: 20px 25px 22px 42px;
  color: ${({ theme }) => theme.color('black')};
  height: auto;
  position: relative;
`;

/**
 * Secondary link with nested children - adds chevron styling
 */
const SecondaryNavLinkWithChildren = styled(SecondaryNavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
`;

/**
 * Chevron for secondary nav items with children
 */
const SecondaryChevronWrapper = styled.div`
  width: 8px;
  flex-shrink: 0;

  img {
    width: 100%;
    display: block;
    height: auto;
  }
`;

export {
  StyledNavItem,
  NavLink,
  DesktopNavLink,
  SecondaryNavMenu,
  SecondaryNavItem,
  SecondaryNavLink,
  SecondaryNavLinkWithChildren,
  SecondaryChevronWrapper,
  ChevronWrapper,
  StyledText,
  ColumnWrapper,
  Column1NavItem,
  Column2NavItem,
  Column3NavItem,
  TertiaryNavMenu,
  TertiaryNavItem,
  TertiaryNavLink
};
