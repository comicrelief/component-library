import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacing';
import { campaign } from '../../../styleguide/data/data';

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
    flex-direction: ${({ category }) => !category && 'column'};
  }
`;

const ImageWrapper = styled.div`
  padding-left: ${({ category }) => category && `${spacing('md')}`};
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex: ${({ category }) => !category && '0 0 45%'};
  }
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  flex: 1;
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
      return campaign.CR;
    case 'Sport Relief':
      return campaign.SR;
    case 'Red Nose Day':
      return campaign.RND;
    default:
      return campaign.CR;
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
            imageLow={!category ? imageLow : handleCampaignLogo(category)}
            images={!category ? images : handleCampaignLogo(category)}
            image={image}
            alt={alt}
            objectFit="cover"
            width={category ? logoSize : '100%'}
            height={category ? logoSize : '100%'}
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
  category: PropTypes.oneOf(['Comic Relief', 'Sport Relief', 'Red Nose Day']),
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
