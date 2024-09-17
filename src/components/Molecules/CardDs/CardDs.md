# CardDs
## Image and CTA are clickable and links user through to full content

### CardDs: example 1 - Image, Text & Link, large amount of text
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
    <Text tag="h3" color="purple" size="xl">Example 1</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar le tus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor le , id dictum mauris vulputate at.</Text>
    <Text tag="p">Nam vitae congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis vestibulum dolor nec maximus. Aenean vitae neque id odio tempor euismod ut luctus lacus. Vivamus lacus arcu, faucibus male uada justo vel, iaculis mattis magna. Pelle tesque sit amet pelle tesque risus.</Text>
  </CardDs>
</div>;
```

### CardDs: example 2 - Image, Text & Link, small amount of text
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
    <Text tag="h3" color="purple" size="xl">Example 2</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar le tus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor le , id dictum mauris vulputate at.</Text>
  </CardDs>
</div>;
```

### CardDs: example 3 - Image & Text, No Link, large amount of text
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
    <Text tag="h3" color="purple" size="xl">Example 3</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar le tus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor le , id dictum mauris vulputate at.</Text>
    <Text tag="p">Nam vitae congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis vestibulum dolor nec maximus. Aenean vitae neque id odio tempor euismod ut luctus lacus. Vivamus lacus arcu, faucibus male uada justo vel, iaculis mattis magna. Pelle tesque sit amet pelle tesque risus.</Text>
  </CardDs>
</div>;
```

### CardDs: example 4 - Image & Text, No Link, small amount of text
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
    <Text tag="h3" color="purple" size="xl">Example 4</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar le tus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor le , id dictum mauris vulputate at.</Text>
  </CardDs>
</div>;
```

### CardDs: example 5 - Text & Link, large amount of text
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
    <Text tag="h3" color="purple" size="xl">Example 5</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar le tus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor le , id dictum mauris vulputate at.</Text>
    <Text tag="p">Nam vitae congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis vestibulum dolor nec maximus. Aenean vitae neque id odio tempor euismod ut luctus lacus. Vivamus lacus arcu, faucibus male uada justo vel, iaculis mattis magna. Pelle tesque sit amet pelle tesque risus.</Text>
  </CardDs>
</div>;
```

### CardDs: example 6 - Text & Link, small amount of text
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import Text from '../../Atoms/Text/Text';
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
    <Text tag="h3" color="purple" size="xl">Example 6</Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

### CardDs: example 7 - Text only, large amount of text
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
<div
  style={{
    padding: '2rem 0',
    background: '#E1E2E3',
  }}
>
  <CardDs backgroundColor="white" height="auto">
    <Text tag="h3" color="purple" size="xl">Example 7</Text>
    <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor semper sapien, vitae pulvinar le tus porta sit amet. Ut dapibus, est sed varius ornare, turpis lorem blandit purus, quis placerat mi mauris aliquam tellus. Maecenas dignissim auctor le , id dictum mauris vulputate at.</Text>
    <Text tag="p">Nam vitae congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis vestibulum dolor nec maximus. Aenean vitae neque id odio tempor euismod ut luctus lacus. Vivamus lacus arcu, faucibus male uada justo vel, iaculis mattis magna. Pelle tesque sit amet pelle tesque risus.</Text>
  </CardDs>
</div>;
```

### CardDs: example 8 - Text only, small amount of text
```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
<div
  style={{
    padding: '2rem 0',
    background: '#E1E2E3',
  }}
>
  <CardDs backgroundColor="white" height="auto">
    <Text tag="h3" color="purple" size="xl">Example 8</Text>
    <Text tag="p">Text body copy description</Text>
  </CardDs>
</div>;
```

