import React, { useState } from 'react';
import styled from 'styled-components';

import Link from '../../Atoms/Link/Link';
import Text from '../../Atoms/Text/Text';
import hideVisually from '../../../theme/shared/hideVisually';
import { BurgerIcon, BurgerMenu as Wrapper } from './BurgerMenu.style';

const HeaderWrapper = styled.header.attrs(() => ({
  role: 'Banner'
}))`
  position: relative;
  background-color: ${({ theme }) => theme.color('white')};
  padding: 0;
  height: 75px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 90px;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 15px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoint('large')} {
    justify-content: space-around;
  }
`;

/**
 * Brand wrapper
 */
const Brand = styled(Link).attrs(() => ({
  title: 'Home',
  rel: 'home'
}))`
  color: transparent;
  border: 0;
`;

/**
 * Brand wrapper
 */
const NavLink = styled(Link)`
  border: 0;
`;

/**
 * Navigation menu
 */
const Nav = styled.nav`
  display: block;
  position: absolute;
  @media ${({ theme }) => theme.breakpoint('large')} {
    position: relative;
  }
  right: 0;
  > h2 {
    visibility: ${hideVisually};
  }
`;

/**
 * Navigation Menu
 */
const NavMenu = styled.ul`
  position: relative;
  display: none;
  list-style: none outside;
  width: auto;
  height: auto;
  max-height: none;
  text-align: left;
  height: 75px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 90px;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
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
`;

/**
 * Sub Navigation Menu
 */
const SubNavMenu = styled.ul`
  display: none;
  list-style: none outside;
  top: 93px;
  left: 0;
  background-color: ${({ theme }) => theme.color('deep_violet')};
  position: absolute;
  left: 0;
  padding: 0 0 20px;
  width: 250px;
  height: auto;
  transition-property: max-height;
  transition-duration: 850ms;
  transition-timing-function: cubic-bezier(0.2, 1, 0.5, 1);
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

/**
 * Meta icons
 */
const MetaIcons = styled.div`
  float: left;
  position: relative;
  display: flex;
  margin-right: 40px;
  a {
    margin-left: ${({ theme }) => theme.fontSize('xxs')};
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    z-index: 100;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    display: flex;
    background-color: ${({ theme }) => theme.color('white')};
    margin-right: 0px;
  }
`;

const BurgerMenu = () => {
  const [toggleState, setToggleState] = useState(false);
  function toggle() {
    setToggleState(!toggleState);
  }
  return (
    <Wrapper>
      <NavLink
        href="#"
        role="button"
        aria-expanded={toggleState}
        aria-haspopup="true"
        aria-label="Open and close Navigation Menu, 24 items listed"
        inline
        onClick={toggle}
      >
        <BurgerIcon>
          <Text>Open and close nav menu</Text>
        </BurgerIcon>
        <span />
      </NavLink>
    </Wrapper>
  );
};

export {
  BurgerMenu,
  Brand,
  HeaderWrapper,
  InnerWrapper,
  NavLink,
  Nav,
  NavMenu,
  NavItem,
  SubNavMenu,
  SubNavItem,
  MetaIcons
};
