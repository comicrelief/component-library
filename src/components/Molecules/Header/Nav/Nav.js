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
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

  const toggleBurgerMenu = () => {
    setIsExpandable(!isExpandable);
  };

  const toggleSubMenu = item => event => {
    event.preventDefault();
    setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
  };
  return (
    <>
      <Nav
        aria-labelledby="block-comicrelief-main-menu-menu"
        isExpandable={isExpandable}
      >
        <Text tag="h2">Main navigation</Text>

        {/* First level of the navigation (ul tag): Parent */}
        <NavMenu>
          {menuGroup.map((group, index) => (
            <NavItem
              key={group.id}
              aria-expanded="false"
              isSubMenuOpen={isSubMenuOpen}
              target={group.id}
              index={index}
            >
              <NavLink
                href={group.url}
                inline
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleSubMenu(group.id)}
              >
                <Text>{group.title}</Text>
              </NavLink>

              {/* Second level of the navigation (ul tag): Child(ren) */}
              <SubNavMenu aria-expanded="false">
                <SubNavItem>
                  {/* This is the previous li item from the parent */}
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
        <BurgerMenu toggle={toggleBurgerMenu}>Open</BurgerMenu>
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
