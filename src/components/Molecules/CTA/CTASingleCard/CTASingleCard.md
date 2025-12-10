# CTASingleCard
## Single full-width card component

This component displays a single card, full-width across the page. It looks and behaves like the single cards from CTAMultiCard, but is always displayed as a single full-width card with no grid layout or carousel functionality.

The component expects pre-rendered content to be passed in the `body` field of the card. The frontend should handle rich text rendering before passing data to this component.

### CTASingleCard: Basic Example

```js
import CTASingleCard from './CTASingleCard';
import Text from '../../../Atoms/Text/Text';

const exampleCard = {
  id: 'single-card-1',
  body: (
    <Text tag="p">
      <strong>Single Card</strong> content here
    </Text>
  ),
  image: {
    description: "Example image",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&q=80&fm=webp 678w",
            sizes: "100vw",
            type: "image/webp"
          }
        ],
        fallback: {
          src: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg",
          srcSet: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg 678w",
          sizes: "100vw"
        }
      },
      layout: "fullWidth",
      width: 1,
      height: 0.7389380530973452,
      placeholder: {
        fallback: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z"
      }
    }
  },
  backgroundColour: "White",
  link: "/test",
  linkLabel: "Learn more"
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTASingleCard card={exampleCard} />
</div>;
```

### CTASingleCard: With Background Colour

```js
import CTASingleCard from './CTASingleCard';
import Text from '../../../Atoms/Text/Text';

const exampleCard = {
  id: 'single-card-2',
  body: (
    <Text tag="p">
      Single card with custom background colour
    </Text>
  ),
  image: {
    description: "Example image",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&q=80&fm=webp 678w",
            sizes: "100vw",
            type: "image/webp"
          }
        ],
        fallback: {
          src: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg",
          srcSet: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg 678w",
          sizes: "100vw"
        }
      },
      layout: "fullWidth",
      width: 1,
      height: 0.7389380530973452,
      placeholder: {
        fallback: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z"
      }
    }
  },
  backgroundColour: "White",
  link: "/test",
  linkLabel: "Learn more"
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTASingleCard card={exampleCard} backgroundColour="grey_2" />
</div>;
```

### CTASingleCard: With Long Text

**NB: This example contains a lot of lorem ipsum text to demonstrate that the card will grow in height to accommodate longer content. The image proportion remains constant (1/3 width on desktop), while the card height adjusts based on the text content.**

```js
import CTASingleCard from './CTASingleCard';
import Text from '../../../Atoms/Text/Text';

const exampleCardWithLongText = {
  id: 'single-card-long-text',
  body: (
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
      <Text tag="p">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </Text>
    </>
  ),
  image: {
    description: "Example image",
    gatsbyImageData: {
      images: {
        sources: [
          {
            srcSet: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&q=80&fm=webp 678w",
            sizes: "100vw",
            type: "image/webp"
          }
        ],
        fallback: {
          src: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg",
          srcSet: "https://images.ctfassets.net/zsfivwzfgl3t/4VsIykPLHDNkNCT9djGrX/c8f1e4cb5c6bda5a7b77f18501e9304d/challenge-1.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg 678w",
          sizes: "100vw"
        }
      },
      layout: "fullWidth",
      width: 1,
      height: 0.7389380530973452,
      placeholder: {
        fallback: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z"
      }
    }
  },
  backgroundColour: "White",
  link: "/test",
  linkLabel: "Learn more"
};

<div style={{ padding: '2rem', background: '#E1E2E3' }}>
  <CTASingleCard card={exampleCardWithLongText} />
</div>;
```
