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
  FooterLogoWrapper,
  FundraisingRegulatorLogo
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
            </FooterLogoWrapper>
          </FooterBranding>
          <FooterNav navItems={navItems} overrideallowList={overrideallowList} {...rest} />

          <FundraisingRegulatorLogo>
            <a href="https://www.fundraisingregulator.org.uk/validate?registrant=COMIC+RELIEF" className="fr-digital-badge" style={{ height: 'auto', width: '150px', textDecoration: 'none' }} target="_blank" rel="noreferrer">
              <img src="https://www.fundraisingregulator.org.uk/fr-badge/80983ed7-ea80-40db-8e52-4a3351d9e77d/en/white" width="100%" alt="Fundraising Regulator badge with validation link" loading="lazy" />
            </a>
          </FundraisingRegulatorLogo>

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
