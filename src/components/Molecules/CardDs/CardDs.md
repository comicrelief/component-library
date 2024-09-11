# CardDs
## Image and CTA are clickable and links user through to full content

### CardDs:  Image, Text & Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import { Internal } from '../../Atoms/Icons/index';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

<div
  style={{
    padding: '2rem 0',
    background: '#E1E2E3',
  }}
>
  <CardDs
    target="_blank"
    link="/home"
    linkLabel="find out more"
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">Title</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar lectus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor leo, id dictum mauris vulputate at.</Text>
    <Text tag="p">Nam vitae congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis vestibulum dolor nec maximus. Aenean vitae neque id odio tempor euismod ut luctus lacus. Vivamus lacus arcu, faucibus malesuada justo vel, iaculis mattis magna. Pellentesque sit amet pellentesque risus.</Text>
  </CardDs>
</div>;
```

### CardDs: Image & Text, No Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
import { Internal } from '../../Atoms/Icons/index';

<div
  style={{
    padding: '2rem 0',
    background: '#E1E2E3',
  }}
>
  <CardDs
    imageLow={defaultData.image}
    images={defaultData.images}
    imageAltText="Happy man going to work"
    backgroundColor="white"
    height="auto"
    icon={<Internal colour="white" />}
  >
    <Text tag="h3" color="purple" size="xl">Title</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar lectus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor leo, id dictum mauris vulputate at.</Text>
    <Text tag="p">Nam vitae congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis vestibulum dolor nec maximus. Aenean vitae neque id odio tempor euismod ut luctus lacus. Vivamus lacus arcu, faucibus malesuada justo vel, iaculis mattis magna. Pellentesque sit amet pellentesque risus.</Text>
  </CardDs>
</div>;
```

### CardDs: Text & Link
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import { Download } from '../../Atoms/Icons/index';

<div
  style={{
    padding: '2rem 0',
    background: '#E1E2E3',
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
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
<div
  style={{
    padding: '2rem 0',
    background: '#E1E2E3',
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

