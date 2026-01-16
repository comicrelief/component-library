# CTAMultiCard
## Multi-card component that handles mapping through cards array internally

The component expects pre-rendered content to be passed in the `body` field of each card. The frontend should handle rich text rendering before passing data to this component.

**Note:** The frontend is responsible for processing image data, link targets, and background colors. Each card object should include the following processed fields:
- `fallback`: The fallback image src from `image.gatsbyImageData.images.fallback.src`
- `imageLow`: The placeholder image from `image.gatsbyImageData.placeholder.fallback`
- `images`: The srcSet from `image.gatsbyImageData.images.sources[0].srcSet`
- `bgColour`: The processed background color (snake_case format)
- `description`: The image description from `image.description`
- `target`: The link target ('self' for internal links, 'blank' for external)
- `external`: The rel attribute ('noopener' for external links, null for internal)

### CTAMultiCard: Desktop Grid View (3 columns)

**NB: In mobile view, this example displays as a carousel. This example also demonstrates no vertical padding via `paddingAbove` / `paddingBelow` set to `0rem`, so it will sit flush to the surrounding container.**

```js
import CTAMultiCard from './CTAMultiCard';
import Text from '../../Atoms/Text/Text';
import challengeExampleImage from '../../../styleguide/assets/challenge-1.jpg';
const exampleData = require('./example_data.json');

// Map cards to include pre-rendered body content and processed image/link data
const cardsWithRenderedBody = exampleData.cards.map(card => ({
  ...card,
  body: (
    <Text tag="p">
      <strong>Load</strong> of text here
    </Text>
  ),
  fallback: challengeExampleImage,
  imageLow: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z",
  images: `${challengeExampleImage} 678w`,
  bgColour: "white",
  description: "",
  target: "self",
  external: null
}));

const data = {
  ...exampleData,
  cards: cardsWithRenderedBody,
  carouselOfCards: true,
  backgroundColour: "transparent",
  paddingAbove: '0rem',
  paddingBelow: '0rem'
};

<div style={{ background: '#E1E2E3' }}>
  <CTAMultiCard data={data} />
</div>;
```

### CTAMultiCard: Desktop Grid View (2 columns)

**NB: One card contains a lot of lorem ipsum text to demonstrate that all cards will match the height of the tallest sibling card. In mobile view, this example displays as a vertical stack (non-carousel). This example also demonstrates larger vertical padding via `paddingAbove` / `paddingBelow` set to `4rem`, so it will appear with more space above and below the cards.**

```js
import CTAMultiCard from './CTAMultiCard';
import Text from '../../Atoms/Text/Text';
import challengeExampleImage from '../../../styleguide/assets/challenge-1.jpg';
const exampleData = require('./example_data.json');

// Map cards to include pre-rendered body content and processed image/link data
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
  ),
  fallback: challengeExampleImage,
  imageLow: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z",
  images: `${challengeExampleImage} 678w`,
  bgColour: "white",
  description: "",
  target: "self",
  external: null
}));

const dataWithLongText = {
  ...exampleData,
  layout: "2 columns",
  carouselOfCards: false,
  backgroundColour: "Transparent",
  cards: cardsWithRenderedBody,
  paddingAbove: '4rem',
  paddingBelow: '4rem'
};

<div style={{ background: '#E1E2E3' }}>
  <CTAMultiCard data={dataWithLongText} />
</div>;
```
