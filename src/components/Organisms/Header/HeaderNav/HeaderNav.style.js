/* eslint-disable no-multiple-empty-lines */
import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';

const NavLinkClass = styled(Link)`
  display: inline-block;
  border: 0;
  padding: 25px;
  line-height: 1.3rem;
  height: auto;
  font-weight: 700;
  width: 100%;
  color: ${({ theme }) => theme.color('deep_violet_dark')};
  :hover {
    border: 0;
    color: ${({ theme }) => theme.color('red')};
    font-weight: inherit;
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

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 50%;
    right: 0;
    left: inherit;
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    ${zIndex('medium')};
    position: relative;
    top: 0;
    display: block;
    margin: 0 10px;
    width: auto;
    height: 100%;
  }
  > h2 {
    ${hideVisually};
  }
`;

/**
 * Sub Navigation Menu (second level)
 */
const SubNavMenu = styled.ul`
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
  border-radius: 0 0 25px 25px;
  overflow: hidden;

  // DEBUG
  border: 1px solid ${({ theme }) => theme.color('grey_extra_light')};;

  // DESKTOP:   
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    display: none;
    display: ${({ isFocussed }) => (isFocussed ? 'flex' : 'none')};
    top: 93px;
    position: absolute;
    padding: 0;
    width: 300px;
    height: auto;
  }
`;

/**
 * Sub Menu list items
 */
const SubNavItem = styled.li`
  padding: 0;
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color('grey_extra_light')};;

  &:first-of-type {
    border-top: none;
  }

  span {
    font-weight: 100;
  }

  :hover {
    background-color: ${({ theme }) => theme.color('grey_extra_light')};
    span {
      border-bottom: 0;
      padding-bottom: 2px;
      color: ${({ theme }) => theme.color('red')};
    }
  }
`;

/**
 * Sub menu link item
 */
const SubNavLink = styled(NavLinkClass)`
  padding: 20px;
  color: ${({ theme }) => theme.color('black')};
  height: auto;
  position: relative;
`;

/**
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: ${({ theme }) => theme.color('grey_extra_light')};
  list-style: none outside;
  padding: 0;
  margin: 0;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.color('white')};
  }
`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)`
  display: flex;
  gap: 4px;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    padding: 10px 0;
    height: auto;
    :focus + ${SubNavMenu} {
      display: flex;
    }
  }
`;

/**
 * Menu list items
 */
const NavItem = styled.li`
  ${zIndex('medium')};
  position: relative;
  font-weight: 700;

  li {
    span {
      border-bottom: none;
      padding-bottom: 0;
    }

    :hover {
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

  :hover {
    li {
      span {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    // Chevron icon:
    span > a > div {
      transform: rotate(-180deg);
      img {
        // Use fancy filter to colour 'img' version of SVG
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }
  }
  
  :hover {
    // background-color: ${({ theme }) => theme.color('teal_light')};
  }
  
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin: 0 4px;
    padding: 25px 5px;

    :hover > ${SubNavMenu}, :focus-within > ${SubNavMenu} {
      visibility: visible;
      opacity: 1;
      display: flex;
    }

    :hover {
      background-color: transparent;
      ${zIndex('high')};
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color('black')};
        padding-bottom: 2px;
      }
      ${SubNavMenu} {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;


const ChevronWrapper = styled.div`
  width: 24px;
  position: absolute;
  top: 24px;
  right: 24px;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    position: relative;
    top: auto;
    right: auto;
    width: 12px;
    padding-top: 2px;
  }
`;

// This represents the 'desktop'/non-mobile nav icons:
const NavMetaIcons = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    height: 55px;
    width: 100%;
    display: flex;

    > a {
      height: inherit;
      width: 100%;
      padding: 10px;

      img {
        padding: 5px;
        height: 35px;
        width: 35px;
      }
    }
  }

  // Hide these when using non-mobile nav,
  // just leaving the Header version in place
  @media ${({ theme }) => theme.breakpoint('nav')} {
    display: none;
  }
`;

const DonateButtonWrapper = styled.div`
  // Hide the 'Nav'-embedded version of the button when the nav
  // goes FULL DESKTOP, leaving just the 'Header'-embedded example
  @media ${({ theme }) => theme.breakpoint('nav')} {
    display: none;
  }
`;

/*
 * **********
 *  MORE NAV
 * **********
 */

// Clone Of SubNavMenu
const MoreSubNavMenu = styled(SubNavMenu)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    // DEBUG
    // background: green;
    top: 94px;
  }
`;

// Clone Of SubNavMenu
const MoreNestedSubNavMenu = styled(SubNavMenu)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    // DEBUG
    background: orange;
    // top: 94px;
  }
`;

// Clone Of NavLink
const MoreNavLink = styled(NavLink)`
  // DEBUG
  // background: yellow;

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    :focus + ${MoreSubNavMenu} {
      display: flex;
    }
  }
`;

// CLONE OF NavItem
const MoreNavItem = styled(NavItem)`
  ${zIndex('medium')};
  position: relative;
  font-weight: 700;

  li {
    span {
      border-bottom: none;
      padding-bottom: 0;
    }

    :hover {
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

  :hover {
    li {
      span {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    // Chevron icon:
    span > a > div {
      transform: rotate(-180deg);
      img {
        // Use fancy filter to colour 'img' version of SVG
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }
  }

  :hover {
    // background-color: ${({ theme }) => theme.color('teal_light')};
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin: 0 4px;
    padding: 25px 5px;

    :hover > ${MoreSubNavMenu}, :focus-within > ${MoreSubNavMenu} {
      visibility: visible;
      opacity: 1;
      display: flex;
    }

    :hover {
      background-color: transparent;
      ${zIndex('high')};
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color('black')};
        padding-bottom: 2px;
      }
      ${MoreSubNavMenu} {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink,
  ChevronWrapper,
  NavMetaIcons,
  DonateButtonWrapper,
  // More Nav stuff:
  MoreNavLink,
  MoreSubNavMenu,
  MoreNavItem,
  MoreNestedSubNavMenu
};
