import React, {
  useEffect, useState
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

  const [theseItems, setTheseItems] = useState();

  // Format our data BEFORE we use it in render:
  useEffect(() => {
    setTheseItems(formatItems(data));
  }, [setTheseItems, data]);

  return (
    <Container
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $backgroundColour={backgroundColour}
      data-testid="wymd-carousel--container"
    >

      <CarouselWrapper
        className="CarouselWrapper"
        id={thisID}
        $mobileHeight={mobileHeight}
        $tabletHeight={tabletHeight}
        $desktopHeight={desktopHeight}
        data-testid="wymd-carousel--wrapper"
      >
        <Heading
          tag="p"
          weight="bold"
          data-testid="wymd-carousel--heading"
        >
          { headerCopy}
        </Heading>

        <PeopleHelpedText
          tag="h1"
          family="Anton"
          weight="normal"
          color="red"
          data-testid="wymd-carousel--people-helped"
        >
          { peopleHelpedText}
        </PeopleHelpedText>

        <Including
          tag="p"
          data-testid="wymd-carousel--including"
        >
          including...
        </Including>

        {theseItems && (
        <Splide
          className="wymd-carousel"
          data-testid="wymd-carousel--splide"
          options={{
            speed: 750,
            rewindSpeed: 750,
            interval: 5000,
            arrows: true,
            pagination: false,
            drag: 'free',
            flickPower: 50,
            perMove: 1,
            dragMinThreshold: { mouse: 50, touch: 50 },
            updateOnMove: true,
            snap: true,
            autoplay: autoPlay,
            focus: 'center',
            trimSpace: false,
            perPage: 3,
            rewind: true,
            breakpoints: {
              [breakpointValues.M]: {
                perPage: 1
              }
            }
          }}
        >

          {Object.keys(theseItems).map((key, index) => {
            const safeIndex = index;

            return (
              <SplideSlide
                className={index === (theseItems.length - 1) && 'last-slide'}
                key={safeIndex}
                index={safeIndex}
                data-index={safeIndex}
                data-testid="wymd-carousel--slide"
              >
                <SlideInner>
                  <ImageWrapper className="image-wrapper">
                    <img src={theseItems[key].image.file.url} alt={theseItems[key].copy} />
                  </ImageWrapper>

                  <AllTextWrapper>
                    <AmountWrapper>
                      <Text
                        tag="h1"
                        family="Anton"
                        data-testid="wymd-carousel--amount"
                      >
                        {theseItems[key].amount}
                      </Text>
                    </AmountWrapper>

                    <CopyWrapper>
                      <Text
                        tag="p"
                        data-testid="wymd-carousel--copy"
                      >
                        {theseItems[key].copy}
                      </Text>
                    </CopyWrapper>

                  </AllTextWrapper>
                </SlideInner>
              </SplideSlide>
            );
          })}

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
