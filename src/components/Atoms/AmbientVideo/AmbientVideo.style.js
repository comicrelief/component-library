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

const PlayPauseButton = styled.button`
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.color('grey_4')};
  color: ${({ theme }) => theme.color('white')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const WrapperWithHover = styled(Wrapper)`
  &:hover ${PlayPauseButton} {
    opacity: 1;
  }
`;

export {
  Wrapper,
  WrapperWithHover,
  StyledVideo,
  FallbackImg,
  ReducedMotionPoster,
  ReducedMotionFallback,
  PlayPauseButton
};
