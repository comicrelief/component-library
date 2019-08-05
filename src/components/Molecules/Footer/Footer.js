import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../Atoms/Logo/Logo';
import FooterNav from './Nav/Nav';
import {
  FooterWrapper,
  InnerWrapper,
  SocialLinks,
  FooterBranding,
  FooterCopyright
} from './Footer.style';
import Text from '../../Atoms/Text/Text';

const Footer = ({ navItems, footerCopy, ...rest }) => {
  return (
    <FooterWrapper navItems {...rest}>
      <InnerWrapper>
        <SocialLinks>
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
        </SocialLinks>
        <FooterNav navItems={navItems} />
        <FooterBranding>
          <Logo />
        </FooterBranding>
        <FooterCopyright>
          <Text tag="p">{footerCopy}</Text>
        </FooterCopyright>
      </InnerWrapper>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  footerCopy: PropTypes.string
};

Footer.defaultProps = {
  navItems: {},
  footerCopy: ''
};

export default Footer;
