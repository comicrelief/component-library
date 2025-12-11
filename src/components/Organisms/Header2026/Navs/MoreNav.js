import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';
import { ChevronWrapper } from './NavItem.style';
import ChevronIcon from '../assets/chevron-icon.svg';

import {
  MoreNavLabel,
  MoreSubNavMenu,
  MoreNavItem,
  MoreNestedSubNavMenu,
  MoreSubNavItem,
  MoreNavNestedLink,
  MoreSubNavLink,
  MoreNavSubItem
} from './MoreNav.style';

const MoreNav = ({
  processedItems, openedSubMenu,
  toggleSubMenu, navHelper, allowListed, internalLinkHelper
}) => {
  const handleNestedLinkClick = (e, childID, hasPopUp) => {
    if (hasPopUp) {
      // Toggle the state for this item:
      toggleSubMenu(e, childID);
    }
  };

  return (
    <MoreNavItem id="more-nav">
      {/* The 'More' nav label text, since it doesn't actually function as a button: */}
      <MoreNavLabel
        // Used to target focus/blur handlers
        id="more-nav-label"
        // Ensure we can tab to this normally non-foccusable element:
        tabIndex="0"
        // Shrug off any click-fire focus events to not mess with other events:
        onClick={e => e.target.blur()}
        aria-haspopup="true"
      >
        More
        <ChevronWrapper>
          <img src={ChevronIcon} alt="Chevron icon" />
        </ChevronWrapper>
      </MoreNavLabel>

      {/* The Ul to wrap each of the 'More Nav' menu groups */}
      <MoreSubNavMenu
        role="list"
        id="more-nav-ul"
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
                onClick={e => handleNestedLinkClick(e, child.id, hasPopUp)}
                isSubMenuOpen={Boolean(openedSubMenu[child.id])}
                aria-expanded={Boolean(openedSubMenu[child.id])}
              >
                {thisFirstChild.title}

                {hasSubMenu && (
                <ChevronWrapper>
                  <img src={ChevronIcon} alt="Chevron icon" />
                </ChevronWrapper>
                )}

              </MoreNavNestedLink>

              <>
                {hasSubMenu && (
                <MoreNestedSubNavMenu
                  role="list"
                  isSubMenuOpen={Boolean(openedSubMenu[child.id])}
                >
                  {child.links.map(subChild => {
                    let thisSubUrl = navHelper(subChild);
                    thisSubUrl = internalLinkHelper(thisSubUrl);

                    return (
                      // 'More Nav' sub item:
                      <MoreNavSubItem key={thisSubUrl}>
                        <MoreSubNavLink
                          href={thisSubUrl}
                          inline
                          role="menuitem"
                          // Allows us to avoid using the 'display:none'
                          // approach so we can animate properly:
                          tabIndex={openedSubMenu[child.id] ? '0' : '-1'}
                        >
                          <Text>
                            {subChild.title}
                          </Text>
                        </MoreSubNavLink>
                      </MoreNavSubItem>
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
};

MoreNav.propTypes = {
  processedItems: PropTypes.shape({
    moreNavGroups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string
          })
        )
      })
    ),
    standardGroups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string
          })
        )
      })
    )
  }),
  // Non-required fields as this isn't always populated
  openedSubMenu: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  }),
  toggleSubMenu: PropTypes.func.isRequired,
  navHelper: PropTypes.func.isRequired,
  allowListed: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired
};

export default MoreNav;
