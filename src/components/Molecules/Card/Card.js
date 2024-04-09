import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Check for Cards/smallBreakpointLayout prop coming from the CMS */
  @media ${({ theme }) => theme.allBreakpoints('mobile')} {
    ${({ smallBreakpointLayout }) => (smallBreakpointLayout === 'Row')
      && css`
        flex-direction: row;
      `}
  }
  /* Check for Cards/mediumBreakpointLayout prop coming from the CMS */
  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
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

const Wrapper = styled.div`
  height: auto;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing('l')};
  /* Check for Cards/smallBreakpointLayout prop coming from the CMS, adjust text spacing */
  @media ${({ theme }) => theme.allBreakpoints('mobile')} {
    ${({ smallBreakpointLayout }) => (smallBreakpointLayout === 'Row')
      && css`
        padding: ${spacing('sm')};
        h1, h2, h3, h4, h5 {
         margin-bottom: 0.5rem;
        }
      `}
  }
  /* Check for Cards/mediumBreakpointLayout prop coming from the CMS */
  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
    ${({ mediumBreakpointLayout }) => (mediumBreakpointLayout === 'Row')
      && css`
        padding: ${spacing('sm')};
        h1, h2, h3, h4, h5 {
         margin: 0.5rem 0 0.5rem;
        }
      `}
  }
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
      <Wrapper>
        <Picture
          alt={imageAltText}
          imageLow={imageLow}
          images={images}
          image={image}
          objectFit="cover"
          width={width}
          height={height}
          smallBreakpointLayout={smallBreakpointLayout}
          mediumBreakpointLayout={mediumBreakpointLayout}
        />
      </Wrapper>
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
