import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ vhFull }) => (vhFull ? 'min-height: 100vh;' : null)};
    flex-direction: ${({ copyFirst }) =>
      copyFirst === true ? 'row-reverse' : 'row'};
  }

  // Dynamically loaded via YT API, so can't make it a Styled Component
  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    ${({ copyFirst }) =>
      copyFirst === true ? 'left: auto; right: 0;' : 'left: 0; right: auto;'};
    z-index: ${({ isPlaying }) => (isPlaying ? '3' : '0')};
  }
`;

const Copy = styled.div`
  padding: ${spacing('xxl')} ${spacing('xl')};
  word-break: break-word;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: ${spacing('xl')};
  }

  ${props =>
    props.fullImage &&
    css`
      position: absolute;
      width: 100%;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      ${
        props.copyFirst
          ? css`
              left: 0;
            `
          : null
      }
      @media ${({ theme }) => theme.breakpoint('small')} {
        width: 50%;
      }
    `};
  ${props =>
    props.hasImage
      ? css`
          flex: 0 0 50%;
        `
      : css`
          flex: 0 0 60%;
          margin: auto;
          padding: 100px 20px;
        `}
`;

const Media = styled.div`
  width: 100%;
  position: relative;

  ${({ doubleImage }) =>
    doubleImage && 'display: flex; flex-direction: column'};
`;

const PlayButton = styled.button`
  ${zIndex('high')};
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border: 0;
  background: rgba(0, 0, 0, 0)
    url(https://www.comicrelief.com/themes/custom/comicrelief/images/copyvideo--play-icon__hover.svg)
    center no-repeat;
  background-position: center center;
  background-size: 100px;
  margin: 0;
  padding: 0;
  text-indent: -9999px;

  ${({ copyFirst }) =>
    copyFirst === true ? 'left: auto; right: 0;' : 'left: 0; right: auto;'};

  ${({ isBuffering }) =>
    isBuffering === true
      ? 'background-image: url(https://www.comicrelief.com/themes/custom/comicrelief/images/loader.gif)'
      : null};

  display: ${({ isPlaying }) => (isPlaying ? 'none' : 'block')};
`;

const Image = styled.div`
  width: 100%;
  ${({ doubleImage }) => (doubleImage ? 'height: 100%;' : 'height: 100%;')};
  ${({ vhFull }) => vhFull && 'height: 100%'};

  z-index: ${({ isPlaying }) => (isPlaying ? '2' : '3')};
`;

const VideoWrapper = styled.div`
  width: 100%;

  /* Switch z-index layering to place video on top, allow the now-underneath image to maintain height of the wrapper */
  z-index: ${({ isPlaying }) => (isPlaying ? '3' : '0')};
`;

export { Container, Copy, Media, PlayButton, Image, VideoWrapper };
