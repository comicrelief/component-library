import React, {
  useEffect, useState, useCallback
} from 'react';
import PropTypes from 'prop-types';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import formatItems from './_utils';

import {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper,
  Heading, PeopleHelpedText, Including, Container, SlideInner, AllTextWrapper
} from './WYMDCarousel.style';
import Text from '../../Atoms/Text/Text';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const WYMDCarousel = ({ data }) => {
  const {
    autoPlay,
    contentful_id: thisID,
    desktopHeight,
    headerCopy,
    mobileHeight,
    peopleHelpedText,
    tabletHeight,
    backgroundColour = 'grey_light',
    paddingTop = '2rem',
    paddingBottom = '2rem'
  } = data;

  // Defaults to mobile config:
  const [isMobile, setIsMobile] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [totalSlides, setTotalSlides] = useState(null);
  const [theseItems, setTheseItems] = useState();

  // Custom function to let us update the carousel config dynamically
  // TODO: I don't think this works
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

  // Reflect that initial dummy/bookend slide shown on non-mobile/tablet views:
  const thisIndexOffset = isMobile ? 0 : 1;

  return (
    <Container
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $backgroundColour={backgroundColour}
    >

      <CarouselWrapper
        className="CarouselWrapper"
        id={thisID}
        $mobileHeight={mobileHeight}
        $tabletHeight={tabletHeight}
        $desktopHeight={desktopHeight}
      >
        <Heading tag="p" weight="bold">
          { headerCopy}
        </Heading>

        <PeopleHelpedText tag="h1" family="Anton" weight="normal" color="red">
          { peopleHelpedText}
        </PeopleHelpedText>

        <Including tag="p">
          including...
        </Including>

        {theseItems && (
        <Splide
          className="wymd-carousel"
          options={{
            speed: 1000,
            arrows: true,
            pagination: false,
            drag: 'free',
            flickPower: 50,
            perMove: 1,
            perPage: visibleSlides,
            dragMinThreshold: { mouse: 50, touch: 50 },
            updateOnMove: true,
            snap: true,
            autoplay: autoPlay
          }}
        >

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {isMobile === false && (
          <SplideSlide
            index={0}
            key={0}
            className="bookend-first"
          >
            <SlideInner>
              {/* fake first slide */}
            </SlideInner>
          </SplideSlide>
          )}

          {Object.keys(theseItems).map((key, index) => {
            // Calculate the index offset accordingly to reflect the number of slides,
            // but use the REAL index when determining if its the last REAL slide
            const tweakedIndex = index + thisIndexOffset;

            return (
              <SplideSlide
                className={index === (theseItems.length - 1) && 'last-slide'}
                key={tweakedIndex}
                index={tweakedIndex}
              >
                <SlideInner>
                  <ImageWrapper className="image-wrapper">
                    <img src={theseItems[key].image.file.url} alt={theseItems[key].copy} />
                  </ImageWrapper>

                  <AllTextWrapper>
                    <AmountWrapper>
                      <Text tag="h1" family="Anton">
                        {theseItems[key].amount}
                      </Text>
                    </AmountWrapper>

                    <CopyWrapper>
                      <Text tag="p">
                        {theseItems[key].copy}
                      </Text>
                    </CopyWrapper>
                  </AllTextWrapper>

                </SlideInner>

              </SplideSlide>
            );
          })}

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {isMobile === false && (
          <SplideSlide
            index={theseItems.length + 1}
            key={theseItems.length + 1}
          >
            {/* fake last slide */}
          </SplideSlide>
          )}

        </Splide>
        )}

      </CarouselWrapper>
    </Container>
  );
};

WYMDCarousel.propTypes = {
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
    desktopHeight: PropTypes.number,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    backgroundColour: PropTypes.string
  }).isRequired
};

export default WYMDCarousel;
