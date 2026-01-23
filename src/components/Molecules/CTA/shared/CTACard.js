import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../../Atoms/Picture/Picture';
import ArrowIcon from './_ArrowIcon';
import altCtaUnderline from '../../../../theme/shared/assets/alt_cta_underline.svg';
import {
  CardLink,
  ImageWrapper,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  CTATextUnderline,
  ArrowIconWrapper,
  CardWrapper
} from './CTACard.style';

const CTACard = ({
  card,
  columns,
  isCarousel,
  isFullWidth,
  isSingleCard
}) => {
  // isSingleCard implies isFullWidth - single cards are always full width
  const effectiveIsFullWidth = isSingleCard || isFullWidth;

  const {
    id,
    body,
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
    <CardWrapper
      key={id}
      isCarousel={isCarousel}
      isFullWidth={effectiveIsFullWidth}
      columns={columns}
    >
      <CardLink
        href={link}
        target={target}
        rel={external}
        isCarousel={isCarousel}
        isSingleCard={isSingleCard}
        backgroundColor={bgColour}
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
                <CTATextUnderline
                  src={altCtaUnderline}
                  alt=""
                  aria-hidden="true"
                />
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
    link: PropTypes.string,
    linkLabel: PropTypes.string,
    fallback: PropTypes.string,
    imageLow: PropTypes.string,
    images: PropTypes.string,
    bgColour: PropTypes.string.isRequired,
    description: PropTypes.string,
    target: PropTypes.string.isRequired,
    external: PropTypes.string
  }).isRequired,
  columns: PropTypes.oneOf([2, 3]),
  isCarousel: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isSingleCard: PropTypes.bool
};

export default CTACard;
