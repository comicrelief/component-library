import React from 'react';
import PropTypes from 'prop-types';

import Logos from '../../Molecules/Logos/Logos';
import MainNav from './Nav/Nav';
import {
  Brand, HeaderWrapper, InnerWrapper, MetaIcons
} from './Header.style';

const Header = ({
  navItems = {}, metaIcons, campaign = 'Comic Relief', ...rest
}) => (
  <HeaderWrapper navItems {...rest}>
    <InnerWrapper>
      <Brand>
        <Logos campaign={campaign} />
      </Brand>
      <MainNav navItems={navItems} />
      <MetaIcons>{metaIcons}</MetaIcons>
    </InnerWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Check data structure example in file  src/components/moleculecules/header/data/data  */
  navItems: PropTypes.objectOf(PropTypes.shape),
  /** it can be icons, buttons  */
  metaIcons: PropTypes.node.isRequired,
  campaign: PropTypes.string
};

export default Header;
