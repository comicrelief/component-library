import React from 'react';
import PropTypes from 'prop-types';

import LogoLinked from '../../Molecules/LogoLinked/LogoLinked';
import HeaderNav2026 from './HeaderNav2026/HeaderNav2026';
import {
  Brand, Header2026Wrapper, InnerWrapper,
  DonateButtonWrapperTop, Header2026MetaIcons, ButtonsAndIcons
} from './Header2026.style';

const Header2026 = ({
  navItems = {}, metaIcons, campaign = 'Comic Relief', donateButton = null,
  characterLimit = 60, showBoxShadow = false, ...rest
}) => (
  <Header2026Wrapper navItems showBoxShadow={showBoxShadow} {...rest}>
    <InnerWrapper>
      <Brand>
        <LogoLinked
          campaign={campaign}
          sizeSm="50px"
          sizeMd="55px"
          animateRotate
        />
      </Brand>
      <HeaderNav2026
        navItems={navItems}
        metaIcons={metaIcons}
        donateButton={donateButton}
        characterLimit={characterLimit}
      />
      <ButtonsAndIcons>
        <Header2026MetaIcons isHeader data-testid="meta-icons--desktop">{metaIcons}</Header2026MetaIcons>
        <DonateButtonWrapperTop data-testid="donate-button--desktop">{donateButton}</DonateButtonWrapperTop>
      </ButtonsAndIcons>

    </InnerWrapper>
  </Header2026Wrapper>
);

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
