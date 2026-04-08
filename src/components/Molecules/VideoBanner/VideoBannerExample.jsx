import React from 'react';
import VideoBanner from './VideoBanner';
import poster from '../../../styleguide/assets/VideoBannerPosterImage.png';

const src = 'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

export default function VideoBannerExample() {
  return (
    <>
      <h3>Default (autoplay, no loop)</h3>
      <VideoBanner poster={poster} video={src} />

      <h3>Looping with controls</h3>
      <VideoBanner poster={poster} video={src} loop={true} controls={true} autoPlay={true} muted={false} />

      <h3>Non-autoplay (reshows poster after playing)</h3>
      <VideoBanner poster={poster} video={src} showPosterAfterPlaying={true} />
    </>
  );
}
