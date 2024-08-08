/* eslint-disable */
import React, { useState } from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Text from '../../Atoms/Text/Text';
import CardDs from '../CardDs/CardDs';
import { Internal } from '../../Atoms/Icons/index';
import cardCarouselMockData from '../../../utils/cardCarouselMockData';

import styles from './Slider.module.css';
import ArrowButtonLeft from './ArrowButtonLeft';
import ArrowButtonRight from './ArrowButtonRight';
import dataSlider from './dataSlider';

const CardsCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  function prevSlide() {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(dataSlider.length - 1);
    }
  }

  function nextSlide() {
    if (slideIndex !== dataSlider.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length - 1) {
      setSlideIndex(0);
    }
  }

  return (
    <>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        style={{ border: '1px solid red' }}
      >
        <Slider>
          {cardCarouselMockData.map((item, i) => (
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

      <div className={styles.slider}>
        <div className={styles.imageContainer}>

          {dataSlider.map((item, index) => (
            <div
              key={item.alt}
              className={slideIndex === index ? `${styles.slide} ${styles.activeAnimation}` : `${styles.slide}`}
            >
              <img
                src={item.src}
                alt={item.title}
                width="100%"
                height="100%"
              />
            </div>
          ))}

          {slideIndex !== 0
            && <ArrowButtonLeft prevSlide={prevSlide} fill={{ fill: 'black' }} />}
          {slideIndex !== dataSlider.length - 1
            && <ArrowButtonRight nextSlide={nextSlide} fill={{ fill: 'black' }} />}

        </div>

      </div>

    </>
  );
};

export default CardsCarousel;
