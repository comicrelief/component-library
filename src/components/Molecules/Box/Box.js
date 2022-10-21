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

  @media ${({ theme }) => theme.breakpoint('large')} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: auto;
  flex-basis: calc(100% / 3);
  img {
    border-radius: ${props => (props.squareCorners ? '0' : '1rem')};
    overflow: hidden;
  }
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(200% / 3);
  @media ${({ theme }) => theme.breakpoint('small')} {
    justify-content: center;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    justify-content: normal;
  }
`;

const Box = ({
  imageLow,
  images,
  image,
  imageAltText,
  height,
  width,
  children,
  squareCorners,
  ...rest
}) => (
  <Container {...rest}>
    {imageLow ? (
      <Image squareCorners={squareCorners}>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={images}
          image={image}
          width={width}
          height="auto"
        />
      </Image>
    ) : null}
    {children ? <Copy>{children}</Copy> : null}
  </Container>
);

Box.propTypes = {
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node,
  squareCorners: PropTypes.bool
};

Box.defaultProps = {
  children: null,
  imageLow: null,
  images: null,
  image: null,
  imageAltText: '',
  width: '100%',
  height: '100%',
  squareCorners: false
};

export default Box;
