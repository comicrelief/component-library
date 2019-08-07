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
  const { menuGroup } = navItems;
  const [isExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

  // Detect window screen size
  const isSmallBreakpoint = window.innerWidth < sizes.small;

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
                className={`cols--${
                  group.links.length % 2 === 0 && group.links.length > 2
                    ? '2'
                    : '1'
                }`}
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
