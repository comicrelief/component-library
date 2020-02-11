import React, { useState, useEffect, useRef } from 'react';
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
  videoID,
  landscapeVideo
}) => {
  const hasImage = imageSet || false;
  const doubleImage = (imageSet || image) && (imageSet2 || image2);
  const hasVideo = !!(videoID !== null && videoID !== '');

  // States to track video status
  const [isInitialised, setIsInitialised] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [onPlay, setonPlay] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [uniqueID, setUniqueID] = useState(null);
  const [hasParentID, setHasParentID] = useState(false);

  const thisRef = useRef(null);

  // Break-out video markup into its own function
  const renderVideoPlayers = thisRowID => {
    // Store the dynamically-created UUID (from the main render func) in our state so useEffect can access it
    const thisVideoID = `${thisRowID}__video`;

    setUniqueID(thisVideoID);

    return (
      <VideoWrapper
        isPlaying={isPlaying}
        isBuffering={isBuffering}
        key={thisVideoID}
        landscapeVideo={landscapeVideo}
      >
        <div id={thisVideoID} />
      </VideoWrapper>
    );
  };

  /* Waiting on a usable ref from render before setting our flag used in other functions */
  useEffect(() => {
    setHasParentID(true);
  }, [thisRef]);

  /* Sets up YT players once all of the ID stuff is taken care of */
  useEffect(() => {
    if (hasVideo && onPlay && uniqueID && !isInitialised) {
      setIsInitialised(true);
      // Switch state to ensure this only runs once per video row
      // Instantiate a YT Player into our array, using its unique id as the key that PlayButton can access
      allPlayers[uniqueID] = YouTubePlayer(uniqueID, {
        videoId: videoID,
        playerVars: { rel: 0, modestbranding: 1, fs: 0 }
      });
    }
  }, [hasVideo, isInitialised, uniqueID, videoID, onPlay]);

  const handlePlay = thisUniqueID => {
    setonPlay(true);
    // Trigger play and update video state
    const thisVideoID = `${thisUniqueID}__video`;

    setTimeout(() => {
      allPlayers[thisVideoID].playVideo();
      // Once video is playing, switch state to allow CSS to show/hide relevant layers
      allPlayers[thisVideoID].on('stateChange', event => {
        if (event.data === 1) {
          setIsBuffering(false);
          setIsPlaying(true);
        }
      });
    }, 1000);
    setIsBuffering(true);
  };

  /* Dynamically retrieve ID that Gatsby has already baked into the page, need to null check for initial render */
  const getID = refWithID => {
    const thisID = refWithID !== null ? refWithID.getAttribute('id') : null;

    return thisID;
  };

  return (
    // Creates namespaced UUIDs for each row
    <UID name={id => `single-msg__${id}`}>
      {id => (
        <Container
          backgroundColor={backgroundColor}
          copyFirst={copyFirst}
          vhFull={vhFull}
          id={`${id}`}
          isPlaying={isPlaying}
          hasVideo={hasVideo}
          landscapeVideo={landscapeVideo}
          fullImage={fullImage}
          ref={thisRef}
        >
          {imageSet || imageSet2 ? (
            <>
              <Media
                doubleImage={doubleImage}
                isPlaying={isPlaying}
                isBuffering={isBuffering}
                hasVideo={hasVideo}
                landscapeVideo={landscapeVideo}
                fullImage={fullImage}
                vhFull={vhFull}
              >
                {hasVideo &&
                  hasParentID &&
                  renderVideoPlayers(getID(thisRef.current))}

                {imageSet || image ? (
                  <Image
                    doubleImage={doubleImage}
                    vhFull={vhFull}
                    isPlaying={isPlaying}
                    isBuffering={isBuffering}
                    hasVideo={hasVideo}
                    fullImage={fullImage}
                    landscapeVideo={landscapeVideo}
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
                    copyFirst={copyFirst}
                    isPlaying={isPlaying}
                    isBuffering={isBuffering}
                    onClick={() => handlePlay(getID(thisRef.current))}
                  >
                    Play video
                  </PlayButton>
                ) : null}
              </Media>
            </>
          ) : null}
          {children ? (
            <Copy
              fullImage={fullImage}
              hasImage={hasImage}
              copyFirst={copyFirst}
              hasVideo={hasVideo}
              vhFull={vhFull}
            >
              {children}
            </Copy>
          ) : null}
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
  children: PropTypes.node,
  /** Image will be the height of the viewport */
  vhFull: PropTypes.bool,
  videoID: PropTypes.string,
  landscapeVideo: PropTypes.bool
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
  children: null,
  vhFull: false,
  videoID: null,
  landscapeVideo: false
};

export default SingleMessage;
