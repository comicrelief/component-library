# Richtext Carousel

```js
const { RichtextCarouselItems } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2 style={{textAlign: 'center'}}>
            All fields supplied, autoplay off:
        </h2>
        <RichtextCarousel data={RichtextCarouselItems}/>
    </div>
    
```

```js
const { carouselItemsIncomplete } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2 style={{textAlign: 'center'}}>
            All REQUIRED fields supplied (nodes 1-4), various incomplete nodes, node 11 complete, autoplay off:
        </h2>
        <RichtextCarousel data={carouselItemsIncomplete}/>
    </div>
    
```

```js
const { carouselItemsMinimal } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2 style={{textAlign: 'center'}}>
            All REQUIRED fields supplied (nodes 1-4), autoplay off:
        </h2>
        <RichtextCarousel data={carouselItemsMinimal}/>
    </div>
    
```