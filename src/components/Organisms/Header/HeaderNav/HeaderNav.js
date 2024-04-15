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
  // SubSubNavMenu,
  // SubSubNavMenuTitle,
  ChevronWrapper,
  NavMetaIcons,
  DonateButtonWrapper
} from './HeaderNav.style';

const characterLimit = 50;
let characterCount = 0;

const HeaderNav = ({ navItems, metaIcons, donateButton }) => {
  const { menuGroups } = navItems;
  const [isExpandable, setIsExpandable] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});
  const [isKeyPressed, setIsKeyPressed] = useState({});

  const [isMobile, setIsMobile] = useState(false);
  // const [isMoreNav, setIsMoreNav] = useState(null);

  // const [groupLimit, setGroupLimit] = useState(null);

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
        // I have no idea what this is supposed to do; it doesn't EVER get called?
        console.log('hello??');
        setIsKeyPressed({ [item]: !isKeyPressed[item] });
      } else if (!e.target.querySelector('span')) {
        // console.log('BBB: onkeyup listener -  ITEM reset');
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

  return (
    <>
      <Nav aria-label="main-menu" isExpandable={isExpandable} role="navigation">
        <Text id="main-menu" tag="h2">
          Main navigation
        </Text>

        {/* First level of the navigation (ul tag): Parent */}
        <NavMenu role="menubar">
          {menuGroups.map((group, index) => {
            let dontRender = false;
            /* Grab the first links properties to use for our parent/button */
            const thisFirstChild = group.links[0];

            /* Determine which field represents our url path */
            let thisUrl = NavHelper(thisFirstChild);
            const relNoopener = (!allowListed(thisUrl) && 'noopener') || null;
            const hasSubMenu = group.links && group.links.length > 1;
            const hasPopUp = hasSubMenu ? 'true' : null;
            thisUrl = InternalLinkHelper(thisUrl);

            /* MORE NAV functionality : */

            // Keep track of how many characters our nav has in total:
            characterCount += thisFirstChild.title.length;

            // If we've gone over our limit, stop rendering
            dontRender = characterCount > characterLimit;

            console.log('dontRender', dontRender);

            return (
              <NavItem
                role="none"
                key={group.id}
                index={index}
                isSubMenuOpen={!!isSubMenuOpen[group.id]}
              >

                {/* Mobile/tablet nav */}
                {isMobile && (
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
                  {hasSubMenu && (
                    <ChevronWrapper>
                      <img src={chevronDown} alt="Chevron icon" />
                    </ChevronWrapper>
                  )}
                </NavLink>
                )}

                {/* {!dontRender && (
                  <p>please do render</p>
                )} */}

                {/* Desktop Nav */}
                {(!isMobile && !dontRender) && (

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
                      const thisSubUrl = NavHelper(child);

                      // Only render our 'cloned' first item for the mobile nav:
                      if (childIndex === 0) {
                        return isMobile ? (
                          <SubNavItem role="none" key={thisSubUrl}>
                            <SubNavLink
                              href={thisSubUrl}
                              inline
                              role="menuitem"
                            >
                              <Text>{child.title}</Text>
                            </SubNavLink>
                          </SubNavItem>
                        ) : null;
                      }

                      // If this child object has a 'links' property, it's a *nested* menu group,
                      // so handle this accordingly and iterate over it's own content:
                      // if (child.links) {
                      //   console.log('child', child);
                      //   return (
                      //     <SubSubNavMenu>
                      //       {/* The title of the whole subSUBmenu: */}
                      //       <SubSubNavMenuTitle>
                      //         {child.title}
                      //       </SubSubNavMenuTitle>

                      //       {/* Iterate over each of the subSUBmenu items: */}
                      //       { child.links.map(subChild => {
                      //         console.log('boop');
                      //         const thisSubChildURL = NavHelper(subChild);

                      //         return (
                      //           <li>
                      //             <a href={thisSubChildURL}>
                      //               {subChild.title}
                      //             </a>
                      //           </li>
                      //         );
                      //       })
                      //     }
                      //     </SubSubNavMenu>
                      //   );
                      // }

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
