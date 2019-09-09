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
  ${zIndex('low')};

  ${({ doubleImage }) =>
    doubleImage && 'display: flex; flex-direction: column'};
`;

const PlayButton = styled.button`
  ${zIndex('medium')};
  cursor: pointer;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  background: rgba(0, 0, 0, 0)
    url(https://www.comicrelief.com/themes/custom/comicrelief/images/copyvideo--play-icon__hover.svg)
    center no-repeat;
  background-position: center center;
  background-size: 100px;
  margin: 0;
  padding: 0;
  text-indent: -9999px;
`;

const Image = styled.div`
  width: 100%;
  ${({ doubleImage }) => (doubleImage ? 'height: 100%;' : 'height: 100%;')};
  ${({ vhFull }) => vhFull && 'height: 100%'};
`;

const IFrame = styled.iframe`
  ${zIndex('base')};
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
`;

export { Container, Copy, Media, PlayButton, Image, IFrame };
