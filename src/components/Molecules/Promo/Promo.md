Promo

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div>
<Text tag="h2" size="xl" color="black">
  Promo Upper
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={data.promoImage}
  image={data.promoImage}
  imageLow={data.promoImage}
  imageAltText=""
  copyFirst={true}
  hasOverlay={true}
  position="upper"
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
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
<br />
<Text tag="h2" size="xl" color="black">
  Promo End
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={data.promoImage}
  image={data.promoImage}
  imageLow={data.promoImage}
  imageAltText=""
  copyFirst={true}
  hasOverlay={true}
  position="end"
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
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
<br />
<Text tag="h2" size="xl" color="black">
  Promo Lower
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={data.promoImage}
  image={data.promoImage}
  imageLow={data.promoImage}
  imageAltText=""
  copyFirst={true}
  hasOverlay={true}
  position="lower"
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
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
<br />
<Text tag="h2" size="xl" color="black">
  Promo None
</Text>
<Promo
  backgroundColor="blue_dark"
  imageSet={data.promoImage}
  image={data.promoImage}
  imageLow={data.promoImage}
  imageAltText=""
  copyFirst={true}
  hasOverlay={true}
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
      <Text>
        Show me this
      </Text>
    </Link>
  </span>
</Promo>
</div>
```
