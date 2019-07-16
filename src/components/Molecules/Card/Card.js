import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Image = styled.div`
  height: 50%;
`;

const Copy = styled.div`
  padding: 20px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Card = ({ backgroundColor, image, images, imageAltText, children }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {image ? (
        <Image>
          <Picture
            alt={imageAltText}
            image={image}
            images={images}
            objectFit="cover"
            width="100%"
            height="100%"
          />
        </Image>
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
