import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';

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

  @media ${({ theme }) => theme.breakpoint('medium')} {
    position: relative;
    top: 0;
    display: block;
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
  max-height: 400px;

  > li a {
    font-size: 15px;
    font-weight: 500;
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'none' : 'none')};
    display: ${({ isKeyPressed }) => (isKeyPressed ? 'flex' : 'none')};
    top: 90px;
    position: absolute;
    padding: 0 0 20px;
    width: 250px;
    height: auto;
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
 * Sub menu link item underline
 */
const SubNavLinkUnderline = styled(SubNavLink)`
  padding: 26px 21px;
  ::after {
    content: '';
    position: absolute;
    width: 14px;
    border-bottom: 2px solid ${({ theme }) => theme.color('white')};
    left: 12px;
    top: auto;
    bottom: 10px;
    margin: 0 10px;
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    ::before {
      display: block;
      position: absolute;
      content: '';
      left: 34px;
      width: 10px;
      height: 10px;
      border: 11px solid transparent;
      border-bottom-color: ${({ theme }) => theme.color('deep_violet')};
      top: -22px;
    }
    :hover::before {
      border-bottom-color: ${({ theme }) => theme.color('violet_light')};
    }
  }
`;

/**
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: inherit
  list-style: none outside;
  padding: 0;
  margin: 0;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.color('white')};
  }
`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)`
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 7px 5px;
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

  @media ${({ theme }) => theme.breakpoint('medium')} {
    margin: 0 4px;
    padding: 30px 0;

    :hover > ${SubNavMenu}, :focus-within > ${SubNavMenu} {
      visibility: visible;
      opacity: 1;
      display: flex;
    }

    :hover {
      background-color: transparent;
      ${zIndex('high')};
      ${NavLink} {
        span {
          border-bottom: 2px solid ${({ theme }) => theme.color('black')};
          padding-bottom: 2px;
        }
      }
      ${SubNavMenu} {
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
  SubNavLinkUnderline
};
