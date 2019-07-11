import React from 'react';
import PropTypes from 'prop-types';

// import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import MainMenu from './Nav/Nav';

import { Brand, HeaderWrapper, InnerWrapper, MetaIcons } from './Header.style';

const Header = ({ navItems, metaIcons, ...rest }) => {
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
        </Brand>
        <MainMenu navItems={navItems} />
        <MetaIcons>{metaIcons}</MetaIcons>
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
