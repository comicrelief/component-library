import React from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  NewsletterSignUpWrapper,
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
  onNewsletterSubmit,
  ...rest
}) => {
  // Remove white space between words
  const campaignName = campaign.replace(/\s/g, '').toLowerCase();

  const validationSchema = yup.object({
    email: yup
      .string()
      .required('Please provide a valid email address')
      .email('Please provide a valid email address')
  });

  const formMethods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });

  const { handleSubmit } = formMethods;

  const handleNewsletterSubmit = data => {
    if (onNewsletterSubmit) {
      onNewsletterSubmit(data.email);
    }
  };

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
            <NewsletterSignUpWrapper>
              <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(handleNewsletterSubmit)} noValidate>
                  <EmailSignUp formContext={formMethods} />
                </form>
              </FormProvider>
            </NewsletterSignUpWrapper>
            <LogosContainer $desktopOnly>
              <Brand href="/" title={`Go to ${campaign} homepage`} animateRotate={animateRotate}>
                <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
              </Brand>
              {showFundraisingRegulatorLogo && <FundraisingRegulatorLogo animateOnHover />}
            </LogosContainer>
          </TopSection>

          <SocialIconWrapper $desktopOnly>
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

          <SocialIconWrapper $mobileOnly>
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

          <SecondaryNav navItems={secondaryLinksList} {...rest} />

          <FooterCopyright>
            {copyrightText && (
              <FooterCopyrightText>
                {copyrightText}
              </FooterCopyrightText>
            )}
            {legalText && (
              <FooterCopyrightText>
                {legalText}
              </FooterCopyrightText>
            )}
          </FooterCopyright>

          <LogosContainer $mobileOnly>
            <Brand href="/" title={`Go to ${campaign} homepage`} animateRotate={animateRotate}>
              <Logo sizeSm="48px" sizeMd="72px" rotate={false} campaign={campaign} />
            </Brand>
            {showFundraisingRegulatorLogo && <FundraisingRegulatorLogo />}
          </LogosContainer>
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
  /** Function to handle newsletter signup form submission */
  onNewsletterSubmit: PropTypes.func
};

export default Footer2026;
