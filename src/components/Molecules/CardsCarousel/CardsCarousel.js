/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import CardDs from '../CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import {
  ButtonCarouselLeft,
  ButtonCarouselRight,
  ButtonsWrapper,
} from './_CarouselButtons';

import cardCarouselMockData from './_cardCarouselMockData';

const Container = styled.div`
  width: 650px;
  height: 550px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 450px;
  height: auto;
  transition: opacity ease-in-out 0.4s;
`;

const CardsCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const chosenCard = (cardIndex) => {
    return (
      <Slide key={cardIndex}>
        <CardDs
          target="_blank"
          link="/home"
          linkLabel="find out more"
          imageLow={cardCarouselMockData[cardIndex].imageLow}
          images={cardCarouselMockData[cardIndex].images}
          imageAltText="test"
          backgroundColor="white"
          height="auto"
          icon={<Internal colour="white" />}
        >
          <Text tag="h3" color="purple" size="xl">{cardCarouselMockData[cardIndex].title}</Text>
          <Text tag="p">{cardCarouselMockData[cardIndex].description}</Text>
        </CardDs>
      </Slide>
    )
  }

  return (
      <Container>

        {chosenCard((slideIndex - 1 + cardCarouselMockData.length) % cardCarouselMockData.length)}

        {chosenCard(slideIndex)}

        {chosenCard((slideIndex + 1 + cardCarouselMockData.length) % cardCarouselMockData.length)}

        <ButtonsWrapper>
          <ButtonCarouselLeft
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            cardCarouselMockData={cardCarouselMockData}
          />
          <ButtonCarouselRight
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            cardCarouselMockData={cardCarouselMockData}
          />
        </ButtonsWrapper>

      </Container>
  );
};

export default CardsCarousel;
