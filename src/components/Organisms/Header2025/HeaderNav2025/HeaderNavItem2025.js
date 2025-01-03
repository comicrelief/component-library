import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';

import {
  NavItem, NavLink, SubNavMenu, SubNavItem, SubNavLink, ChevronWrapper
} from './HeaderNav2025.style';

import menuGroupIcon from './Menu-Group-Icon.svg';

const HeaderNavItem2025 = (
  {
    thisID, relNoopener, hasSubMenu, index, openedSubMenu,
    isNotDesktop, hasPopUp, thisUrl, toggleSubMenu, keyPressed, group,
    thisFirstChild, navHelper, focussedTab, internalLinkHelper
  }
) => {
  console.log('HeaderNavItem2025 focussedTab', focussedTab);
  return (
    <NavItem
      role="none"
      key={`${index}-${thisID}--item`}
      index={index}
      isSubMenuOpen={Boolean(openedSubMenu)}
    >
      {isNotDesktop ? (
        <NavLink
          href={hasPopUp ? '#' : thisUrl}
          inline
          rel={relNoopener}
          aria-expanded={Boolean(openedSubMenu[thisID])}
          aria-haspopup={hasPopUp}
          onClick={hasPopUp ? e => toggleSubMenu(e, thisID) : null}
          onKeyUp={keyPressed(group.title)}
          role="button"
          key={`${index}-${thisID}--link`}
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
            key={`${index}-${thisID}`}
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
        isFocussed={Boolean(focussedTab[group.title])}
        isSubMenuOpen={Boolean(openedSubMenu[thisID])}
        key={`${index}-${thisID}--sub-item`}
      >
        {group.links.map((child, childIndex) => {
          let thisSubUrl = navHelper(child);
          thisSubUrl = internalLinkHelper(thisSubUrl);

          // Skip the very first child on desktop, since
          // we've already made a 'button' version above:
          if (childIndex === 0 && !isNotDesktop) return null;

          // Otherwise, render out as usual:
          return (
            <SubNavItem key={`${index}-${thisSubUrl}`}>
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
  thisID: PropTypes.string.isRequired,
  index: PropTypes.number,
  hasSubMenu: PropTypes.bool,
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
  keyPressed: PropTypes.func.isRequired,
  hasPopUp: PropTypes.string,
  isNotDesktop: PropTypes.bool,
  thisUrl: PropTypes.string.isRequired,
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string
      })
    )
  }),
  // Non-required fields as this isn't always populated
  thisFirstChild: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  }),
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
  navHelper: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired,
  relNoopener: PropTypes.bool

};

export default HeaderNavItem2025;
