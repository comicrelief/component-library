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
  navItems, footerCopy, campaign, ...rest
}) => {
  // Remove white space between words
  const campaignName = campaign.replace(/\s/g, '').toLowerCase();
  return (
    <div>
      <FooterWrapper navItems {...rest}>
        <InnerWrapper>
          <FooterBranding>
            <SocialIconWrapper>
              <SocialIcons campaign={campaignName} />
            </SocialIconWrapper>
            <Brand href="/" title={`Go to ${campaign} homepage`}>
              <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
            </Brand>
          </FooterBranding>
          <FooterNav navItems={navItems} />
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
  campaign: PropTypes.string
};

Footer.defaultProps = {
  navItems: {},
  footerCopy: '',
  campaign: 'Comic Relief'
};

export default Footer;
