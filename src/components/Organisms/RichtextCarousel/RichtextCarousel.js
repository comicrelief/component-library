import React, {
  useEffect, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselWrapper, SlideCopyWrapper, HeadingCopyWrapper
} from './RichtextCarousel.style';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const RichtextCarousel = ({
  data: {
    contentful_id: thisID,
    autoPlay,
    nodes,
    headingCopy,
    // Set some defaults for good measure:
    mobileHeight = 300,
    tabletHeight = 350,
    desktopHeight = 350,
    carouselBackgroundColour = 'white',
    nodeBackgroundColour = 'white'
  }
}) => {
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
  // TO-DO: probably don't need this any more
  useEffect(() => {
    setTheseItems(nodes);
  }, [setTheseItems, nodes]);

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

  return (
    <CarouselWrapper
      className="CarouselWrapper"
      id={thisID}
      mobileHeight={mobileHeight}
      tabletHeight={tabletHeight}
      desktopHeight={desktopHeight}
      carouselBackgroundColour={carouselBackgroundColour}
    >

      <HeadingCopyWrapper>
        {headingCopy}
      </HeadingCopyWrapper>

      {theseItems && (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={200}
        totalSlides={totalSlides}
        isPlaying={autoPlay}
        interval={5000}
        visibleSlides={visibleSlides}
        infinite
      >
        <Slider classNameAnimation="richtext-carousel">

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {isMobile === false && (
          <Slide index={0} key={0} />
          )}

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

                <SlideCopyWrapper
                  className="slide-copy-wrapper"
                  mobileHeight={mobileHeight}
                  tabletHeight={tabletHeight}
                  desktopHeight={desktopHeight}
                  nodeBackgroundColour={nodeBackgroundColour}
                >
                  {theseItems[index].copy}
                </SlideCopyWrapper>

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

RichtextCarousel.propTypes = {
  data: PropTypes.shape({
    headingCopy: PropTypes.node.isRequired, // Richtext
    nodes: PropTypes.arrayOf(PropTypes.shape({
      copy: PropTypes.node.isRequired
    })).isRequired,
    autoPlay: PropTypes.bool.isRequired,
    contentful_id: PropTypes.string.isRequired,
    mobileHeight: PropTypes.number,
    tabletHeight: PropTypes.number,
    desktopHeight: PropTypes.number,
    carouselBackgroundColour: PropTypes.string,
    nodeBackgroundColour: PropTypes.string
  }).isRequired
};

export default RichtextCarousel;
