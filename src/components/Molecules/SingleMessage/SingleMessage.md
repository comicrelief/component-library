Single Message

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={defaultData.images}
  image={defaultData.image}
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
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={defaultData.images}
  image={defaultData.image}
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
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<SingleMessage
  backgroundColor="purple_dark"
  imageSet={defaultData.images}
  image={defaultData.image}
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

Single Message with no Image - padding unmodified

```js
import Text from '../../Atoms/Text/Text';

<SingleMessage backgroundColor="purple_dark" copyFirst={false} paddingOption="both_on">
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```

Single Message with no Image - no bottom padding

```js
import Text from '../../Atoms/Text/Text';

<SingleMessage backgroundColor="purple_dark" copyFirst={false} paddingOption="lower_off">
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```


Single Message with no Image - no top padding

```js
import Text from '../../Atoms/Text/Text';

<SingleMessage backgroundColor="purple_dark" copyFirst={false} paddingOption="upper_off">
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```

Single Message with no Image - no top and bottom padding

```js
import Text from '../../Atoms/Text/Text';

<SingleMessage backgroundColor="purple_dark" copyFirst={false} paddingOption="both_off">
  <Text tag="p" color="white" size="xxl">
    “The creativity that goes into helping people have a better life is
    extraordinary.”
  </Text>
</SingleMessage>;
```

Single Message vertical height 100%

```js
import Text from '../../Atoms/Text/Text';
const defaultData = require('../../../styleguide/data/data').defaultData;
<SingleMessage
  backgroundColor="purple_dark"
  imageLow={defaultData.imageLow}
  imageSet={defaultData.images}
  image={defaultData.image}
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
const defaultData = require('../../../styleguide/data/data').defaultData;
<SingleMessage
  backgroundColor="yellow"
  imageLow={defaultData.imageLow}
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  imageSet2={defaultData.images}
  image2={defaultData.image}
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
const defaultData = require('../../../styleguide/data/data').defaultData;
import exampleYoutubeIds from './_ExampleYoutubeIds.js';

<SingleMessage
  backgroundColor="purple"
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  copyFirst={true}
  videoID={exampleYoutubeIds[0]}
  landscapeVideo
>
  <Text tag="p" color="black" size="xxl">
    Single Message with 16:9 video, copy first
  </Text>
</SingleMessage>;
```

```js
import Text from '../../Atoms/Text/Text';
const defaultData = require('../../../styleguide/data/data').defaultData;
import exampleYoutubeIds from './_ExampleYoutubeIds.js';

<SingleMessage
  backgroundColor="purple"
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  copyFirst={false}
  videoID={exampleYoutubeIds[1]}
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
const defaultData = require('../../../styleguide/data/data').defaultData;
import exampleYoutubeIds from './_ExampleYoutubeIds.js';

<SingleMessage
  backgroundColor="purple"
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  copyFirst={true}
  videoID={exampleYoutubeIds[2]}
>
  <Text tag="p" color="black" size="xxl">
    Single Message with portrait video
  </Text>
</SingleMessage>;
```

Single Message with portrait video, 100VH

```js
import Text from '../../Atoms/Text/Text';
import exampleYoutubeIds from './_ExampleYoutubeIds.js';
const defaultData = require('../../../styleguide/data/data').defaultData;

<SingleMessage
  backgroundColor="purple"
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  copyFirst={true}
  videoID={exampleYoutubeIds[3]}
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
const defaultData = require('../../../styleguide/data/data').defaultData;
import exampleYoutubeIds from './_ExampleYoutubeIds.js';

<SingleMessage
  backgroundColor="purple"
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  copyFirst={true}
  videoID={exampleYoutubeIds[4]}
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
const defaultData = require('../../../styleguide/data/data').defaultData;
import exampleYoutubeIds from './_ExampleYoutubeIds.js';

<SingleMessage
  backgroundColor="purple"
  imageSet={defaultData.images}
  image={defaultData.image}
  imageAltText=""
  copyFirst={true}
  videoID={exampleYoutubeIds[5]}
  fullImage={true}
>
  <Text tag="p" color="black" size="xxl">
    Single Message with portrait video, 50VH,fullwidth image - (this copy hidden
    by design)
  </Text>
</SingleMessage>;
```
