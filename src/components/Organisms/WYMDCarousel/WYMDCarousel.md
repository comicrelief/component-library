# 'What Your Money Does' Carousel

```js
const { carouselItemsComplete, carouselItemsIncomplete } = require('../../../styleguide/data/data');
import Text from '../../Atoms/Text/Text';

    <div>
        <h2>All fields supplied </h2>
        <WYMDCarousel data={carouselItemsComplete}/>
    
        <h2>Incomplete fields </h2>
        <WYMDCarousel data={carouselItemsIncomplete}/>
    </div>

```
