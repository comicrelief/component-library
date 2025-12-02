# CTAMultiCard
## Image and CTA are clickable and links user through to full content

### CTAMultiCard:  Image, Text & Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import CTAMultiCard from './CTAMultiCard';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CTAMultiCard
    target="_blank"
    link="/home"
    linkLabel="find out more"
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
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
  </CTAMultiCard>
</div>;
```


### CTAMultiCard: Text & Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import CTAMultiCard from './CTAMultiCard';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
  >
  <CTAMultiCard
    target="blank"
    link="/home"
    linkLabel="find out more"
    backgroundColor="white"
    height="auto"
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CTAMultiCard>
</div>;
```

### CTAMultiCard: Text only
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import CTAMultiCard from './CTAMultiCard';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
  >
  <CTAMultiCard backgroundColor="white" height="auto">
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CTAMultiCard>
</div>;
```

### CTAMultiCard: Image & Text, No Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import CTAMultiCard from './CTAMultiCard';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
  >
  <CTAMultiCard
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CTAMultiCard>
</div>;
```


### CTAMultiCard:  Only column view for use in CardsCarousel
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import CTAMultiCard from './CTAMultiCard';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
  >
  <CTAMultiCard
    target="_blank"
    link="/home"
    linkLabel="find out more"
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    isCarousel={true}
  >
    <Text tag="h2" color="black" size="l">
      Only Column view
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CTAMultiCard>
</div>;
```
