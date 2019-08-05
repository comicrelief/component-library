import React from 'react';
import PropTypes from 'prop-types';
import FooterSocialLinks from './FooterSocialLinks/FooterSocialLinks';
import Text from '../../Atoms/Text/Text';

import Logo from '../../Atoms/Logo/Logo';
import FooterNav from './Nav/Nav';

import {
  FooterWrapper,
  InnerWrapper,
  FooterBranding,
  FooterCopyright
} from './Footer.style';

const Footer = ({ navItems, footerCopy, ...rest }) => {
  return (
    <FooterWrapper navItems {...rest}>
      <InnerWrapper>
        <FooterSocialLinks prop1="hello" />
        <FooterNav navItems={navItems} />
        <FooterBranding>
          <Logo rotate />
        </FooterBranding>
        <FooterCopyright>
          <Text tag="p" color="white">
            {footerCopy}
          </Text>
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
