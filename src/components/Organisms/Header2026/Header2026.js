// import remove-extra-styles-in-preview from '../../../utils/remove-extra-styles-in-preview.css';
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
  showBoxShadow: PropTypes.bool
};

export default Header2026;
