# CTAMultiCard
## Multi-card component that handles mapping through cards array internally

The component accepts raw Contentful data and handles rich text rendering internally - no frontend processing required.

### CTAMultiCard: Desktop Grid View (3 columns)
```js
import CTAMultiCard from './CTAMultiCard';
const exampleData = require('./example_data.json');

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={exampleData.data} />
</div>;
```

### CTAMultiCard: Mobile Carousel View
```js
const exampleData = require('./example_data.json');
import CTAMultiCard from './CTAMultiCard';

const data = {
  contentfulParagraphCardsDs: {
    ...exampleData.data.contentfulParagraphCardsDs,
    carouselOfCards: true
  }
};

<div style={{ width: '375px', padding: '1rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={data} />
</div>;
```

### CTAMultiCard: Mobile Stack View (Vertical)
```js
const exampleData = require('./example_data.json');
import CTAMultiCard from './CTAMultiCard';

const data = {
  contentfulParagraphCardsDs: {
    ...exampleData.data.contentfulParagraphCardsDs,
    carouselOfCards: false
  }
};

<div style={{ width: '375px', padding: '1rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={data} />
</div>;
```
