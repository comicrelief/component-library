Single Message

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple"
  imageSet={data.pictures}
  imageAltText=""
  copyFirst={false}
>
  <Text tag="h1" color="white" size="xxl">
    title
  </Text>
  <Text tag="p" color="white">
    description
  </Text>
  <Link href="/" color="white">
    CTA
  </Link>
</SingleMessage>;
```

Single Message fullImage

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple"
  imageSet={data.pictures}
  imageAltText=""
  copyFirst={false}
  fullImage={true}
>
  <Text tag="h1" color="white" size="xxl">
    title
  </Text>
  <Text tag="p" color="white">
    description
  </Text>
  <Link href="/" color="white">
    CTA
  </Link>
</SingleMessage>;
```

Single Message with no Image

```js
import Text from '../../Atoms/Text/Text';

<SingleMessage backgroundColor="purple" copyFirst={false}>
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```
