import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Picture from '../../Atoms/Picture/Picture';
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

/** Single Message is our main component usually to build landing pages */
const SingleMessage = ({
  backgroundColor,
  copyFirst,
  imageLow,
  imageSet,
  image,
  imageSet2,
  image2,
  imageAltText,
  imageAltText2,
  children,
  fullImage,
  vhFull,
  videoID
}) => {
  const hasImage = imageSet || false;
  const doubleImage = (imageSet || image) && (imageSet2 || image2);
  const hasVideo = !!(videoID !== null && videoID !== '');
  const randomTitle = Math.random()
    .toString(36)
    .substring(7);

  return (
    <Container
      backgroundColor={backgroundColor}
      copyFirst={copyFirst}
      vhFull={vhFull}
    >
      {hasVideo ? (
        <IFrame
          src={`https://www.youtube.com/embed/${videoID}?enablejsapi=1&rel=0&fs=0`}
          modestbranding="1"
          showtitle="0"
          showinfo="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title={randomTitle}
        />
      ) : null}

      {imageSet || imageSet2 ? (
        <>
          <Media doubleImage={doubleImage}>
            {imageSet || image ? (
              <Image doubleImage={doubleImage} vhFull={vhFull}>
                <Picture
                  alt={imageAltText}
                  imageLow={imageLow}
                  images={imageSet}
                  image={image}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Image>
            ) : null}
            {imageSet2 || image2 ? (
              <Image doubleImage={doubleImage} vhFull={vhFull}>
                <Picture
                  alt={imageAltText2}
                  imageLow={imageLow}
                  images={imageSet2}
                  image={image2}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Image>
            ) : null}
          </Media>
        </>
      ) : null}

      {hasVideo ? <PlayButton id={randomTitle}>Play video</PlayButton> : null}

      <Copy fullImage={fullImage} hasImage={hasImage} copyFirst={copyFirst}>
        {children}
      </Copy>
    </Container>
  );
};

SingleMessage.propTypes = {
  backgroundColor: PropTypes.string,
  /** Copy will come on the left and Image on the right */
  copyFirst: PropTypes.bool,
  /** Image will be 100% wide and copy over the image (left, right or centre) */
  fullImage: PropTypes.bool,
  imageLow: PropTypes.string,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageSet2: PropTypes.string,
  image2: PropTypes.string,
  imageAltText: PropTypes.string,
  imageAltText2: PropTypes.string,
  children: PropTypes.node.isRequired,
  /** Image will be the height of the viewport */
  vhFull: PropTypes.bool,
  videoID: PropTypes.string
};

SingleMessage.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  fullImage: false,
  imageSet: null,
  imageLow: null,
  image: null,
  imageSet2: null,
  image2: null,
  imageAltText: '',
  imageAltText2: '',
  vhFull: false,
  videoID: null
};

export default SingleMessage;
