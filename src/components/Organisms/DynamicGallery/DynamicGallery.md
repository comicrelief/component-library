# Dynamic Gallery

### Empty gallery

```js
<DynamicGallery />
```

### Basic gallery

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createMockGalleryNodes from './_utils';
<DynamicGallery nodes={createMockGalleryNodes(25)} />;
```

### Gallery with max 4 columns

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createMockGalleryNodes from './_utils';
<DynamicGallery maxColumns={4} nodes={createMockGalleryNodes(4)} />;
```

### Gallery with max 5 columns

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createMockGalleryNodes from './_utils';
<DynamicGallery maxColumns={5} nodes={createMockGalleryNodes(5)} />;
```
