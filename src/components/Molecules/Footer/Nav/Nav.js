import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import { sizes } from '../../../../theme/shared/breakpoint';

import {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink
} from './Nav.style';

const FooterNav = ({ navItems }) => {
  const { menuGroup } = navItems;
  const [isExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});

  // Detect window screen size
  const isSmallBreakpoint = window.innerWidth < sizes.small;

  /**
   * Always stop the main 'parent' link from actual functioning, but do the
   * collapsing for SM-MD breakpoints
   */
  const toggleSubMenu = item => event => {
    event.preventDefault();

    // Only run on SM, as we're only using the hide-show logic on SM
    if (isSmallBreakpoint) {
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
    <Nav
      aria-labelledby="main-menu"
      isExpandable={isExpandable}
      role="navigation"
    >
      <Text id="footer-menu" tag="h2">
        Footer navigation
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
            {!isSmallBreakpoint ? (
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
  );
};

FooterNav.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape)
};

FooterNav.defaultProps = {
  navItems: {}
};

export default FooterNav;
