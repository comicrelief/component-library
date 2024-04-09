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
  smallBreakpointRowLayout={true}
  mediumBreakpointRowLayout={true}
>
  <Text tag="h2" color="black">
    TITLE
  </Text>
  <Text tag="p">
    Your donations make a very real difference to people in the UK and around the world, whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other time of year. Here are some of the many stories that show how people are changing their lives with your support.
  </Text>
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
