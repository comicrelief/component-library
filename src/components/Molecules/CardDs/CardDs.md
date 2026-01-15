# CardDs
## Image and CTA are clickable and links user through to full content. Note that this component can now be considered legacy, as it is superseded by CTAMultiCard.

### CardDs:  Image, Text & Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Internal } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="_blank"
    link="/home"
    linkLabel="find out more"
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">
      EDINBURGH MARATHON
    </Text>
    <Text size="m" weight="bold">
      24 May 2026
    </Text>
    <Text tag="p" size="m" weight="bold" style={{marginTop: "1rem"}}>
      Marathon
    </Text>
    <Text tag="p" size="m">
        Voted the fastest marathon in the UK, Edinburgh Marathon is perfect for first-timers and those seeking a personal best whilst soaking in the picturesque views of the East Lothian coastline.
    </Text>
    <Text tag="p" size="m">
        Registration fee: £39
    </Text>
    <Text tag="p" size="m">
        Sponsorship pledge: £500
    </Text>
  </CardDs>
</div>;
```


### CardDs: Text & Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Download } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="blank"
    link="/home"
    linkLabel="find out more"
    backgroundColor="white"
    height="auto"
    icon={<Download colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

### CardDs: Text only
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs backgroundColor="white" height="auto">
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

### CardDs: Image & Text, No Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Internal } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="_blank"
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```


### CardDs:  Only column view for use in CardsCarousel
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Internal } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="_blank"
    link="/home"
    linkLabel="find out more"
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
    isCarousel={true}
  >
    <Text tag="h3" color="purple" size="xl">
      Only Column view
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```
