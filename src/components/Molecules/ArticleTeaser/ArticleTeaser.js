import React from 'react';
import PropTypes from 'prop-types';
import SRLogo from './assets/SRlogo.svg';
import CRLogo from './assets/CRlogo.svg';
import RNDLogo from './assets/RNDlogo.svg';
import {
  Wrapper, Link, ImageWrapper, CopyWrapper, Title, Date, Time, Image, CtaWrapper
} from './ArticleTeaser.style';

import altCtaUnderline from '../../../theme/shared/assets/alt_cta_underline.svg';
import { ArrowIconWrapper, ArrowIconInner } from '../shared/ctaArrow/CtaArrowCircle.style';
import ArrowIcon from '../shared/ctaArrow/ArrowIcon';

import {
  CtaIconWrapper, CtaText, CtaTextUnderline
} from '../HeroBanner/HeroBanner.style';

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
}) => {
  const isNewsTeaser = !category && category !== '';

  return (
    <Wrapper isNewsTeaser={isNewsTeaser}>
      <Link href={href} type="standard" category={category} underline={false}>
        <ImageWrapper isNewsTeaser={isNewsTeaser}>
          <Image
            imageLow={
            isNewsTeaser
              ? imageLow
              : handleCampaignLogo(category)
          }
            images={
            isNewsTeaser
              ? images
              : handleCampaignLogo(category)
          }
            image={
            isNewsTeaser
              ? image
              : handleCampaignLogo(category)
          }
            alt={alt}
            objectFit="cover"
            width={!isNewsTeaser ? logoSize : '100%'}
            height="auto"
          />
        </ImageWrapper>
        <CopyWrapper isNewsTeaser={isNewsTeaser}>
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

          <CtaWrapper>
            <CtaText className="cta">
              Learn more
              <CtaTextUnderline
                src={altCtaUnderline}
                alt="Learn more"
                className="cta-text-underline"
              />
            </CtaText>

            <CtaIconWrapper>
              <ArrowIconWrapper $preventHoverColourChange>
                <ArrowIconInner>
                  <ArrowIcon />
                </ArrowIconInner>
              </ArrowIconWrapper>
            </CtaIconWrapper>
          </CtaWrapper>

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
  alt: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  time: PropTypes.string,
  /** link url */
  href: PropTypes.string.isRequired
};

export default ArticleTeaser;
