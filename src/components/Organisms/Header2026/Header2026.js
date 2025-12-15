// import './remove-extra-styles-in-preview.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import LogoNav2026 from '../../Atoms/LogoNav2026/LogoNav2026';
import Navs from './Navs/Navs';
import Link from '../../Atoms/Link/Link';
import {
  Brand, Header2026Wrapper, InnerWrapper,
  DonateButtonTopBarWrapper, SearchIconWrapperDesktop, ButtonsAndIcons
} from './Header2026.style';
import searchIcon from './assets/search-icon.svg';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';

const Header2026 = ({
  data = {},
  characterLimit = 60,
  showBoxShadow = false,
  ...rest
}) => {
  const [isExpandable, setIsExpandable] = useState(false);

  return (
    <Header2026Wrapper
      data-testid="Header2026Wrapper"
      showBoxShadow={showBoxShadow}
      {...rest}
    >
      <InnerWrapper data-testid="InnerWrapper">

        <Brand data-testid="Brand">
          <LogoNav2026 data-testid="LogoNav2026" />
        </Brand>

        <Navs
          data-testid="Navs"
          navItems={data}
          characterLimit={characterLimit}
          isExpandable={isExpandable}
          setIsExpandable={setIsExpandable}
        />

        <ButtonsAndIcons data-testid="ButtonsAndIcons">
          <SearchIconWrapperDesktop data-testid="SearchIconWrapperDesktop">
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

          {!isExpandable && (
            <DonateButtonTopBarWrapper data-testid="donate-button--desktop">
              <Link color="red" type="button" href="/donation">
                Donate
              </Link>
            </DonateButtonTopBarWrapper>
          )}
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
  campaign: PropTypes.string,
  characterLimit: PropTypes.number,
  showBoxShadow: PropTypes.bool
};

export default Header2026;
