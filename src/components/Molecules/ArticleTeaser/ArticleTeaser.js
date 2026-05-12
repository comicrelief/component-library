import React from 'react';
import PropTypes from 'prop-types';
import SRLogo from './assets/SRlogo.svg';
import CRLogo from './assets/CRlogo.svg';
import RNDLogo from './assets/RNDlogo.svg';
import {
  Wrapper, Link, ImageWrapper, CopyWrapper, Title, Date, Time, Image
} from './ArticleTeaser.style';

const handleCampaignLogo = category => {
  switch (category) {
    case 'Comic Relief':
      return CRLogo;
    case 'Sport Relief':
      return SRLogo;
    case 'Red Nose Day':
      return RNDLogo;
    default:
      return CRLogo;
  }
};

/**
 * Article teaser component
 */
const ArticleTeaser = ({
  href,
  title,
  date = null,
  imageLow = null,
  image = null,
  images = null,
  alt = '',
  category = null,
  logoSize = null,
  time = null
}) => (
  <Wrapper category={category}>
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
          height="auto"
        />
      </ImageWrapper>
      <CopyWrapper category={category}>
        {date && (
          <Date size="xs" weight="bold">
            {date}
          </Date>
        )}
        <Title
          time={time}
          tag="h4"
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
  category: PropTypes.string,
  alt: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  time: PropTypes.string,
  /** link url */
  href: PropTypes.string.isRequired
};

export default ArticleTeaser;
