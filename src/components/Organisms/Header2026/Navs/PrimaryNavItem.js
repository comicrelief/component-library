import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../Atoms/Text/Text';
import ChevronIcon from '../assets/chevron-icon.svg';
import prependBaseUrl from '../../../../utils/urlHelper';

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
  SecondaryNavItem,
  TertiaryNavMenu,
  TertiaryNavItem,
  TertiaryNavLink,
  NavCard,
  NavCardImage,
  NavCardContent,
  NavCardTitle,
  NavCardDescription,
  SecondaryMenuPrimaryLink,
  SecondaryMenuPrimaryLinkAnchor
} from './PrimaryNavItem.style';

// Helper to group tertiary links (pageLevel: false)
// so that they sit under their parent secondary links (pageLevel: true)
const groupTertiaryLinks = links => {
  if (!links) return {};
  const groups = {};
  let currentSecondaryId = null;

  links.forEach(link => {
    if (link.pageLevel) {
      currentSecondaryId = link.id;
      groups[currentSecondaryId] = [];
    } else if (currentSecondaryId) {
      groups[currentSecondaryId].push(link);
    }
  });

  return groups;
};

const PrimaryNavItem = (
  {
    thisID, relNoopener, hasSubMenu, index, openedSubMenu,
    isNotDesktop, hasPopUp, thisUrl, toggleSubMenu, group,
    navHelperNew, internalLinkHelper, devMode = false,
    onTertiaryMenuChange, isTertiaryOpenGlobal = false,
    isSubMenuOpenGlobal = false, ...rest
  }
) => {
  const [openTertiaryMenu, setOpenTertiaryMenu] = useState(null);

  const handleTertiaryToggle = (e, linkId) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpening = openTertiaryMenu !== linkId;
    setOpenTertiaryMenu(isOpening ? linkId : null);

    if (onTertiaryMenuChange) {
      onTertiaryMenuChange(isOpening, isOpening ? group.primaryPageName : null, () => {
        setOpenTertiaryMenu(null);
        onTertiaryMenuChange(false, null, null);
      });
    }
  };

  // Reset tertiary menu state when the secondary submenu closes
  useEffect(() => {
    if (!openedSubMenu[thisID]) {
      setOpenTertiaryMenu(null);
    }
  }, [openedSubMenu, thisID]);

  // Collect all column links into a single array for iteration
  const allColumnLinks = useMemo(() => [
    group.column1PageLinks,
    group.column2PageLinks,
    group.column3PageLinks
  ], [group.column1PageLinks, group.column2PageLinks, group.column3PageLinks]);

  // Group tertiary links for all columns (run once per data change)
  const tertiaryGroups = useMemo(() => allColumnLinks.reduce(
    (acc, links) => ({ ...acc, ...groupTertiaryLinks(links) }), {}
  ), [allColumnLinks]);

  // All links flattened (run once per data change)
  const allLinks = useMemo(
    () => allColumnLinks.flatMap(links => links || []),
    [allColumnLinks]
  );

  // Check if a secondary link has tertiary children
  const hasTertiaryChildren = linkId => tertiaryGroups[linkId]?.length > 0;

  // Get the currently active tertiary menu data
  const activeTertiaryLinks = tertiaryGroups[openTertiaryMenu] || [];

  // Find the parent link (pageLevel: true) for the currently open tertiary menu
  const activeParentLink = useMemo(
    () => (openTertiaryMenu ? allLinks.find(link => link.id === openTertiaryMenu) : null),
    [openTertiaryMenu, allLinks]
  );

  // Pre-process URLs for all links (run once per data change)
  const processedLinkUrls = useMemo(() => {
    const urls = {};
    allLinks.forEach(link => {
      urls[link.id] = internalLinkHelper(navHelperNew(link));
    });
    return urls;
  }, [allLinks, navHelperNew, internalLinkHelper]);

  // Helper to render a column's links
  const renderColumnLinks = (links, ColumnComponent) => {
    if (!links) return null;

    return links.map(child => {
      // On mobile, only show secondary links (pageLevel: true)
      // Tertiary links (pageLevel: false) will be shown in the third modal
      if (isNotDesktop && !child.pageLevel) {
        return null;
      }

      const linkId = child.id;
      const hasChildren = hasTertiaryChildren(linkId);

      return (
        <ColumnComponent key={child.id} $isSecondary={child.pageLevel}>
          {hasChildren && isNotDesktop ? (
            <SecondaryNavLinkWithChildren
              href="#"
              inline
              role="menuitem"
              onClick={e => handleTertiaryToggle(e, linkId)}
              $isSecondary={child.pageLevel}
            >
              <Text>{child.pageName}</Text>
              <SecondaryChevronWrapper>
                <img src={ChevronIcon} alt="chevron icon" />
              </SecondaryChevronWrapper>
            </SecondaryNavLinkWithChildren>
          ) : (
            <SecondaryNavLink href={prependBaseUrl(processedLinkUrls[linkId], devMode)} inline role="menuitem" $isSecondary={child.pageLevel}>
              <Text>{child.pageName}</Text>
            </SecondaryNavLink>
          )}
        </ColumnComponent>
      );
    });
  };

  // Determine what to render for the primary nav link
  const renderPrimaryLink = () => {
    // Mobile: Hide NavLink when secondary or tertiary menu is open
    if (isNotDesktop) {
      if (isTertiaryOpenGlobal || isSubMenuOpenGlobal) {
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
      index={index}
      isSubMenuOpen={!!openedSubMenu}
      isTertiaryOpen={isTertiaryOpenGlobal}
    >
      {renderPrimaryLink()}

      {/* Second level of the navigation (ul tag): Child(ren) */}
      {hasSubMenu && (
        <SecondaryNavMenu
          role="list"
          isSubMenuOpen={!!openedSubMenu[thisID]}
          isTertiaryOpen={isTertiaryOpenGlobal}
        >
          {/* Mobile: Show primary link at top of 2nd modal */}
          {isNotDesktop && (
            <SecondaryMenuPrimaryLink>
              <SecondaryMenuPrimaryLinkAnchor
                href={prependBaseUrl(thisUrl, devMode)}
                inline
                role="menuitem"
              >
                <Text>{group.primaryPageName}</Text>
              </SecondaryMenuPrimaryLinkAnchor>
            </SecondaryMenuPrimaryLink>
          )}

          {allColumnLinks.map((links, colIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <ColumnWrapper key={colIndex}>
              {/* Column 3: Cards if available (desktop only), otherwise links */}
              {colIndex === 2 && !isNotDesktop && group.column3PageCards?.length > 0 ? (
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
                renderColumnLinks(links, SecondaryNavItem)
              )}
            </ColumnWrapper>
          ))}
        </SecondaryNavMenu>
      )}

      {/* Third level modal - separate from secondary menu for independent visibility */}
      {hasSubMenu && isNotDesktop && (
        <TertiaryNavMenu isOpen={openTertiaryMenu !== null}>
          {/* Show parent link at the top */}
          {activeParentLink && (
            <TertiaryNavItem $isParent>
              <TertiaryNavLink href={prependBaseUrl(processedLinkUrls[activeParentLink.id], devMode)} inline role="menuitem" $isParent>
                <Text>{activeParentLink.pageName}</Text>
              </TertiaryNavLink>
            </TertiaryNavItem>
          )}
          {activeTertiaryLinks.map(tertiaryLink => (
            <TertiaryNavItem key={tertiaryLink.id}>
              <TertiaryNavLink href={prependBaseUrl(processedLinkUrls[tertiaryLink.id], devMode)} inline role="menuitem">
                <Text>{tertiaryLink.pageName}</Text>
              </TertiaryNavLink>
            </TertiaryNavItem>
          ))}
        </TertiaryNavMenu>
      )}
    </StyledNavItem>
  );
};

PrimaryNavItem.propTypes = {
  thisID: PropTypes.string.isRequired,
  index: PropTypes.number,
  hasSubMenu: PropTypes.bool,
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
  navHelperNew: PropTypes.func.isRequired,
  internalLinkHelper: PropTypes.func.isRequired,
  relNoopener: PropTypes.string,
  devMode: PropTypes.bool,
  onTertiaryMenuChange: PropTypes.func,
  isTertiaryOpenGlobal: PropTypes.bool,
  isSubMenuOpenGlobal: PropTypes.bool
};

export default PrimaryNavItem;
