# Card

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<Card
  imageLow={defaultData.image}
  images={defaultData.images}
  backgroundColor="yellow"
  height="auto"
>
  <Text tag="h3" color="purple" size="xl">
    Title
  </Text>
  <Text tag="p">Text body copy description</Text>
</Card>;
```

### Card no body

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<Card imageLow={defaultData.image} images={defaultData.image} />;
```
