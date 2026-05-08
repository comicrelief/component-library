# Box

## Flexible container only (‘invisible’ to user)

```js
const defaultData = require('../../../styleguide/data/data').defaultData;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div style={{ display: 'flex', background: '#E1E2E3' }}>
  <div style={{ width: '50%', margin: '1rem' }}>
    <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
      <Text tag="h3" family="Anton" color="black" size="xl" uppercase>
        Title
      </Text>
      <Text tag="p">Text body copy description</Text>
    </Box>
  </div>
  <div style={{ width: '50%', margin: '1rem' }}>
    <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
      <Text tag="h3" family="Anton" color="black" size="xl" uppercase>
        Title
      </Text>
      <Text tag="p">Text body copy description</Text>
    </Box>
  </div>
</div>;
```

### Box no body

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
<Box imageLow={defaultData.image} images={defaultData.image} />;
```
