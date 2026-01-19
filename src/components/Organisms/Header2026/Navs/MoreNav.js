import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';
import { ChevronWrapper } from './PrimaryNavItem.style';
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
  toggleSubMenu, navHelperNew, navHelperPrimary, getColumnLinks, allowListed, internalLinkHelper
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
          /* Generate an ID from the primary page name */
          const childID = child.primaryPageName.toLowerCase().replace(/\s+/g, '-');
          let thisUrl = navHelperPrimary(child);
          const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
          /* Get all column links for submenu */
          const columnLinks = getColumnLinks(child);
          const hasSubMenu = columnLinks.length > 0;
          const hasPopUp = hasSubMenu ? 'true' : null;
          thisUrl = internalLinkHelper(thisUrl);

          return (
            <MoreSubNavItem key={child.primaryPageName}>
              {/* Either the Direct link (for a one-link menu item)
                or a 'button' to show the submenu: */}
              <MoreNavNestedLink
                href={hasPopUp ? '#' : thisUrl}
                inline
                rel={relNoopener}
                aria-haspopup={hasPopUp}
                role={hasPopUp ? 'button' : 'link'}
                onClick={e => handleNestedLinkClick(e, childID, hasPopUp)}
                isSubMenuOpen={Boolean(openedSubMenu[childID])}
                aria-expanded={Boolean(openedSubMenu[childID])}
              >
                {child.primaryPageName}

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
                  isSubMenuOpen={Boolean(openedSubMenu[childID])}
                >
                  {columnLinks.map((subChild, subIndex) => {
                    let thisSubUrl = navHelperNew(subChild);
                    thisSubUrl = internalLinkHelper(thisSubUrl);

                    return (
                      // 'More Nav' sub item:
                      <MoreNavSubItem key={`${subChild.pageName}-${subIndex}`}>
                        <MoreSubNavLink
                          href={thisSubUrl}
                          inline
                          role="menuitem"
                          // Allows us to avoid using the 'display:none'
                          // approach so we can animate properly:
                          tabIndex={openedSubMenu[childID] ? '0' : '-1'}
                        >
                          <Text>
                            {subChild.pageName}
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

const headerPageGroupShape = PropTypes.shape({
  primaryPageName: PropTypes.string.isRequired,
  primaryPageUrlIfExternal: PropTypes.string,
  primaryPageSelector: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string
  }),
  column1PageLinks: PropTypes.array,
  column2PageLinks: PropTypes.array,
  column3PageLinks: PropTypes.array
});

MoreNav.propTypes = {
  processedItems: PropTypes.shape({
    moreNavGroups: PropTypes.arrayOf(headerPageGroupShape),
    standardGroups: PropTypes.arrayOf(headerPageGroupShape)
  }),
  // Non-required fields as this isn't always populated
  openedSubMenu: PropTypes.shape({}),
  toggleSubMenu: PropTypes.func.isRequired,
  navHelperNew: PropTypes.func.isRequired,
  navHelperPrimary: PropTypes.func.isRequired,
  getColumnLinks: PropTypes.func.isRequired,
  allowListed: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired
};

export default MoreNav;
