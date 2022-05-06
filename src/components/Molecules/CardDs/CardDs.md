# CardDs
## Image and CTA are clickable and links user through to full content


### CardDs:  Image& Text & Link
```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Internal } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="_blank"
    link="/home"
    linkLabel="find out more"
    imageLow={data.image}
    images={data.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```


### CardDs: Text & Link
```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Download } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="blank"
    link="/home"
    linkLabel="find out more"
    backgroundColor="white"
    height="auto"
    icon={<Download colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

### CardDs: Text only
```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs backgroundColor="white" height="auto">
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

### CardDs: Image & Text, No Link
```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import { Internal } from '../../Atoms/Icons/index';

<div
  style={{
    display: 'flex',
    padding: '2rem 0',
    background: '#E1E2E3',
    justifyContent: 'space-around'
  }}
>
  <CardDs
    target="_blank"
    imageLow={data.image}
    images={data.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```