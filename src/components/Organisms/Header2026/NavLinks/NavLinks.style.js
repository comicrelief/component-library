import styled, { css } from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';
import Arrow from './arrow-right.png';
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

  // Chevron icon:
  > div {
    height: auto;
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
    ${({ isExpanded }) => (isExpanded && css`
      transform: rotate(-180deg);
    `)}
  }
`;

/**
 * Navigation menu
 */
const Nav = styled.nav`
  display: ${({ isExpandable }) => (isExpandable ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 75px;
  left: 0;
  ${zIndex('higher')};

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    ${zIndex('medium')};
    position: relative;
    top: 0;
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
  }

  // Accessibility aid
  > h2 {
    ${hideVisually};
  }
`;

const NavMenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 20px 20px 5px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    box-shadow: none;
    border-radius: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: ${({ theme }) => theme.color('white')};
  list-style: none outside;
  padding: 0;
  margin: 0;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color('white')};
    margin: 0 24px;
  }
`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)`
  display: flex;
  gap: 4px;
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

    padding: 10px 0px;
    // Additional room for the chevron:
    ${({ hasSubMenu }) => (hasSubMenu && css`
      padding: 10px 14px 10px 0;
    `)}

    :hover,
    :focus-within,
    :focus {
      + ${SubNavMenu} {
      display: flex;
      opacity: 1;
    }}
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
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
    border-bottom: none;
    padding: 25px 0px;
    margin: 0 22px 0 0;

    &:last-child {
      margin-right: 0;
    }

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
  width: 16px;
  position: absolute;
  top: 20px;
  right: 22px;
  height: 16px;

  img {
    width: 100%;
    display: block;
    height: auto;
    @media ${({ theme }) => theme.breakpoints2026('L')} {
      transform: rotate(90deg);
    }
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    position: absolute;
    top: 10px;
    right: 0;
    width: 10px;
  }
`;

// This represents the 'non-desktop'/mobile nav icons:
const NavMetaIcons = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: inherit;

  > div {
    height: 60px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.color('grey_medium')};

    > a {
      height: inherit;
      width: 100%;
      padding: 15px 20px;
      position: relative;

      // Arrow icon:
      &:after {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 20px;
        height: 20px;
        background-image: url(${Arrow});
        background-size: 100%;
        background-repeat: no-repeat;
      }

      // Icon itself
      img {
        padding: 5px;
        height: 35px;
        width: 35px;
      }

      span {
        transition: color 0.15s ease-out;
      }

      @media ${({ theme }) => theme.breakpoints2026('M')} {
        &:focus,
        &:hover {
          span {
            color: ${({ theme }) => theme.color('red')};
          }
        }
      }
    }

    &:first-child {
      margin-top: 20px;
    }
  }

  // Hide these when using non-mobile nav,
  // just leaving the Header version in place
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

const StyledText = styled(Text)`
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    font-size: 15px;
  }
`;

const DonateButtonModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: inherit;
  margin-top: 50px;

  // Donate button
  a {
    border-radius: 16px;
    width: calc(100% - 10px);
    transition: width 0.35s cubic-bezier(0.5, 1.5, 0.5, 0.9);
    font-family: Montserrat;

    &:hover,
    &:focus {
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px 0;
    }
  }

  // Hide the 'Nav'-embedded version of the button when the nav
  // goes FULL DESKTOP, leaving just the 'Header'-embedded example
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    display: none;
  }
`;

export {
  Nav,
  NavMenuWrapper,
  NavMenu,
  StyledNavItem,
  NavLink,
  DesktopNavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink,
  ChevronWrapper,
  NavMetaIcons,
  DonateButtonModalWrapper,
  StyledText
};
