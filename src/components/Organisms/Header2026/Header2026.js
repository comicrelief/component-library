// import './remove-extra-styles-in-preview.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LogoNav2026 from '../../Atoms/LogoNav2026/LogoNav2026';
import Nav from './Nav/Nav';
import Link from '../../Atoms/Link/Link';
import {
  Brand, Header2026Wrapper, InnerWrapper,
  DonateButtonTopBarWrapper, SearchIconWrapperDesktop, ButtonsAndIcons
} from './Header2026.style';
import searchIcon from './assets/search-icon.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';

const Header2026 = ({
  data = {},
  campaign = 'Comic Relief',
  donateButton = null,
  characterLimit = 60,
  showBoxShadow = false,
  ...rest
}) => {
  // const [isExpandable, setIsExpandable] = useState(false);
  const [isExpandable, setIsExpandable] = useState(true);

  return (
    <Header2026Wrapper
      data-testid="Header2026Wrapper"
      showBoxShadow={showBoxShadow}
      {...rest}
    >
      <InnerWrapper data-testid="InnerWrapper">

        <Brand data-testid="Brand">
          <LogoNav2026
            campaign={campaign}
            logoWidth="100px"
            logoWidthMd="180px"
            animateRotate
            data-testid="LogoNav2026"
          />
        </Brand>

        {/* Also burger menu */}
        <Nav
          navItems={data}
          donateButton={donateButton}
          characterLimit={characterLimit}
          data-testid="Nav"
          isExpandable={isExpandable}
          setIsExpandable={setIsExpandable}
        />

        <ButtonsAndIcons data-testid="ButtonsAndIcons">
          <SearchIconWrapperDesktop data-testid="meta-icons--desktop">
            <Icon
              icon={searchIcon}
              title="Search"
              target="self"
              role="button"
              href="/search"
              brand="comicrelief"
              tabIndex="0"
              id="search"
              isHeader
            />
          </SearchIconWrapperDesktop>

          {!isExpandable
            && (
              <DonateButtonTopBarWrapper data-testid="donate-button--desktop">
                {donateButton || (
                  <Link
                    color="red"
                    type="button"
                    href="/donation"
                  >
                    Donate
                  </Link>
                )
                }
              </DonateButtonTopBarWrapper>
            )
              }
        </ButtonsAndIcons>

      </InnerWrapper>
    </Header2026Wrapper>
  );
};

Header2026.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    menuGroups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string
          })
        )
      })
    )
  }),
  donateButton: PropTypes.node,
  campaign: PropTypes.string,
  characterLimit: PropTypes.number,
  showBoxShadow: PropTypes.bool
};

export default Header2026;
