# Card

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<Card
  imageLow={data.image}
  images={data.images}
  backgroundColor="yellow"
  height="auto"
>
  <Text tag="h3" color="purple" size="xl">
    Title
  </Text>
  <Text tag="p">Text body copy description</Text>
</Card>;
```

With label on a light background

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<Card
  imageLow={data.image}
  images={data.images}
  backgroundColor="yellow"
  height="auto"
  label="Label"
>
  <Text tag="h3" color="purple" size="xl">
    Title
  </Text>
  <Text tag="p">Text body copy description</Text>
</Card>;
```

With label on a dark background

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<Card
  imageLow={data.image}
  images={data.images}
  backgroundColor="purple_dark"
  height="auto"
  label="Label"
>
  <Text tag="h3" color="purple" size="xl">
    Title
  </Text>
  <Text tag="p" color="white">
    Text body copy description
  </Text>
</Card>;
```
