import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const slides = [
  {
    text: "I am the first Slide.",
  },
  {
    text: "I am the second Slide.",
  },
  {
    text: "I am the third Slide.",
  }
]

const CardsCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={3}
  >
    <Slider>
      {slides.map((item, i) =>
          <Slide index={i}>{item.text}</Slide>
      )}
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);

export default CardsCarousel;
