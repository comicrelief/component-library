/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import CardDs from '../CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import { ButtonCarouselLeft, ButtonCarouselRight } from './_CarouselButtons';

import cardCarouselMockData from './_cardCarouselMockData';

const Container = styled.div`
  margin: 50px 0 0;
`;

const InnerContainer = styled.div`
  max-width: 700px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 700px){
    margin: 0 10px;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  opacity: ${({ slideIndex, index }) => (slideIndex === index ? '1' : '0')};
`;

const CardsCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      <InnerContainer>

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

        {slideIndex !== 0
          && <ButtonCarouselLeft
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              cardCarouselMockData={cardCarouselMockData}
            />}
        {slideIndex !== cardCarouselMockData.length - 1
          && <ButtonCarouselRight
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              cardCarouselMockData={cardCarouselMockData}
            />}

      </InnerContainer>
    </Container>
  );
};

export default CardsCarousel;
