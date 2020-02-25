# Box

## Flexible container only (‘invisible’ to user)

```js
const data = require('../../../styleguide/data/data').default;
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div style={{ display: 'flex', background: '#E1E2E3' }}>
  <Box imageLow={data.image} images={data.images} height="auto">
    <Text tag="h3" family="Anton" color="black" size="xl" uppercase>
      Title
    </Text>
    <Text tag="p">Text body copy description</Text>
  </Box>
</div>;
```

### Box no body

```js
const data = require('../../../styleguide/data/data').default;

<Box imageLow={data.image} images={data.image} />;
```
