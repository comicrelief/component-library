# Dynamic Gallery

### Empty gallery

```js
<DynamicGallery />
```

### Basic gallery

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createMockGalleryNodes from './_utils';
<DynamicGallery nodes={createMockGalleryNodes(10)} />;
```

### Customised gallery with multiple options
```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createMockGalleryNodes from './_utils';
<DynamicGallery gridWidth={4} nodes={createMockGalleryNodes(4)} imageRatio="4:3" pageBackgroundColour="blue" textColour="white" paddingTop="6rem" paddingBottom="6rem" useLightbox={false} />;
```

### Gallery with max 5 columns

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createMockGalleryNodes from './_utils';
<DynamicGallery gridWidth={5} nodes={createMockGalleryNodes(5)} />;
```
