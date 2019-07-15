import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { sizes } from '../../../../theme/shared/breakpoint';

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
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function toggle() {
    setIsExpandable(!isExpandable);
  }

  function openSubMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  return (
    <>
      <Nav
        aria-labelledby="block-comicrelief-main-menu-menu"
        isExpandable={isExpandable}
      >
        <Text tag="h2">Main navigation</Text>
        <NavMenu>
          {menuGroup.map(group => (
            <NavItem key={group.id} aria-expanded="false" onClick={openSubMenu}>
              <NavLink
                href={group.url}
                inline
                aria-expanded="false"
                aria-haspopup="true"
                disabled
              >
                <Text>{group.title}</Text>
              </NavLink>
              <SubNavMenu isSubMenuOpen={isSubMenuOpen} aria-expanded="false">
                <SubNavItem>
                  <NavLink aria-expanded="true" href={group.url} inline>
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
      <MediaQuery maxWidth={sizes.medium}>
        <BurgerMenu toggle={toggle}>Open</BurgerMenu>
      </MediaQuery>
    </>
  );
};

MainMenu.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape)
};

MainMenu.defaultProps = {
  navItems: {}
};

export default MainMenu;
