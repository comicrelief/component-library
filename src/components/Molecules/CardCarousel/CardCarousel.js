import React, {
  useEffect, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import {
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselProvider
} from 'pure-react-carousel';
import formatItems from './_utils';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  ImageWrapper,
  AmountWrapper,
  CopyWrapper,
  CarouselWrapper
} from './CardCarousel.style';
import Text from '../../Atoms/Text/Text';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const CardCarousel = ({ data }) => {
  // Defaults to mobile config:
  const [isMobile, setIsMobile] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [totalSlides, setTotalSlides] = useState(null);
  const [theseItems, setTheseItems] = useState();

  // Custom function to let us update the carousel config dynamically
  const screenResize = useCallback(() => {
    const screenSize = typeof window !== 'undefined' ? window.innerWidth : null;
    const isCurrentlyMobile = window.innerWidth < breakpointValues.M;

    if (screenSize !== null && (isMobile !== isCurrentlyMobile)) {
      setIsMobile(isCurrentlyMobile);
      setVisibleSlides(isCurrentlyMobile ? 1 : 3);
      setTotalSlides(isCurrentlyMobile ? theseItems.length : theseItems.length + 2);
    }
  }, [isMobile, theseItems]);

  // Format our data BEFORE we use it in render:
  useEffect(() => {
    setTheseItems(formatItems(data));
  }, [setTheseItems, data]);

  useEffect(() => {
    if (window !== 'undefined' && window.innerWidth >= breakpointValues.M) {
      // On inital render, update carousel plugin config
      // to suit the non-mobile layout and functionality:
      setIsMobile(false);
      setVisibleSlides(3);
    }

    // Hook into browser's own onresize event to call our custom wrapper function:
    if (typeof window !== 'undefined') window.onresize = screenResize;
  }, [screenResize]);

  if (theseItems && totalSlides === null) {
    // Reflects our two dummy/bookend slides for non-mobile/tablet views:
    setTotalSlides(isMobile ? theseItems.length : theseItems.length + 2);
  }

  // console.log(data);
  console.log(data.mobileHeight);

  return (
    <CarouselWrapper
      className="CarouselWrapper"
      mobileHeight={data.mobileHeight}
      tabletHeight={data.tabletHeight}
      desktopHeight={data.desktopHeight}
    >
      {theseItems && (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={200}
        totalSlides={totalSlides}
        isPlaying={data.autoPlay}
        interval={5000}
        visibleSlides={visibleSlides}
        infinite
      >
        <Slider classNameAnimation="card-carousel">

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {isMobile === false && <Slide index={0} key={0} />}

          {Object.keys(theseItems).map((key, index) => {
            // Reflect that initial dummy/bookend slide shown on non-mobile/tablet views:
            const thisOffsetIndex = index + (isMobile ? 0 : 1);

            return (
              // Calculate the index offset accordingly to reflect the number of slides,
              // but use the REAL index when determining if its the last REAL slide
              <Slide
                index={thisOffsetIndex}
                className={index === (theseItems.length - 1) && 'last-slide'}
                key={thisOffsetIndex}
              >

                <ImageWrapper className="image-wrapper">
                  <img src={theseItems[key].image.file.url} alt={theseItems[key].copy} />
                </ImageWrapper>

                <div className="all-text-wrapper">
                  <AmountWrapper>
                    <Text tag="h1" family="Anton" uppercase weight="normal">
                      {theseItems[key].amount}
                    </Text>
                  </AmountWrapper>

                  <CopyWrapper>
                    <Text tag="p">
                      {theseItems[key].copy}
                    </Text>
                  </CopyWrapper>
                </div>

              </Slide>
            );
          })}

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {isMobile === false && (
          <Slide index={theseItems.length + 1} key="bookend-last" />
          )}

        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      )}
    </CarouselWrapper>
  );
};

CardCarousel.propTypes = {
  data: PropTypes.shape({
    autoPlay: PropTypes.bool.isRequired,
    mobileHeight: PropTypes.number,
    tabletHeight: PropTypes.number,
    desktopHeight: PropTypes.number
  }).isRequired
};

export default CardCarousel;
