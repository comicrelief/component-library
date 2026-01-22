import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';
import ChevronIcon from '../assets/chevron-icon.svg';
import prependBaseUrl from '../utils/urlHelper';

import {
  StyledNavItem,
  NavLink,
  DesktopNavLink,
  SecondaryNavMenu,
  SecondaryNavItem,
  SecondaryNavLink,
  ChevronWrapper,
  StyledText
} from './PrimaryNavItem.style';

const PrimaryNavItem = (
  {
    thisID, relNoopener, hasSubMenu, index, openedSubMenu,
    isNotDesktop, hasPopUp, thisUrl, toggleSubMenu, group,
    columnLinks, navHelperNew, internalLinkHelper, devMode = false, ...rest
  }
) => (
  <StyledNavItem
    data-testid="StyledNavItem"
    role="none"
    key={`${index}-${thisID}--item`}
    index={index}
    isSubMenuOpen={!!openedSubMenu}
    style={{ border: '1px solid red' }}
  >
    {isNotDesktop ? (
      <NavLink
        data-testid="NavLink"
        href={hasPopUp ? '#' : prependBaseUrl(thisUrl, devMode)}
        inline
        rel={relNoopener}
        aria-expanded={!!openedSubMenu[thisID]}
        aria-haspopup={hasPopUp}
        onClick={hasPopUp ? e => toggleSubMenu(e, thisID) : null}
        role="button"
        key={`${index}-${thisID}--link`}
        isExpanded={!!openedSubMenu[thisID]}
      >
        {group.primaryPageName}
        {hasSubMenu && (
          <ChevronWrapper
            data-testid="ChevronWrapper"
          >
            <img src={ChevronIcon} alt="chevron icon" />
          </ChevronWrapper>
        )}
      </NavLink>
    ) : (
      <StyledText
        data-testid="StyledText"
      >
        <DesktopNavLink
          data-testid="DesktopNavLink"
          href={prependBaseUrl(thisUrl, devMode)}
          inline
          rel={relNoopener}
          aria-haspopup={hasPopUp}
          key={`${index}-${thisID}`}
          hasSubMenu={hasSubMenu}
          {...rest}
        >
          {group.primaryPageName}
          {hasSubMenu
              && (
                <ChevronWrapper
                  data-testid="ChevronWrapper"
                >
                  <img src={ChevronIcon} alt="chevron down icon" />
                </ChevronWrapper>
              )
            }
        </DesktopNavLink>
      </StyledText>
    )}

    {/* Second level of the navigation (ul tag): Child(ren) */}
    {/* Used for BOTH nav types */}
    {hasSubMenu && (
      <SecondaryNavMenu
        role="list"
        isSubMenuOpen={!!openedSubMenu[thisID]}
        key={`${index}-${thisID}--sub-item`}
      >
        {columnLinks.map(child => {
          let thisSubUrl = navHelperNew(child);
          thisSubUrl = internalLinkHelper(thisSubUrl);

          // Otherwise, render out as usual:
          return (
            <SecondaryNavItem key={child.id}>
              <SecondaryNavLink href={prependBaseUrl(thisSubUrl, devMode)} inline role="menuitem">
                <Text>{child.pageName}</Text>
              </SecondaryNavLink>
            </SecondaryNavItem>
          );
        })}
      </SecondaryNavMenu>
    )}
  </StyledNavItem>
);

PrimaryNavItem.propTypes = {
  thisID: PropTypes.string.isRequired,
  index: PropTypes.number,
  hasSubMenu: PropTypes.bool,
  // Non-required fields as this isn't always populated
  openedSubMenu: PropTypes.shape({}),
  toggleSubMenu: PropTypes.func.isRequired,
  hasPopUp: PropTypes.string,
  isNotDesktop: PropTypes.bool,
  thisUrl: PropTypes.string.isRequired,
  group: PropTypes.shape({
    primaryPageName: PropTypes.string.isRequired,
    primaryPageUrlIfExternal: PropTypes.string,
    primaryPageSelector: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string
    })
  }),
  columnLinks: PropTypes.arrayOf(
    PropTypes.shape({
      pageName: PropTypes.string.isRequired,
      pageUrlIfExternal: PropTypes.string,
      pageLevel: PropTypes.bool,
      pageSelector: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string
      })
    })
  ),
  navHelperNew: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired,
  relNoopener: PropTypes.string,
  devMode: PropTypes.bool
};

export default PrimaryNavItem;
