import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import { Container, Wrapper, Copy } from './Card.style';

const Card = ({
  backgroundColor = 'white',
  children = null,
  imageLow = null,
  images = null,
  image = null,
  imageAltText = '',
  width = '100%',
  height = '100%',
  squaredCorners = false,
  smallBreakpointRowLayout = null,
  mediumBreakpointRowLayout = null,
  ...rest
}) => (
  <Container
    backgroundColor={backgroundColor}
    squaredCorners={squaredCorners}
    smallBreakpointRowLayout={smallBreakpointRowLayout}
    mediumBreakpointRowLayout={mediumBreakpointRowLayout}
    {...rest}
  >
    {imageLow ? (
      <Wrapper>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={images}
          image={image}
          objectFit="cover"
          width={width}
          height={height}
          smallBreakpointRowLayout={smallBreakpointRowLayout}
          mediumBreakpointRowLayout={mediumBreakpointRowLayout}
        />
      </Wrapper>
    ) : null}
    {children
      ? (
        <Copy
          smallBreakpointRowLayout={smallBreakpointRowLayout}
          mediumBreakpointRowLayout={mediumBreakpointRowLayout}
        >
          {children}
        </Copy>
      ) : null}
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
  children: PropTypes.node,
  squaredCorners: PropTypes.bool,
  smallBreakpointRowLayout: PropTypes.bool,
  mediumBreakpointRowLayout: PropTypes.bool
};

export default Card;
