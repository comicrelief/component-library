import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container, Wrapper, Copy, Media, Video, PlayButton, PlayButtonWrapper
} from './Promo.style';

const Promo = ({
  copyFirst,
  backgroundColor,
  imageLow,
  imageSet,
  image,
  imageAltText,
  children,
  position,
  autoPlay,
  loop,
  muted,
  video,
  showPosterAfterPlaying
}) => {
  // Use the prop as our default
  const [isMuted, setIsMuted] = useState(muted);
  const [isPlaying, setIsPlaying] = useState(true); // use prop here
  const videoEl = useRef(null);

  const togglePlay = () => {
    if (isPlaying) videoEl.current.pause();
    else videoEl.current.play();
    setIsPlaying(!isPlaying);
  };

  // const triggerPlay = () => {
  //   videoEl.current.play();
  //   // setIsPlaying(true);
  //   console.log('triggerPlay');
  // };

  let hasImage = imageSet || false;
  hasImage = false; // DEBUG
  const hasVideo = video;
  console.log('hasVideo?', hasVideo);

  useEffect(() => {
    // Trigger onload autoplay based on prop:
    if (autoPlay && hasVideo) {
      // As it's a Chrome requirement to mute any autoplay videos,
      // update accordingly; see https://developer.chrome.com/blog/autoplay/
      setIsMuted(true);
      togglePlay();
    }

    // And attach event listener based on prop:
    // if (!loop && showPosterAfterPlaying) {
    //   videoEl.current.addEventListener('ended', () => {
    //     // Reloads video, which re-shows poster
    //     videoEl.current.load();
    //   });
    // }
  }, [autoPlay, loop, showPosterAfterPlaying]);

  console.log(autoPlay, loop, muted, hasVideo);

  return (
    <Container backgroundColor={backgroundColor} position={position}>
      {(hasImage && !hasVideo) && (
      <Media imageRight={copyFirst}>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={imageSet}
          image={image}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Media>
      )}
      {(!hasImage && hasVideo) && (
      <Media imageRight={copyFirst}>
        <Video
          src={video}
          loop={loop}
          muted={isMuted}
          // poster={poster}
          ref={videoEl}
          // controls
        >
          Your browser does not support video.
        </Video>
        <PlayButtonWrapper>
          <PlayButton onClick={() => { togglePlay(); }}>PLAY ME</PlayButton>
        </PlayButtonWrapper>

      </Media>
      )}
      <Wrapper copyFirst={copyFirst}>
        <Copy position={position}>{children}</Copy>
      </Wrapper>
    </Container>
  );
};

Promo.propTypes = {
  backgroundColor: PropTypes.string,
  copyFirst: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  position: PropTypes.oneOf(['upper', 'lower', 'end', 'none']),
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  video: PropTypes.string,
  showPosterAfterPlaying: PropTypes.bool
};

Promo.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  imageSet: null,
  imageLow: null,
  image: null,
  imageAltText: '',
  children: null,
  position: 'none',
  autoPlay: true,
  loop: false,
  muted: true,
  video: false,
  showPosterAfterPlaying: true
};

export default Promo;
