import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import {
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
} from './Header.style';

const Header = ({ navItems, color, children, ...rest }) => {
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
        </Brand>
        <Nav>
          <NavMenu>
            {navItems.menuGroup.map(group => (
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
        <MetaIcons>{children}</MetaIcons>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Header.defaultProps = {
  navItems: {}
};

export default Header;
