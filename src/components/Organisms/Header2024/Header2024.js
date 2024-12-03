import React from 'react';
import PropTypes from 'prop-types';

import Logos from '../../Molecules/Logos/Logos';
import HeaderNav from './HeaderNav2024/HeaderNav2024';
import {
  Brand, Header2024Wrapper, InnerWrapper,
  DonateButtonWrapperTop, Header2024MetaIcons, ButtonsAndIcons
} from './Header2024.style';

const Header2024 = ({
  navItems = {}, metaIcons, campaign = 'Comic Relief', donateButton = null, ...rest
}) => (
  <Header2024Wrapper navItems {...rest}>
    <InnerWrapper>
      <Brand>
        <Logos campaign={campaign} sizeSm="100px" sizeMd="100px" />
      </Brand>
      <HeaderNav navItems={navItems} metaIcons={metaIcons} donateButton={donateButton} />
      <ButtonsAndIcons>
        <Header2024MetaIcons isHeader data-testid="meta-icons--desktop">{metaIcons}</Header2024MetaIcons>
        <DonateButtonWrapperTop data-testid="donate-button--desktop">{donateButton}</DonateButtonWrapperTop>
      </ButtonsAndIcons>

    </InnerWrapper>
  </Header2024Wrapper>
);

Header2024.propTypes = {
  // Check data structure example in src/components/moleculecules/header/data/data
  navItems: PropTypes.objectOf(PropTypes.shape),
  // NB: metaIcons no longer include the Donate button:
  metaIcons: PropTypes.node.isRequired,
  // ... and is supplied separately to allow more render control:
  donateButton: PropTypes.node,
  campaign: PropTypes.string
};

export default Header2024;
