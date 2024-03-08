# 'What Your Money Does' Carousel

```js
const { carouselItemsComplete } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2 style={{textAlign: 'center'}}>
            All fields supplied, autoplay on:
        </h2>
        <WYMDCarousel data={carouselItemsComplete}/>
    </div>
    
```

```js
const { carouselItemsIncomplete } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2 style={{textAlign: 'center'}}>
            All REQUIRED fields supplied (nodes 1-4), various incomplete nodes, node 11 complete, autoplay off:
        </h2>
        <WYMDCarousel data={carouselItemsIncomplete}/>
    </div>
    
```

```js
const { carouselItemsMinimal } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2 style={{textAlign: 'center'}}>
            All REQUIRED fields supplied (nodes 1-4), autoplay off:
        </h2>
        <WYMDCarousel data={carouselItemsMinimal}/>
    </div>
    
```