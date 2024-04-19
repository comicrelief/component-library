/* eslint-disable dot-notation */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unreachable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Text from '../../../Atoms/Text/Text';
import BurgerMenu from '../Burger/BurgerMenu';
import { sizes } from '../../../../theme/shared/allBreakpoints';
import NavHelper from '../../../../utils/navHelper';
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
  // MoreNavItem
  // SubSubNavMenu,
  // SubSubNavMenuTitle,
} from './HeaderNav.style';

const characterLimit = 50;
let characterCount = 0;
const moreNavGroups = [];

const HeaderNav = ({ navItems, metaIcons, donateButton }) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});

  const [isMobile, setIsMobile] = useState(false);

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
    setIsMobile(width < sizes.Nav);
    window.addEventListener('onkeyup', setIsKeyPressed);

    return () => {
      window.removeEventListener('onkeyup', setIsKeyPressed);
    };
  }, []);

  // Reset for each complete render:
  let isMoreNav = false;

  return (
    <>
      <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation">
        <Text id="main-menu" tag="h2">
          Main navigation
        </Text>

        {/* First level of the navigation (ul tag): Parent */}
        <NavMenu role="menubar">

          {menuGroups.map((group, index) => {
            /* Grab the first links properties to use for our parent/button */
            const thisFirstChild = group.links[0];

            /* Determine which field represents our url path */
            let thisUrl = NavHelper(thisFirstChild);
            const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
            const hasSubMenu = group.links && group.links.length > 1;
            const hasPopUp = hasSubMenu ? 'true' : null;
            thisUrl = InternalLinkHelper(thisUrl);

            /* MORE NAV FUNCTIONALITY FOR DESKTOP ONLY */
            if (!isMobile) {
              // Keep track of how many characters our nav has in total:
              characterCount += thisFirstChild.title.length;

              // If over the limit, stop rendering from this item
              isMoreNav = characterCount > characterLimit;

              if (isMoreNav) {
                // Store these groups for later:
                moreNavGroups.push(group);
                return null;
              }
            }

            return (
              // HERE
              <NavItem
                role="none"
                key={group.id}
                index={index}
                isSubMenuOpen={!!isSubMenuOpen[group.id]}
              >

                {/* START OF Mobile/tablet nav */}
                {isMobile && (
                  <>
                    <NavLink
                      href={hasPopUp ? '#' : thisUrl}
                      inline
                      rel={relNoopener}
                      aria-expanded={!!isSubMenuOpen[group.id]}
                      aria-haspopup={hasPopUp}
                      onClick={hasPopUp ? e => toggleSubMenu(e, group.id) : null}
                      onKeyUp={keyPressed(group.title)}
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
                      <SubNavMenu
                        role="list"
                        isKeyPressed={!!isKeyPressed[group.title]}
                        isSubMenuOpen={!!isSubMenuOpen[group.id]}
                      >
                        {group.links.map((child, childIndex) => {
                          const thisSubUrl = NavHelper(child);

                          // Render our 'cloned' first item only on mobile nav:
                          if (childIndex === 0) {
                            <SubNavItem role="none" key={thisSubUrl}>
                              <SubNavLink
                                href={thisSubUrl}
                                inline
                                role="menuitem"
                              >
                                <Text>{child.title}</Text>
                              </SubNavLink>
                            </SubNavItem>;
                          }

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
                    </>
                  </>
                )}
                {/* END OF Mobile/tablet nav */}

                {/* START Desktop Nav */}
                {!isMobile && (
                  <>
                    <Text>
                      <NavLink
                        href={thisUrl}
                        inline
                        rel={relNoopener}
                        aria-haspopup={hasPopUp}
                        onKeyUp={keyPressed(group.title)}
                      >
                        {thisFirstChild.title}
                        {hasSubMenu
                            && (
                              <ChevronWrapper>
                                <img src={chevronDown} alt="Chevron icon" />
                              </ChevronWrapper>
                            )}
                      </NavLink>
                    </Text>

                    <>
                      {/* Second level of the navigation (ul tag): Child(ren) */}
                      {/* TODO: make this resuable as its repeated here from above */}
                      {hasSubMenu && (
                        <SubNavMenu
                          role="list"
                          isKeyPressed={!!isKeyPressed[group.title]}
                          isSubMenuOpen={!!isSubMenuOpen[group.id]}
                        >
                          {group.links.map((child, childIndex) => {
                            const thisSubUrl = NavHelper(child);

                            // Render our 'cloned' first item only on mobile nav:
                            if (childIndex === 0) {
                              return isMobile && (
                              <SubNavItem role="none" key={thisSubUrl}>
                                <SubNavLink
                                  href={thisSubUrl}
                                  inline
                                  role="menuitem"
                                >
                                  <Text>{child.title}</Text>
                                </SubNavLink>
                              </SubNavItem>
                              );
                            }

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
                    </>
                  </>
                )}

              </NavItem>
            );
          })}



          {/*
            *********************************
            *********************************
               MORE NAV RENDER STARTS HERE:
            *********************************
            *********************************
          */}

          {(isMoreNav && moreNavGroups.length > 0) && (
          // The 'More' nav li:
          <NavItem>
            {/* The 'More' nav button: */}
            <NavLink
              href="#"
              inline
              // As this is a hover-over dropdown (NEVER a direct link buttom)
              // , we don't need to do anything on this front?
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
              // DEBUG:
              // style={{ display: 'block' }}
            >

              {moreNavGroups.map(child => {
                /* Grab the first links properties to use for our parent/button */
                const thisFirstChild = child.links[0];
                console.log('child', child);
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

                          // Render our 'cloned' first item only on mobile nav:
                          if (subChildIndex === 0) {
                            <SubNavItem role="none" key={thisSubUrl}>
                              <SubNavLink
                                href={thisSubUrl}
                                inline
                                role="menuitem"
                              >
                                <Text>{child.title}</Text>
                              </SubNavLink>
                            </SubNavItem>;
                          }

                          // What is this? I'm so confused
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
                    </>
                  </li>
                );
              })}
            </SubNavMenu>

          </NavItem>
          )}


          {/*
            *********************************
            *********************************
               MORE NAV RENDER STARTS HERE:
            *********************************
            *********************************
          */}

          {(isMoreNav && moreNavGroups.length > 0) && (
          // The 'More' nav li:
          <NavItem>
            {/* The 'More' nav button: */}
            <NavLink
              href="#"
              inline
              // As this is a hover-over dropdown (NEVER a direct link buttom)
              // , we don't need to do anything on this front?
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

              {moreNavGroups.map(child => {
                /* Grab the first links properties to use for our parent/button */
                const thisFirstChild = child.links[0];
                console.log('child', child);
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

                          // Render our 'cloned' first item only on mobile nav:
                          if (subChildIndex === 0) {
                            <SubNavItem role="none" key={thisSubUrl}>
                              <SubNavLink
                                href={thisSubUrl}
                                inline
                                role="menuitem"
                              >
                                <Text>{child.title}</Text>
                              </SubNavLink>
                            </SubNavItem>;
                          }

                          // What is this? I'm so confused
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
                    </>
                  </li>
                );
              })}
            </SubNavMenu>

          </NavItem>
          )}



        </NavMenu>

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
