import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Image = styled.div`
  height: auto;
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
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
}) => (
  <Container backgroundColor={backgroundColor} {...rest}>
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
    {children ? <Copy>{children}</Copy> : null}
  </Container>
);

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
