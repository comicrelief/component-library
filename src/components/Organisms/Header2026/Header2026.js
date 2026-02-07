import '../../../utils/remove-extra-styles-in-preview.css';
import React, {
  useState, useCallback, useRef, useEffect
} from 'react';
import PropTypes from 'prop-types';

import LogoNav2026 from '../../Atoms/LogoNav2026/_LogoNav2026';
import Navs from './Navs/Navs';
import Link from '../../Atoms/Link/Link';
import {
  Brand, Header2026Wrapper, InnerWrapper,
  DonateButtonTopBarWrapper, SearchIconWrapperDesktop, ButtonsAndIcons,
  MobileBackHeader, BackChevron, MobileMenuOverlay
} from './Header2026.style';
import searchIcon from './assets/search-icon.svg';
import chevronIcon from './assets/chevron-icon.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import prependBaseUrl from '../../../utils/urlHelper';
import { breakpointValues2026 } from '../../../theme/shared/breakpoints2026';

const Header2026 = ({
  data = {},
  characterLimit = 60,
  devMode = false,
  ...rest
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isTertiaryMenuOpen, setIsTertiaryMenuOpen] = useState(false);
  const [tertiaryParentName, setTertiaryParentName] = useState(null);
  const closeSubMenusRef = useRef(null);
  const closeTertiaryRef = useRef(null);

  const handleSubMenuChange = useCallback((isOpen, closeFunction) => {
    setIsSubMenuOpen(isOpen);
    closeSubMenusRef.current = closeFunction;
  }, []);

  const handleTertiaryMenuChange = useCallback((isOpen, parentName, closeFunction) => {
    setIsTertiaryMenuOpen(isOpen);
    setTertiaryParentName(parentName);
    closeTertiaryRef.current = closeFunction;
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Reset mobile nav state when resizing to desktop
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= breakpointValues2026.L) {
          setIsMenuOpen(false);
          setIsSubMenuOpen(false);
          setIsTertiaryMenuOpen(false);
          setTertiaryParentName(null);
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleBackClick = () => {
    if (isTertiaryMenuOpen && closeTertiaryRef.current) {
      closeTertiaryRef.current();
      setIsTertiaryMenuOpen(false);
      setTertiaryParentName(null);
    } else if (closeSubMenusRef.current) {
      closeSubMenusRef.current();
    }
  };

  return (
    <>
      <MobileMenuOverlay isVisible={isMenuOpen} />
      <Header2026Wrapper
        data-testid="Header2026Wrapper"
        role="banner"
        {...rest}
      >
        <InnerWrapper data-testid="InnerWrapper">

          {isSubMenuOpen || isTertiaryMenuOpen ? (
            <MobileBackHeader
              data-testid="MobileBackHeader"
              onClick={handleBackClick}
              type="button"
              aria-label={isTertiaryMenuOpen ? `Go back to ${tertiaryParentName}` : 'Go back to main menu'}
            >
              <BackChevron>
                <img src={chevronIcon} alt="chevron icon" />
              </BackChevron>
              {isTertiaryMenuOpen ? tertiaryParentName : 'Main menu'}
            </MobileBackHeader>
          ) : (
            <Brand data-testid="Brand">
              <LogoNav2026 data-testid="LogoNav2026" />
            </Brand>
          )}

          <Navs
            data-testid="Navs"
            navItems={data}
            characterLimit={characterLimit}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            devMode={devMode}
            onSubMenuChange={handleSubMenuChange}
            onTertiaryMenuChange={handleTertiaryMenuChange}
          />

          <ButtonsAndIcons data-testid="ButtonsAndIcons">
            <SearchIconWrapperDesktop data-testid="SearchIconWrapperDesktop">
              <Icon
                icon={searchIcon}
                title="Search"
                target="self"
                role="button"
                href={prependBaseUrl('/search', devMode)}
                brand="comicrelief"
                tabIndex="0"
                id="search"
              />
            </SearchIconWrapperDesktop>

            {!isMenuOpen && (
            <DonateButtonTopBarWrapper data-testid="DonateButtonTopBarWrapper">
              <Link color="red" type="button" href="https://donation.comicrelief.com/">
                Donate
              </Link>
            </DonateButtonTopBarWrapper>
            )}
          </ButtonsAndIcons>

        </InnerWrapper>
      </Header2026Wrapper>
    </>
  );
};

export const pageLinksPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    pageName: PropTypes.string.isRequired,
    pageUrlIfExternal: PropTypes.string,
    pageLevel: PropTypes.bool.isRequired,
    pageSelector: PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      header_page_link: PropTypes.arrayOf(
        PropTypes.shape({
          pageName: PropTypes.string.isRequired,
          pageSelector: PropTypes.shape({
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
          }).isRequired,
          pageUrlIfExternal: PropTypes.string,
          pageLevel: PropTypes.bool.isRequired
        })
      )
    })
  })
);

Header2026.propTypes = {
  data: PropTypes.shape({
    menuName: PropTypes.string,
    showSearch: PropTypes.bool,
    headerPageGroups: PropTypes.arrayOf(
      PropTypes.shape({
        primaryPageName: PropTypes.string.isRequired,
        primaryPageUrlIfExternal: PropTypes.string,
        primaryPageSelector: PropTypes.shape({
          path: PropTypes.string,
          title: PropTypes.string
        }),
        column1PageLinks: pageLinksPropTypes,
        column2PageLinks: pageLinksPropTypes,
        column3PageLinks: pageLinksPropTypes,
        column3PageCards: PropTypes.arrayOf(
          PropTypes.shape({
            pageName: PropTypes.string.isRequired,
            pageDescription: PropTypes.string,
            image: PropTypes.shape({
              title: PropTypes.string,
              description: PropTypes.string,
              url: PropTypes.string
            }),
            pageSelector: PropTypes.shape({
              title: PropTypes.string,
              path: PropTypes.string
            }),
            primaryPageUrlIfExternal: PropTypes.string
          })
        )
      })
    )
  }),
  campaign: PropTypes.string,
  characterLimit: PropTypes.number,
  devMode: PropTypes.bool
};

export default Header2026;
