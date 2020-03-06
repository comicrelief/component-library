Single Message

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<Promo
  backgroundColor="blue_dark"
  imageSet={data.promoImage}
  image={data.promoImage}
  imageAltText=""
  copyFirst={false}
  nudge="bottom"
>
  <Text
    tag="h1"
    color="white"
    size="super"
    family="Anton"
    uppercase
    weight="normal"
  >
    Curabitur pretium tincidunt lacus
  </Text>
  <Text tag="p" color="white">
    Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
    turpis et commodo, est eros bibendum elit, nec luctus magna sollicitudin.
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      Show me this
    </Link>
  </span>
</Promo>;
```
