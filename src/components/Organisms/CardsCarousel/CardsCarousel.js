import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import CardDs from '../../Molecules/CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import {
  ButtonCarousel,
  ButtonsWrapper
} from './_CarouselButtons';

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

const CardsCarousel = ({ carouselData, blurColour }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const chosenCard = cardIndex => (
    <Slide key={carouselData[cardIndex].imageLow}>
      <CardDs
        target="_blank"
        link="/home"
        linkLabel="find out more"
        imageLow={carouselData[cardIndex].imageLow}
        images={carouselData[cardIndex].images}
        imageAltText="test"
        backgroundColor="white"
        height="auto"
        icon={<Internal colour="white" />}
      >
        <Text tag="h3" color="purple" size="xl">{carouselData[cardIndex].title}</Text>
        <Text tag="p">{carouselData[cardIndex].description}</Text>
      </CardDs>
    </Slide>
  );

  return (
    <>
      {(carouselData.length > 0)
        && (
        <Container>
          {chosenCard((slideIndex - 1 + carouselData.length) % carouselData.length)}
          {chosenCard(slideIndex)}
          {chosenCard((slideIndex + 1 + carouselData.length) % carouselData.length)}

          <ButtonsWrapper>
            <ButtonCarousel
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              carouselData={carouselData}
              blurColour={blurColour}
              direction="left"
            />
            <ButtonCarousel
              slideIndex={slideIndex}
              setSlideIndex={setSlideIndex}
              carouselData={carouselData}
              blurColour={blurColour}
              direction="right"
            />
          </ButtonsWrapper>
        </Container>
        )
      }
    </>
  );
};

const cardPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageLow: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired
});

CardsCarousel.propTypes = {
  blurColour: PropTypes.string,
  carouselData: PropTypes.arrayOf(cardPropTypes).isRequired
};

CardsCarousel.defaultProps = {
  blurColour: 'white'
};

export default CardsCarousel;
