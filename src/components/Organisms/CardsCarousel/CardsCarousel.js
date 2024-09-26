import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { snakeCase } from 'lodash';
import Text from '../../Atoms/Text/Text';
import CardDs from '../../Molecules/CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import CarouselButton from './_CarouselButtons';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  justify-content: center;
  gap: 0.5rem;
  overflow: hidden;
  background: ${({ bgColour }) => bgColour};
`;

const Slide = styled.div`
  width: 60%;
  flex-shrink: 0;
  > div {
    height: 100%;
    /* border: 1px solid red; */
  }
`;

const CardsCarousel = ({ carouselData }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { cards } = carouselData;
  const CarouselBg = snakeCase(carouselData.backgroundColour || 'white');

  const chosenCard = cardIndex => (
    <Slide key={cards[cardIndex].id}>
      <CardDs
        target="_blank"
        link={cards[cardIndex].link}
        linkLabel={cards[cardIndex].linkLabel}
        imageLow={cards[cardIndex].image.fluidSrcSet}
        image={cards[cardIndex].image.fluidSrcSet}
        imageAltText={cards[cardIndex].title}
        backgroundColor={snakeCase(cards[cardIndex].backgroundColour || 'white')}
        height="auto"
        icon={<Internal colour="white" />}
      >
        <Text tag="h2" size="xl">{cards[cardIndex].title}</Text>
        <Text tag="p">{cards[cardIndex].bodyText}</Text>
      </CardDs>
    </Slide>
  );

  return (
    <>
      {(carouselData.cards.length > 0) && (
        <Container bgColour={CarouselBg}>
          {chosenCard((slideIndex - 1 + cards.length) % cards.length)}
          {chosenCard(slideIndex)}
          {chosenCard((slideIndex + 1 + cards.length) % cards.length)}

          <CarouselButton
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            carouselData={cards}
            blurColour={CarouselBg}
            direction="left"
          />
          <CarouselButton
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            carouselData={cards}
            blurColour={CarouselBg}
            direction="right"
          />
        </Container>
      )}
    </>
  );
};

const cardPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bodyText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageLow: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  backgroundColour: PropTypes.string
});

CardsCarousel.propTypes = {
  carouselData: PropTypes.shape({
    backgroundColour: PropTypes.string,
    cards: PropTypes.arrayOf(cardPropTypes).isRequired
  }).isRequired
};

export default CardsCarousel;
