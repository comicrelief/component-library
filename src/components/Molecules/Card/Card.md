# Card

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<Card
  imageLow={desktopImages.image}
  images={desktopImages.images}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<Card imageLow={desktopImages.image} images={desktopImages.image} />;
```
