import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import CTAMultiCard from './CTAMultiCard';
import RichText from '../../Atoms/RichText/RichText';

// Mock data matching example_data.json structure
const mockData = {
  contentfulParagraphCardsDs: {
    title: 'test cards 6',
    backgroundColour: 'Transparent',
    layout: '3 columns',
    columnsOnMd: false,
    paddingOptions: 'Both Off',
    carouselOfCards: false,
    cards: [
      {
        id: 'fd8ef3fc-7d0d-531b-b2d2-9ac5f40d3d14',
        title: 'Full Card Oooh Chilly',
        backgroundColour: 'White',
        link: '/test',
        linkLabel: 'test go',
        body: <RichText markup="<p><strong>Load</strong> of text here</p>" />,
        image: {
          description: 'Test image',
          gatsbyImageData: {
            images: {
              sources: [
                {
                  srcSet: 'https://images.ctfassets.net/test.jpg?w=678&h=501&q=80&fm=webp 678w',
                  sizes: '100vw',
                  type: 'image/webp'
                }
              ],
              fallback: {
                src: 'https://images.ctfassets.net/test.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg',
                srcSet: 'https://images.ctfassets.net/test.jpg?w=678&h=501&fl=progressive&q=80&fm=jpg 678w',
                sizes: '100vw'
              }
            },
            layout: 'fullWidth',
            width: 1,
            height: 0.7389380530973452,
            placeholder: {
              fallback: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z'
            }
          }
        }
      },
      {
        id: '6bc887c7-f939-5654-a0c5-1b2caf91de6c',
        title: 'Card no pic',
        backgroundColour: 'Blue Light',
        link: null,
        linkLabel: null,
        body: <RichText markup="<p>Load of text here</p>" />,
        image: null
      }
    ]
  }
};

it('renders correctly with data prop', () => {
  const tree = renderWithTheme(
    <CTAMultiCard data={mockData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders carousel mode correctly', () => {
  const carouselData = {
    ...mockData.contentfulParagraphCardsDs,
    carouselOfCards: true
  };

  const tree = renderWithTheme(
    <CTAMultiCard data={{ contentfulParagraphCardsDs: carouselData }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders 2 columns layout correctly', () => {
  const twoColumnData = {
    ...mockData.contentfulParagraphCardsDs,
    layout: '2 columns'
  };

  const tree = renderWithTheme(
    <CTAMultiCard data={{ contentfulParagraphCardsDs: twoColumnData }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('handles flat data structure', () => {
  const flatData = {
    cards: mockData.contentfulParagraphCardsDs.cards,
    backgroundColour: 'White',
    layout: '3 columns',
    carouselOfCards: false
  };

  const tree = renderWithTheme(
    <CTAMultiCard data={flatData} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
