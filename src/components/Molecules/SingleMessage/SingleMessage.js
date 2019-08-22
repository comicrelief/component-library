import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ vhFull }) => (vhFull ? 'min-height: 100vh;' : null)};
    flex-direction: ${({ copyFirst }) =>
      copyFirst === true ? 'row-reverse' : 'row'};
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  padding: 15vw 5vw;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 5vw;
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
  height: 100%;
  width: 100%;
`;

const Image = styled.div`
  width: 100%;
  ${({ doubleImage }) => (doubleImage ? 'height: 50vh;' : null)};
  ${({ vhFull }) => (vhFull ? 'height: 100vh;' : null)};
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
  vhFull
}) => {
  const hasImage = imageSet || false;
  const doubleImage = (imageSet || image) && (imageSet2 || image2);

  return (
    <Container
      backgroundColor={backgroundColor}
      copyFirst={copyFirst}
      vhFull={vhFull}
    >
      {imageSet || imageSet2 ? (
        <>
          <Media>
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
  vhFull: PropTypes.bool
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
  vhFull: false
};

export default SingleMessage;
