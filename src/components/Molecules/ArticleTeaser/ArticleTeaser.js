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
  padding: 0;
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
  display: flex;
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex: ${({ category }) => !category && '0 0 45%'};
    padding-left: ${({ category }) => category && `${spacing('md')}`};
  }
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  word-break: break-all;
`;

const Title = styled(Text)`
  margin: 0;
`;

const Image = styled(Picture)`
  display: flex;
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
  category,
  logoSize
}) => {
  return (
    <Wrapper>
      <Link href={href} type="standard" category={category} underline={false}>
        <ImageWrapper category={category}>
          <Image
            imageLow={imageLow}
            images={images}
            image={image}
            alt={alt}
            objectFit="cover"
            width={category ? logoSize : '100%'}
            height={category ? logoSize : '100%'}
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
  logoSize: PropTypes.string,
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
  category: null,
  logoSize: null
};

export default ArticleTeaser;
