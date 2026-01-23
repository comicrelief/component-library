# Dynamic Gallery

### Empty gallery

```js
<DynamicGallery />
```

### Basic gallery

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createCards from './_utils';
<DynamicGallery cards={createCards(25)} />;
```

### Gallery with max 4 columns

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createCards from './_utils';
<DynamicGallery maxColumns={4} cards={createCards(4)} />;
```

### Gallery with max 5 columns

```js
const defaultData = require('../../../styleguide/data/data').defaultData;
import createCards from './_utils';
<DynamicGallery maxColumns={5} cards={createCards(5)} />;
```
