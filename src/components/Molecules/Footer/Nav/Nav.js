import React, { useState } from 'react';
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
  const { menuGroups } = navItems;
  const [isExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

  // Ensure this has a default value so Webpack doesn't fall-over on build
  let isSmallBreakpoint = false;

  /**
   * Always stop the main 'parent' link from actually firing, but do the
   * collapsing for SM-MD breakpoints
   */
  const toggleSubMenu = item => event => {
    event.preventDefault();

    // Detect browser width size each function call in case screen has been resized since load
    isSmallBreakpoint = window.innerWidth < sizes.small;

    // Only run on SM, as we're only using the hide-show logic on SM
    if (isSmallBreakpoint) {
      setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
    }
  };

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
        {menuGroups.map((group, index) => (
          <NavItem
            role="none"
            key={group.id}
            index={index}
            isSubMenuOpen={!!isSubMenuOpen[group.id]}
          >
            {!isSmallBreakpoint ? (
              <NavLink
                href="#"
                inline
                aria-haspopup="true"
                role="button"
                onClick={toggleSubMenu(group.id)}
              >
                <Text>{group.title}</Text>
              </NavLink>
            ) : (
              <NavLink
                href="#"
                inline
                aria-expanded={!!isSubMenuOpen[group.id]}
                aria-haspopup="true"
                role="button"
                onClick={toggleSubMenu(group.id)}
              >
                <Text>{group.title}</Text>
              </NavLink>
            )}
            {/* Second level of the navigation (ul tag): Child(ren) */}
            {group.links && group.links.length > 0 && (
              <SubNavMenu
                role="menu"
                aria-label={group.title}
                isSubMenuOpen={!!isSubMenuOpen[group.id]}
                column={group.links.length % 2 === 0 && group.links.length > 2}
              >
                {group.links.map(child => {
                  let thisUrl;
                  /* Determine where to grab the URL, depending on the component type and values supplied */
                  if (child.internal.type === 'ContentfulComponentLink') {
                    thisUrl =
                      child.reference && child.reference.path
                        ? child.reference.path
                        : child.url;
                  } else {
                    thisUrl = child.path;
                  }

                  return (
                    <SubNavItem
                      key={thisUrl}
                      column={
                        group.links.length % 2 === 0 && group.links.length > 2
                      }
                    >
                      <SubNavLink href={thisUrl} inline role="menuitem">
                        <Text>{child.title}</Text>
                      </SubNavLink>
                    </SubNavItem>
                  );
                })}
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
