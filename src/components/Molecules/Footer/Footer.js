import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logo/Logo';
import MainNav from './Nav/Nav';
import { Brand, HeaderWrapper, InnerWrapper, MetaIcons } from './Footer.style';

const Footer = ({ navItems, metaIcons, ...rest }) => {
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

Footer.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  metaIcons: PropTypes.node.isRequired
};

Footer.defaultProps = {
  navItems: {}
};

export default Footer;
