import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Picture from '../../Atoms/Picture/Picture';

import {
  Container,
  Copy,
  Media,
  PlayButton,
  Image,
  IFrame
} from './SingleMessage.style';

const handlePlay = e => {
  const thisID = e.target.id;
  console.log('thisID', thisID);
};

/** Single Message is our main component usually to build landing pages */
const SingleMessage = ({
  backgroundColor,
  copyFirst,
  imageLow,
  imageSet,
  image,
  imageSet2,
  image2,
  imageAltText,
  imageAltText2,
  children,
  fullImage,
  vhFull,
  videoID
}) => {
  const hasImage = imageSet || false;
  const doubleImage = (imageSet || image) && (imageSet2 || image2);
  const hasVideo = !!(videoID !== null && videoID !== '');
  const randomTitle = Math.random()
    .toString(36)
    .substring(7);

  useEffect(() => {
    console.log('mounted!!');
  }, []); //

  return (
    <Container
      backgroundColor={backgroundColor}
      copyFirst={copyFirst}
      vhFull={vhFull}
    >
      {hasVideo ? (
        <IFrame
          src={`https://www.youtube.com/embed/${videoID}?enablejsapi=1&rel=0&fs=0`}
          modestbranding="1"
          showtitle="0"
          showinfo="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title={randomTitle}
        />
      ) : null}

      {imageSet || imageSet2 ? (
        <>
          <Media doubleImage={doubleImage}>
            {imageSet || image ? (
              <Image doubleImage={doubleImage} vhFull={vhFull}>
                <Picture
                  alt={imageAltText}
                  imageLow={imageLow}
                  images={imageSet}
                  image={image}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Image>
            ) : null}
            {imageSet2 || image2 ? (
              <Image doubleImage={doubleImage} vhFull={vhFull}>
                <Picture
                  alt={imageAltText2}
                  imageLow={imageLow}
                  images={imageSet2}
                  image={image2}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Image>
            ) : null}
          </Media>
        </>
      ) : null}

      {hasVideo ? (
        <PlayButton id={randomTitle} onClick={e => handlePlay(e)}>
          Play video
        </PlayButton>
      ) : null}

      <Copy fullImage={fullImage} hasImage={hasImage} copyFirst={copyFirst}>
        {children}
      </Copy>
    </Container>
  );
};

SingleMessage.propTypes = {
  backgroundColor: PropTypes.string,
  /** Copy will come on the left and Image on the right */
  copyFirst: PropTypes.bool,
  /** Image will be 100% wide and copy over the image (left, right or centre) */
  fullImage: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageSet2: PropTypes.string,
  image2: PropTypes.string,
  imageAltText: PropTypes.string,
  imageAltText2: PropTypes.string,
  children: PropTypes.node.isRequired,
  /** Image will be the height of the viewport */
  vhFull: PropTypes.bool,
  videoID: PropTypes.string
};

SingleMessage.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  fullImage: false,
  imageSet: null,
  imageLow: null,
  image: null,
  imageSet2: null,
  image2: null,
  imageAltText: '',
  imageAltText2: '',
  vhFull: false,
  videoID: null
};

export default SingleMessage;
