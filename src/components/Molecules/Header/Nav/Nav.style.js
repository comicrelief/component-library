import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';
import { sizes } from '../../../../theme/shared/breakpoint';

const NavLink = styled(Link)`
  border: 0;
  padding: 17px 20px;
  height: 46px;
  width: 100%;
  color: ${({ theme }) => theme.color('deep_violet')};
`;

/**
 *          Menu second level
 */

/**
 * Navigation menu
 */
const Nav = styled.nav`
  display: ${({ isExpandable }) => (isExpandable ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;

  @media (min-width: ${sizes.small}px) {
    width: 50%;
    right: 0;
    left: inherit;
  }

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
 * Sub Navigation Menu
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
  background-color: ${({ theme }) => theme.color('deep_violet')};

  @media ${({ theme }) => theme.breakpoint('medium')} {
    display: ${({ isSubMenuOpen }) => (isSubMenuOpen ? 'none' : 'none')};
    top: 90px;
    position: absolute;
    padding: 0 0 20px;
    width: 250px;
    height: auto;
    transition-property: max-height;
    transition-duration: 850ms;
    transition-timing-function: cubic-bezier(0.2, 1, 0.5, 1);
  }
`;

/**
 * Sub Menu list items
 */
const SubNavItem = styled.li`
  padding: 0;
  height: 100%;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.color('violet_light')};
    span {
      border-bottom: 0;
      padding-bottom: 2px;
    }
  }
`;

/**
 * Sub menu item link
 */
const SubNavItemLink = styled(NavLink)`
  padding: 14px 21px;
  color: ${({ theme }) => theme.color('white')};
  height: auto;
  position: relative;
`;

/**
 * Sub menu item link underline
 */
const SubNavItemLinkUnderline = styled(SubNavItemLink)`
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
  }
`;

/**
 *          Menu first level
 */

/**
 * Navigation Menu
 */
const NavMenu = styled.ul`
  background-color: ${({ theme }) => theme.color('grey_extra_light')};
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
const NavItemLink = styled(NavLink)`
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
  :hover {
    background-color: ${({ theme }) => theme.color('teal_light')};
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
      ${NavItemLink} {
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
  NavLink,
  Nav,
  NavMenu,
  NavItem,
  NavItemLink,
  SubNavMenu,
  SubNavItem,
  SubNavItemLink,
  SubNavItemLinkUnderline
};
