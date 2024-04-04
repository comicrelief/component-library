import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  position: relative;
  display: flex;

  flex-direction: ${props => (props.smallBreakpointLayout === 'Row' ? 'row' : 'column')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ mediumBreakpointLayout }) => (mediumBreakpointLayout === 'Row')
      && css`
        flex-direction: row;
      `}
  }

  height: 100%;
  border-radius: ${props => (props.squaredCorners ? '0' : '1rem')};
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Image = styled.div`
  height: auto;
`;

const Copy = styled.div`

  border: 1px solid red;

  padding: ${spacing('l')};

  ${({ smallBreakpointLayout, mediumBreakpointLayout }) => ((mediumBreakpointLayout || smallBreakpointLayout) === 'Row')
    && css`
      padding: ${spacing('sm')};
    `}

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
  squaredCorners,
  smallBreakpointLayout,
  mediumBreakpointLayout,
  ...rest
}) => (
  <Container
    backgroundColor={backgroundColor}
    squaredCorners={squaredCorners}
    smallBreakpointLayout={smallBreakpointLayout}
    mediumBreakpointLayout={mediumBreakpointLayout}
    {...rest}
  >
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
    {children
      ? (
        <Copy
          smallBreakpointLayout={smallBreakpointLayout}
          mediumBreakpointLayout={mediumBreakpointLayout}
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
  smallBreakpointLayout: PropTypes.string,
  mediumBreakpointLayout: PropTypes.string
};

Card.defaultProps = {
  backgroundColor: 'white',
  children: null,
  imageLow: null,
  images: null,
  image: null,
  imageAltText: '',
  width: '100%',
  height: '100%',
  squaredCorners: false,
  smallBreakpointLayout: 'Cards',
  mediumBreakpointLayout: 'Cards'
};

export default Card;
