import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import CardDs from '../CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import {
  ButtonCarousel,
  ButtonsWrapper
} from './_CarouselButtons';

import cardCarouselMockData from './_cardCarouselMockData';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 60%;
  flex-shrink: 0;
`;

const CardsCarousel = ({ blurColour }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const chosenCard = cardIndex => (
    <Slide>
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
  );

  return (
    <>
      <Container>

        {chosenCard((slideIndex - 1 + cardCarouselMockData.length) % cardCarouselMockData.length)}

        {chosenCard(slideIndex)}

        {chosenCard((slideIndex + 1 + cardCarouselMockData.length) % cardCarouselMockData.length)}

        <ButtonsWrapper>
          <ButtonCarousel
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            cardCarouselMockData={cardCarouselMockData}
            blurColour={blurColour}
            direction="left"
          />
          <ButtonCarousel
            slideIndex={slideIndex}
            setSlideIndex={setSlideIndex}
            cardCarouselMockData={cardCarouselMockData}
            blurColour={blurColour}
            direction="right"
          />
        </ButtonsWrapper>

      </Container>
    </>
  );
};

CardsCarousel.propTypes = {
  blurColour: PropTypes.string
};

CardsCarousel.defaultProps = {
  blurColour: 'white'
};

export default CardsCarousel;
