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
  height: 100%;
`;

const Image = styled.div`
  height: auto;
  margin: 0 -${spacing('l')} 0 ${spacing('l')};
  img {
    border-radius: 10px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  }
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  ${zIndex('medium')};
  ${({ hasImage }) =>
    hasImage &&
    css`
      margin-top: -${spacing('xxl')};
      min-height: calc(5 * ${spacing('l')});
    `};
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
`;

const Card = ({
  backgroundColor,
  imageLow,
  images,
  image,
  imageAltText,
  height,
  width,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {imageLow ? (
        <Image>
          <Picture
            alt={imageAltText}
            imageLow={imageLow}
            images={images}
            image={image}
            objectFit="cover"
            width={width}
            height={height}
          />
        </Image>
      ) : null}
      {children ? (
        <Copy hasImage={imageLow} backgroundColor={backgroundColor}>
          {children}
        </Copy>
      ) : null}
    </Container>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node
};

Card.defaultProps = {
  backgroundColor: 'white',
  children: null,
  imageLow: null,
  images: null,
  image: null,
  imageAltText: '',
  width: '100%',
  height: '100%'
};

export default Card;
