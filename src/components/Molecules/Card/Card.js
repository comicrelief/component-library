import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Copy = styled.div`
  padding: 20px;
`;

const Card = ({ backgroundColor, image, images, imageAltText, children }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {image ? (
        <Picture
          alt={imageAltText}
          image={image}
          images={images}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      ) : null}
      <Copy>{children}</Copy>
    </Container>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.string,
  images: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  backgroundColor: 'white',
  image: null,
  images: null,
  imageAltText: ''
};

export default Card;
