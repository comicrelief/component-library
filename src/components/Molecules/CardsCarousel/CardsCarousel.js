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
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  border: 1px solid red;
`;

const Slide = styled.div`
  width: 100%;
  height: auto;
  /* Show only the active slide */
  display: ${({ slideIndex, index }) => (slideIndex === index ? 'block' : 'none')};
  transition: opacity ease-in-out 0.4s;
`;

const CardsCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
      <Container>

        {cardCarouselMockData.map((item, i) => (
          <Slide
            key={item.title}
            slideIndex={slideIndex}
            index={i}
          >
            <CardDs
              target="_blank"
              link="/home"
              linkLabel="find out more"
              imageLow={item.imageLow}
              images={item.images}
              imageAltText="Happy man going to work"
              backgroundColor="white"
              height="auto"
              icon={<Internal colour="white" />}
            >
              <Text tag="h3" color="purple" size="xl">{item.title}</Text>
              <Text tag="p">{item.description}</Text>
            </CardDs>
          </Slide>
        ))}

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
