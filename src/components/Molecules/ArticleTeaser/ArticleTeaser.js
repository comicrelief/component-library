import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacing';
import SR from '../../Atoms/Logo/assets/sr-logo.svg';
import CR from '../../Atoms/Logo/assets/cr-logo.svg';
import RND from './assets/RND.png';

/**
 * Article Teaser
 */
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color('white')};
  border-radius: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
`;

const Link = styled(link)`
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: ${({ category }) => (category || category === '' ? 'row' : 'column')};
  align-items: ${({ category }) => (category || category === '') && 'center'};
  text-decoration: none;
  color: inherit;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    flex-direction: ${({ category }) => !category && category !== '' && 'column'};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ category }) => (category || category === '')
    && css`
      padding-left: ${spacing('md')};
      img {
        border-radius: 0;
      }
    `};

  ${({ category }) => !category
    && category !== ''
    && css`
      img {
        border-radius: 1rem 1rem 0 0;
      }
      @media ${({ theme }) => theme.breakpoint('small')} {
        width: 45%;
        img {
          border-radius: 1rem 0 0 1rem;
        }
      }
      @media ${({ theme }) => theme.breakpoint('medium')} {
        width: 100%;
        img {
          border-radius: 1rem 1rem 0 0;
        }
      }
    `};
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ category }) => !category
    && category !== ''
    && css`
      @media ${({ theme }) => theme.breakpoint('small')} {
        width: 55%;
      }
    `};
  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

const Title = styled(Text)`
  margin: ${({ time }) => (time ? `0 0 ${spacing('md')}` : '0')};
`;

const Date = styled(Text)`
  display: block;
  margin-bottom: ${spacing('md')};
`;

const Time = styled(Text)`
  display: block;
  margin-top: auto;
`;

const Image = styled(Picture)`
  display: flex;
`;

const handleCampaignLogo = category => {
  switch (category) {
    case 'Comic Relief':
      return CR;
    case 'Sport Relief':
      return SR;
    case 'Red Nose Day':
      return RND;
    default:
      return CR;
  }
};

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
  logoSize,
  family,
  time
}) => (
  <Wrapper>
    <Link href={href} type="standard" category={category} underline={false}>
      <ImageWrapper category={category}>
        <Image
          imageLow={
              !category && category !== ''
                ? imageLow
                : handleCampaignLogo(category)
            }
          images={
              !category && category !== ''
                ? images
                : handleCampaignLogo(category)
            }
          image={
            !category && category !== ''
              ? image
              : handleCampaignLogo(category)
          }
          alt={alt}
          objectFit="cover"
          width={category || category === '' ? logoSize : '100%'}
          height={category || category === '' ? logoSize : '100%'}
        />
      </ImageWrapper>
      <CopyWrapper category={category}>
        <Date size="xs" weight="bold">
          {date}
        </Date>
        <Title
          time={time}
          size="xl"
          tag="h3"
          height="2rem"
          weight="normal"
          uppercase
          family={family}
        >
          {title}
        </Title>
        {time && (
        <Time size="xs" weight="400" color="grey_dark">
          {time}
        </Time>
        )}
      </CopyWrapper>
    </Link>
  </Wrapper>
);

ArticleTeaser.propTypes = {
  images: PropTypes.string,
  image: PropTypes.string,
  imageLow: PropTypes.string,
  logoSize: PropTypes.string,
  family: PropTypes.string,
  category: PropTypes.string,
  alt: PropTypes.string,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string,
  /** link url */
  href: PropTypes.string.isRequired
};

ArticleTeaser.defaultProps = {
  imageLow: null,
  image: null,
  images: null,
  category: null,
  logoSize: null,
  time: null,
  alt: '',
  family: 'Anton'
};

export default ArticleTeaser;
