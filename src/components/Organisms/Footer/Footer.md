# Footer

```js
import Footer from './Footer';
import footerCopy from '../FooterLegacy/data/footerCopy';

const primaryLinksList = [
  {
    title: 'Contact us',
    path: 'contact-us',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Update your preferences',
    path: 'https://www.comicrelief.com/update-your-preferences',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Your Gift Aid',
    path: 'https://giftaid.comicrelief.com/update',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Reporting complaints and concerns',
    path: 'https://www.comicrelief.com/reporting-complaints',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'FAQs',
    path: 'https://www.comicrelief.com/frequently-asked-questions',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  }
];

const secondaryLinksList = [
  {
    title: 'Terms of use',
    path: 'https://www.comicrelief.com/terms-of-use',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Privacy notice',
    path: 'https://www.comicrelief.com/privacy-notice',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Cookies',
    path: 'https://www.comicrelief.com/cookies',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Text to donate terms',
    path: 'https://www.comicrelief.com/text-to-donate-terms',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Prize draw terms',
    path: 'https://www.comicrelief.com/prize-draw-terms',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Modern Slavery and Human Trafficking Statement',
    path: 'https://www.comicrelief.com/modern-slavery-statement',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  },
  {
    title: 'Positive Practices',
    path: 'https://www.comicrelief.com/positive-practices',
    internal: {
      type: 'ContentfulPageLandingPage'
    }
  }
];

<Footer
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
```
