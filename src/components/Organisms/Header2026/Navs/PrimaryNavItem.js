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
  SecondaryNavLink,
  ChevronWrapper,
  StyledText,
  Column1NavItem,
  Column2NavItem,
  Column3NavItem
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
        {/* Column 1 Page Links - red border guide */}
        {group.column1PageLinks && group.column1PageLinks.map(child => {
          let thisSubUrl = navHelperNew(child);
          thisSubUrl = internalLinkHelper(thisSubUrl);

          return (
            <Column1NavItem key={child.id}>
              <SecondaryNavLink href={prependBaseUrl(thisSubUrl, devMode)} inline role="menuitem">
                <Text>{child.pageName}</Text>
              </SecondaryNavLink>
            </Column1NavItem>
          );
        })}

        {/* Column 2 Page Links - blue border guide */}
        {group.column2PageLinks && group.column2PageLinks.map(child => {
          let thisSubUrl = navHelperNew(child);
          thisSubUrl = internalLinkHelper(thisSubUrl);

          return (
            <Column2NavItem key={child.id}>
              <SecondaryNavLink href={prependBaseUrl(thisSubUrl, devMode)} inline role="menuitem">
                <Text>{child.pageName}</Text>
              </SecondaryNavLink>
            </Column2NavItem>
          );
        })}

        {/* Column 3 Page Links - green border guide */}
        {group.column3PageLinks && group.column3PageLinks.map(child => {
          let thisSubUrl = navHelperNew(child);
          thisSubUrl = internalLinkHelper(thisSubUrl);

          return (
            <Column3NavItem key={child.id}>
              <SecondaryNavLink href={prependBaseUrl(thisSubUrl, devMode)} inline role="menuitem">
                <Text>{child.pageName}</Text>
              </SecondaryNavLink>
            </Column3NavItem>
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
    }),
    column1PageLinks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        pageName: PropTypes.string
      })
    ),
    column2PageLinks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        pageName: PropTypes.string
      })
    ),
    column3PageLinks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        pageName: PropTypes.string
      })
    )
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
