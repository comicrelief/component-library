import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import StyledLink from '../../Atoms/Link/Link.style';

const ArticleTeaser = styled.article`
  width: 100%;
  height: 100%;
  display: inline-block;
  background-color: #fff;
`;

const Link = styled(StyledLink)`
  display: inline-block;
  height: 100%;
  border: 0;
`;

const ImageWrapper = styled(Picture)`
  height: 100%;
`;

const CopyWrapper = styled.div`
  padding: 40px;
  h3 {
    margin: 0;
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
  copy
}) => {
  const window = target === 'blank' ? '_blank' : '_self';
  return (
    <ArticleTeaser>
      <Link href={href} target={window} inline={inline}>
        <ImageWrapper images={images} alt={alt} />
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
  weight: 'normal'
};

export default ArticleBlock;
