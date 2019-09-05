import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacing';

/**
 * Article Teaser
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
`;

const Link = styled(link)`
  display: flex;
  height: 100%;
  flex-direction: ${({ category }) => (category ? 'row' : 'column')};
  align-items: ${({ category }) => category && 'center'};
  text-decoration: none;
  color: inherit;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    flex-direction: ${({ category }) => (category ? 'row' : 'column')};
  }
`;

const ImageWrapper = styled.div`
  height: auto;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: ${({ category }) => (category ? '70px' : '45%')};
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: ${({ category }) => (category ? '70px' : '100%')};
  }
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: ${({ category }) => (category ? '100%' : '55%')};
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

const Title = styled(Text)`
  margin: 0;
`;

/**
 * Article teaser component
 */
const ArticleTeaser = ({
  href,
  date,
  title,
  imageLow,
  image,
  images,
  alt,
  category
}) => {
  return (
    <Wrapper>
      <Link href={href} type="standard" category={category} underline={false}>
        <ImageWrapper category={category}>
          <Picture
            imageLow={imageLow}
            images={images}
            image={image}
            alt={alt}
            objectFit="cover"
          />
        </ImageWrapper>
        <CopyWrapper category={category}>
          <Text size="xxs" weight="bold" uppercase>
            {date}
          </Text>
          <Title size="xl" tag="h3" uppercase>
            {title}
          </Title>
        </CopyWrapper>
      </Link>
    </Wrapper>
  );
};

ArticleTeaser.propTypes = {
  images: PropTypes.string,
  image: PropTypes.string,
  imageLow: PropTypes.string,
  category: PropTypes.string,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  /** link url */
  href: PropTypes.string.isRequired
};

ArticleTeaser.defaultProps = {
  imageLow: null,
  image: null,
  images: null,
  category: null
};

export default ArticleTeaser;
