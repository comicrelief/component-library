import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { sizes } from '../../../../theme/shared/breakpoint';

import {
  Nav,
  NavMenu,
  NavItem,
  NavItemLink,
  SubNavMenu,
  SubNavItem,
  SubNavItemLink,
  SubNavItemLinkUnderline
} from './Nav.style';

const MainNav = ({ navItems }) => {
  const { menuGroup } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});

  const toggleBurgerMenu = event => {
    event.preventDefault();
    setIsExpandable(!isExpandable);
  };

  // Detect windown screen size
  const width = window.innerWidth;

  const toggleSubMenu = item => event => {
    if (width < sizes.medium) {
      event.preventDefault();
      setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
    }
  };

  const keyPressed = item => e => {
    if (e.target.querySelector('span').innerText === item) {
      setIsKeyPressed({ [item]: !isKeyPressed[item] });
    }
  };

  return (
    <>
      <Nav
        aria-label="block-comicrelief-main-menu-menu"
        isExpandable={isExpandable}
      >
        <Text tag="h2">Main navigation</Text>

        {/* First level of the navigation (ul tag): Parent */}
        <NavMenu role="menubar">
          {menuGroup.map((group, index) => (
            <NavItem
              role="none"
              key={group.id}
              index={index}
              isSubMenuOpen={!!isSubMenuOpen[group.id]}
            >
              <NavItemLink
                href={group.url}
                inline
                aria-expanded={!!isSubMenuOpen[group.id]}
                aria-haspopup="true"
                onClick={toggleSubMenu(group.id)}
                onKeyUp={keyPressed(group.title)}
                isKeyPressed={!!isKeyPressed[group.title]}
              >
                <Text>{group.title}</Text>
              </NavItemLink>

              {/* Second level of the navigation (ul tag): Child(ren) */}
              {group.links && group.links.length > 0 && (
                <SubNavMenu
                  role="menu"
                  aria-label={group.title}
                  // isKeyPressed={!!isKeyPressed[group.title]}
                  isSubMenuOpen={!!isSubMenuOpen[group.id]}
                >
                  <SubNavItem role="none">
                    {/* This is the previous li item from the parent */}
                    <SubNavItemLinkUnderline
                      href={group.url}
                      inline
                      role="menuitem"
                    >
                      <Text>{group.title}</Text>
                    </SubNavItemLinkUnderline>
                  </SubNavItem>
                  {group.links.map(child => (
                    <SubNavItem key={child.url}>
                      <SubNavItemLink href={child.url} inline>
                        <Text>{child.title}</Text>
                      </SubNavItemLink>
                    </SubNavItem>
                  ))}
                </SubNavMenu>
              )}
            </NavItem>
          ))}
        </NavMenu>
      </Nav>
      <BurgerMenu toggle={toggleBurgerMenu} isExpandable={isExpandable}>
        Open
      </BurgerMenu>
    </>
  );
};

MainNav.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape)
};

MainNav.defaultProps = {
  navItems: {}
};

export default MainNav;
