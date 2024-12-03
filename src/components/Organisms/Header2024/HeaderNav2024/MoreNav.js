import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';

import { ChevronWrapper } from './HeaderNav2024.style';

import menuGroupIcon from './Menu-Group-Icon.svg';

import {
  MoreNavLink,
  MoreSubNavMenu,
  MoreNavItem,
  MoreNestedSubNavMenu,
  MoreSubNavItem,
  MoreNavNestedLink,
  MoreSubNavLink
} from './MoreNav.style';

const MoreNav = ({
  isTabFocussed, processedItems, isSubMenuOpen, keyPressed,
  toggleSubMenu, navHelper, allowListed, internalLinkHelper
}) => (
  <MoreNavItem>
    {/* The 'More' nav button: */}
    <Text>
      <MoreNavLink
        href="#"
        inline
        // As this is purely used to hover-over, and never represents a
        // direct link to a page, we can nip any click event in the bud:
        onClick={e => { e.preventDefault(); }}
        role="button"
        aria-haspopup="true"
      >
        More
        <ChevronWrapper>
          <img src={menuGroupIcon} alt="Chevron icon" />
        </ChevronWrapper>
      </MoreNavLink>
    </Text>

    {/* The Ul to wrap each of the 'More Nav' menu groups */}
    <MoreSubNavMenu
      role="list"
      isFocussed={!!isTabFocussed.more}
      key="more-nav-ul"
    >

      {/* For each item in this menu group:  */}
      {processedItems.moreNavGroups.map(child => {
        /* Grab the first links properties to use for our parent/button */
        const thisFirstChild = child.links[0];
        let thisUrl = navHelper(thisFirstChild);
        const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
        const hasSubMenu = child.links && child.links.length > 1;
        const hasPopUp = hasSubMenu ? 'true' : null;
        thisUrl = internalLinkHelper(thisUrl);

        return (
          <MoreSubNavItem key={child.title}>
            {/* Either the Direct link (for a one-link menu item)
                or a 'button' to show the submenu: */}
            <MoreNavNestedLink
              href={hasPopUp ? '#' : thisUrl}
              inline
              rel={relNoopener}
              aria-haspopup={hasPopUp}
              role={hasPopUp ? 'button' : 'link'}
              onClick={hasPopUp ? e => toggleSubMenu(e, child.id) : null}
              isSubMenuOpen={!!isSubMenuOpen[child.id]}
              aria-expanded={!!isSubMenuOpen[child.id]}
              onKeyUp={keyPressed(child.id)}
            >
              {thisFirstChild.title}

              {hasSubMenu && (
                <ChevronWrapper>
                  <img src={menuGroupIcon} alt="Chevron icon" />
                </ChevronWrapper>
              )}

            </MoreNavNestedLink>

            <>
              {hasSubMenu && (
                <MoreNestedSubNavMenu
                  role="list"
                  isSubMenuOpen={!!isSubMenuOpen[child.id]}
                >
                  {child.links.map(subChild => {
                    const thisSubUrl = navHelper(subChild);
                    return (
                      // 'More Nav' sub item:
                      <MoreSubNavItem key={thisSubUrl}>
                        <MoreSubNavLink
                          href={thisSubUrl}
                          inline
                          role="menuitem"
                          // Allows us to avoid using the 'display:none'
                          // approach so we can animate properly:
                          tabIndex={isSubMenuOpen[child.id] ? '0' : '-1'}
                        >
                          <Text>
                            {subChild.title}
                          </Text>
                        </MoreSubNavLink>
                      </MoreSubNavItem>
                    );
                  })}
                </MoreNestedSubNavMenu>
              )}
            </>
          </MoreSubNavItem>
        );
      })}
    </MoreSubNavMenu>

  </MoreNavItem>
);

MoreNav.propTypes = {
  isTabFocussed: PropTypes.shape.isRequired,
  processedItems: PropTypes.shape.isRequired,
  isSubMenuOpen: PropTypes.shape.isRequired,
  keyPressed: PropTypes.func.isRequired,
  toggleSubMenu: PropTypes.func.isRequired,
  navHelper: PropTypes.func.isRequired,
  allowListed: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired
};

export default MoreNav;
