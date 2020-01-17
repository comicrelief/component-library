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
  SocialIconWrapper,
  Brand
} from './Footer.style';

const Footer = ({ navItems, footerCopy, campaign, ...rest }) => {
  return (
    <FooterWrapper navItems {...rest}>
      <InnerWrapper>
        <SocialIconWrapper>
          <SocialIcons campaign={campaign} />
        </SocialIconWrapper>
        <FooterNav navItems={navItems} />
        <FooterBranding>
          <Brand href="/" title={`Go to ${campaign} homepage`}>
            <Logo sizeSm="70px" sizeMd="70px" rotate />
          </Brand>
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
  footerCopy: PropTypes.string,
  campaign: PropTypes.string
};

Footer.defaultProps = {
  navItems: {},
  footerCopy: '',
  campaign: 'comicrelief'
};

export default Footer;
