import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './remove-extra-styles-in-preview.css';

import LogoNav2026 from '../../Atoms/LogoNav2026/LogoNav2026';
import NavLinks from './NavLinks/NavLinks';
import Link from '../../Atoms/Link/Link';
import {
  Brand, Header2026Wrapper, InnerWrapper,
  DonateButtonWrapperTop, Header2026MetaIcons, ButtonsAndIcons
} from './Header2026.style';

const Header2026 = ({
  navItems = {},
  metaIcons,
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
      navItems
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

        <NavLinks
          navItems={navItems}
          metaIcons={metaIcons}
          donateButton={donateButton}
          characterLimit={characterLimit}
          data-testid="NavLinks"
          isExpandable={isExpandable}
          setIsExpandable={setIsExpandable}
        />

        <ButtonsAndIcons data-testid="ButtonsAndIcons">
          <Header2026MetaIcons
            isHeader
            data-testid="meta-icons--desktop"
          >
            {metaIcons}
          </Header2026MetaIcons>

          {!isExpandable
            && (
            <DonateButtonWrapperTop data-testid="donate-button--desktop">
              {donateButton
              || (
              <Link
                color="red"
                type="button"
                href="/donation"
              >
                Donate
              </Link>
              )
            }
            </DonateButtonWrapperTop>
            )
          }
        </ButtonsAndIcons>

      </InnerWrapper>
    </Header2026Wrapper>
  );
};

Header2026.propTypes = {
  navItems: PropTypes.shape({
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
  // NB: metaIcons no longer include the Donate button:
  metaIcons: PropTypes.node.isRequired,
  // ... and is supplied separately to allow more render control:
  donateButton: PropTypes.node,
  campaign: PropTypes.string,
  characterLimit: PropTypes.number,
  showBoxShadow: PropTypes.bool
};

export default Header2026;
