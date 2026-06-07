import React from 'react';
import FooterNew from './FooterNew';
import footerCopy from '../Footer/data/footerCopy';
import { primaryLinksList, secondaryLinksList } from './dev-data/data';

export default function FooterNewExample() {
  return (
    <div>

      <h3>FooterNew with email signup</h3>
      <FooterNew
        primaryLinksList={primaryLinksList}
        secondaryLinksList={secondaryLinksList}
        legalText={footerCopy.copy}
        copyrightText="© 2026 Comic Relief"
        campaign="Comic Relief"
        showFundraisingRegulatorLogo
        showFacebookSocialIcon
        showInstagramSocialIcon
        showXSocialIcon
        showTikTokSocialIcon
        showYouTubeSocialIcon
        animateRotate
        onNewsletterSubmit={(email) => console.log('Newsletter submitted. Normally at this point, the frontend would run its own function to send.', email)}
      />

      <h3>FooterNew without email signup</h3>
      <FooterNew
        primaryLinksList={primaryLinksList}
        secondaryLinksList={secondaryLinksList}
        legalText={footerCopy.copy}
        campaign="Comic Relief"
        showEmailSignup={false}
        showFundraisingRegulatorLogo
        showFacebookSocialIcon
        showInstagramSocialIcon
        showXSocialIcon
        showTikTokSocialIcon
        showYouTubeSocialIcon
        animateRotate
      />

    </div>
  );
}
