import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';
import { screen } from '../../../../theme/shared/size';
import { ChevronRotateHoverOn, ChevronRotateHoverOff } from '../../../../theme/shared/animations.style';

const NavLinkClass = styled(Link)`
  display: inline-block;
  border: 0;
  padding: 17px 20px;
  line-height: 1.3rem;
  height: 46px;
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

  @media (min-width: ${screen.small}) {
    width: 50%;
    right: 0;
    left: inherit;
  }

  @media ${({ theme }) => theme.breakpoint('nav')} {
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

  @media ${({ theme }) => theme.breakpoint('nav')} {
    display: none;
    display: ${({ isKeyPressed }) => (isKeyPressed ? 'flex' : 'none')};
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

  @media ${({ theme }) => theme.breakpoint('nav')} {
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
  @media ${({ theme }) => theme.breakpoint('nav')} {
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
    transition: transform;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: ${ChevronRotateHoverOff};
  }

  :hover {
    li {
      span {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    // Icon:
    span > a > div {
      animation-name: ${ChevronRotateHoverOn};
      img {
        filter: invert(0.5) sepia(1) saturate(100) hue-rotate(20deg);
      }
    }
  
  }
  
  :hover {
    background-color: ${({ theme }) => theme.color('teal_light')};
  }
  
  @media ${({ theme }) => theme.breakpoint('nav')} {
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
  transition: transform 0.15s;
  width: 12px;
  padding-top: 2px;
`;

/**
 * SubSUB Navigation Menu (third level)
 */
const SubSubNavMenu = styled.ul`
  // display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'flex' : 'none')};
  display: flex;
  padding: 0;
  position: relative;
  list-style: none outside;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  background-color: ${({ theme }) => theme.color('deep_violet_dark')};

  @media ${({ theme }) => theme.breakpoint('nav')} {
    // display: none;
    // display: ${({ isKeyPressed }) => (isKeyPressed ? 'flex' : 'none')};
    display: flex;
    padding: 0;
    width: 250px;
    height: auto;
  }
`;

const SubSubNavMenuTitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  padding: 14px 14px 7px 21px;
  color: ${({ theme }) => theme.color('black')};
  height: auto;
  position: relative;
`;

const NavMetaIcons = styled.div`
  width: auto;
  display: flex;
  align-items: center;

  > div {
    height: 35px;
    width: auto;
    display: inline-block;

    > a {
      height: inherit;
      width: inherit;
      margin-left: 0.5rem;

      img {
        padding: 5px;
        height: inherit;
        width: inherit;
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

export {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink,
  ChevronWrapper,
  SubSubNavMenu,
  SubSubNavMenuTitle,
  NavMetaIcons,
  DonateButtonWrapper
};
