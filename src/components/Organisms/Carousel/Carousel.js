import React, {
  useEffect, useState, useCallback
} from 'react';
// import PropTypes from 'prop-types';
// import {
//   CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
// } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  // ImageWrapper,
  // AmountWrapper,
  // CopyWrapper,
  // Heading,
  // PeopleHelpedText,
  // Including,
  CarouselWrapper
} from './Carousel.style';
// import Text from '../../Atoms/Text/Text';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const Carousel = () => {
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

  const mockData = {
    mobileHeight: 300,
    tabletHeight: 450,
    desktopHeight: 600,
    thisID: 12345
  };

  return (
    <CarouselWrapper
      className="CarouselWrapper"
      id={mockData.thisID}
      mobileHeight={mockData.mobileHeight}
      tabletHeight={mockData.tabletHeight}
      desktopHeight={mockData.desktopHeight}
    >
      <h1>Generic Carousel Component</h1>
    </CarouselWrapper>
  );
};

export default Carousel;
