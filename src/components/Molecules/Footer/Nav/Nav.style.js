import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
// import zIndex from '../../../../theme/shared/zIndex';

const NavLinkClass = styled(Link)`
  border: 0;
  padding: 17px 20px;
  height: 46px;
  width: 100%;
  background-color: ${({ theme }) => theme.color('deep_violet')};
  color: ${({ theme }) => theme.color('white')};
`;

/**
 * Navigation menu
 */
const Nav = styled.nav`
  display: block;
  width: 100%;
  text-align: left;

  > h2 {
    ${hideVisually};
  }
`;

/**
 * Sub Navigation Menu (second level)
 */
const SubNavMenu = styled.ul`
  display: flex;
  transition: max-height 0.5s ease;
  max-height: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '400px' : '0px')};
  overflow: hidden;
  padding: 0;
  position: relative;
  list-style: none outside;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > li a {
    display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'inline' : 'none')};
    font-size: 15px;
    font-weight: 500;
  }
`;

/**
 * Sub Menu list items
 */
const SubNavItem = styled.li`
  height: 40px;
  width: 100%;
  background-color: inherit;
  padding: 8px 0 !important;

  a {
    background-color: inherit;
    height: auto;

    &:after {
      content: none !important;
    }

    &:hover,
    &:focus {
      // background-color: ${({ theme }) => theme.color('green')};
      border-bottom: 2px solid #fff;
      span {
        border-bottom: 0;
        padding-bottom: 2px;
      }
    }
  }
`;

/**
 * Sub menu link item
 */
const SubNavLink = styled(NavLinkClass)`
  padding: 14px 21px;
  color: ${({ theme }) => theme.color('white')};
  height: auto;
  position: relative;
`;

/**
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: inherit
  list-style: none outside;
  padding: 0;
  margin: 0;
`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)``;

/**
 * Menu list items
 */
const NavItem = styled.li`
  position: relative;
  font-weight: 700;
  margin-bottom: 45px;
  margin: 0 1.5%;
  margin-bottom: 45px;

  a {
    width: auto;
    padding: 0;
    height: auto;
    position: relative;
    background-color: inherit;
    font-size: 19px;

    &:after {
      content: '\\2303';
      position: absolute;
      font-family: Arial;
      margin-left: 4px;
      overflow: hidden;
      line-height: 19px;
      font-size: 23px;
      color: inherit;
      font-weight: 100;
      transform: ${({ isSubMenuOpen }) =>
        isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'};

      transition-duration: 0.2s;
      transition-property: transform;
      transition-timing-function: ease;
      bottom: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '-3px' : '3px')};
      right: -25px;
    }
  }
`;

export { Nav, NavMenu, NavItem, NavLink, SubNavMenu, SubNavItem, SubNavLink };
