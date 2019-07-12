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
  padding: 20px;
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

const Image = styled.div`
  width: 100%;
`;

const SingleMessage = ({
  backgroundColor,
  copyFirst,
  imageSet,
  image,
  imageAltText,
  children,
  fullImage
}) => {
  const hasImage = imageSet || false;

  return (
    <Container backgroundColor={backgroundColor} copyFirst={copyFirst}>
      {imageSet && image ? (
        <Image>
          <Picture
            alt={imageAltText}
            images={imageSet}
            image={image}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Image>
      ) : null}
      <Copy fullImage={fullImage} hasImage={hasImage} copyFirst={copyFirst}>
        {children}
      </Copy>
    </Container>
  );
};

SingleMessage.propTypes = {
  backgroundColor: PropTypes.string,
  copyFirst: PropTypes.bool,
  fullImage: PropTypes.bool,
  imageSet: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node.isRequired
};

SingleMessage.defaultProps = {
  backgroundColor: 'white',
  copyFirst: false,
  fullImage: false,
  imageSet: null,
  image: null,
  imageAltText: ''
};

export default SingleMessage;
