import styled from 'styled-components';
import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import spacing from '../../../../theme/shared/spacing';

const NavLinkClass = styled(Link)`
  border: 0;
  height: 46px;
  width: 100%;
  background-color: ${({ theme }) => theme.color('deep_violet_dark')};
  text-decoration: none;
  &:hover,
  &:focus {
    border-bottom: none;
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

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    max-height: none;
    height: auto;

    ${({ column }) => (column === true ? 'flex-direction: row; flex-wrap: wrap;' : null)};

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

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    height: auto;
    margin-top: 12px;
    padding: 0;

    ${({ column }) => (column === true ? 'flex: 0 0 100%;' : null)};

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

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    ${({ column }) => (column === true ? 'flex: 0 0 100%;' : null)};
  }
`;

/**
 * Sub menu link item
 */
const SubNavLink = styled(NavLinkClass)`
  padding: 14px 21px;
  height: auto;
  position: relative;
`;

/**
 * Navigation Menu (first level)
 */
const NavMenu = styled.ul`
  background-color: inherit;
  list-style: none outside;
  padding: 0 0  ${spacing('xl')};
  border-bottom: 1px solid ${({ theme }) => theme.color('white')};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)`
  text-decoration: none;
`;

/**
 * Menu list items
 */
const NavItem = styled.li`
  position: relative;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex: 0 0 30%;
    margin: 0;
  }

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    /* Minus 9% to remove 3 x 1.5% margins from previous rule */
    flex: 0 0 calc(25% - 1rem);
    margin-right: 1rem;
    margin-bottom: 1rem;

    > span {
      padding: 0;
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
    font-weight: 700;

    @media ${({ theme }) => theme.breakpoints2026('M')} {
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
      transform: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
      top: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '6px' : '0')};
      right: -25px;
    }

    @media ${({ theme }) => theme.breakpoints2026('M')} {
      cursor: default;
      display: inline;

      &:after {
        content: none;
      }
    }
  }
`;

export {
  Nav, NavMenu, NavItem, NavLink, SubNavMenu, SubNavItem, SubNavLink
};
