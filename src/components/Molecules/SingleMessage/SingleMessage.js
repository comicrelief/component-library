import React, { useState, useEffect } from 'react';
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

const allPlayers = {};

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

  // States to track video status
  const [isInitialised, setIsInitialised] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [uniqueID, setUniqueID] = useState(null);

  // Break-out video markup into its own function
  const renderVideoPlayers = thisRowID => {
    // Store the dynamically-created UUID (from the main render func) in our state so useEffect can access it
    setUniqueID(thisRowID);

    return (
      <VideoWrapper
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        key={thisRowID}
      >
        <div id={thisRowID} />
      </VideoWrapper>
    );
  };

  useEffect(() => {
    if (hasVideo && uniqueID && !isInitialised) {
      // Switch state to ensure this only runs once per video row
      setIsInitialised(true);

      // Instantiate a YT Player into our array, using it's unique id as the key that PlayButton can access
      allPlayers[uniqueID] = YouTubePlayer(uniqueID, {
        videoId: videoID
      });
    }
  }, [hasVideo, isInitialised, uniqueID, videoID]);

  const handlePlay = thisUniqueID => {
    // Trigger play and update video state
    allPlayers[thisUniqueID].playVideo();
    setIsBuffering(true);

    // Once video is playing, switch state to allow CSS to show/hide relevant layers
    allPlayers[thisUniqueID].on('stateChange', function(event) {
      if (event.data === 1) {
        setIsBuffering(false);
        setIsPlaying(true);
      }
    });
  };

  return (
    // Creates namespaced UUIDs for each row
    <UID name={id => `single-msg__${id}`}>
      {id => (
        <Container
          backgroundColor={backgroundColor}
          copyFirst={copyFirst}
          vhFull={vhFull}
          id={`${id}__container`}
          isPlaying={isPlaying}
        >
          {imageSet || imageSet2 ? (
            <>
              <Media
                doubleImage={doubleImage}
                isPlaying={isPlaying}
                isBuffering={isBuffering}
              >
                {hasVideo && renderVideoPlayers(`${id}__video`)}

                {imageSet || image ? (
                  <Image
                    doubleImage={doubleImage}
                    vhFull={vhFull}
                    isPlaying={isPlaying}
                    isBuffering={isBuffering}
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
                    id={`${id}__play-button`}
                    copyFirst={copyFirst}
                    isPlaying={isPlaying}
                    isBuffering={isBuffering}
                    onClick={() => handlePlay(`${id}__video`)}
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
