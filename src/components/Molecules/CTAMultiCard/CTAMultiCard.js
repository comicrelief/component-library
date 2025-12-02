import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picture from '../../Atoms/Picture/Picture';
import ArrowIcon from './ArrowIcon';
import {
  CardLink, ImageWrapper, CopyAndLinkSection, Copy, CTA, CTAText, ArrowIconWrapper
} from './CTAMultiCard.style';

const CTAMultiCard = ({
  backgroundColor = 'white',
  imageLow = null,
  images = null,
  image = null,
  link = null,
  linkLabel = null,
  target = null,
  imageAltText = '',
  width = '100%',
  height = '100%',
  children,
  isCarousel,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const external = target === 'blank' ? 'noopener' : null;

  // If no link provided, render as div instead of link
  if (!link) {
    return (
      <CardLink
        as="div"
        isCarousel={isCarousel}
        backgroundColor={backgroundColor}
        {...rest}
      >
        {imageLow && (
          <ImageWrapper>
            <Picture
              alt={imageAltText}
              imageLow={imageLow}
              images={images}
              image={image}
              objectFit="cover"
              width={width}
              height={height}
            />
          </ImageWrapper>
        )}
        <CopyAndLinkSection backgroundColor={backgroundColor}>
          <Copy>
            {children}
          </Copy>
        </CopyAndLinkSection>
      </CardLink>
    );
  }

  return (
    <CardLink
      href={link}
      target={target}
      rel={external}
      isCarousel={isCarousel}
      backgroundColor={backgroundColor}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {imageLow && (
        <ImageWrapper isHovered={isHovered}>
          <Picture
            alt={imageAltText}
            imageLow={imageLow}
            images={images}
            image={image}
            objectFit="cover"
            width={width}
            height={height}
          />
        </ImageWrapper>
      )}
      <CopyAndLinkSection backgroundColor={backgroundColor}>
        <Copy>
          {children}
        </Copy>
        {linkLabel && (
          <CTA>
            <CTAText isHovered={isHovered}>
              {linkLabel}
            </CTAText>
            <ArrowIconWrapper isHovered={isHovered}>
              <ArrowIcon isHovered={isHovered} />
            </ArrowIconWrapper>
          </CTA>
        )}
      </CopyAndLinkSection>
    </CardLink>
  );
};

CTAMultiCard.propTypes = {
  isCarousel: PropTypes.bool,
  backgroundColor: PropTypes.string,
  imageLow: PropTypes.string,
  images: PropTypes.string,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  imageAltText: PropTypes.string,
  link: PropTypes.string,
  linkLabel: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CTAMultiCard;
