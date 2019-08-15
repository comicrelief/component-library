import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';

/**
 * Search Result
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
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px 0px 20px;
  h3 {
    margin: 0;
  }
  width: 100%;
`;

/**
 * Search Result component
 */
const SearchResult = ({
  href,
  date,
  title,
  copy,
  type,
  image,
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
          <Picture image={image} alt={alt} objectFit="cover" />
        </ImageWrapper>
        <CopyWrapper>
          <Text size="xs" uppercase>
            {`${type ? ` ${type} |` : ''} ${date}`}
          </Text>
          <Text size="xl" tag="h3" uppercase>
            {title}
          </Text>
          {copy && (
            <Text size="m" tag="p">
              {copy}
            </Text>
          )}
        </CopyWrapper>
      </Link>
    </Wrapper>
  );
};

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
  image: PropTypes.string.isRequired
};

SearchResult.defaultProps = {
  type: '',
  date: '',
  copy: '',
  smallImageWidth: '45%',
  largeImageWidth: '100%'
};

export default SearchResult;
