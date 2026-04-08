import React from 'react';
import CTAMultiCard from './CTAMultiCard';
import Text from '../../../Atoms/Text/Text';
import ctaMultiCardExampleData from './example_data.json';
import challengeExampleImage from '../../../../styleguide/assets/challenge-1.jpg';

const imageLow = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAcIBAb/xAAjEAACAgIBBAIDAAAAAAAAAAABAgMEABEGBRIhMQdBE1Fh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAaEQADAQADAAAAAAAAAAAAAAAAAQIDERIT/9oADAMBAAIRAxEAPwBzRcrjVY+0tonyT41nG8y+SLFTkgpQTVFpoqiRZGHc2/egf4RrMM12OHpNi3LsrAjO2vsKCcQtvkbTW570sMUt6xphJKnd+Ma9A78ZRWcS+SWNLpNMqAdQidVaSxErEA6ZgCNj9YZNPTOTpJW7+ovdlnLHyjgAD6GGPug+bP/Z';

function makeCards(cards) {
  return cards.map(card => ({
    ...card,
    body: <Text tag="p">{card.body}</Text>,
    fallback: challengeExampleImage,
    imageLow,
    images: `${challengeExampleImage} 678w`,
    bgColour: 'white',
    description: '',
    target: 'self',
    external: null,
  }));
}

export default function CTAMultiCardExample() {
  const cardsWithBody = makeCards(ctaMultiCardExampleData.cards);

  const cardsFour = [
    ...cardsWithBody,
    {
      ...cardsWithBody[0],
      id: 'example-4th-card',
      title: 'Fourth card',
      linkLabel: "quite a long link label text here",
      body: <Text tag="p">Fourth card (added for layout testing)</Text>,
    },
  ];

  const data3col = {
    ...ctaMultiCardExampleData,
    cards: cardsFour,
    layout: '3 columns',
    carouselOfCards: true,
    backgroundColour: 'grey_medium',
    paddingAbove: '0rem',
    paddingBelow: '0rem',
  };

  const cardsTwo = cardsWithBody.slice(0, 2);
  const data2col = {
    ...ctaMultiCardExampleData,
    cards: cardsTwo,
    layout: '2 columns',
    carouselOfCards: true,
    backgroundColour: 'grey_medium',
    paddingAbove: '0rem',
    paddingBelow: '0rem',
  };

  return (
    <>
      <h3>Desktop Grid (3 columns), carousel on mobile</h3>
      <div style={{ background: '#E1E2E3', width: '100%' }}>
        <CTAMultiCard data={data3col} />
      </div>

      <h3>2 cards (2 columns)</h3>
      <div style={{ background: '#E1E2E3', width: '100%' }}>
        <CTAMultiCard data={data2col} />
      </div>
    </>
  );
}
