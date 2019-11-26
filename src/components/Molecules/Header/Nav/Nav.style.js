import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';
import zIndex from '../../../../theme/shared/zIndex';
import { screen } from '../../../../theme/shared/size';

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
    color: ${({ theme }) => theme.color('deep_violet_dark')};
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

  @media ${({ theme }) => theme.breakpoint('medium')} {
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
  max-height: 400px;
  background-color: ${({ theme }) => theme.color('deep_violet_dark')};

  @media ${({ theme }) => theme.breakpoint('medium')} {
    display: none;
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
  padding: 0;
  height: 100%;
  width: 100%;
  :hover {
    background-color: ${({ theme }) => theme.color('deep_violet_light')};
    span {
      border-bottom: 0;
      padding-bottom: 2px;
      color: ${({ theme }) => theme.color('white')};
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
      border-bottom-color: ${({ theme }) => theme.color('deep_violet_dark')};
      top: -22px;
    }
    :hover::before {
      border-bottom-color: ${({ theme }) => theme.color('deep_violet_light')};
    }
  }
`;

/**
 * Navigation Menu (first level)
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
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.color('white')};
  }
`;

/**
 * Menu item link
 */
const NavLink = styled(NavLinkClass)`
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 10px 5px;
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
  :hover {
    background-color: ${({ theme }) => theme.color('teal_light')};
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    margin: 0 4px;
    padding: 25px 0;

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
