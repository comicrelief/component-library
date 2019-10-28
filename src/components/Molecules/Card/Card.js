import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
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
  height,
  width,
  label,
  children,
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {imageLow ? (
        <Image>
          <Picture
            alt={imageAltText}
            imageLow={imageLow}
            images={images}
            objectFit="cover"
            width={width}
            height={height}
          />
        </Image>
      ) : null}
      <Copy>
        <>
          {label ? (
            <Text
              tag="span"
              size="s"
              color={
                backgroundColor && backgroundColor.includes('dark')
                  ? 'white'
                  : 'black'
              }
              uppercase
            >
              {label}
            </Text>
          ) : null}
          {children}
        </>
      </Copy>
    </Container>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  imageLow: PropTypes.string,
  images: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node.isRequired
};

Card.defaultProps = {
  label: '',
  backgroundColor: 'white',
  imageLow: null,
  images: null,
  imageAltText: '',
  width: '100%',
  height: '100%'
};

export default Card;
