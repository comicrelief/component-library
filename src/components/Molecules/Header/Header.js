import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import Logo from '../../Atoms/Logo/Logo';
import MainNav from './Nav/Nav';
import { sizes } from '../../../theme/shared/breakpoint';
import { Brand, HeaderWrapper, InnerWrapper, MetaIcons } from './Header.style';

const Header = ({ navItems, metaIcons, ...rest }) => {
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
        </Brand>
        <MediaQuery maxDeviceWidth={sizes.large}>
          <MainNav navItems={navItems} />
          <MetaIcons>{metaIcons}</MetaIcons>
        </MediaQuery>

        <MediaQuery minDeviceWidth={sizes.large}>
          <MainNav navItems={navItems} />
          <MetaIcons>{metaIcons}</MetaIcons>
        </MediaQuery>
      </InnerWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired
};

Header.defaultProps = {
  navItems: {}
};

export default Header;
