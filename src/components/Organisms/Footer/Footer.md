# Footer

## Footer with email signup

```js
import Footer from './Footer';
import footerCopy from '../FooterLegacy/data/footerCopy';
import { primaryLinksList, secondaryLinksList } from './dev-data/data';

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

## Footer without email signup

```js
import Footer from './Footer';
import footerCopy from '../FooterLegacy/data/footerCopy';
import { primaryLinksList, secondaryLinksList } from './dev-data/data';

<Footer
  primaryLinksList={primaryLinksList}
  secondaryLinksList={secondaryLinksList}
  legalText={footerCopy.copy}
  copyrightText="© 2026 Comic Relief"
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
```
