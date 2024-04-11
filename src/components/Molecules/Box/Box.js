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
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: auto;
  flex-basis: calc(100% / 3);
  img {
    border-radius: ${props => (props.squaredCorners ? '0' : '1rem')};
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
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    justify-content: center;
  }

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
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
  squaredCorners,
  ...rest
}) => (
  <Container {...rest}>
    {imageLow ? (
      <Image squaredCorners={squaredCorners}>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={images}
          image={image}
          width={width}
          height="auto"
          squaredCorners={squaredCorners}
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
  squaredCorners: PropTypes.bool
};

Box.defaultProps = {
  children: null,
  imageLow: null,
  images: null,
  image: null,
  imageAltText: '',
  width: '100%',
  height: '100%',
  squaredCorners: false
};

export default Box;
