import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YouTubePlayer from 'youtube-player';
import { UID } from 'react-uid';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container,
  Copy,
  Media,
  PlayButton,
  Image,
  VideoWrapper
} from './SingleMessage.style';

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
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (title, videoIDToLoad) => {
    const player = YouTubePlayer(title);
    player.loadVideoById(videoIDToLoad);
    setIsPlaying(true);
  };

  return (
    <UID>
      {id => (
        <Container
          backgroundColor={backgroundColor}
          copyFirst={copyFirst}
          vhFull={vhFull}
          id={`container__${id}`}
        >
          {imageSet || imageSet2 ? (
            <>
              <Media
                doubleImage={doubleImage}
                isPlaying={isPlaying}
                className="I-AM-MEDIA"
              >
                {hasVideo ? (
                  <VideoWrapper className="video-wrapper" isPlaying={isPlaying}>
                    <div id={id} />
                  </VideoWrapper>
                ) : null}

                {imageSet || image ? (
                  <Image
                    doubleImage={doubleImage}
                    vhFull={vhFull}
                    isPlaying={isPlaying}
                  >
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

                {hasVideo ? (
                  <PlayButton
                    id={`play-button__${id}`}
                    copyFirst={copyFirst}
                    isPlaying={isPlaying}
                    onClick={() => handlePlay(id, videoID)}
                  >
                    Play video
                  </PlayButton>
                ) : null}
              </Media>
            </>
          ) : null}

          <Copy fullImage={fullImage} hasImage={hasImage} copyFirst={copyFirst}>
            {children}
          </Copy>
        </Container>
      )}
    </UID>
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
