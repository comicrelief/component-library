import React from 'react';
import PropTypes from 'prop-types';

import Logos from '../../Molecules/Logos/Logos';
import MainNav from './Nav/Nav';
import {
  Brand, HeaderWrapper, InnerWrapper, DonateButtonWrapper, HeaderMetaIcons, ButtonsAndIcons
} from './Header.style';

const Header = ({
  navItems, metaIcons, campaign, donateButton, ...rest
}) => {
  console.log('HEADER: metaIcons', metaIcons);

  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand>
          <Logos campaign={campaign} />
        </Brand>
        <MainNav navItems={navItems} metaIcons={metaIcons} donateButton={donateButton} />
        <ButtonsAndIcons>
          <HeaderMetaIcons>{metaIcons}</HeaderMetaIcons>
          <DonateButtonWrapper>{donateButton}</DonateButtonWrapper>
        </ButtonsAndIcons>

      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  // Check data structure example in src/components/moleculecules/header/data/data
  navItems: PropTypes.objectOf(PropTypes.shape),
  // NB: no longer to include the Donate button:
  metaIcons: PropTypes.node.isRequired,
  // Breaking out to separate prop to fully control:
  donateButton: PropTypes.node,
  campaign: PropTypes.string
};

Header.defaultProps = {
  navItems: {},
  campaign: 'Comic Relief',
  donateButton: null
};

export default Header;
