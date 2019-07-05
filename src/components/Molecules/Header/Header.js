import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import Text from '../../Atoms/Text/Text';
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

  @media ${({ theme }) => theme.breakpoint('small')} {
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
  padding: 30px 0px;
  margin: 0 8px;
`;

/**
 * Sub Navigation Menu
 */
const SubNavMenu = styled.ul`
  display: none;
  list-style: none outside;
  top: 90px;
  text-align: left;
  flex-direction: column;
`;

/**
 * Sub Menu list item
 */
const SubNavItem = styled.li`
  padding: 30px 0px;
  margin: 0 8px;
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
                  {group.title}
                </NavLink>
                <SubNavMenu>
                  {group.links.map(child => (
                    <SubNavItem key={child.class}>
                      <NavLink href={child.url} inline>
                        {child.title}
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
