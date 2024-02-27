/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import {
//   CarouselProvider, Slider, Slide, ButtonBack, ButtonNext
// } from 'pure-react-carousel';
import formatItems from './_utils';
// import 'pure-react-carousel/dist/react-carousel.es.css';

const WYMDCarousel = ({ data }) => {
  const theseItems = formatItems(data);
  console.log('theseItems', theseItems);

  // Internet Explorer 6-11
  const isIE = /* @cc_on!@ */false || !!document.documentMode;

  if (isIE) {
    return (
      <ul className="carousel-fallback">
        {Object.keys(theseItems).map(key => (
          <li key={key}>{theseItems[key].description}</li>
        ))}
      </ul>
    );
  }

  return (
    <p>
      New Carousel:
      (
      {data.contentful_id}
      )
    </p>
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
    node10Amount: PropTypes.string,
    node10Copy: PropTypes.string,
    node10Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node11Amount: PropTypes.string,
    node11Copy: PropTypes.string,
    node11Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    node12Amount: PropTypes.string,
    node12Copy: PropTypes.string,
    node12Image: PropTypes.shape({
      file: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    contentful_id: PropTypes.string.isRequired
  }).isRequired
};

export default WYMDCarousel;
