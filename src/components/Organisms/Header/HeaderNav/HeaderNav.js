import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import { NavHelper, MoreNavPreProcess } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import allowListed from '../../../../utils/allowListed';
import menuGroupIcon from './Menu-Group-Icon.svg';
//

import {
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  SubNavMenu,
  SubNavItem,
  SubNavLink,
  ChevronWrapper,
  NavMetaIcons,
  DonateButtonWrapperBottom
} from './HeaderNav.style';

const HeaderNav = ({
  navItems = {}, metaIcons, donateButton = null, characterLimit = 60
}) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isTabFocussed, setIsTabFocussed] = useState({});
  const [isNotDesktop, setIsNotDesktop] = useState(null);
  const [processedItems, setProcessedItems] = useState(null);
  let theseGroups = null;

  const toggleBurgerMenu = event => {
    event.preventDefault();
    setIsExpandable(!isExpandable);
  };

  const toggleSubMenu = (e, item) => {
    e.preventDefault();
    setIsSubMenuOpen({ [item]: !isSubMenuOpen[item] });
  };

  // Handle tab key on menu nav
  const keyPressed = item => () => {
    window.onkeyup = e => {
      // Specifies the tab key:
      if (e.which === 9) {
        // If the currently tabbed-to element is our item, do something
        if (e.target.querySelector('span') && e.target.querySelector('span').innerText === item) {
          setIsTabFocussed({ [item]: !isTabFocussed[item] });
        } else if (!e.target.querySelector('span')) {
          setIsTabFocussed({});
        }
      }
    };
  };

  useEffect(() => {
    // Divide up our nav on initial mount:
    setProcessedItems(MoreNavPreProcess(menuGroups, characterLimit));

    // Set desktopFlag on
    setIsNotDesktop(window.innerWidth < breakpointValues.Nav);

    return () => {
      window.removeEventListener('onkeyup', setIsTabFocussed);
    };
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
  // breakpoints use 'raw' unprocessed menu groups, Desktop uses the divided up versions:
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
              // on mobile, a clickable LINK on desktop but hover to reveal the submenu
              return (
                <NavItem
                  role="none"
                  key={`${thisID}-item`}
                  index={index}
                  isSubMenuOpen={!!isSubMenuOpen[thisID]}
                >
                  {isNotDesktop ? (
                    <NavLink
                      href={hasPopUp ? '#' : thisUrl}
                      inline
                      rel={relNoopener}
                      aria-expanded={!!isSubMenuOpen[thisID]}
                      aria-haspopup={hasPopUp}
                      onClick={hasPopUp ? e => toggleSubMenu(e, thisID) : null}
                      onKeyUp={keyPressed(group.title)}
                      role="button"
                      key={`${thisID}-link`}
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
                        key={thisID}
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
                      isFocussed={!!isTabFocussed[group.title]}
                      isSubMenuOpen={!!isSubMenuOpen[thisID]}
                      key={thisID}
                    >
                      {group.links.map((child, childIndex) => {
                        let thisSubUrl = NavHelper(child);
                        thisSubUrl = InternalLinkHelper(thisSubUrl);

                        // Skip the very first child on desktop, since
                        // we've already made a 'button' version above:
                        if (childIndex === 0 && !isNotDesktop) return null;

                        // Otherwise, render out as usual:
                        return (
                          <SubNavItem key={thisSubUrl}>
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
            })}

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

HeaderNav.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired,
  characterLimit: PropTypes.number,
  // As this is rendered in both the Header AND the Nav, just passing
  // the same prop through to here:
  donateButton: PropTypes.node
};

export default HeaderNav;
