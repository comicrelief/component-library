import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logo/Logo';
import MainNav from './Nav/Nav';
import { Brand, HeaderWrapper, InnerWrapper, MetaIcons } from './Header.style';

const Header = ({ navItems, metaIcons, campaign, rotate, ...rest }) => {
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" title={`Go to ${campaign} homepage`}>
          <Logo rotate={rotate} campaign={campaign} />
        </Brand>
        <MainNav navItems={navItems} />
        <MetaIcons>{metaIcons}</MetaIcons>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  /** Check data structure example in file  src/components/moleculecules/header/data/data  */
  navItems: PropTypes.objectOf(PropTypes.shape),
  /** it can be icons, buttons  */
  metaIcons: PropTypes.node.isRequired,
  campaign: PropTypes.string,
  rotate: PropTypes.bool
};

Header.defaultProps = {
  navItems: {},
  campaign: 'Comic Relief',
  rotate: false
};

export default Header;
