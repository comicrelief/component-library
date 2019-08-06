import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logo/Logo';
import MainNav from './Nav/Nav';
import { Brand, HeaderWrapper, InnerWrapper, MetaIcons } from './Header.style';

const Header = ({ navItems, metaIcons, ...rest }) => {
  return (
    <HeaderWrapper navItems {...rest}>
      <InnerWrapper>
        <Brand href="/" inline>
          <Logo rotate />
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
  metaIcons: PropTypes.node.isRequired
};

Header.defaultProps = {
  navItems: {}
};

export default Header;
