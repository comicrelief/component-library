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
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 45%;
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
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
  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 100%;
    height: 100%;
  }
`;

/**
 * Article teaser component
 */
const ArticleTeaser = ({ date, href, images, alt, title, image }) => {
  return (
    <Wrapper>
      <Link href={href} inline>
        <ImageWrapper>
          <Picture images={images} image={image} alt={alt} objectFit="cover" />
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
  images: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  /** link url */
  href: PropTypes.string.isRequired
};

export default ArticleTeaser;
