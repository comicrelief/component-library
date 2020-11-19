import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { sizes } from '../../../../theme/shared/breakpoint';
import NavHelper from '../../../../utils/navHelper';
import InternalLinkHelper from '../../../../utils/internalLinkHelper';
import whiteListed from '../../../../utils/whiteListed';

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
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});

  const [isMobile, setIsMobile] = useState(false);

  const toggleBurgerMenu = event => {
    event.preventDefault();
    setIsExpandable(!isExpandable);
  };

  const toggleSubMenu = (e, item) => {
    // Check if navLink element has more than one subNav item
    e.preventDefault();
    setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
  };

  // Handle tab key on menu nav
  const keyPressed = item => () => {
    window.onkeyup = e => {
      if (
        e.target.querySelector('span')
        && e.target.querySelector('span').innerText === item
      ) {
        setIsKeyPressed({ [item]: !isKeyPressed[item] });
      } else if (!e.target.querySelector('span')) {
        setIsKeyPressed({});
      }
    };
  };

  useEffect(() => {
    const width = window.innerWidth;
    // Detect window screen size
    setIsMobile(width < sizes.nav);
    // Detect if it is a touch device
    window.addEventListener('onkeyup', setIsKeyPressed);
    return () => {
      window.removeEventListener('onkeyup', setIsKeyPressed);
    };
  }, []);
  return (
    <>
      <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation">
        <Text id="main-menu" tag="h2">
          Main navigation
        </Text>

        {/* First level of the navigation (ul tag): Parent */}
        <NavMenu role="menubar">
          {menuGroups.map((group, index) => {
            /* Grab the first links properties to use for our parent/button */
            const thisFirstChild = group.links[0];

            /* Determine which field represents our url path */
            let thisUrl = NavHelper(thisFirstChild);
            const relNoopener = !whiteListed(thisUrl) && 'noopener noreferrer';
            const hasSubMenu = group.links && group.links.length > 1;
            const hasPopUp = hasSubMenu ? 'true' : null;
            thisUrl = InternalLinkHelper(thisUrl);

            return (
              <NavItem
                role="none"
                key={group.id}
                index={index}
                isSubMenuOpen={!!isSubMenuOpen[group.id]}
              >
                {isMobile ? (
                  <NavLink
                    href={hasPopUp ? '#' : thisUrl}
                    inline
                    aria-expanded={!!isSubMenuOpen[group.id]}
                    aria-haspopup={hasPopUp}
                    onClick={hasPopUp ? e => toggleSubMenu(e, group.id) : null}
                    onKeyUp={keyPressed(group.title)}
                    role="button"
                  >
                    {thisFirstChild.title}
                  </NavLink>
                ) : (
                  <Text>
                    <NavLink
                      href={thisUrl}
                      inline
                      rel={relNoopener}
                      aria-haspopup={hasPopUp}
                      onKeyUp={keyPressed(group.title)}
                    >
                      {thisFirstChild.title}
                    </NavLink>
                  </Text>
                )}
                {/* Second level of the navigation (ul tag): Child(ren) */}
                {hasSubMenu && (
                  <SubNavMenu
                    role="list"
                    isKeyPressed={!!isKeyPressed[group.title]}
                    isSubMenuOpen={!!isSubMenuOpen[group.id]}
                  >
                    {group.links.map((child, childIndex) => {
                      let thisSubUrl = NavHelper(child);

                      thisSubUrl = InternalLinkHelper(thisSubUrl);

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
