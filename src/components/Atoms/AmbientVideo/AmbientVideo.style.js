import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledVideo = styled.video.attrs(() => ({
  playsInline: true,
  autoPlay: true,
  muted: true
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const FallbackImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const ReducedMotionPoster = styled.img`
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (prefers-reduced-motion: reduce) {
    display: block;
  }
`;

const ReducedMotionFallback = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;

  @media (prefers-reduced-motion: reduce) {
    display: block;
  }
`;

export {
  Wrapper,
  StyledVideo,
  FallbackImg,
  ReducedMotionPoster,
  ReducedMotionFallback
};
