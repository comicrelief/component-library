import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import StyledLink from '../../Atoms/Link/Link.style';

const ArticleTeaser = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
`;

const Link = styled(StyledLink)`
  display: flex;
  height: 100%;
  border: 0;
  flex-direction: column;
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

const ArticleBlock = ({
  date,
  href,
  inline,
  images,
  target,
  alt,
  uppercase,
  weight,
  copy,
  objectFit
}) => {
  const window = target === 'blank' ? '_blank' : '_self';
  return (
    <ArticleTeaser>
      <Link href={href} target={window} inline={inline}>
        <ImageWrapper>
          <Picture images={images} alt={alt} objectFit={objectFit} />
        </ImageWrapper>
        <CopyWrapper>
          <Text uppercase={uppercase} size="xxs" weight={weight}>
            {date}
          </Text>
          <Text tag="h3">{copy}</Text>
        </CopyWrapper>
      </Link>
    </ArticleTeaser>
  );
};

ArticleBlock.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  images: PropTypes.object.isRequired,
  alt: PropTypes.string,
  /** Inline is link style */
  inline: PropTypes.bool,
  uppercase: PropTypes.bool,
  /** link target */
  target: PropTypes.string,
  date: PropTypes.string,
  weight: PropTypes.string,
  objectFit: PropTypes.string,
  copy: PropTypes.string.isRequired,
  /** link url */
  href: PropTypes.string.isRequired
  // children: PropTypes.node.isRequired
};

ArticleBlock.defaultProps = {
  target: 'self',
  inline: true,
  alt: '',
  date: 'Date goes here',
  uppercase: false,
  weight: 'normal',
  objectFit: 'none'
};

export default ArticleBlock;
