import styled from 'styled-components';
import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';

const NavLinkClass = styled(Link)`
  border: 0;
  height: 46px;
  width: 100%;
  background-color: ${({ theme }) => theme.color('deep_violet_dark')};

  &:hover,
  &:focus {
    border-bottom: none;
    font-weight: 500;
  }
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
  flex-direction: column;

  > li a {
    display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'inline' : 'none')};
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;

    &:after {
      content: none;
    }
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    max-height: none;
    height: auto;

    ${({ column }) =>
      column === true ? 'flex-direction: row; flex-wrap: wrap;' : null};

    > li a {
      display: inline;
      line-height: 24px;
    }
  }
`;

/**
 * Sub Menu list items
 */
const SubNavItem = styled.li`
  height: 40px;
  width: 100%;
  background-color: inherit;
  padding: 8px 0;

  @media ${({ theme }) => theme.breakpoint('small')} {
    height: auto;
    margin-top: 12px;
    padding: 0 2%;

    ${({ column }) => (column === true ? 'flex: 0 0 44%;' : null)};

    a {
      background-color: inherit;
      height: auto;

      &:after {
        content: none !important;
      }

      &:hover,
      &:focus {
        border-bottom: 2px solid #fff;
        span {
          border-bottom: 0;
          padding-bottom: 2px;
        }
      }
    }
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    ${({ column }) => (column === true ? 'flex: 0 0 46%;' : null)};
  }
`;

/**
 * Sub menu link item
 */
const SubNavLink = styled(NavLinkClass)`
  padding: 14px 21px;
  height: auto;
  position: relative;

  &:hover,
  &:focus {
    font-weight: 700;
  }
`;

/**
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: inherit;
  list-style: none outside;
  padding: 0;
  margin: 0;

  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
    flex-wrap: wrap;
  }
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
  margin: 0 1.5% 45px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    /* Minus 9% to remove 3 x 1.5% margins from previous rule */
    flex: 0 0 30%;

    > span {
      padding: 0 2%;
    }
  }

  a {
    width: auto;
    padding: 0;
    height: auto;
    position: relative;
    background-color: inherit;
    font-size: 19px;
    line-height: 40px;
    font-weight: 800;

    &:focus,
    &:hover {
      font-weight: 800;
    }

    @media ${({ theme }) => theme.breakpoint('small')} {
      font-size: 20px;
      line-height: 40px;
    }

    &:after {
      content: '\\2303';
      position: absolute;
      font-family: Arial;
      margin-left: 4px;
      overflow: hidden;
      line-height: 19px;
      font-size: 23px;
      color: ${({ theme }) => theme.color('white')};
      font-weight: 100;
      transition: transform 0.2s ease;
      transform: ${({ isSubMenuOpen }) =>
        isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
      top: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '6px' : '0')};
      right: -25px;
    }

    @media ${({ theme }) => theme.breakpoint('small')} {
      cursor: default;
      display: inline;

      &:after {
        content: none;
      }
    }
  }
`;

export { Nav, NavMenu, NavItem, NavLink, SubNavMenu, SubNavItem, SubNavLink };
