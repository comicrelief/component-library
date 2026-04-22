import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Video = styled.video.attrs(() => ({
  playsInline: true
}))`
  width: 100%;
  height: 100%;
`;

const VideoBanner = ({
  video,
  poster,
  controls = false,
  autoPlay = true,
  loop = false,
  muted = true,
  showPosterAfterPlaying = true
}) => {
  // Use the prop as our default
  const [isMuted, setIsMuted] = useState(muted);

  const videoEl = useRef(null);

  const triggerPlay = () => {
    const el = videoEl.current;
    if (!el) return;
    const p = el.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        // Autoplay may be blocked until user gesture; muted autoplay usually succeeds.
      });
    }
  };

  useEffect(() => {
    const el = videoEl.current;
    if (!el) return undefined;

    // Trigger onload autoplay based on prop:
    if (autoPlay) {
      // As it's a Chrome requirement to mute any autoplay videos,
      // update accordingly; see https://developer.chrome.com/blog/autoplay/
      setIsMuted(true);
      triggerPlay();
    }

    // And attach event listener based on prop:
    let onEnded;
    if (!loop && showPosterAfterPlaying) {
      onEnded = () => {
        if (videoEl.current) {
          videoEl.current.load();
        }
      };
      el.addEventListener('ended', onEnded);
    }

    return () => {
      if (onEnded) {
        el.removeEventListener('ended', onEnded);
      }
    };
  }, [autoPlay, loop, showPosterAfterPlaying]);

  return (
    <Video
      poster={poster}
      src={video}
      ref={videoEl}
      controls={controls}
      loop={loop}
      muted={isMuted}
    >
      Your browser does not support video.
    </Video>
  );
};

VideoBanner.propTypes = {
  showPosterAfterPlaying: PropTypes.bool,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool
};

export default VideoBanner;
