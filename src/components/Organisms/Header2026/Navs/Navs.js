import React, {
  useState, useEffect, useCallback, useMemo
} from 'react';
import PropTypes from 'prop-types';

import Link from '../../../Atoms/Link/Link';
import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import Icon from '../../../Atoms/SocialIcons/Icon/Icon';
import { breakpointValues2026 } from '../../../../theme/shared/breakpoints2026';
import {
  NavHelperNew, NavHelperPrimary, MoreNavPreProcessNew, getColumnLinks
} from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import allowListed from '../../../../utils/allowListed';
import PrimaryNavItem from './PrimaryNavItem';
import searchIcon from '../assets/search-icon.svg';
import prependBaseUrl from '../utils/urlHelper';

import {
  Navigation,
  PrimaryMenuWrapper,
  PrimaryMenu,
  DonateButtonMobileModalWrapper,
  SearchWrapperMobile,
  SearchLinkMobile,
  SearchIconWrapperMobile
} from './Navs.style';

const Navs = ({
  navItems = {},
  characterLimit,
  isExpandable,
  setIsExpandable,
  devMode = false,
  onSubMenuChange = () => {},
  onTertiaryMenuChange = () => {}
}) => {
  const { headerPageGroups } = navItems;
  const [openedSubMenu, setOpenedSubMenu] = useState({});
  const [isNotDesktop, setIsNotDesktop] = useState(false);
  const [processedItems, setProcessedItems] = useState(null);
  const [showMoreNav, setShowMoreNav] = useState(false);
  const [isTertiaryOpen, setIsTertiaryOpen] = useState(false);
  let theseGroups = null;

  // Check if any submenu is currently open
  const isSubMenuOpen = Object.values(openedSubMenu).some(v => v);

  // Close all submenus (used by back button in header)
  const closeSubMenus = useCallback(() => {
    setOpenedSubMenu({});
  }, []);

  // Handle tertiary menu changes from PrimaryNavItem
  const handleTertiaryMenuChange = useCallback((isOpen, parentName, closeFunction) => {
    setIsTertiaryOpen(isOpen);
    onTertiaryMenuChange(isOpen && isNotDesktop, parentName, closeFunction);
  }, [isNotDesktop, onTertiaryMenuChange]);

  // Notify parent when submenu state changes, passing close function
  useEffect(() => {
    onSubMenuChange(isSubMenuOpen && isNotDesktop, closeSubMenus);
  }, [isSubMenuOpen, isNotDesktop, onSubMenuChange, closeSubMenus]);

  const toggleBurgerMenu = e => {
    e.preventDefault();
    setIsExpandable(!isExpandable);

    // If we've just closed the nav, collapse any open submenus and reset tertiary state:
    if (isExpandable) {
      setOpenedSubMenu({});
      setIsTertiaryOpen(false);
      onTertiaryMenuChange(false, null, null);
    }
  };

  // Toggle the open/not-open value of the specific submenu passed
  const toggleSubMenu = (e, item) => {
    e.preventDefault();
    setOpenedSubMenu({ [item]: !openedSubMenu[item] });
  };

  // Called by eventHandler to reset the nav on a specific mouse interaction
  const resetMoreNavMouse = () => {
    // Remove active 'opened' state for any open More Nav submenus
    setOpenedSubMenu({});
    // And also remove the focus state so the 'focus-within' nav rules don't apply:
    document.activeElement.blur();
  };

  // Process the nav items on initial mount:
  useMemo(() => {
    if (!headerPageGroups) return;
    // Divide up nav items accordingly
    const theseItems = MoreNavPreProcessNew(headerPageGroups, characterLimit);
    setProcessedItems(theseItems);
  }, [headerPageGroups, characterLimit]);

  // Determine which nav we should use only once 'window' exists:
  useEffect(() => {
    const notDesktop = window.innerWidth < breakpointValues2026.L;
    setIsNotDesktop(notDesktop);

    // Use these flags to detemine if we render the More nav or not:
    setShowMoreNav(!notDesktop && processedItems.moreNavGroups.length);
  }, [processedItems]);

  // Attach eventListener on mount and after potential changes
  // to showMoreNav triggered by a window resize:
  useEffect(() => {
    if (processedItems && showMoreNav) {
      document.getElementById('more-nav-ul').addEventListener('mouseleave', resetMoreNavMouse);
    }
  }, [processedItems, showMoreNav]);

  // Custom function to let us update the nav dynamically:
  const screenResizeNav = useCallback(() => {
    // Grab the current width:
    const currentScreenWidth = typeof window !== 'undefined' ? window.innerWidth : null;

    // Compare to our breakpoint:
    const isCurrentlyNotDesktop = currentScreenWidth < breakpointValues2026.L;

    // Only if the screen size has *changed*, update the state:
    if (currentScreenWidth !== null && (isNotDesktop !== isCurrentlyNotDesktop)) {
      // listeners, BEFORE we update the flag that'd remove the elements from the DOM:
      if (isCurrentlyNotDesktop && processedItems.moreNavGroups.length) {
        document.getElementById('more-nav-ul').removeEventListener('mouseleave', resetMoreNavMouse);
      }

      // Update our desktop flag to prevent any further calls:
      setIsNotDesktop(isCurrentlyNotDesktop);

      // And since we've changed breakpoints, use these flags
      // to determine if we should render the More nav or not,
      setShowMoreNav(Boolean(!isCurrentlyNotDesktop && processedItems.moreNavGroups.length));
    }
  }, [isNotDesktop, processedItems]);

  // Hook into browser's own onresize event to call our custom wrapper function:
  useEffect(() => {
    if (typeof window !== 'undefined') window.onresize = screenResizeNav;
  }, [screenResizeNav]);

  // Once we've processed the items, assign according to breakpoint; sub-desktop 'Nav'
  // breakpoints use 'raw' unprocessed header page groups, Desktop ('Nav' breakpoint and up)
  // uses the divided-up versions:
  if (processedItems) theseGroups = isNotDesktop ? headerPageGroups : processedItems.standardGroups;

  return (
    <>
      <Navigation
        data-testid="Nav"
        aria-label="main-menu"
        isExpandable={isExpandable}
        role="navigation"
        id="main-nav"
      >
        {/* Unseen accessibility aid */}
        <Text id="main-menu" tag="h2">Main navigation</Text>

        <PrimaryMenuWrapper data-testid="PrimaryMenuWrapper">

          {/* Only render once we've processed the menu items: */}
          {processedItems && (
          // First level of the navigation (ul tag): Parent
          <PrimaryMenu
            data-testid="PrimaryMenu"
            role="menubar"
          >
            {theseGroups.map((group, index) => {
              /* Generate an ID from the primary page name */
              const thisID = group.primaryPageName.toLowerCase().replace(/\s+/g, '-');
              /* Determine which field represents our url path */
              let thisUrl = NavHelperPrimary(group);
              const relNoopener = (!allowListed(thisUrl) && 'noopener') || undefined;
              /* Get all column links for submenu */
              const columnLinks = getColumnLinks(group);
              const hasSubMenu = columnLinks.length > 0;
              const hasPopUp = hasSubMenu ? 'true' : null;
              thisUrl = InternalLinkHelper(thisUrl);

              // Renders the primary page as the parent; a button for the dropdown
              // on mobile, a clickable LINK on desktop but hover to reveal the submenu:
              return (
                // Secondary Menu is nested inside PrimaryNavItem
                <PrimaryNavItem
                  thisID={thisID}
                  key={group.id}
                  index={index}
                  hasSubMenu={hasSubMenu}
                  openedSubMenu={openedSubMenu}
                  toggleSubMenu={toggleSubMenu}
                  hasPopUp={hasPopUp}
                  isNotDesktop={isNotDesktop}
                  thisUrl={thisUrl}
                  group={group}
                  columnLinks={columnLinks}
                  navHelperNew={NavHelperNew}
                  internalLinkHelper={InternalLinkHelper}
                  relNoopener={relNoopener}
                  devMode={devMode}
                  onTertiaryMenuChange={handleTertiaryMenuChange}
                  isTertiaryOpenGlobal={isTertiaryOpen}
                  isSubMenuOpenGlobal={isSubMenuOpen}
                />
              );
            })}

            {/* Hide search on mobile when secondary or tertiary modals are open */}
            {!isSubMenuOpen && !isTertiaryOpen && (
              <SearchWrapperMobile>
                <SearchLinkMobile href={prependBaseUrl('/search', devMode)}>
                  Search
                  <SearchIconWrapperMobile data-testid="SearchIconWrapperMobile">
                    <Icon
                      icon={searchIcon}
                      title="Search"
                      target="self"
                      role="button"
                      href={prependBaseUrl('/search', devMode)}
                      brand="comicrelief"
                      tabIndex="0"
                      id="search"
                      isHeader
                    />
                  </SearchIconWrapperMobile>
                </SearchLinkMobile>
              </SearchWrapperMobile>
            )}

          </PrimaryMenu>
          )}
        </PrimaryMenuWrapper>

        {isExpandable && !isTertiaryOpen && (
          <DonateButtonMobileModalWrapper data-testid="donate-button--mobile">
            <Link
              color="red"
              type="button"
              href={prependBaseUrl('/donation', devMode)}
            >
              Donate
            </Link>
          </DonateButtonMobileModalWrapper>
        )}
      </Navigation>

      <BurgerMenu
        data-testid="BurgerMenu"
        toggle={toggleBurgerMenu}
        isExpandable={isExpandable}
      >
        Open
      </BurgerMenu>
    </>
  );
};

Navs.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  characterLimit: PropTypes.number,
  isExpandable: PropTypes.bool,
  setIsExpandable: PropTypes.func,
  devMode: PropTypes.bool,
  onSubMenuChange: PropTypes.func,
  onTertiaryMenuChange: PropTypes.func
};

export default Navs;
