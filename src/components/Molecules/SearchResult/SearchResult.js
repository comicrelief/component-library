import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import Link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacing';

/**
 * Search Result
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color('white')};
`;

const Item = styled(Link)`
  display: flex;
  height: 100%;
  border: 0;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  width: 100%;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }
  :hover {
    border: 0;
    font-weight: normal;
  }
`;

const ImageWrapper = styled.div`
  height: auto;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: ${({ smallImageWidth }) => smallImageWidth};
  }
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    width: ${({ largeImageWidth }) => largeImageWidth};
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing('md')};
  width: 100%;
`;

const Title = styled(Text)`
  margin: 0;
`;

/**
 * Search Result component
 */
const SearchResult = ({
  imageLow = null,
  images = null,
  type = '',
  date = '',
  copy = '',
  smallImageWidth = '45%',
  largeImageWidth = '100%',
  href,
  title,
  alt
}) => (
  <Wrapper>
    <Item href={href} type="standard">
      <ImageWrapper
        smallImageWidth={smallImageWidth}
        largeImageWidth={largeImageWidth}
      >
        <Picture
          imageLow={imageLow}
          images={images}
          objectFit="cover"
          alt={alt}
        />
      </ImageWrapper>
      <CopyWrapper>
        <Text size="xs" uppercase>
          {`${type ? ` ${type} |` : ''} ${date}`}
        </Text>
        <Title size="xl" tag="h3" uppercase>
          {title}
        </Title>
        {copy && (
        <Text size="m" tag="p">
          {copy}
        </Text>
        )}
      </CopyWrapper>
    </Item>
  </Wrapper>
);

SearchResult.propTypes = {
  /** type */
  type: PropTypes.string,
  /** copy */
  copy: PropTypes.string,
  /** date */
  date: PropTypes.string,
  /** image width on small screens */
  smallImageWidth: PropTypes.string,
  /** image width on large screens */
  largeImageWidth: PropTypes.string,
  /** image alt */
  alt: PropTypes.string.isRequired,
  /** title */
  title: PropTypes.string.isRequired,
  /** link url */
  href: PropTypes.string.isRequired,
  /** image url */
  images: PropTypes.string,
  imageLow: PropTypes.string
};

export default SearchResult;
