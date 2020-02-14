import React from 'react';
import styled from 'styled-components';
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
  margin: 0 -${spacing('l')} 0 ${spacing('l')};
  img {
    border-radius: 10px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  }
`;

const Copy = styled.div`
  padding: ${spacing('l')};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  ${zIndex('medium')};
  margin-top: -${spacing('xl')};
  min-height: calc(4 * ${spacing('l')});
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
  height: 100%;
`;

const DSCard = ({
  backgroundColor,
  imageLow,
  images,
  image,
  imageAltText,
  children,
  isCTA,
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
        width="100%"
        height="100%"
      />
    </Image>
  );

  return (
    <Container {...rest} isCTA={isCTA}>
      {imageLow ? Media : null}
      <Copy backgroundColor={backgroundColor}>{children}</Copy>
    </Container>
  );
};

DSCard.propTypes = {
  backgroundColor: PropTypes.string,
  isCTA: PropTypes.bool,
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  imageAltText: PropTypes.string,
  children: PropTypes.node.isRequired
};

DSCard.defaultProps = {
  backgroundColor: 'white',
  isCTA: false,
  imageLow: null,
  images: null,
  image: null,
  imageAltText: ''
};

export default DSCard;
