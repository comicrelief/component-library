import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { sizes } from '../../../../theme/shared/breakpoint';

import {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink,
  SubNavLinkUnderline
} from './Nav.style';

const MainNav = ({ navItems }) => {
  const { menuGroup } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});

  const [isMobile, setIsMobile] = useState(false);

  const width = typeof window !== 'undefined' ? window.innerWidth : null;

  useEffect(() => {
    // Detect window screen size
    setIsMobile(width < sizes.medium);
  }, [width]);

  const toggleBurgerMenu = event => {
    event.preventDefault();
    setIsExpandable(!isExpandable);
  };

  const toggleSubMenu = item => event => {
    if (isMobile) {
      event.preventDefault();
      setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
    }
  };

  // Handle tab key on menu nav
  const keyPressed = item => () => {
    window.onkeyup = e => {
      if (
        e.target.querySelector('span') &&
        e.target.querySelector('span').innerText === item
      ) {
        setIsKeyPressed({ [item]: !isKeyPressed[item] });
      } else if (!e.target.querySelector('span')) {
        setIsKeyPressed({});
      }
    };
  };

  useEffect(() => {
    window.addEventListener('onkeyup', setIsKeyPressed);
    return () => {
      window.removeEventListener('onkeyup', setIsKeyPressed);
    };
  }, []);

  return (
    <>
      <Nav
        aria-labelledby="main-menu"
        isExpandable={isExpandable}
        role="navigation"
      >
        <Text id="main-menu" tag="h2">
          Main navigation
        </Text>

        {/* First level of the navigation (ul tag): Parent */}
        <NavMenu role="menubar">
          {menuGroup.map((group, index) => (
            <NavItem
              role="none"
              key={group.id}
              index={index}
              isSubMenuOpen={!!isSubMenuOpen[group.id]}
            >
              {!isMobile ? (
                <NavLink
                  href={group.url}
                  inline
                  aria-haspopup="true"
                  onClick={toggleSubMenu(group.id)}
                  onKeyUp={keyPressed(group.title)}
                >
                  <Text>{group.title}</Text>
                </NavLink>
              ) : (
                <NavLink
                  href={group.url}
                  inline
                  aria-expanded={!!isSubMenuOpen[group.id]}
                  aria-haspopup="true"
                  onClick={toggleSubMenu(group.id)}
                  onKeyUp={keyPressed(group.title)}
                >
                  <Text>{group.title}</Text>
                </NavLink>
              )}
              {/* Second level of the navigation (ul tag): Child(ren) */}
              {group.links && group.links.length > 0 && (
                <SubNavMenu
                  role="menu"
                  aria-label={group.title}
                  isKeyPressed={!!isKeyPressed[group.title]}
                  isSubMenuOpen={!!isSubMenuOpen[group.id]}
                >
                  <SubNavItem role="none">
                    {/* This is the previous li item from the parent */}
                    <SubNavLinkUnderline
                      href={group.url}
                      inline
                      role="menuitem"
                    >
                      <Text>{group.title}</Text>
                    </SubNavLinkUnderline>
                  </SubNavItem>
                  {group.links.map(child => (
                    <SubNavItem key={child.url}>
                      <SubNavLink href={child.url} inline role="menuitem">
                        <Text>{child.title}</Text>
                      </SubNavLink>
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
