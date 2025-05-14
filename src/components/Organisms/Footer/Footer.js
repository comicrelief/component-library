import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Logo from '../../Atoms/Logo/Logo';
import FooterNav from './Nav/Nav';
import SocialIcons from '../../Atoms/SocialIcons/SocialIcons';

import {
  FooterWrapper,
  InnerWrapper,
  FooterLegalLine,
  FooterBranding,
  FooterCopyright,
  SocialIconWrapper,
  Brand,
  FooterLogoWrapper
} from './Footer.style';

const Footer = ({
  navItems = {}, footerCopy = '', campaign = 'Comic Relief', additionalLegalLine = '', overrideallowList = false, ...rest
}) => {
  // Remove white space between words
  const campaignName = campaign.replace(/\s/g, '').toLowerCase();

  return (
    <div>
      <FooterWrapper navItems {...rest}>
        <InnerWrapper>
          {additionalLegalLine
            && <FooterLegalLine tag="p" color="grey">{additionalLegalLine}</FooterLegalLine>
          }
          <FooterBranding>
            <SocialIconWrapper>
              <SocialIcons campaign={campaignName} />
            </SocialIconWrapper>
            <FooterLogoWrapper>
              <Brand href="/" title={`Go to ${campaign} homepage`}>
                <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
              </Brand>
              {/* FR logo to go here */}
              <Brand href="/" title={`Go to ${campaign} homepage`}>
                <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
              </Brand>
            </FooterLogoWrapper>
          </FooterBranding>
          <FooterNav navItems={navItems} overrideallowList={overrideallowList} {...rest} />
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
  overrideallowList: PropTypes.bool,
  additionalLegalLine: PropTypes.string
};

export default Footer;
