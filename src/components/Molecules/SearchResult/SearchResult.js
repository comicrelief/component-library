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

const StyledLink = styled(Link)`
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
  :hover {
    border: 0;
    font-weight: normal;
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
  padding: ${spacing('none')} ${spacing('sm')} ${spacing('none')}
    ${spacing('md')};
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
      <StyledLink href={href} type="standard">
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
      </StyledLink>
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
