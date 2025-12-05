import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import CTAMultiCard from './CTAMultiCard';
import exampleData from './example_data.json';

const mockData = {
  ...exampleData,
  // Add a card without image for testing edge cases. This should not ever really happen in real life, but just in case...
  cards: [
    ...exampleData.cards,
    {
      id: '6bc887c7-f939-5654-a0c5-1b2caf91de6c',
      title: 'Card no pic',
      backgroundColour: 'Blue Light',
      link: '/test-no-image',
      linkLabel: 'View card',
      body: {
        raw: '{"nodeType":"document","data":{},"content":[{"nodeType":"paragraph","data":{},"content":[{"nodeType":"text","value":"Load of text here","marks":[],"data":{}}]}]}'
      },
      image: null
    }
  ]
};

it('renders correctly with data prop', () => {
  const tree = renderWithTheme(
    <CTAMultiCard data={mockData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders carousel mode correctly', () => {
  const carouselData = {
    ...mockData,
    carouselOfCards: true
  };

  const tree = renderWithTheme(
    <CTAMultiCard data={carouselData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders 2 columns layout correctly', () => {
  const twoColumnData = {
    ...mockData,
    layout: '2 columns'
  };

  const tree = renderWithTheme(
    <CTAMultiCard data={twoColumnData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('handles data structure correctly', () => {
  const testData = {
    cards: mockData.cards,
    backgroundColour: 'White',
    layout: '3 columns',
    carouselOfCards: false
  };

  const tree = renderWithTheme(
    <CTAMultiCard data={testData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
