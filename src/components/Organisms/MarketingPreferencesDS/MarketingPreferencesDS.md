Marketing Preferences DS

```js
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import MarketingPreferencesDSForm from './MarketingPreferencesDSForm';

const copyTop = (
  <div>
    <Text tag="h3" size="xl" family="Anton" uppercase weight="400" color="grey_dark">
      How can we contact you?
    </Text>
    <Text tag="p" size="md" color="grey_dark">
      We’d love to stay in touch and provide you with fundraising tips, news updates and more goodies.
    </Text>
    <Text tag="p" size="md" color="grey_dark">
      Please select your preferred contact options below.
    </Text>
  </div>
);

const copyBottom = (
  <Text tag="p" color="grey_dark">
    You can update your communication preferences at any time at
    <Link
      type="standard"
      href="https://www.comicrelief.com/update-your-preferences"
    >
      update your preferences
    </Link>. Your details will be kept safe, check out our
    <Link type="standard" href="https://www.comicrelief.com/privacy-policy">
      privacy policy
    </Link>
    for more details.
  </Text>
);

<MarketingPreferencesDSForm copyBottom={copyBottom} copyTop={copyTop} />

```
