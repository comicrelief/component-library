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
import NavHelper from '../../../../utils/navHelper';

const MainNav = ({ navItems }) => {
  const { menuGroups } = navItems;
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
          {menuGroups.map((group, index) => {
            /* Grab the first links properties to use for our parent/button */
            const thisFirstChild = group.links[0];

            /* Determine which field represents our url path */
            const thisUrl = NavHelper(thisFirstChild);

            return (
              <NavItem
                role="none"
                key={group.id}
                index={index}
                isSubMenuOpen={!!isSubMenuOpen[group.id]}
              >
                {!isMobile ? (
                  <NavLink
                    href={thisUrl}
                    inline
                    aria-haspopup="true"
                    onClick={toggleSubMenu(group.id)}
                    onKeyUp={keyPressed(group.title)}
                  >
                    <Text>{thisFirstChild.title}</Text>
                  </NavLink>
                ) : (
                  <NavLink
                    href="#"
                    inline
                    aria-expanded={!!isSubMenuOpen[group.id]}
                    aria-haspopup="true"
                    onClick={toggleSubMenu(group.id)}
                    onKeyUp={keyPressed(group.title)}
                    role="button"
                  >
                    <Text>{thisFirstChild.title}</Text>
                  </NavLink>
                )}
                {/* Second level of the navigation (ul tag): Child(ren) */}
                {group.links && group.links.length > 0 && (
                  <SubNavMenu
                    role="list"
                    isKeyPressed={!!isKeyPressed[group.title]}
                    isSubMenuOpen={!!isSubMenuOpen[group.id]}
                  >
                    {group.links.map((child, childIndex) => {
                      const thisSubUrl = NavHelper(child);

                      /* Wrap our first child item with special tags */
                      if (childIndex === 0) {
                        return (
                          <SubNavItem role="none" key={thisSubUrl}>
                            <SubNavLinkUnderline
                              href={thisSubUrl}
                              inline
                              role="menuitem"
                            >
                              <Text>{child.title}</Text>
                            </SubNavLinkUnderline>
                          </SubNavItem>
                        );
                      }
                      return (
                        <SubNavItem key={thisSubUrl}>
                          <SubNavLink href={thisSubUrl} inline role="menuitem">
                            <Text>{child.title}</Text>
                          </SubNavLink>
                        </SubNavItem>
                      );
                    })}
                  </SubNavMenu>
                )}
              </NavItem>
            );
          })}
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
