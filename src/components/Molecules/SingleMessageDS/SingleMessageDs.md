# SingleMessageDs

## Image align left and CTA are clickable and links user through to full conten

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div
    style={{
      display: 'flex',
      padding: '2rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      link='/home'
      linkLabel='Check out the shop'
      backgroundColor='white'
      imageLow={data.image}
      images={data.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      title="Heading Line 1 Heading Line 2"
      height='100%'
    >
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
</div>;
```

## Image align right  and CTA are clickable and links user through to full content

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div
    style={{
      display: 'flex',
      padding: '2rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      target='blank'
      link='/home'
      linkLabel='Check out the shop'
      ctaBgColor="blue_dark"
      backgroundColor='white'
      imageDirection="right"
      imageLow={data.image}
      images={data.images}
      imageAltText='Happy man going to work'
      subtitle="Subtitle"
      title="Heading Line 1 Heading Line 2"
      height='100%'
    >
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
</div>;
```

### SingleMessageDs no Image with Link

```js
  const data = require('../../../styleguide/data/data').default;
  import Text from '../../Atoms/Text/Text';
  import Link from '../../Atoms/Link/Link';
  <div
    style={{
      display: 'flex',
      padding: '2rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      target='blank'
      link='/home'
      linkLabel='Check out the shop'
      backgroundColor='white'
      subtitle="Subtitle"
      title="Heading Line 1 Heading Line 2"
      height='auto'
      ctaBgColor="blue_dark"
    >
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
  </div>;
  ```

### SingleMessageDs no Image no Link

  ```js
  const data = require('../../../styleguide/data/data').default;
  import Text from '../../Atoms/Text/Text';
  import Link from '../../Atoms/Link/Link';
  <div
    style={{
      display: 'flex',
      padding: '2rem 0',
      background: '#E1E2E3',
      justifyContent: 'space-around',
    }}>
    <SingleMessageDs
      backgroundColor='white'
      height='auto'
      subtitle="Subtitle"
      title="Heading Line 1 Heading Line 2"
      ctaBgColor="blue_dark"
    >
      <Text tag='p'>
        Whatever you’ve got planned, the Sport Relief shop has everything you need
        to get you looking your best while you’re raising some cash. Also
        available in Sainsbury’s stores and online and in selected Argos stores.
      </Text>
    </SingleMessageDs>
  </div>;
```
