/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';
import { NavHelper, preProcessItems } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import allowListed from '../../../../utils/allowListed';
import chevronDown from './chevron-down.svg';

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
  DonateButtonWrapperBottom,
  // More Nav stuff:
  MoreNavLink,
  MoreSubNavMenu,
  MoreNavItem,
  MoreNestedSubNavMenu,
  MoreSubNavItem,
  MoreNavNestedLink,
  MoreSubNavLink
} from './HeaderNav.style';

const HeaderNav = ({ navItems, metaIcons, donateButton }) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isTabFocussed, setIsTabFocussed] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  let theseGroups = null;

  const [processedItems, setProcessedItems] = useState(null);

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

  // Custom function to let us update the carousel config dynamically
  const screenResize = useCallback(() => {
    // WHY ISN'T THIS CORRECT??
    console.log('CURRENT isMobile', isMobile);
    // if (isMobile !== window.innerWidth < breakpointValues.Nav) {
    //   // console.log('resizey, isMobile', isMobile);
    //   setIsMobile(window.innerWidth < breakpointValues.Nav);
    // }
  }, [isMobile]);

  useEffect(() => {
    // Divide up our nav on initial mount:
    setProcessedItems(preProcessItems(menuGroups));
  
    setIsMobile(window.innerWidth < breakpointValues.Nav);

    // Hook into browser's own onresize event to call our custom wrapper function:
    if (typeof window !== 'undefined') {
      window.onresize = screenResize;
      window.addEventListener('onkeyup', setIsTabFocussed);
    }

    return () => {
      window.removeEventListener('onkeyup', setIsTabFocussed);
    };
  }, [menuGroups]);

  // Once we've processed the items, assign according to breakpoint:
  if (processedItems) theseGroups = isMobile ? menuGroups : processedItems.standardGroups;

  return (
    <>
      <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation">
        <Text id="main-menu" tag="h2">
          Main navigation
        </Text>

        {/* Only render once we've processed the menu items: */}
        { processedItems && (
        // First level of the navigation (ul tag): Parent
        <NavMenu role="menubar">
          {/*
            ****************************
            STANDARD RENDER STARTS HERE:
            ****************************
          */}
          { theseGroups.map((group, index) => {
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
                {isMobile ? (
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
                        <img src={chevronDown} alt="chevron down icon" />
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
                          <img src={chevronDown} alt="chevron down icon" />
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
                      if (childIndex === 0 && !isMobile) return null;

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

          {/*
            ****************************
            MORE NAV RENDER STARTS HERE:
            ****************************
          */}

          {/* Only actually render 'more nav' stuff when we've got content */}
          {(!isMobile && processedItems.moreNavGroups.length > 0) && (
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
                  <img src={chevronDown} alt="Chevron icon" />
                </ChevronWrapper>
              </MoreNavLink>
            </Text>

            {/* The Ul to wrap each of the 'More Nav' menu groups */}
            <MoreSubNavMenu
              role="list"
              isFocussed={!!isTabFocussed.more}
              key="more-nav-ul"
            >
              
              {/* For each item in this menu group:  */}
              {processedItems.moreNavGroups.map(child => {
                /* Grab the first links properties to use for our parent/button */
                const thisFirstChild = child.links[0];
                let thisUrl = NavHelper(thisFirstChild);
                const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
                const hasSubMenu = child.links && child.links.length > 1;
                const hasPopUp = hasSubMenu ? 'true' : null;
                thisUrl = InternalLinkHelper(thisUrl);

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
                      isSubMenuOpen={!!isSubMenuOpen[child.id]}
                      aria-expanded={!!isSubMenuOpen[child.id]}
                      onKeyUp={keyPressed(child.id)}
                    >
                      {thisFirstChild.title}
                      {hasSubMenu && (
                      <ChevronWrapper>
                        <img src={chevronDown} alt="Chevron icon" />
                      </ChevronWrapper>
                      )}
                    </MoreNavNestedLink>

                    <>
                      {hasSubMenu && (
                      <MoreNestedSubNavMenu
                        role="list"
                        isSubMenuOpen={!!isSubMenuOpen[child.id]}
                        // DO WE NEED THIS?
                        // isFoccused={!!isFoccused[group.title]}
                      >
                        {child.links.map(subChild => {
                          const thisSubUrl = NavHelper(subChild);
                          return (
                            // 'More Nav' sub item:
                            <MoreSubNavItem key={thisSubUrl}>
                              <MoreSubNavLink
                                href={thisSubUrl}
                                inline
                                role="menuitem"
                                // Allows us to avoid using the 'display:none'
                                // approach so we can animate properly:
                                tabIndex={isSubMenuOpen[child.id] ? '0' : '-1'}
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
          )}

        </NavMenu>
        )}

        {/* These are only shown on the non-desktop view; the desktop nav renders
           these in the parent Header component to suit the design layout */}
        <NavMetaIcons isHeader data-testid="meta-icons--mobile">
          {metaIcons}
        </NavMetaIcons>
        {/* TODO: handle 'hide donate btn' functionality? */}
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
  // As this is rendered in both the Header AND the Nav, just passing
  // the same prop through to here:
  donateButton: PropTypes.node
};

HeaderNav.defaultProps = {
  navItems: {},
  donateButton: null
};

export default HeaderNav;
