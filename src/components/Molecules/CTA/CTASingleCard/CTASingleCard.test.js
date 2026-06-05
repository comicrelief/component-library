import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../../tests/hoc/shallowWithTheme';
import CTASingleCard from './CTASingleCard';
import Text from '../../../Atoms/Text/Text';

const makeProcessedCard = (card) => {
  const fallback = card?.image?.gatsbyImageData?.images?.fallback?.src;
  const imageLow = card?.image?.gatsbyImageData?.placeholder?.fallback;
  const images = card?.image?.gatsbyImageData?.images?.sources?.[0]?.srcSet;

  return {
    ...card,
    fallback,
    imageLow,
    images,
    bgColour: 'white',
    description: card?.image?.description || '',
    target: 'self',
    external: null
  };
};

const exampleCard = {
  id: 'single-card-1',
  label: 'Example Label',
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

const cardWithoutImage = {
  id: 'single-card-no-image',
  label: 'Example Label',
  body: (
    <Text tag="p">
      Card without image
    </Text>
  ),
  backgroundColour: "Blue Light",
  link: "/test-no-image",
  linkLabel: "View card",
  image: null
};

it('renders correctly with data prop', () => {
  const tree = renderWithTheme(
    <CTASingleCard data={{ card: makeProcessedCard(exampleCard), paddingAbove: '1rem', paddingBelow: '2rem' }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly without image', () => {
  const tree = renderWithTheme(
    <CTASingleCard data={{ card: makeProcessedCard(cardWithoutImage), paddingAbove: '1rem', paddingBelow: '2rem' }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('returns null when card is not provided', () => {
  const tree = renderWithTheme(
    <CTASingleCard data={{ card: null, paddingAbove: '1rem', paddingBelow: '2rem' }} />
  ).toJSON();

  expect(tree).toBeNull();
});
