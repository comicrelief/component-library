import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import { media, container } from '../../../theme/shared/size';
import zIndex from '../../../theme/shared/zIndex';
import playIcon from './assets/video--play-icon.svg';
import playIconHover from './assets/video--play-icon__hover.svg';
import loadingIcon from './assets/loader.svg';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  ${media('small')} {
    flex-direction: ${({ copyFirst }) => (copyFirst === true ? 'row-reverse' : 'row')};
    ${({ landscapeVideo, hasVideo, fullImage }) => (landscapeVideo && hasVideo && !fullImage ? 'min-height: 0;' : null)};
  }
  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    ${({ copyFirst }) => (copyFirst === true ? 'left: auto; right: 0;' : 'left: 0; right: auto;')};
    ${({ isPlaying }) => (isPlaying ? zIndex('high') : zIndex('base'))};
  }
`;

const Copy = styled.div`
  width: 100%;
  ${zIndex('low')};
  ${({ hasVideo, fullImage }) => (hasVideo === true && fullImage === true ? 'display: none;' : null)};
  padding: ${spacing('l')};
  ${media('small')} {
    ${({ vhFull, fullImage }) => (vhFull || fullImage
    ? 'min-height: calc(100vh - 5.625rem); flex-direction: column; justify-content: center;'
    : 'height: auto;')};

    ${({ hasVideo, fullImage }) => (hasVideo === true && fullImage === true
    ? 'display: none;'
    : 'display: flex;')};

    flex-direction: column;
    justify-content: center;
    padding: ${spacing('xl')};
  }
  ${props => props.fullImage
    && css`
      ${media('small')} {
        position: absolute;
        width: 100%;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        ${props.copyFirst
    ? css`
              left: 0;
            `
    : null}
        width: 50%;
      }
    `};
  ${props => (props.hasImage
    ? css`
          @media ${({ theme }) => theme.breakpoint('small')} {
            width: 50%;
          }
        `
    : css`
          @media ${({ theme }) => theme.breakpoint('small')} {
            width: 100%;
            max-width ${container.small};
            padding: ${spacing('xl')};
          }
          margin: auto;
          padding: ${spacing('md')};
        `)};
`;

const Media = styled.div`
  width: 100%;
  ${({ fullImage }) => (fullImage ? 'height: 200px;' : 'height: 280px;')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    height: auto;
    width: ${({ fullImage }) => (fullImage ? '100%' : '50%')};
    ${({ fullImage }) => (fullImage ? 'min-height: 500px;' : null)};
    ${({ vhFull, fullImage }) => (vhFull && fullImage ? 'min-height: calc(100vh - 5.625rem);' : null)};
  }
  position: relative;
  ${({ doubleImage }) => doubleImage && 'display: flex; flex-direction: column'};
  ${({ hasVideo }) => (hasVideo
    ? 'height: auto; overflow: hidden; padding-bottom: 56.25%;'
    : null)};
  ${media('small')} {
    padding-bottom: ${({ landscapeVideo, hasVideo }) => (landscapeVideo && hasVideo ? 'calc(56.25% / 2);' : '0;')};
  }
`;

const PlayButton = styled.button`
  ${zIndex('medium')};
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border: 0;
  margin: 0;
  padding: 0;
  text-indent: -9999px;
  background: rgba(0, 0, 0, 0) center no-repeat;
  background-size: 70px;
  background-image: ${({ isBuffering }) => (isBuffering === true ? `url(${loadingIcon})` : `url(${playIcon})`)};

  ${({ copyFirst }) => (copyFirst === true ? 'left: auto; right: 0;' : 'left: 0; right: auto;')};

  display: ${({ isPlaying }) => (isPlaying ? 'none' : 'block')};

  &:focus,
  &:hover {
    background-image: ${({ isBuffering }) => (isBuffering === true ? `url(${loadingIcon})` : `url(${playIconHover})`)};
  }

  ${media('small')} {
    background-size: 100px;
  }
`;

const Image = styled.div`
  @media ${({ theme }) => theme.breakpoint('small')} {
    img {
      position: ${({ fullImage, vhFull }) => (fullImage || vhFull ? 'absolute' : null)};
    }
  }
  width: 100%;
  height: 100%;
  ${({ doubleImage }) => doubleImage && 'height: 50%'};
  ${({ isPlaying }) => (isPlaying ? zIndex('base') : zIndex('low'))};
  ${({ hasVideo }) => (hasVideo ? 'position: absolute; top: 0; left: 0;' : null)};
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${({ isPlaying }) => (isPlaying ? zIndex('medium') : zIndex('base'))};
`;

export {
  Container, Copy, Media, PlayButton, Image, VideoWrapper
};
