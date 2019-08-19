import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';

/**
 * Article Teaser
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
`;

const Link = styled.a`
  display: flex;
  height: 100%;
  border: 0;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  height: auto;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 45%;
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
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
  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

/**
 * Article teaser component
 */
const ArticleTeaser = ({ href, date, title, imageLow, image, images, alt }) => {
  return (
    <Wrapper>
      <Link href={href} type="standard">
        <ImageWrapper>
          <Picture
            imageLow={imageLow}
            images={images}
            image={image}
            alt={alt}
            objectFit="cover"
          />
        </ImageWrapper>
        <CopyWrapper>
          <Text size="xxs" weight="bold" uppercase>
            {date}
          </Text>
          <Text size="xl" tag="h3" uppercase>
            {title}
          </Text>
        </CopyWrapper>
      </Link>
    </Wrapper>
  );
};

ArticleTeaser.propTypes = {
  images: PropTypes.string,
  image: PropTypes.string,
  imageLow: PropTypes.string,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  /** link url */
  href: PropTypes.string.isRequired
};

ArticleTeaser.defaultProps = {
  imageLow: null,
  image: null,
  images: null
};

export default ArticleTeaser;
