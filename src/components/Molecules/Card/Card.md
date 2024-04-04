# Card
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<Card
  imageLow={defaultData.image}
  images={defaultData.images}
  backgroundColor="grey_light"
  height="auto"
>
  <Text tag="h3" color="purple" size="xl">
    Title
  </Text>
  <Text tag="p">Text body copy description</Text>
</Card>;
```

### Card row option
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<Card
  imageLow={defaultData.image}
  images={defaultData.images}
  backgroundColor="grey_light"
  height="auto"
  smallBreakpointLayout="Row"
  mediumBreakpointLayout="Row"
>
  <Text tag="h2" color="black">
    TITLE
  </Text>
  <Text tag="p">Text body copy description. Loads more text test. Loads more text test. Loads more texty text testing more text.</Text>
</Card>;
```

### Card no body

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<Card
  imageLow={defaultData.image}
  images={defaultData.image}
/>;
```
