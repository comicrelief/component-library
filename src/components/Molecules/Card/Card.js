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
  padding: ${spacing('md')};
  display: flex;
  flex-direction: column;
`;

const Card = ({
  backgroundColor,
  imageLow,
  images,
  imageAltText,
  children
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      {imageLow ? (
        <Image>
          <Picture
            alt={imageAltText}
            imageLow={imageLow}
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
  imageLow: PropTypes.string,
  images: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  backgroundColor: 'white',
  imageLow: null,
  images: null,
  imageAltText: ''
};

export default Card;
