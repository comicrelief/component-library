import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';

import { ChevronWrapper } from './HeaderNav2025.style';

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
  focussedTab, processedItems, openedSubMenu, keyPressed,
  toggleSubMenu, navHelper, allowListed, internalLinkHelper
}) => {
  //
  console.log('MoreNAv focussedTab', focussedTab);
  return (
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
        isFocussed={Boolean(focussedTab.more)} // I have no idea what this is for
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
                isSubMenuOpen={Boolean(openedSubMenu[child.id])}
                aria-expanded={Boolean(openedSubMenu[child.id])}
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
                  isSubMenuOpen={Boolean(openedSubMenu[child.id])}
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
                          tabIndex={openedSubMenu[child.id] ? '0' : '-1'}
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
};

MoreNav.propTypes = {
  // Non-required fields as this isn't always populated
  focussedTab: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  }),
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
  keyPressed: PropTypes.func.isRequired,
  toggleSubMenu: PropTypes.func.isRequired,
  navHelper: PropTypes.func.isRequired,
  allowListed: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired
};

export default MoreNav;
