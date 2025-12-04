import React, {
  useState, useEffect, useCallback, useMemo
} from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
// import MoreNav from './MoreNav';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import { NavHelper, MoreNavPreProcess } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import allowListed from '../../../../utils/allowListed';
import NavItem from './NavItem';

import {
  Nav, NavMenu, NavMetaIcons, DonateButtonWrapperBottom
} from './NavLinks.style';

const NavLinks = ({
  navItems = {}, metaIcons, donateButton = null, characterLimit
}) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [openedSubMenu, setOpenedSubMenu] = useState({});
  const [isNotDesktop, setIsNotDesktop] = useState(false);
  const [processedItems, setProcessedItems] = useState(null);
  const [showMoreNav, setShowMoreNav] = useState(false);
  let theseGroups = null;

  const toggleBurgerMenu = e => {
    e.preventDefault();
    setIsExpandable(!isExpandable);

    // If we've just closed the nav, collapse any open submenus:
    if (isExpandable) {
      setOpenedSubMenu({});
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
    // Divide up nav items accordingly
    const theseItems = MoreNavPreProcess(menuGroups, characterLimit);
    setProcessedItems(theseItems);
  }, [menuGroups, characterLimit]);

  // Determine which nav we should use only once 'window' exists:
  useEffect(() => {
    const notDesktop = window.innerWidth < breakpointValues.Nav;
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
    const isCurrentlyNotDesktop = currentScreenWidth < breakpointValues.Nav;

    // Only if the screen size has *changed*, update the state:
    if (currentScreenWidth !== null && (isNotDesktop !== isCurrentlyNotDesktop)) {
      // If we've changed from desktop to not, remove any previously-attached MoreNav event
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
  // breakpoints use 'raw' unprocessed menu groups, Desktop ('Nav' breakpoint and up)
  // uses the divided-up versions:
  if (processedItems) theseGroups = isNotDesktop ? menuGroups : processedItems.standardGroups;

  return (
    <>
      <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation" id="main-nav">
        <Text id="main-menu" tag="h2">
          Main navigation
        </Text>

        {/* Only render once we've processed the menu items: */}
        {processedItems && (
          // First level of the navigation (ul tag): Parent
          <NavMenu role="menubar">
            {theseGroups.map((group, index) => {
              /* Grab the first links properties to use for our parent/button */
              const thisFirstChild = group.links[0];
              const thisID = group.id;
              /* Determine which field represents our url path */
              let thisUrl = NavHelper(thisFirstChild);
              const relNoopener = (!allowListed(thisUrl) && 'noopener') || undefined;
              const hasSubMenu = group.links && group.links.length > 1;
              const hasPopUp = hasSubMenu ? 'true' : null;
              thisUrl = InternalLinkHelper(thisUrl);

              // Renders the first menugroup item to act as the parent; a button for the dropdown
              // on mobile, a clickable LINK on desktop but hover to reveal the submenu:
              return (
                <NavItem
                  thisID={thisID}
                  key={`${thisID}--item`}
                  index={index}
                  hasSubMenu={hasSubMenu}
                  openedSubMenu={openedSubMenu}
                  toggleSubMenu={toggleSubMenu}
                  hasPopUp={hasPopUp}
                  isNotDesktop={isNotDesktop}
                  thisUrl={thisUrl}
                  group={group}
                  thisFirstChild={thisFirstChild}
                  navHelper={NavHelper}
                  internalLinkHelper={InternalLinkHelper}
                  relNoopener={relNoopener}
                />
              );
            })}

            {/* Only actually render 'More' nav stuff when we've got content */}
            {/* {showMoreNav ? ( */}
            {/*   <MoreNav */}
            {/*     processedItems={processedItems} */}
            {/*     openedSubMenu={openedSubMenu} */}
            {/*     toggleSubMenu={toggleSubMenu} */}
            {/*     navHelper={NavHelper} */}
            {/*     allowListed={allowListed} */}
            {/*     internalLinkHelper={InternalLinkHelper} */}
            {/*   /> */}
            {/* ) : null} */}

          </NavMenu>
        )}

        {/* These are only shown on the non-desktop view; the desktop nav renders
           these in the parent Header component to suit the design layout */}
        <NavMetaIcons isHeader data-testid="meta-icons--mobile">
          {metaIcons}
        </NavMetaIcons>
        <DonateButtonWrapperBottom data-testid="donate-button--mobile">
          {donateButton}
        </DonateButtonWrapperBottom>
      </Nav>
      <BurgerMenu toggle={toggleBurgerMenu} isExpandable={isExpandable}>
        Open
      </BurgerMenu>
    </>
  );
};

NavLinks.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired,
  characterLimit: PropTypes.number,
  // As this is rendered in both the Header AND the Nav, just passing
  // the same prop through to here:
  donateButton: PropTypes.node
};

export default NavLinks;
