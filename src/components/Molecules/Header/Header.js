import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import { BurgerIcon, BurgerMenu } from './BurgerMenu.style';
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

const Header = ({ navItems, metaIcons, ...rest }) => {
  const [toggleState, setToggleState] = useState(false);
  function toggle() {
    setToggleState(!toggleState);
  }
  const { menuGroup } = navItems;
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
        </Brand>
        <Nav aria-labelledby="block-comicrelief-main-menu-menu">
          <Text tag="h2">Main navigation</Text>
          <BurgerMenu>
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
          </BurgerMenu>
          <NavMenu>
            {menuGroup.map(group => (
              <NavItem key={group.id}>
                <NavLink
                  href={group.url}
                  inline
                  aria-expanded="false"
                  aria-haspopup="true"
                >
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
        <MetaIcons>{metaIcons}</MetaIcons>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired
};

Header.defaultProps = {
  navItems: {}
};

export default Header;
