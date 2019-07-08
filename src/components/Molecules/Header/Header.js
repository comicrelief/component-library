import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import Link from '../../Atoms/Link/Link';

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
  padding: 0;
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
        border-bottom-color: #2c0230;
        top: -22px;
      }
      ::after {
        width: 14px;
        border-bottom: 2px solid #fff;
        left: 12px;
        top: auto;
        bottom: 10px;
        position: absolute;
        margin: 0 10px;
        content: '';
      }
    }
  }
  a {
    padding: 14px 21px;
  }
  :hover {
    background-color: #3e1c43;
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
  left: 10px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    z-index: 100;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    display: flex;
    background-color: ${({ theme }) => theme.color('white')};
  }
`;

const Header = ({ items, color, ...rest }) => {
  return (
    <HeaderWrapper items {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
        </Brand>
        <Nav>
          <NavMenu>
            {items.menuGroup.map(group => (
              <NavItem key={group.id}>
                <NavLink href={group.url} inline>
                  <Text>{group.title}</Text>
                </NavLink>
                <SubNavMenu>
                  <SubNavItem>
                    <NavLink href={group.url} inline>
                      <Text>{group.title}</Text>
                    </NavLink>
                  </SubNavItem>
                  {group.links.map(child => (
                    <SubNavItem key={child.url}>
                      <NavLink href={child.url} inline>
                        <Text>{child.title}</Text>
                      </NavLink>
                    </SubNavItem>
                  ))}
                </SubNavMenu>
              </NavItem>
            ))}
          </NavMenu>
        </Nav>
        <MetaIcons>
          <Link color={color} href="/donation">
            Donate
          </Link>
          <Link color={color} href="/donation">
            Donate
          </Link>
          <Link color={color} href="/donation">
            Donate
          </Link>
        </MetaIcons>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  items: PropTypes.objectOf(PropTypes.shape),
  color: PropTypes.string.isRequired
};

Header.defaultProps = {
  items: {}
};

export default Header;
