/* eslint-disable no-multiple-empty-lines */
import styled, { css } from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';
import Arrow from './arrow-right.png';

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

  :hover,
  :focus,
  :focus-within {
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
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 20px 20px 5px rgba(0, 0, 0, 0.25);

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 50%;
    right: 0;
    left: inherit;
    box-shadow: -20px 15px 20px 0px rgba(0, 0, 0, 0.25);
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    ${zIndex('medium')};
    position: relative;
    top: 0;
    display: block;
    margin: 0 10px;
    width: auto;
    height: 100%;
    box-shadow: none;
  }
  > h2 {
    ${hideVisually};
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
  border: 1px solid ${({ theme }) => theme.color('grey_medium')};

  // DESKTOP:   
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    display: flex;
    visibility: ${({ isFocussed }) => (isFocussed ? 'visible' : 'hidden')};
    width: 330px;
    height: auto;
    padding: 0;
    position: absolute;
    top: 88px;
    left: -5px;
    border-radius: 0 0 25px 25px;
    transition: opacity ${transitionDuration}s ease;
    opacity: 0;
    box-shadow: 0px 20px 20px 5px rgba(0, 0, 0, 0.25);
  }
`;

/**
 * Sub Menu list items
 */
const SubNavItem = styled.li`
  padding: 0;
  height: 100%;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color('grey_medium')};;
  position: relative;
  transition: background-color ${transitionDuration}s ease;

  &:first-of-type {
    border-top: none;
  }

  span {
    font-weight: 100;
  }

  :hover,
  :focus,
  :focus-within {
    background-color: ${({ theme }) => theme.color('grey_extra_light')};
    + span {
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
  padding: 20px 25px 18px 40px;
  color: ${({ theme }) => theme.color('black')};
  height: auto;
  position: relative;
`;

/**
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: ${({ theme }) => theme.color('white')};
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
    padding: 10px 15px 15px 0;
    height: auto;
    :hover,
    :focus-within,
    :focus {
      + ${SubNavMenu} {
      display: flex;
      opacity: 1;
    }}
  }
`;

/**
 * Menu list items
 */
const NavItem = styled.li`
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
  
  
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    margin: 0 4px;
    padding: 25px 5px;
    border-bottom: none;


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
  }

  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    position: relative;
    top: -3px;
    right: -1px;
    width: 10px;
    //
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

      &: after {
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

      img {
        padding: 5px;
        height: 35px;
        width: 35px;
      }

      span {
        transition: color 0.15s ease-out;
      }

      &:focus,
      &:hover {
        span {
          color: ${({ theme }) => theme.color('red')};
        }
      }
    }

    &:first-child {
      margin-top: 20px;
    }
  }

  // Hide these when using non-mobile nav,
  // just leaving the Header version in place
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    display: none;
  }
`;

const DonateButtonWrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 20px;
  background-color: inherit;

  // Donate button
  a {
    width: calc(100% - 10px);
    transition: width 0.35s cubic-bezier(0.5, 1.5, 0.5, 0.9);

    &:hover,
    &:focus { 
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px 0;
    }
  }
  
  // Hide the 'Nav'-embedded version of the button when the nav
  // goes FULL DESKTOP, leaving just the 'Header'-embedded example
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    display: none;
  }
`;

/*
 * **********
 *  MORE NAV
 * **********
 */

const MoreSubNavMenu = styled(SubNavMenu)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    // top: 88px
  }
`;

const MoreNavLink = styled(NavLink)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    :focus,
    :hover,
    :focus-within {
      + ${MoreSubNavMenu} {
        display: flex;
      }
    }
  }
`;

// Use for the 'More' link only
const MoreNavItem = styled(NavItem)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    :hover,
    :focus-within,
    :focus {
      > ${MoreSubNavMenu} {
        visibility: visible;
        opacity: 1;
        display: flex;
      }
    }

    :hover,
    :focus,
    :focus-within {
      ${MoreSubNavMenu} {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

// Clone Of SubNavMenu, NESTED menu
const MoreNestedSubNavMenu = styled(SubNavMenu)`
  @media ${({ theme }) => theme.allBreakpoints('Nav')} {
    top: 0;
    left: -1px;
    border-radius: 0;
    border-bottom: 0;
    position: relative;
    transition: max-height 0.5s cubic-bezier(0.5, 1.5, 0.5, 0.80);
    max-height: 0;
    border: 0;
    box-shadow: none;

    ${({ isSubMenuOpen }) => (isSubMenuOpen && css`
      // Calculating a realistic height ceiling (8 subnav items) 
      // to make animation as slick as possible
      max-height: calc(57px * 8);
  `)};
  }
`;

const MoreSubNavItem = styled(SubNavItem)`
  // Chevron icon
  > a > div {
    position: absolute;
    width: 15px;
    top: 13px;
    right: 25px;
    transition: transform 0.35s cubic-bezier(0.41, 1.64, 0.41, 0.8);
  }

  :hover, 
  :focus,
  :focus-within {
    > a {
      color: ${({ theme }) => theme.color('red')};
    }
    > a > div {
      img {
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }
  }
`;

const MoreNavNestedLink = styled(NavLink)`
  padding: 20px 25px 18px;

  ${({ isSubMenuOpen }) => (isSubMenuOpen && css`
    > div {
      transform: rotate(-180deg);
    }
  `)};
`;

const MoreSubNavLink = styled(SubNavLink)`
  //
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
  DonateButtonWrapperBottom,
  // 'More Nav' stuff:
  MoreNavLink,
  MoreSubNavMenu,
  MoreNavItem,
  MoreNestedSubNavMenu,
  MoreSubNavItem,
  MoreNavNestedLink,
  MoreSubNavLink
};
