import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import { sizes } from '../../../../theme/shared/breakpoint';
import NavHelper from '../../../../utils/navHelper';
import InternalLinkHelper from '../../../../utils/internalLinkHelper';

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
  const [isSmallBreakpoint, setIsSmallBreakpoint] = useState(false);

  // Detect window screen size
  const width = typeof window !== 'undefined' ? window.innerWidth : null;
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
    setIsSmallBreakpoint(width < sizes.small);
  }, [width]);

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
              <Text tag="h2" color="white">
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
              >
                <Text>{group.title}</Text>
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
