/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
} from 'pure-react-carousel';
import formatItems from './_utils';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselWrapper, ImageWrapper, AmountWrapper, CopyWrapper
} from './WYMDCarousel.style';
import Text from '../../Atoms/Text/Text';

const WYMDCarousel = ({ data, data: { autoPlay } }) => {
  const theseItems = formatItems(data);

  // TO-DO: do we really need this any more?
  // Internet Explorer 6-11
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
    <CarouselWrapper className="CarouselWrapper">
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={200}
        totalSlides={theseItems.length}
        isPlaying={autoPlay}
        interval={4000}
        infinite
        visibleSlides="3"
      >
        <Slider classNameAnimation="wymd-carousel">
          {Object.keys(theseItems).map((key, index) => (
            <Slide index={index} key={key}>

              <ImageWrapper>
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
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
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
    contentful_id: PropTypes.string.isRequired
  }).isRequired
};

export default WYMDCarousel;
