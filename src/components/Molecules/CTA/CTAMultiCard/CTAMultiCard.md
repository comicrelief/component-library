# CTAMultiCard
## Multi-card component that handles mapping through cards array internally

The component expects pre-rendered content to be passed in the `body` field of each card. The frontend should handle rich text rendering before passing data to this component.

### CTAMultiCard: Desktop Grid View (3 columns)

**NB: In mobile view, this example displays as a carousel.**

```js
import CTAMultiCard from './CTAMultiCard';
import Text from '../../../Atoms/Text/Text';
const exampleData = require('./example_data.json');

// Map cards to include pre-rendered body content
const cardsWithRenderedBody = exampleData.cards.map(card => ({
  ...card,
  body: (
    <Text tag="p">
      <strong>Load</strong> of text here
    </Text>
  )
}));

const data = {
  ...exampleData,
  cards: cardsWithRenderedBody,
  carouselOfCards: true,
  backgroundColour: "transparent"
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={data} />
</div>;
```

### CTAMultiCard: Desktop Grid View (2 columns)

**NB: One card contains a lot of lorem ipsum text to demonstrate that all cards will match the height of the tallest sibling card. In mobile view, this example displays as a vertical stack (non-carousel).**

```js
import CTAMultiCard from './CTAMultiCard';
import Text from '../../../Atoms/Text/Text';
const exampleData = require('./example_data.json');

// Map cards to include pre-rendered body content
const cardsWithRenderedBody = exampleData.cards.map((card, index) => ({
  ...card,
  body: index === 1 ? (
    <>
      <Text tag="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text tag="p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </Text>
      <Text tag="p">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </Text>
    </>
  ) : (
    <Text tag="p">
      <strong>Load</strong> of text here
    </Text>
  )
}));

const dataWithLongText = {
  ...exampleData,
  layout: "2 columns",
  carouselOfCards: false,
  backgroundColour: "Transparent",
  cards: cardsWithRenderedBody
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTAMultiCard data={dataWithLongText} />
</div>;
```
