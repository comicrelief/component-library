import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';

import {
  NavLink,
  Nav,
  NavMenu,
  NavItem,
  SubNavMenu,
  SubNavItem
} from './Nav.style';

const MainMenu = ({ navItems }) => {
  const { menuGroup } = navItems;
  return (
    <Nav aria-labelledby="block-comicrelief-main-menu-menu">
      <Text tag="h2">Main navigation</Text>
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
  );
};

MainMenu.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape)
};

MainMenu.defaultProps = {
  navItems: {}
};

export default MainMenu;
