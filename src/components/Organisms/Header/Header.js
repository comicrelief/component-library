import React from 'react';
import PropTypes from 'prop-types';

import Logos from '../../Molecules/Logos/Logos';
import HeaderNav from './HeaderNav/HeaderNav';
import {
  Brand, HeaderWrapper, InnerWrapper, DonateButtonWrapperTop, HeaderMetaIcons, ButtonsAndIcons
} from './Header.style';

const Header = ({
  navItems, metaIcons, campaign, donateButton, ...rest
}) => (
  <HeaderWrapper navItems {...rest}>
    <InnerWrapper>
      <Brand>
        <Logos campaign={campaign} sizeSm="100px" sizeMd="100px" />
      </Brand>
      <HeaderNav navItems={navItems} metaIcons={metaIcons} donateButton={donateButton} />
      <ButtonsAndIcons>
        <HeaderMetaIcons isHeader data-testid="meta-icons--desktop">{metaIcons}</HeaderMetaIcons>
        <DonateButtonWrapperTop data-testid="donate-button--desktop">{donateButton}</DonateButtonWrapperTop>
      </ButtonsAndIcons>

    </InnerWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  // Check data structure example in src/components/moleculecules/header/data/data
  navItems: PropTypes.objectOf(PropTypes.shape),
  // NB: metaIcons no longer include the Donate button:
  metaIcons: PropTypes.node.isRequired,
  // ... and is supplied separately to allow more render control:
  donateButton: PropTypes.node,
  campaign: PropTypes.string
};

Header.defaultProps = {
  navItems: {},
  campaign: 'Comic Relief',
  donateButton: null
};

export default Header;
