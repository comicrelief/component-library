# FooterNew

## FooterNew with email signup

```js
import FooterNew from './FooterNew';
import footerCopy from '../Footer/data/footerCopy';
import { primaryLinksList, secondaryLinksList } from './dev-data/data';

<FooterNew
  primaryLinksList={primaryLinksList}
  secondaryLinksList={secondaryLinksList}
  legalText={footerCopy.copy}
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

## FooterNew without email signup

```js
import FooterNew from './FooterNew';
import footerCopy from '../Footer/data/footerCopy';
import { primaryLinksList, secondaryLinksList } from './dev-data/data';

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
```
