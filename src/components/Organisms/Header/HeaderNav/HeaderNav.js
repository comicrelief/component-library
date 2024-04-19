/* eslint-disable no-unused-vars */
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
  DonateButtonWrapper,
  // MoreNavItem
  // SubSubNavMenu,
  // SubSubNavMenuTitle,
  SubNavLinkUnderline
} from './HeaderNav.style';

const characterLimit = 50;
let characterCount = 0;
const moreNavGroups = [];

const HeaderNav = ({ navItems, metaIcons, donateButton }) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});
  const [renderList, setRenderList] = useState({});

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
  // THIS DOESN'T WORK RIGHT
  let isMoreNav = false;
  // console.log('*** BLORP', isMoreNav);
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
            const thisID = group.id;

            /* Determine which field represents our url path */
            let thisUrl = NavHelper(thisFirstChild);
            const relNoopener = !allowListed(thisUrl) && 'noopener';
            const hasSubMenu = group.links && group.links.length > 1;
            const hasPopUp = hasSubMenu ? 'true' : null;
            thisUrl = InternalLinkHelper(thisUrl);
            const renderThisItem = true;

            /* MORE NAV FUNCTIONALITY FOR DESKTOP ONLY */
            if (!isMobile) {
              // Keep track of how many characters our nav has in total:
              characterCount += thisFirstChild.title.length;

              // If over the limit, stop rendering from this item
              isMoreNav = characterCount > characterLimit;

              if (isMoreNav && typeof renderList[thisID] === 'undefined') {
                console.log('Gonna add', thisID);
                // Update render flag for this item:
                setRenderList(prevState => ({
                  ...prevState,
                  [thisID]: true
                }));
              }
            }

            console.log(renderList);
            return (
              <>
                {renderThisItem && (
                <NavItem
                  role="none"
                  key={group.id}
                  index={index}
                  isSubMenuOpen={!!isSubMenuOpen[group.id]}
                >
                  {isMobile ? (
                    <NavLink
                      href={hasPopUp ? '#' : thisUrl}
                      inline
                      rel={relNoopener}
                      aria-expanded={!!isSubMenuOpen[group.id]}
                      aria-haspopup={hasPopUp}
                      onClick={hasPopUp ? e => toggleSubMenu(e, group.id) : null}
                      onKeyUp={keyPressed(group.title)}
                      role="button"
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
                  ) : (
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
                    isSubMenuOpen={!!isSubMenuOpen[group.id]}
                  >
                    {group.links.map((child, childIndex) => {
                      let thisSubUrl = NavHelper(child);

                      thisSubUrl = InternalLinkHelper(thisSubUrl);

                      /* Wrap our first child item with special tags */
                      if (childIndex === 0) {
                        return (
                          <SubNavItem role="none" key={thisSubUrl}>
                            <SubNavLinkUnderline
                              href={thisSubUrl}
                              inline
                              role="menuitem"
                            >
                              <Text>{child.title}</Text>
                            </SubNavLinkUnderline>
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
                </NavItem>
                )}

              </>

            );
          })}
        </NavMenu>
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
