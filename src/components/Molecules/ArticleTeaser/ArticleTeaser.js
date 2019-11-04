import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacing';
import SR from './assets/SR.png';
import CR from './assets/CR.png';
import RND from './assets/RND.png';

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
  flex-direction: ${({ category }) =>
    category || category === '' ? 'row' : 'column'};
  align-items: ${({ category }) => (category || category === '') && 'center'};
  text-decoration: none;
  color: inherit;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    flex-direction: ${({ category }) =>
      !category && category !== '' && 'column'};
  }
`;

const ImageWrapper = styled.div`
  padding-left: ${({ category }) =>
    (category || category === '') && `${spacing('md')}`};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ category }) => !category && category !== '' && 'width: 45%'};
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 55%;
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

const Title = styled(Text)`
  margin: 0;
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
  family
}) => {
  return (
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
            image={image}
            alt={alt}
            objectFit="cover"
            width={category || category === '' ? logoSize : '100%'}
            height={category || category === '' ? logoSize : '100%'}
          />
        </ImageWrapper>
        <CopyWrapper category={category}>
          <Text size="xxs" weight="800" uppercase>
            {date}
          </Text>
          <Title size="xl" tag="h3" weight="normal" uppercase family={family}>
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
  family: PropTypes.string,
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
  logoSize: null,
  family: 'Anton'
};

export default ArticleTeaser;
