import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Image = styled.div`
  height: auto;
  margin: 0 -${spacing('m')} 0 ${spacing('m')};
  img {
    border-radius: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  ${zIndex('medium')};
  ${({ hasImage }) =>
    hasImage &&
    css`
      margin-top: calc(-1 * (${spacing('xl')} + ${spacing('l')}));
      min-height: calc(5 * ${spacing('l')});
    `};
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  height: 100%;
`;

const CardDs = ({
  backgroundColor,
  imageLow,
  images,
  image,
  imageAltText,
  height,
  width,
  children,
  link,
  target,
  ...rest
}) => {
  const Media = (
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
  );

  return (
    <Container {...rest}>
      {imageLow && link ? (
        <a href={link} target={target} {...rest}>
          {Media}
        </a>
      ) : (
        Media
      )}
      <Copy hasImage={imageLow} backgroundColor={backgroundColor}>
        {children}
      </Copy>
    </Container>
  );
};

CardDs.propTypes = {
  backgroundColor: PropTypes.string,
  imageLow: PropTypes.string.isRequired,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired
};

CardDs.defaultProps = {
  backgroundColor: 'white',
  images: null,
  image: null,
  link: null,
  target: null,
  imageAltText: '',
  width: '100%',
  height: '100%'
};

export default CardDs;
