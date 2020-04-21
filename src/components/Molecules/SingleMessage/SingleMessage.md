Single Message

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={false}
>
  <Text tag="h1" color="white" size="super">
    title
  </Text>
  <Text tag="p" color="white">
    description
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      CTA
    </Link>
  </span>
</SingleMessage>;
```

Single Message fullImage

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={false}
  fullImage={true}
  vhFull
>
  <Text tag="h1" color="white" size="xxl">
    title
  </Text>
  <Text tag="p" color="white">
    description
  </Text>
  <span>
    <Link href="/" type="button" color="white">
      CTA
    </Link>
  </span>
</SingleMessage>;
```

Single Message fullImage no copy

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={false}
  fullImage={true}
  vhFull
/>;
```

Single Message with no Image

```js
import Text from '../../Atoms/Text/Text';

<SingleMessage backgroundColor="purple_dark" copyFirst={false}>
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```

Single Message vertical height 100%

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple_dark"
  imageLow={data.imageLow}
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  vhFull
>
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```

Single Message double image

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="yellow"
  imageLow={data.imageLow}
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  imageSet2={data.images}
  image2={data.image}
  imageAltText2=""
>
  <Text tag="p" color="black" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```

Single Message with 16:9 video

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={true}
  videoID="WUgvvPRH7Oc"
  landscapeVideo
>
  <Text tag="p" color="black" size="xxl">
    Single Message with 16:9 video, copy first
  </Text>
</SingleMessage>;
```

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={false}
  videoID="WUgvvPRH7Oc"
  landscapeVideo
>
  <Text tag="p" color="black" size="xxl">
    Single Message with 16:9 video
  </Text>
</SingleMessage>;
```

Single Message with portrait video

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={true}
  videoID="FoMlSB6ftQg"
>
  <Text tag="p" color="black" size="xxl">
    Single Message with portrait video
  </Text>
</SingleMessage>;
```

Single Message with portrait video, 100VH

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={true}
  videoID="fwCQRMlKBnA"
  vhFull
>
  <Text tag="p" color="black" size="xxl">
    Single Message with portrait video, 100VH
  </Text>
</SingleMessage>;
```

Single Message with landscape video, 100VH, fullwidth image

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={true}
  videoID="WUgvvPRH7Oc"
  vhFull
  fullImage={true}
>
  <Text tag="p" color="black" size="xxl">
    Single Message with portrait video, 100VH, fullwidth image - (this copy
    hidden by design)
  </Text>
</SingleMessage>;
```

Single Message with landscape video, 50VH, fullwidth image

```js
import Text from '../../Atoms/Text/Text';
const data = require('../../../styleguide/data/data').default;

<SingleMessage
  backgroundColor="purple"
  imageSet={data.images}
  image={data.image}
  imageAltText=""
  copyFirst={true}
  videoID="WUgvvPRH7Oc"
  fullImage={true}
>
  <Text tag="p" color="black" size="xxl">
    Single Message with portrait video, 50VH,fullwidth image - (this copy hidden
    by design)
  </Text>
</SingleMessage>;
```
