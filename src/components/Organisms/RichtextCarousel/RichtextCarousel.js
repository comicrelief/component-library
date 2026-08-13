import React, {
  useEffect, useState
} from 'react';
import PropTypes from 'prop-types';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import {
  CarouselWrapper, SlideCopyWrapper, HeadingCopyWrapper, Container
} from './RichtextCarousel.style';
import { breakpointValues } from '../../../theme/shared/allBreakpoints';

const RichtextCarousel = ({
  data: {
    autoPlay,
    contentful_id: thisID,
    headingCopy,
    nodes,
    // Set some defaults for good measure:
    carouselBackgroundColour = 'white',
    desktopHeight = 350,
    mobileHeight = 300,
    tabletHeight = 350,
    nodeBackgroundColour = 'white',
    nodeOutlineColour = 'grey',
    paddingBottom = '2rem',
    paddingTop = '2rem',
    rowBackgroundColour = 'grey_light'
  }
}) => {
  const [theseItems, setTheseItems] = useState();

  // Cache our data source, using as a flag for render logic:
  useEffect(() => {
    setTheseItems(nodes);
  }, [setTheseItems, nodes]);

  return (
    <Container
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $rowBackgroundColour={rowBackgroundColour}
    >

      <CarouselWrapper
        className="CarouselWrapper"
        id={thisID}
        $mobileHeight={mobileHeight}
        $tabletHeight={tabletHeight}
        $desktopHeight={desktopHeight}
        $carouselBackgroundColour={carouselBackgroundColour}
      >

        <HeadingCopyWrapper>
          {headingCopy}
        </HeadingCopyWrapper>

        {theseItems && (
          <Splide
            className="richtext-carousel"
            options={{
              speed: 1000,
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
                // Calculate the index offset accordingly to reflect the number of slides,
                // but use the REAL index when determining if its the last REAL slide
                <SplideSlide
                  className={index === (theseItems.length - 1) && 'last-slide'}
                  key={safeIndex}
                  index={safeIndex}
                  data-index={safeIndex}
                >
                  <SlideCopyWrapper
                    className="slide-copy-wrapper"
                    $mobileHeight={mobileHeight}
                    $tabletHeight={tabletHeight}
                    $desktopHeight={desktopHeight}
                    $nodeBackgroundColour={nodeBackgroundColour}
                    $nodeOutlineColour={nodeOutlineColour}
                  >
                    {theseItems[index].copy}
                  </SlideCopyWrapper>

                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </CarouselWrapper>
    </Container>
  );
};

RichtextCarousel.propTypes = {
  data: PropTypes.shape({
    headingCopy: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    nodes: PropTypes.arrayOf(PropTypes.shape({
      copy: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
    })).isRequired,
    autoPlay: PropTypes.bool.isRequired,
    contentful_id: PropTypes.string.isRequired,
    mobileHeight: PropTypes.number,
    tabletHeight: PropTypes.number,
    desktopHeight: PropTypes.number,
    carouselBackgroundColour: PropTypes.string,
    nodeBackgroundColour: PropTypes.string,
    nodeOutlineColour: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    rowBackgroundColour: PropTypes.string
  }).isRequired
};

export default RichtextCarousel;
