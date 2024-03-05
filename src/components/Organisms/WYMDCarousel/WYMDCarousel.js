import React, {
  useEffect, useState, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import formatItems from './_utils';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper, Heading, PeopleHelpedText, Including
} from './WYMDCarousel.style';
import Text from '../../Atoms/Text/Text';
import { sizes } from '../../../theme/shared/breakpoint';

const WYMDCarousel = ({ data, data: { autoPlay, contentful_id: thisID } }) => {
  // Defaults to mobile config:
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [theseItems, setTheseItems] = useState();
  const thisCarouselRef = useRef(null);

  const resize = useCallback(() => {
    const screenSize = typeof window !== 'undefined' ? window.innerWidth : null;
    const isCurrentlyMobile = window.innerWidth < sizes.medium;

    if (screenSize !== null && (isMobileOrTablet !== isCurrentlyMobile)) {
      setIsMobileOrTablet(isCurrentlyMobile);
      setVisibleSlides(isCurrentlyMobile ? 1 : 3);
    }
  }, [isMobileOrTablet]);

  useEffect(() => {
    // Format our data before we use it in render:
    setTheseItems(formatItems(data));
  }, [setTheseItems, data]);

  useEffect(() => {
    if (window !== 'undefined' && window.innerWidth >= sizes.medium) {
      // When appropriate, update carousel plugin config on initial render
      // to suit the non-mobile layout and functionality:
      setIsMobileOrTablet(false);
      setVisibleSlides(3);
    }

    // Hook into browser's own onresize event:
    if (typeof window !== 'undefined') window.onresize = resize;
  }, [resize]);

  // TO-DO: do we really need this any more?
  const isIE = /* @cc_on!@ */false || !!document.documentMode;

  if (isIE) {
    return (
      <CarouselWrapper className="CarouselWrapper">
        <ul className="carousel-fallback">
          {Object.keys(theseItems).map(key => (
            <li key={key}>{theseItems[key].copy}</li>
          ))}
        </ul>
      </CarouselWrapper>
    );
  }

  return (
    <CarouselWrapper
      className="CarouselWrapper"
      ref={thisCarouselRef}
      id={thisID}
    >

      <Heading tag="p" weight="bold">
        { data.heading}
      </Heading>

      <PeopleHelpedText tag="h1" family="Anton" uppercase weight="normal" color="red">
        { data.peopleHelpedText}
      </PeopleHelpedText>

      <Including tag="p">
        including...
      </Including>

      {theseItems && (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={200}
        totalSlides={isMobileOrTablet ? theseItems.length : theseItems.length + 2}
        isPlaying={autoPlay}
        interval={5000}
        visibleSlides={visibleSlides}
        infinite
      >
        <Slider classNameAnimation="wymd-carousel">

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {!isMobileOrTablet && (
          <Slide index={0} key="bookend-first" />
          )}

          {Object.keys(theseItems).map((key, index) => (

            // Calculate the index offset accordingly to reflect the number of slides:
            <Slide
              index={index + (isMobileOrTablet ? 1 : 0)}
              className={index === (theseItems.length - 1) && 'last-slide'}
              key={key}
            >

              <ImageWrapper className="image-wrapper">
                <img src={theseItems[key].image.file.url} alt={theseItems[key].copy} />
              </ImageWrapper>

              <AmountWrapper>
                <Text tag="h1" family="Anton" uppercase weight="normal" size="super">
                  {theseItems[key].amount}
                </Text>
              </AmountWrapper>

              <CopyWrapper>
                <Text tag="p" size="l">
                  {theseItems[key].copy}
                </Text>
              </CopyWrapper>
            </Slide>
          ))}

          {/* Dummy slide for our desired non-mobile layout and functionality */}
          {!isMobileOrTablet && (
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

WYMDCarousel.propTypes = {
  data: PropTypes.shape({
    // Required 'node' fields:
    node1_Amount: PropTypes.string.isRequired,
    node1_Copy: PropTypes.string.isRequired,
    node1_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    node2_Amount: PropTypes.string.isRequired,
    node2_Copy: PropTypes.string.isRequired,
    node2_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    node3_Amount: PropTypes.string.isRequired,
    node3_Copy: PropTypes.string.isRequired,
    node3_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    node4_Amount: PropTypes.string.isRequired,
    node4_Copy: PropTypes.string.isRequired,
    node4_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    // Non-required 'node' fields:
    node5_Amount: PropTypes.string,
    node5_Copy: PropTypes.string,
    node5_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node6_Amount: PropTypes.string,
    node6_Copy: PropTypes.string,
    node6_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node7_Amount: PropTypes.string,
    node7_Copy: PropTypes.string,
    node7_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node8_Amount: PropTypes.string,
    node8_Copy: PropTypes.string,
    node8_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node9_Amount: PropTypes.string,
    node9_Copy: PropTypes.string,
    node9_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node10_Amount: PropTypes.string,
    node10_Copy: PropTypes.string,
    node10_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node11_Amount: PropTypes.string,
    node11_Copy: PropTypes.string,
    node11_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node12_Amount: PropTypes.string,
    node12_Copy: PropTypes.string,
    node12_Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    autoPlay: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    peopleHelpedText: PropTypes.string.isRequired,
    contentful_id: PropTypes.string.isRequired
  }).isRequired
};

export default WYMDCarousel;
