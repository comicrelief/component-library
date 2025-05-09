import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import { NavHelper } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';

import {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink
} from './Nav.style';

const FooterNav = ({ navItems = {}, ...rest }) => {
  const { menuGroups } = navItems;
  const [isExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isSmallBreakpoint, setIsSmallBreakpoint] = useState(false);

  // Detect window screen size when screen is resized
  const resize = () => {
    const screenSize = typeof window !== 'undefined' ? window.innerWidth : null;
    if (screenSize !== null) {
      setIsSmallBreakpoint(screenSize < parseFloat(breakpointValues.M));
    }
  };

  if (typeof window !== 'undefined') {
    window.onresize = resize;
  }
  /**
   * Always stop the main 'parent' link from actually firing, but do the
   * collapsing for SM-MD breakpoints
   */
  const toggleSubMenu = item => event => {
    event.preventDefault();
    // Only run on SM, as we're only using the hide-show logic on SM
    if (isSmallBreakpoint) {
      setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
    }
  };

  useEffect(() => {
    // Detect window screen size when page load
    const width = typeof window !== 'undefined' ? window.innerWidth : null;
    setIsSmallBreakpoint(width < parseFloat(breakpointValues.M));
  }, []);

  return (
    <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation">
      <Text id="footer-menu" tag="h2">
        Footer navigation
      </Text>

      {/* First level of the navigation (ul tag): Parent */}
      <NavMenu role="menubar">
        {menuGroups.map((group, index) => (
          <NavItem
            role="none"
            key={`${group.id}-${group.title}`}
            index={index}
            isSubMenuOpen={!!isSubMenuOpen[group.id]}
          >
            {!isSmallBreakpoint ? (
              <Text color="white" weight="bold">
                {group.title}
              </Text>
            ) : (
              <NavLink
                href="#"
                inline
                aria-expanded={!!isSubMenuOpen[group.id]}
                aria-haspopup="true"
                role="button"
                onClick={toggleSubMenu(group.id)}
                {...rest}
              >
                <Text color="white">{group.title}</Text>
              </NavLink>
            )}
            {/* Second level of the navigation (ul tag): Child(ren) */}
            {group.links && group.links.length > 0 && (
              <SubNavMenu
                role="list"
                aria-label={group.title}
                isSubMenuOpen={!!isSubMenuOpen[group.id]}
                column={group.links.length % 2 === 0 && group.links.length > 2}
              >
                {group.links.map(child => {
                  /* Determine which field represents our url path */
                  let thisUrl = NavHelper(child);

                  thisUrl = InternalLinkHelper(thisUrl);

                  return (
                    <SubNavItem
                      key={thisUrl}
                      column={
                        group.links.length % 2 === 0 && group.links.length > 2
                      }
                    >
                      <SubNavLink href={thisUrl} inline role="menuitem" {...rest}>
                        <Text color="white">{child.title}</Text>
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

export default FooterNav;
