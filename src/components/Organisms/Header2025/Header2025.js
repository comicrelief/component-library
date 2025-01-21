import React from 'react';
import PropTypes from 'prop-types';

import Logos from '../../Molecules/Logos/Logos';
import HeaderNav2025 from './HeaderNav2025/HeaderNav2025';
import {
  Brand, Header2025Wrapper, InnerWrapper,
  DonateButtonWrapperTop, Header2025MetaIcons, ButtonsAndIcons
} from './Header2025.style';

const Header2025 = ({
  navItems = {}, metaIcons, campaign = 'Comic Relief', donateButton = null,
  characterLimit = 60, showBoxShadow = false, ...rest
}) => (
  <Header2025Wrapper navItems showBoxShadow={showBoxShadow} {...rest}>
    <InnerWrapper>
      <Brand>
        <Logos
          campaign={campaign}
          sizeSm="50px"
          sizeMd="55px"
          animateRotate
        />
      </Brand>
      <HeaderNav2025
        navItems={navItems}
        metaIcons={metaIcons}
        donateButton={donateButton}
        characterLimit={characterLimit}
      />
      <ButtonsAndIcons>
        <Header2025MetaIcons isHeader data-testid="meta-icons--desktop">{metaIcons}</Header2025MetaIcons>
        <DonateButtonWrapperTop data-testid="donate-button--desktop">{donateButton}</DonateButtonWrapperTop>
      </ButtonsAndIcons>

    </InnerWrapper>
  </Header2025Wrapper>
);

Header2025.propTypes = {
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

export default Header2025;
