import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';

/**
 * Article tag wrapper
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Link = styled.a`
  display: flex;
  height: 100%;
  border: 0;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  height: auto;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: ${({ smallImageWidth }) => smallImageWidth};
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
    width: ${({ largeImageWidth }) => largeImageWidth};
  }
`;

const CopyWrapper = styled.div`
  padding: 40px;
  h3 {
    margin: 0;
  }
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 55%;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 100%;
    height: 100%;
  }
`;

/**
 * Article teaser component
 */
const ArticleTeaser = ({
  href,
  date,
  title,
  copy,
  image,
  images,
  alt,
  smallImageWidth,
  largeImageWidth
}) => {
  return (
    <Wrapper>
      <Link href={href} type="standard">
        <ImageWrapper
          smallImageWidth={smallImageWidth}
          largeImageWidth={largeImageWidth}
        >
          <Picture images={images} image={image} alt={alt} objectFit="cover" />
        </ImageWrapper>
        <CopyWrapper>
          <Text size="xxs" weight="bold" uppercase>
            {date}
          </Text>
          <Text size="xl" tag="h3" uppercase>
            {title}
          </Text>
          {copy && <Text size="l">{copy}</Text>}
        </CopyWrapper>
      </Link>
    </Wrapper>
  );
};

ArticleTeaser.propTypes = {
  images: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string,
  smallImageWidth: PropTypes.string,
  largeImageWidth: PropTypes.string,
  /** link url */
  href: PropTypes.string.isRequired
};

ArticleTeaser.defaultProps = {
  copy: '',
  smallImageWidth: '45%',
  largeImageWidth: '100%'
};

export default ArticleTeaser;
