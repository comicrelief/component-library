import React from 'react';
import styled from 'styled-components';
import VideoBanner from './VideoBanner';
import poster from '../../../assets/VideoBannerPosterImage.png';

const Wrapper = styled.div`
  margin: 50px 0;
`;

const src =
  'https://www.comicrelief.com/sites/default/files/downloads/Creativists_Logo_Web_small_V2_0.mp4';

export default function VideoBannerExample() {
  return (
    <>
      <Wrapper>
        <h3>Default Video Banner (autoplay, no loop, no poster re-show)</h3>
        <VideoBanner poster={poster} video={src} />
      </Wrapper>

      <Wrapper>
        <h3>Looping Video Banner With Controls (autoplay, loop)</h3>
        <VideoBanner poster={poster} video={src} loop={true} controls={true} autoPlay={true} muted={false} />
      </Wrapper>

      <Wrapper>
        <h3>Non-autoplay Video Banner (reshows poster image after playing)</h3>
        <VideoBanner poster={poster} video={src} showPosterAfterPlaying={true} />
      </Wrapper>
    </>
  );
}
