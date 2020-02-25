# CardDs

## Image and CTA are clickable and links user through to full conten

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div style={{ display: 'flex', background: '#E1E2E3' }}>
  <CardDs
    imageLow={data.image}
    images={data.images}
    backgroundColor="white"
    height="auto"
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

### CardDs no body

```js
const data = require('../../../styleguide/data/data').default;

<CardDs imageLow={data.image} images={data.image} />;
```
