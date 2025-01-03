import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';

import {
  NavItem, NavLink, SubNavMenu, SubNavItem, SubNavLink, ChevronWrapper
} from './HeaderNav2025.style';

import menuGroupIcon from './Menu-Group-Icon.svg';

const HeaderNavItem2025 = (
  {
    id, relNoopener, hasSubMenu, index, isSubMenuOpen,
    isNotDesktop, hasPopUp, thisUrl, toggleSubMenu, keyPressed, group,
    thisFirstChild, navHelper, isTabFocussed, internalLinkHelper
  }
) => {
  console.log('HeaderNavItem2025');

  return (
    <NavItem
      role="none"
      key={`${id}-item`}
      index={index}
      isSubMenuOpen={isSubMenuOpen}
    >
      {isNotDesktop ? (
        <NavLink
          href={hasPopUp ? '#' : thisUrl}
          inline
          rel={relNoopener}
          aria-expanded={!!isSubMenuOpen[id]}
          aria-haspopup={hasPopUp}
          onClick={hasPopUp ? e => toggleSubMenu(e, id) : null}
          onKeyUp={keyPressed(group.title)}
          role="button"
          key={`${id}-link`}
        >
          {thisFirstChild.title}
          {hasSubMenu && (
            <ChevronWrapper>
              <img src={menuGroupIcon} alt="chevron down icon" />
            </ChevronWrapper>
          )}
        </NavLink>
      ) : (
        <Text>
          <NavLink
            href={thisUrl}
            inline
            rel={relNoopener}
            aria-haspopup={hasPopUp}
            onKeyUp={keyPressed(group.title)}
            key={id}
          >
            {thisFirstChild.title}
            {hasSubMenu
              && (
                <ChevronWrapper>
                  <img src={menuGroupIcon} alt="chevron down icon" />
                </ChevronWrapper>
              )
            }
          </NavLink>
        </Text>
      )}

      {/* Second level of the navigation (ul tag): Child(ren) */}
      {/* Used for BOTH nav types */}
      {hasSubMenu && (
        <SubNavMenu
          role="list"
          isFocussed={!!isTabFocussed[group.title]}
          isSubMenuOpen={!!isSubMenuOpen[id]}
          key={id}
        >
          {group.links.map((child, childIndex) => {
            let thisSubUrl = navHelper(child);
            thisSubUrl = internalLinkHelper(thisSubUrl);

            // Skip the very first child on desktop, since
            // we've already made a 'button' version above:
            if (childIndex === 0 && !isNotDesktop) return null;

            // Otherwise, render out as usual:
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
};

HeaderNavItem2025.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number,
  hasSubMenu: PropTypes.bool,
  isSubMenuOpen: PropTypes.bool,
  relNoopener: PropTypes.bool,
  isNotDesktop: PropTypes.bool,
  isTabFocussed: PropTypes.bool,
  hasPopUp: PropTypes.string,
  thisUrl: PropTypes.string.isRequired,
  toggleSubMenu: PropTypes.func.isRequired,
  keyPressed: PropTypes.func.isRequired,
  navHelper: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired,
  // TO-DO: specify shapes
  group: PropTypes.shape.isRequired,
  thisFirstChild: PropTypes.shape.isRequired

};

export default HeaderNavItem2025;
