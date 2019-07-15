import styled from 'styled-components';

import Link from '../../../Atoms/Link/Link';
import hideVisually from '../../../../theme/shared/hideVisually';

const NavLink = styled(Link)`
  border: 0;
  padding: 17px 20px;
  height: 46px;
  width: 100%;
  color: ${({ theme }) => theme.color('deep_violet')};
`;

/**
 * Navigation menu
 */
const Nav = styled.nav`
  display: ${({ isExpandable }) => (isExpandable ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    position: relative;
    top: 0;
    display: block;
    width: auto;
  }
  > h2 {
    visibility: ${hideVisually};
  }
`;

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
    align-items: center;
    background-color: ${({ theme }) => theme.color('white')};
  }
`;

/**
 * Menu list item
 */
const NavItem = styled.li`
  position: relative;
  padding: 0;
  :hover {
    background-color: ${({ theme }) => theme.color('teal_light')};
  }
  ul {
    display: none;
    span {
      border: 0;
    }
  }
  &[aria-expanded='true'] {
    ul {
      display: block;
      span {
        color: ${({ theme }) => theme.color('white')};
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 30px 0px;
    margin: 0 8px;
    a {
      padding: 7px 5px;
      height: auto;
    }
    :hover {
      background-color: transparent;
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color('black')};
        padding-bottom: 2px;
      }

      ul {
        display: flex;
        flex-direction: column;
        span {
          color: ${({ theme }) => theme.color('white')};
          border: 0;
        }
      }
    }
  }
`;

/**
 * Sub Navigation Menu
 */
const SubNavMenu = styled.ul`
  padding: 0;
  position: relative;
  list-style: none outside;
  left: 0;
  display: flex;
  top: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  background-color: ${({ theme }) => theme.color('violet_light')};
  @media ${({ theme }) => theme.breakpoint('medium')} {
    display: none;
    top: 93px;
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
 * Sub Menu list item
 */
const SubNavItem = styled.li`
  padding: 0;
  height: 100%;
  width: 100%;
  :first-child {
    a {
      padding: 26px 21px;
      height: auto;
      position: relative;
      ::after {
        position: absolute;
        width: 14px;
        border-bottom: 2px solid ${({ theme }) => theme.color('white')};
        left: 12px;
        top: auto;
        bottom: 10px;
        margin: 0 10px;
        content: '';
      }
    }
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    :first-child {
      :hover {
        background-color: ${({ theme }) => theme.color('violet_light')};
      }
      a {
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
    }
  }
  a {
    padding: 14px 21px;
  }
  :hover {
    background-color: ${({ theme }) => theme.color('violet_light')};
    span {
      border-bottom: 0;
      padding-bottom: 2px;
    }
  }
`;

export { NavLink, Nav, NavMenu, NavItem, SubNavMenu, SubNavItem };
