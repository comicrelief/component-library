import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../../Atoms/Picture/Picture';
import ArrowIcon from './ArrowIcon';

import {
  CardLink,
  ImageWrapper,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  ArrowIconWrapper,
  CardWrapper
} from './CTACard.style';

const CTACard = ({
  card,
  isCarousel,
  isFullWidth,
  isSingleCard
  // backgroundColour: propBackgroundColour
}) => {
  // isSingleCard implies isFullWidth - single cards are always full width
  const effectiveIsFullWidth = isSingleCard || isFullWidth;

  const {
    id,
    body,
    // image,
    // backgroundColour: cardBackgroundColour,
    link,
    linkLabel,
    fallback,
    imageLow,
    images,
    bgColour,
    description,
    target,
    external
  } = card;

  return (
    <CardWrapper key={id} isCarousel={isCarousel} isFullWidth={effectiveIsFullWidth}>
      <CardLink
        href={link}
        target={target}
        rel={external}
        isCarousel={isCarousel}
        isSingleCard={isSingleCard}
        // backgroundColor={bgColour}
      >
        {imageLow && (
          <ImageWrapper isSingleCard={isSingleCard}>
            <Picture
              alt={description}
              imageLow={imageLow}
              images={images}
              image={fallback}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </ImageWrapper>
        )}
        <CopyAndLinkSection backgroundColor={bgColour} isSingleCard={isSingleCard}>
          <Copy>
            {body}
          </Copy>
          {linkLabel && (
            <CTA>
              <CTAText>
                {linkLabel}
              </CTAText>
              <ArrowIconWrapper>
                <ArrowIcon />
              </ArrowIconWrapper>
            </CTA>
          )}
        </CopyAndLinkSection>
      </CardLink>
    </CardWrapper>
  );
};

CTACard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.node,
    link: PropTypes.string.isRequired,
    linkLabel: PropTypes.string,
    fallback: PropTypes.string,
    imageLow: PropTypes.string,
    images: PropTypes.string,
    bgColour: PropTypes.string.isRequired,
    description: PropTypes.string,
    target: PropTypes.string.isRequired,
    external: PropTypes.string
  }).isRequired,
  isCarousel: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isSingleCard: PropTypes.bool
  // backgroundColour: PropTypes.string
};

export default CTACard;
