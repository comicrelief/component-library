import React, { useState } from 'react';
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
  SecondaryNavLinkWithChildren,
  SecondaryChevronWrapper,
  ChevronWrapper,
  StyledText,
  ColumnWrapper,
  Column1NavItem,
  Column2NavItem,
  Column3NavItem,
  TertiaryNavMenu,
  TertiaryNavItem,
  TertiaryNavLink,
  NavCard,
  NavCardImage,
  NavCardContent,
  NavCardTitle,
  NavCardDescription
} from './PrimaryNavItem.style';

const PrimaryNavItem = (
  {
    thisID, relNoopener, hasSubMenu, index, openedSubMenu,
    isNotDesktop, hasPopUp, thisUrl, toggleSubMenu, group,
    columnLinks, navHelperNew, internalLinkHelper, devMode = false,
    onTertiaryMenuChange, isTertiaryOpenGlobal = false, ...rest
  }
) => {
  const [openTertiaryMenu, setOpenTertiaryMenu] = useState(null);

  const handleTertiaryToggle = (e, linkId, parentName) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpening = openTertiaryMenu !== linkId;
    setOpenTertiaryMenu(isOpening ? linkId : null);

    if (onTertiaryMenuChange) {
      onTertiaryMenuChange(isOpening, isOpening ? parentName : null, () => {
        // Close function: reset local state AND notify parent that tertiary is closed
        setOpenTertiaryMenu(null);
        if (onTertiaryMenuChange) {
          onTertiaryMenuChange(false, null, null);
        }
      });
    }
  };

  // Helper to group tertiary links (pageLevel: false)
  // so that they sit under their parent secondary links (pageLevel: true)
  const groupTertiaryLinks = links => {
    if (!links) return {};
    const groups = {};
    let currentSecondaryId = null;

    links.forEach(link => {
      if (link.pageLevel) {
        // This is a secondary link - start a new group
        currentSecondaryId = link.id;
        groups[currentSecondaryId] = [];
      } else if (currentSecondaryId) {
        // This is a tertiary link - add to current group
        groups[currentSecondaryId].push(link);
      }
    });

    return groups;
  };

  // Group tertiary links for all columns
  const tertiaryGroups = {
    ...groupTertiaryLinks(group.column1PageLinks),
    ...groupTertiaryLinks(group.column2PageLinks),
    ...groupTertiaryLinks(group.column3PageLinks)
  };

  // Check if a secondary link has tertiary children
  const hasTertiaryChildren = linkId => tertiaryGroups[linkId]?.length > 0;

  // Get the currently active tertiary menu data
  const activeTertiaryLinks = tertiaryGroups[openTertiaryMenu] || [];

  // Helper to render a column's links
  const renderColumnLinks = (links, ColumnComponent) => {
    if (!links) return null;

    return links.map(child => {
      // On mobile, only show secondary links (pageLevel: true)
      // Tertiary links (pageLevel: false) will be shown in the third modal
      if (isNotDesktop && !child.pageLevel) {
        return null;
      }

      let thisSubUrl = navHelperNew(child);
      thisSubUrl = internalLinkHelper(thisSubUrl);
      const linkId = child.id;
      const hasChildren = hasTertiaryChildren(linkId);

      return (
        <ColumnComponent key={child.id} $isSecondary={child.pageLevel}>
          {hasChildren && isNotDesktop ? (
            <SecondaryNavLinkWithChildren
              href="#"
              inline
              role="menuitem"
              onClick={e => handleTertiaryToggle(e, linkId, child.pageName)}
              $isSecondary={child.pageLevel}
            >
              <Text>{child.pageName}</Text>
              <SecondaryChevronWrapper>
                <img src={ChevronIcon} alt="chevron icon" />
              </SecondaryChevronWrapper>
            </SecondaryNavLinkWithChildren>
          ) : (
            <SecondaryNavLink href={prependBaseUrl(thisSubUrl, devMode)} inline role="menuitem" $isSecondary={child.pageLevel}>
              <Text>{child.pageName}</Text>
            </SecondaryNavLink>
          )}
        </ColumnComponent>
      );
    });
  };

  // Determine what to render for the primary nav link
  const renderPrimaryLink = () => {
    // Mobile: Show NavLink only when tertiary menu is not open
    if (isNotDesktop) {
      if (isTertiaryOpenGlobal) {
        return null;
      }
      return (
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
            <ChevronWrapper data-testid="ChevronWrapper">
              <img src={ChevronIcon} alt="chevron icon" />
            </ChevronWrapper>
          )}
        </NavLink>
      );
    }

    // Desktop: Always show StyledText with DesktopNavLink
    return (
      <StyledText data-testid="StyledText">
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
          {hasSubMenu && (
            <ChevronWrapper data-testid="ChevronWrapper">
              <img src={ChevronIcon} alt="chevron down icon" />
            </ChevronWrapper>
          )}
        </DesktopNavLink>
      </StyledText>
    );
  };

  return (
    <StyledNavItem
      data-testid="StyledNavItem"
      role="none"
      key={`${index}-${thisID}--item`}
      index={index}
      isSubMenuOpen={!!openedSubMenu}
      isTertiaryOpen={isTertiaryOpenGlobal}
    >
      {renderPrimaryLink()}

      {/* Second level of the navigation (ul tag): Child(ren) */}
      {/* Used for BOTH nav types */}
      {hasSubMenu && (
        <SecondaryNavMenu
          role="list"
          isSubMenuOpen={!!openedSubMenu[thisID]}
          isTertiaryOpen={isTertiaryOpenGlobal}
          key={`${index}-${thisID}--sub-item`}
        >
          {/* Column 1 Page Links - red border guide */}
          <ColumnWrapper>
            {renderColumnLinks(group.column1PageLinks, Column1NavItem)}
          </ColumnWrapper>

          {/* Column 2 Page Links - blue border guide */}
          <ColumnWrapper>
            {renderColumnLinks(group.column2PageLinks, Column2NavItem)}
          </ColumnWrapper>

          {/* Column 3 - Cards on desktop (if available), Links on mobile */}
          <ColumnWrapper>
            {/* Desktop: Show cards if available, otherwise show links */}
            {!isNotDesktop && group.column3PageCards?.length > 0 ? (
              group.column3PageCards.map(card => (
                <NavCard
                  key={card.id}
                  href={prependBaseUrl(card.primaryPageUrlIfExternal || '', devMode)}
                >
                  {card.image?.url && (
                    <NavCardImage>
                      <img src={card.image.url} alt={card.image.title || card.pageName} />
                    </NavCardImage>
                  )}
                  <NavCardContent>
                    <NavCardTitle>{card.pageName}</NavCardTitle>
                    {card.pageDescription && (
                      <NavCardDescription>{card.pageDescription}</NavCardDescription>
                    )}
                  </NavCardContent>
                </NavCard>
              ))
            ) : (
              renderColumnLinks(group.column3PageLinks, Column3NavItem)
            )}
          </ColumnWrapper>
        </SecondaryNavMenu>
      )}

      {/* Third level modal - separate from secondary menu for independent visibility */}
      {hasSubMenu && isNotDesktop && (
        <TertiaryNavMenu isOpen={openTertiaryMenu !== null}>
          {activeTertiaryLinks.map(tertiaryLink => {
            let tertiaryUrl = navHelperNew(tertiaryLink);
            tertiaryUrl = internalLinkHelper(tertiaryUrl);

            return (
              <TertiaryNavItem key={tertiaryLink.id}>
                <TertiaryNavLink href={prependBaseUrl(tertiaryUrl, devMode)} inline role="menuitem">
                  <Text>{tertiaryLink.pageName}</Text>
                </TertiaryNavLink>
              </TertiaryNavItem>
            );
          })}
        </TertiaryNavMenu>
      )}
    </StyledNavItem>
  );
};

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
    ),
    column3PageCards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        pageName: PropTypes.string,
        pageDescription: PropTypes.string,
        primaryPageUrlIfExternal: PropTypes.string,
        image: PropTypes.shape({
          title: PropTypes.string,
          url: PropTypes.string,
          id: PropTypes.string
        })
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
  devMode: PropTypes.bool,
  onTertiaryMenuChange: PropTypes.func,
  isTertiaryOpenGlobal: PropTypes.bool
};

export default PrimaryNavItem;
