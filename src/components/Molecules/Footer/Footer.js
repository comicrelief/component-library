import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import FooterNav from './Nav/Nav';
import SocialIcons from '../../Atoms/SocialIcons/SocialIcons';

import {
  FooterWrapper,
  InnerWrapper,
  FooterBranding,
  FooterCopyright,
  SocialIconWrapper
} from './Footer.style';

const Footer = ({ navItems, footerCopy, ...rest }) => {
  return (
    <FooterWrapper navItems {...rest}>
      <InnerWrapper>
        <SocialIconWrapper>
          <SocialIcons campaign="comicrelief" />
        </SocialIconWrapper>

        <FooterNav navItems={navItems} />

        <FooterBranding>
          <Logo sizeSm="70px" sizeMd="70px" rotate />
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
