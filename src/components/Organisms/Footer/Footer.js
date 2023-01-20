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

const Footer = ({
  navItems, footerCopy, campaign, corporateSponsorTag, ...rest
}) => {
  // Remove white space between words
  const campaignName = campaign.replace(/\s/g, '').toLowerCase();

  return (
    <div>
      <FooterWrapper navItems {...rest}>
        <InnerWrapper>
          <Text style={{ textAlign: 'left' }} align="left" tag="p" color="white">MR. MEN &#8482; LITTLE MISS &#8482; © 2022 THOIP (a SANRIO Company). All rights reserved.</Text>
          <FooterBranding>
            <SocialIconWrapper>
              <SocialIcons campaign={campaignName} />
            </SocialIconWrapper>
            <Brand href="/" title={`Go to ${campaign} homepage`}>
              <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
            </Brand>
          </FooterBranding>
          <FooterNav navItems={navItems} {...rest} />
          <FooterCopyright>
            <Text tag="p" color="grey">
              {footerCopy}
            </Text>
          </FooterCopyright>
        </InnerWrapper>
      </FooterWrapper>
    </div>
  );
};

Footer.propTypes = {
  navItems: PropTypes.objectOf(PropTypes.shape),
  footerCopy: PropTypes.string,
  campaign: PropTypes.string,
  overrideWhiteList: PropTypes.bool,
  corporateSponsorTag: PropTypes.string
};

Footer.defaultProps = {
  navItems: {},
  footerCopy: '',
  campaign: 'Comic Relief',
  overrideWhiteList: false,
  corporateSponsorTag: ''
};

export default Footer;
