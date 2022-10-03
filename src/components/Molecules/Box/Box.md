# Box

## Flexible container only (‘invisible’ to user)

```js
const desktopImages = require('../../../styleguide/data/data').desktopImages;import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
<div style={{ display: 'flex', background: '#E1E2E3' }}>
  <div style={{ width: '50%', margin: '1rem' }}>
    <Box imageLow={desktopImages.image} images={desktopImages.images} height="auto">
      <Text tag="h3" family="Anton" color="black" size="xl" uppercase>
        Title
      </Text>
      <Text tag="p">Text body copy description</Text>
    </Box>
  </div>
  <div style={{ width: '50%', margin: '1rem' }}>
    <Box imageLow={desktopImages.image} images={desktopImages.images} height="auto">
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
const desktopImages = require('../../../styleguide/data/data').desktopImages;
<Box imageLow={desktopImages.image} images={desktopImages.image} />;
```
