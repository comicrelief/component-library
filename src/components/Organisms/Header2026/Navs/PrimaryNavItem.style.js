import styled, { css, keyframes } from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import zIndex from '../../../../theme/shared/zIndex';
import Text from '../../../Atoms/Text/Text';

const transitionDuration = 0.2;

const bounceIn = keyframes`
  0% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(8px);
  }
  50% {
    transform: translateX(3px);
  }
  70% {
    transform: translateX(6px);
  }
  100% {
    transform: translateX(5px);
  }
`;

const NavLinkClass = styled(Link)`
  display: inline-block;
  border: 0;
  padding: 25px;
  line-height: 1rem;
  height: auto;
  font-weight: 600;
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

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-weight: 700;
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
  overflow: hidden;

  /* Remove border from first item only on mobile */
  > div:first-of-type > li:first-of-type {
    border-top: none;
  }

  /* When tertiary menu is open, hide the entire secondary menu on mobile */
  ${({ isTertiaryOpen }) => isTertiaryOpen && css`
    display: none;
  `}

  // DESKTOP:
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    background-color: ${({ theme }) => theme.color('white')};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: auto;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 0 0 25px 25px;
    overflow: visible;
    transition: opacity 0.4s linear, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 13px 15px 0 rgba(0, 0, 0, 0.05);
    align-items: stretch;

    // Invisible bridge above dropdown to maintain hover state
    &::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 20px;
      background: transparent;
    }
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
    justify-content: flex-start;
    border-right: 1px solid ${({ theme }) => theme.color('grey_medium')};
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease-out 0.15s, transform 0.3s ease-out 0.15s;

    &:last-of-type {
      border-right: none;
    }
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

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    height: auto;
    border-top: none;

    span {
      font-weight: ${({ $isSecondary }) => ($isSecondary ? 600 : 400)};
    }

    ${({ $isSecondary }) => $isSecondary && css`
      border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};

      &:first-of-type {
        border-top: none;
      }
    `}
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

  span {
    font-weight: 600;
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding: 20px 30px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    transform: translateX(0);
    transition: transform 0.7s ease-out;

    span {
      font-size: 1rem;
      font-weight: ${({ $isSecondary }) => ($isSecondary ? 600 : 400)};
    }

    &:hover,
    &:focus {
      background-color: transparent;
      animation: ${bounceIn} 0.4s ease-out forwards;
    }

    &::after {
      content: '';
      width: 8px;
      height: 8px;
      border-right: 2px solid currentColor;
      border-bottom: 2px solid currentColor;
      transform: rotate(-45deg);
      opacity: 0;
      transition: opacity 0.15s ease-out;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
    }
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
    opacity: 1;
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
    position: static;

    :hover,
    :focus,
    :focus-within {
      > ${SecondaryNavMenu}, :focus-within > ${SecondaryNavMenu} {
        visibility: visible;
        opacity: 1;
        display: grid;
        transform: scaleY(1);

        ${ColumnWrapper} {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    // Base state for span with pseudo-element border at bottom of header
    > span {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.color('red')};
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease-out;
      }
    }

    :hover,
    :focus,
    :focus-within {
      background-color: transparent;
      ${zIndex('high')};

      > span::after {
        transform: scaleX(1);
        transition: transform 0s ease-out 0.5s;
      }
    }

    // When hovering the dropdown menu, hide the primary link border
    &:has(${SecondaryNavMenu}:hover) > span::after {
      transform: scaleX(0);
      transition: transform 0.3s ease-out;

      ${SecondaryNavMenu} {
        display: grid;
        opacity: 1;
        visibility: visible;
        transform: scaleY(1);

        ${ColumnWrapper} {
          opacity: 1;
          transform: translateY(0);
        }
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
      filter: brightness(0);
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
    font-size: 1rem;
  }
`;

/**
 * Column 1 Nav Item
 */
const Column1NavItem = styled(SecondaryNavItem)``;

/**
 * Column 2 Nav Item
 */
const Column2NavItem = styled(SecondaryNavItem)``;

/**
 * Column 3 Nav Item
 */
const Column3NavItem = styled(SecondaryNavItem)``;

/**
 * Tertiary Navigation Menu (3rd level) - separate sibling to SecondaryNavMenu
 */
const TertiaryNavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none outside;
  width: 100%;
  ${zIndex('higher')};

  background-color: ${({ theme }) => theme.color('white')};

  /* When closed: absolute and off-screen. When open: relative for dynamic height */
  position: ${({ isOpen }) => (isOpen ? 'relative' : 'absolute')};
  left: 0;
  top: 0;

  /* Mobile slide-in animation */
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.15s ease-out;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  border-radius: 16px;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};

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

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    span {
      font-weight: 100;
    }
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

  span {
    font-weight: 400;
  }
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

/**
 * Nav Card for column 3 (desktop only)
 */
const NavCard = styled.a`
  display: none;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.color('black')};
    padding: 16px 20px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.color('grey_extra_light')};
    }
  }
`;

const NavCardImage = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const NavCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const NavCardTitle = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color('black')};
`;

const NavCardDescription = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  font-weight: 400;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color('grey_dark')};
  line-height: 1.4;
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
  TertiaryNavLink,
  NavCard,
  NavCardImage,
  NavCardContent,
  NavCardTitle,
  NavCardDescription
};
