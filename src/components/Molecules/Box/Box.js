import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: auto;
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box = ({
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
      {children ? <Copy>{children}</Copy> : null}
    </Container>
  );
};

Box.propTypes = {
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node
};

Box.defaultProps = {
  children: null,
  imageLow: null,
  images: null,
  image: null,
  imageAltText: '',
  width: '100%',
  height: '100%'
};

export default Box;
