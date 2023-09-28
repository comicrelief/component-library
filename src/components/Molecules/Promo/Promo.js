import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

import {
  Container, Wrapper, Copy, Media, Video
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

  const videoEl = useRef(null);

  const triggerPlay = () => {
    videoEl.current.play();
  };
  let hasImage = imageSet || false;
  hasImage = false; // DEBUG
  const hasVideo = video;

  useEffect(() => {
    // Trigger onload autoplay based on prop:
    if (autoPlay) {
      // As it's a Chrome requirement to mute any autoplay videos,
      // update accordingly; see https://developer.chrome.com/blog/autoplay/
      setIsMuted(true);
      triggerPlay();
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
          // controls={controls}
        >
          Your browser does not support video.
        </Video>
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
  video: null,
  showPosterAfterPlaying: true
};

export default Promo;
