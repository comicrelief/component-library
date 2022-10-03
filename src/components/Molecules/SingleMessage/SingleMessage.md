Single Message

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple_dark"
  imageLow={desktopImages.imageLow}
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="yellow"
  imageLow={desktopImages.imageLow}
  imageSet={desktopImages.images}
  image={desktopImages.image}
  imageAltText=""
  imageSet2={desktopImages.images}
  image2={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<SingleMessage
  backgroundColor="purple"
  imageSet={desktopImages.images}
  image={desktopImages.image}
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
