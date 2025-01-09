import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import MoreNav from './MoreNav';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import { NavHelper, MoreNavPreProcess } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import allowListed from '../../../../utils/allowListed';
import HeaderNavItem2025 from './HeaderNavItem2025';

import {
  Nav,
  NavMenu,
  NavMetaIcons,
  DonateButtonWrapperBottom
} from './HeaderNav2025.style';

const HeaderNav2025 = ({
  navItems = {}, metaIcons, donateButton = null, characterLimit = 50 // DEBUG, PUT BACK TO 60!
}) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [openedSubMenu, setOpenedSubMenu] = useState({});
  const [isNotDesktop, setIsNotDesktop] = useState(null);
  const [processedItems, setProcessedItems] = useState(null);
  let theseGroups = null;

  const toggleBurgerMenu = event => {
    event.preventDefault();
    setIsExpandable(!isExpandable);
  };

  const toggleSubMenu = (e, item) => {
    e.preventDefault();
    setOpenedSubMenu({ [item]: !openedSubMenu[item] });
  };

  useEffect(() => {
    // Divide up our nav on initial mount:
    setProcessedItems(MoreNavPreProcess(menuGroups, characterLimit));

    // And set our 'desktop' flag:
    setIsNotDesktop(window.innerWidth < breakpointValues.Nav);
  }, [menuGroups, characterLimit]);

  // Custom function to let us update the nav dynamically:
  const screenResizeNav = useCallback(() => {
    const screenSize = typeof window !== 'undefined' ? window.innerWidth : null;
    const isCurrentlyNotDesktop = window.innerWidth < breakpointValues.Nav;

    if (screenSize !== null && (isNotDesktop !== isCurrentlyNotDesktop)) {
      setIsNotDesktop(isCurrentlyNotDesktop);
    }
  }, [isNotDesktop]);

  useEffect(() => {
    // Hook into browser's own onresize event to call our custom wrapper function:
    if (typeof window !== 'undefined') window.onresize = screenResizeNav;
  }, [screenResizeNav]);

  // Once we've processed the items, assign according to breakpoint; sub desktop 'Nav'
  // breakpoints use 'raw' unprocessed menu groups, Desktop uses the divided-up versions:
  if (processedItems) theseGroups = isNotDesktop ? menuGroups : processedItems.standardGroups;

  return (
    <>
      <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation">
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
              const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
              const hasSubMenu = group.links && group.links.length > 1;
              const hasPopUp = hasSubMenu ? 'true' : null;
              thisUrl = InternalLinkHelper(thisUrl);

              // Renders the first menugroup item to act as the parent; a button for the dropdown
              // on mobile, a clickable LINK on desktop but hover to reveal the submenu:
              return (
                <HeaderNavItem2025
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
            {(!isNotDesktop && processedItems.moreNavGroups.length > 0) && (
              <MoreNav
                processedItems={processedItems}
                openedSubMenu={openedSubMenu}
                toggleSubMenu={toggleSubMenu}
                navHelper={NavHelper}
                allowListed={allowListed}
                internalLinkHelper={InternalLinkHelper}
              />
            )}

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

HeaderNav2025.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired,
  characterLimit: PropTypes.number,
  // As this is rendered in both the Header AND the Nav, just passing
  // the same prop through to here:
  donateButton: PropTypes.node
};

export default HeaderNav2025;
