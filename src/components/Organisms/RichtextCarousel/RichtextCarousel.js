import React, {
  useEffect, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import formatItems from './_utils';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselWrapper, MainCopyWrapper,
  // AmountWrapper, CopyWrapper,
  Heading, PeopleHelpedText
  // Including
} from './RichtextCarousel.style';
// import Text from '../../Atoms/Text/Text';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const RichtextCarousel = ({ data, data: { autoPlay, contentful_id: thisID } }) => {
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

  return (
    <CarouselWrapper
      className="CarouselWrapper"
      id={thisID}
      mobileHeight={data.mobileHeight}
      tabletHeight={data.tabletHeight}
      desktopHeight={data.desktopHeight}
    >

      <Heading tag="p" weight="bold">
        { data.headerCopy}
      </Heading>

      <PeopleHelpedText tag="h1" family="Anton" uppercase weight="normal" color="red">
        { data.peopleHelpedText}
      </PeopleHelpedText>

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
        <Slider classNameAnimation="wymd-carousel">

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

                <MainCopyWrapper className="main-copy-wrapper">
                  <p>
                    140 character count limit imposed in messages to fix the design height of each
                    container and restrict anomalies. This is based on Twitters character limit
                    for tweets.
                  </p>
                  <p>
                    <b>John, London</b>
                  </p>
                </MainCopyWrapper>

                {/* <div className="all-text-wrapper">
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
                </div> */}

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
    // Required 'node' fields:
    node1Amount: PropTypes.string.isRequired,
    node1Copy: PropTypes.string.isRequired,
    node1Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    node2Amount: PropTypes.string.isRequired,
    node2Copy: PropTypes.string.isRequired,
    node2Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    node3Amount: PropTypes.string.isRequired,
    node3Copy: PropTypes.string.isRequired,
    node3Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    node4Amount: PropTypes.string.isRequired,
    node4Copy: PropTypes.string.isRequired,
    node4Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    // Non-required 'node' fields:
    node5Amount: PropTypes.string,
    node5Copy: PropTypes.string,
    node5Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node6Amount: PropTypes.string,
    node6Copy: PropTypes.string,
    node6Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node7Amount: PropTypes.string,
    node7Copy: PropTypes.string,
    node7Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node8Amount: PropTypes.string,
    node8Copy: PropTypes.string,
    node8Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node9Amount: PropTypes.string,
    node9Copy: PropTypes.string,
    node9Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    autoPlay: PropTypes.bool.isRequired,
    headerCopy: PropTypes.string.isRequired,
    peopleHelpedText: PropTypes.string.isRequired,
    contentful_id: PropTypes.string.isRequired,
    mobileHeight: PropTypes.number,
    tabletHeight: PropTypes.number,
    desktopHeight: PropTypes.number
  }).isRequired
};

export default RichtextCarousel;
