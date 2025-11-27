import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Atoms/Logo/Logo';
import SocialIcons from '../../Atoms/SocialIcons/SocialIcons';
import EmailSignUp from '../../Molecules/EmailSignUp/EmailSignUp';
import PrimaryNav from './Nav/PrimaryNav';
import SecondaryNav from './Nav/SecondaryNav';
import FundraisingRegulatorLogo from '../Footer/FundraisingRegulatorLogo/FundraisingRegulatorLogo';

import {
  FooterWrapper,
  InnerWrapper,
  FooterLegalLine,
  TopSection,
  EmailSignUpWrapper,
  SocialIconWrapper,
  LogosContainer,
  FooterCopyright,
  FooterCopyrightText,
  Brand
} from './Footer2026.style';

const Footer2026 = ({
  primaryLinksList = [],
  secondaryLinksList = [],
  legalText,
  copyrightText,
  campaign = 'Comic Relief',
  additionalLegalLine = '',
  showFundraisingRegulatorLogo = false,
  showFacebookSocialIcon,
  showInstagramSocialIcon,
  showXSocialIcon,
  showTikTokSocialIcon,
  showYouTubeSocialIcon,
  animateRotate = false,
  emailSignupErrorMessage = '',
  onEmailSubmit,
  ...rest
}) => {
  // Remove white space between words
  const campaignName = campaign.replace(/\s/g, '').toLowerCase();

  return (
    <div>
      <FooterWrapper {...rest}>
        <InnerWrapper>
          {additionalLegalLine && (
            <FooterLegalLine>
              {additionalLegalLine}
            </FooterLegalLine>
          )}

          <TopSection>
            <EmailSignUpWrapper>
              <EmailSignUp onSubmit={onEmailSubmit} errorMsg={emailSignupErrorMessage} />
            </EmailSignUpWrapper>
            <LogosContainer>
              <Brand href="/" title={`Go to ${campaign} homepage`} animateRotate={animateRotate}>
                <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
              </Brand>
              {showFundraisingRegulatorLogo && <FundraisingRegulatorLogo animateOnHover />}
            </LogosContainer>
          </TopSection>

          <SocialIconWrapper>
            <SocialIcons
              campaign={campaignName}
              newStyle
              invertColor
              showFacebookSocialIcon={showFacebookSocialIcon}
              showInstagramSocialIcon={showInstagramSocialIcon}
              showXSocialIcon={showXSocialIcon}
              showTikTokSocialIcon={showTikTokSocialIcon}
              showYouTubeSocialIcon={showYouTubeSocialIcon}
            />
          </SocialIconWrapper>

          <PrimaryNav navItems={primaryLinksList} {...rest} />

          <SecondaryNav navItems={secondaryLinksList} {...rest} />

          <FooterCopyright>
            {legalText && (
              <FooterCopyrightText>
                {legalText}
              </FooterCopyrightText>
            )}
            {copyrightText && (
              <FooterCopyrightText>
                {copyrightText}
              </FooterCopyrightText>
            )}
          </FooterCopyright>
        </InnerWrapper>
      </FooterWrapper>
    </div>
  );
};

Footer2026.propTypes = {
  /** Array of primary navigation link objects */
  primaryLinksList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    url: PropTypes.string,
    reference: PropTypes.shape({
      path: PropTypes.string
    }),
    internal: PropTypes.shape({
      type: PropTypes.string
    })
  })),
  /** Array of secondary navigation link objects */
  secondaryLinksList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    url: PropTypes.string,
    reference: PropTypes.shape({
      path: PropTypes.string
    }),
    internal: PropTypes.shape({
      type: PropTypes.string
    })
  })),
  /** Legal text displayed at bottom of footer */
  legalText: PropTypes.string.isRequired,
  /** Optional copyright text displayed at bottom of footer */
  copyrightText: PropTypes.string,
  /** Campaign name, used for logo and social links */
  campaign: PropTypes.string,
  /** Optional legal line displayed at top of footer */
  additionalLegalLine: PropTypes.string,
  /** Show Fundraising Regulator logo */
  showFundraisingRegulatorLogo: PropTypes.bool,
  /** Show/hide Facebook social icon */
  showFacebookSocialIcon: PropTypes.bool,
  /** Show/hide Instagram social icon */
  showInstagramSocialIcon: PropTypes.bool,
  /** Show/hide X (Twitter) social icon */
  showXSocialIcon: PropTypes.bool,
  /** Show/hide TikTok social icon */
  showTikTokSocialIcon: PropTypes.bool,
  /** Show/hide YouTube social icon */
  showYouTubeSocialIcon: PropTypes.bool,
  /** Animate logo rotation on hover */
  animateRotate: PropTypes.bool,
  /** Error message to display on the email signup input field */
  emailSignupErrorMessage: PropTypes.string,
  /** Function to handle email signup form submission */
  onEmailSubmit: PropTypes.func
};

export default Footer2026;
