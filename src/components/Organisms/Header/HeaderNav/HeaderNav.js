/* eslint-disable no-multiple-empty-lines */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { sizes } from '../../../../theme/shared/allBreakpoints';
import { NavHelper, preProcessItems } from '../../../../utils/navHelper';
import { InternalLinkHelper } from '../../../../utils/internalLinkHelper';
import allowListed from '../../../../utils/allowListed';

// TO-DO: this needs to be replaced with the new asset
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
  DonateButtonWrapper
  // SubNavLinkUnderline
} from './HeaderNav.style';

const HeaderNav = ({ navItems, metaIcons, donateButton }) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});
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
      // If the currently tabbed-to element is our item, do something
      if (e.target.querySelector('span') && e.target.querySelector('span').innerText === item) {
        setIsKeyPressed({ [item]: !isKeyPressed[item] });
      } else if (!e.target.querySelector('span')) {
        setIsKeyPressed({});
      }
    };
  };

  useEffect(() => {
    const width = window.innerWidth;
    // TO-DO: this needs to be updated properly on resize!
    setIsMobile(width < sizes.Nav);
    window.addEventListener('onkeyup', setIsKeyPressed);

    // Divide up our nav:
    setProcessedItems(preProcessItems(menuGroups));

    return () => {
      window.removeEventListener('onkeyup', setIsKeyPressed);
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

        {/* Only render once we've processed the items: */}
        { processedItems && (
        // First level of the navigation (ul tag): Parent
        <NavMenu role="menubar">
          {/*
            *********************************
            STANDARD RENDER STARTS HERE:
            *********************************
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

            // Clones and renders out the first menugroup item to act as the parent:
            return (
              <NavItem
                role="none"
                key={thisID}
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
                    key={thisID}
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
                {hasSubMenu && (
                  <SubNavMenu
                    role="list"
                    isKeyPressed={!!isKeyPressed[group.title]}
                    isSubMenuOpen={!!isSubMenuOpen[thisID]}
                    key={thisID}
                  >
                    {group.links.map((child, childIndex) => {
                      let thisSubUrl = NavHelper(child);
                      thisSubUrl = InternalLinkHelper(thisSubUrl);
                      console.log('childIndex', childIndex);

                      // Skip the very first child as we've already made a 'button' version above:
                      if (childIndex === 0) return null;

                      // Otherwise, return each of the other children:
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
            *********************************
            MORE NAV RENDER STARTS HERE:
            *********************************
          */}

          {(processedItems.moreNavGroups.length > 0) && (
          // The 'More' nav li:
          <NavItem>
            {/* The 'More' nav button: */}
            <NavLink
              href="#"
              inline
              // As this is a hover-over dropdown (NEVER a direct link button),
              // we don't need to do anything on this front?
              // aria-expanded={!!isSubMenuOpen['More']}
              onClick={e => { e.preventDefault(); }}
              // onKeyUp={e => {
              //   e.preventDefault();
              //   console.log('ugh');
              // }}
              // ALWAYS gonna be true
              aria-haspopup="true"
              role="button"
            >
              More
              <ChevronWrapper>
                <img src={chevronDown} alt="Chevron icon" />
              </ChevronWrapper>
            </NavLink>

            {/* All of the 'More' items */}
            <SubNavMenu
              role="list"
              // isKeyPressed={!!isKeyPressed[group.title]}
              // DEBUG:
              isSubMenuOpen
            >

              {processedItems.moreNavGroups.map(child => {
                /* Grab the first links properties to use for our parent/button */
                const thisFirstChild = child.links[0];
                // const thisSubUrl = NavHelper(child);
                // console.log('*** moreNavGroups.map', child, childIndex);

                let thisUrl = NavHelper(thisFirstChild);
                const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
                const hasSubMenu = child.links && child.links.length > 1;
                const hasPopUp = hasSubMenu ? 'true' : null;
                thisUrl = InternalLinkHelper(thisUrl);

                // 'Schools & youth - menu group'
                // 'External Links (menu group)'
                return (
                  <li key={child.title}>
                    <NavLink
                      href={hasPopUp ? '#' : thisUrl}
                      inline
                      rel={relNoopener}
                      // aria-expanded={!!isSubMenuOpen[group.id]}
                      aria-haspopup={hasPopUp}
                      // onClick={hasPopUp ? e => toggleSubMenu(e, group.id) : null}
                      // onKeyUp={keyPressed(group.title)}
                      role={hasPopUp ? 'button' : 'link'}
                    >
                      {thisFirstChild.title}
                      {hasSubMenu && (
                      <ChevronWrapper>
                        <img src={chevronDown} alt="Chevron icon" />
                      </ChevronWrapper>
                      )}
                    </NavLink>
                    <>
                      {/* Second level of the navigation (ul tag): Child(ren) */}
                      {hasSubMenu && (
                      // This is a UL
                      <SubNavMenu
                        role="list"
                        // isKeyPressed={!!isKeyPressed[group.title]}
                        // isSubMenuOpen={!!isSubMenuOpen[group.id]}
                        style={{ display: 'block' }}
                      >
                        {child.links.map((subChild, subChildIndex) => {
                          const thisSubUrl = NavHelper(subChild);

                          // DROPDOWN BUTTON THING
                          if (subChildIndex === 0) {
                            <SubNavItem role="none" key={thisSubUrl}>
                              <SubNavLink
                                href={thisSubUrl}
                                inline
                                role="menuitem"
                                className="more-nav-li-button"
                              >
                                <Text>
                                  {child.title}
                                </Text>
                              </SubNavLink>
                            </SubNavItem>;
                          }

                          return (
                            // 'More Nav' sub item:
                            <SubNavItem key={thisSubUrl} className="MORENAV-SUBITEM">
                              <SubNavLink href={thisSubUrl} inline role="menuitem" className="MORENAV-SUBITEM-LINK">
                                <Text>
                                  {child.title}
                                </Text>
                              </SubNavLink>
                            </SubNavItem>
                          );
                        })}
                      </SubNavMenu>
                      )}
                    </>
                  </li>
                );
              })}
            </SubNavMenu>

          </NavItem>
          )}

        </NavMenu>
        )}

        <NavMetaIcons isHeader>{metaIcons}</NavMetaIcons>
        <DonateButtonWrapper>{donateButton}</DonateButtonWrapper>
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
