import React from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Text from '../../Atoms/Text/Text';
import CardDs from '../CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import cards from '../../../utils/cardCarouselMockData';

const CardsCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={3}
  >
    <Slider>
      {cards.map((item, i) => (
        <Slide index={i} key={item.title}>
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
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);

export default CardsCarousel;
