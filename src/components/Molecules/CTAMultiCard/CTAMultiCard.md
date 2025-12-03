# CTAMultiCard
## Multi-card component that handles mapping through cards array internally

The component accepts raw Contentful data and handles rich text rendering internally - no frontend processing required.

### CTAMultiCard: Desktop Grid View (3 columns)
```js
import CTAMultiCard from './CTAMultiCard';
const exampleData = require('./example_data.json');

const data = {
  contentfulParagraphCardsDs: {
    ...exampleData.data.contentfulParagraphCardsDs,
    backgroundColour: "transparent"
  }
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={data} />
</div>;
```

### CTAMultiCard: Desktop Grid View (2 columns)

**NB: One card contains a lot of lorem ipsum text to demonstrate that all cards will match the height of the tallest sibling card.**

```js
import CTAMultiCard from './CTAMultiCard';
const exampleData = require('./example_data.json');

const dataWithLongText = {
  contentfulParagraphCardsDs: {
    ...exampleData.data.contentfulParagraphCardsDs,
    layout: "2 columns",
    backgroundColour: "Transparent",
    cards: [
      exampleData.data.contentfulParagraphCardsDs.cards[0],
      {
        ...exampleData.data.contentfulParagraphCardsDs.cards[1],
        body: {
          raw: JSON.stringify({
            nodeType: "document",
            data: {},
            content: [
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    marks: [],
                    data: {}
                  }
                ]
              },
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                    marks: [],
                    data: {}
                  }
                ]
              },
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
                    marks: [],
                    data: {}
                  }
                ]
              }
            ]
          })
        }
      }
    ]
  }
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={dataWithLongText} />
</div>;
```

### CTAMultiCard: Mobile Carousel View

**NB: These mobile views look janky if you're in desktop mode. Switch your browser to mobile view, or reduce the width of the viewport, to see them as they should look.**

```js
const exampleData = require('./example_data.json');
import CTAMultiCard from './CTAMultiCard';

const data = {
  contentfulParagraphCardsDs: {
    ...exampleData.data.contentfulParagraphCardsDs,
    carouselOfCards: true,
    backgroundColour: "Transparent"
  }
};

<div style={{ width: '350px' }}>
  <CTAMultiCard data={data} />
</div>;
```

### CTAMultiCard: Mobile Stack View (Vertical)

**NB: These mobile views look janky if you're in desktop mode. Switch your browser to mobile view, or reduce the width of the viewport, to see them as they should look.**

```js
const exampleData = require('./example_data.json');
import CTAMultiCard from './CTAMultiCard';

const data = {
  contentfulParagraphCardsDs: {
    ...exampleData.data.contentfulParagraphCardsDs,
    carouselOfCards: false,
    backgroundColour: "Transparent"
  }
};

<div style={{ width: '375px', padding: '1rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={data} />
</div>;
```
