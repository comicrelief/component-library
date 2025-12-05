import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { snakeCase } from 'lodash';
import Picture from '../../Atoms/Picture/Picture';
import ArrowIcon from './ArrowIcon';
import allowListed from '../../../utils/allowListed';
import {
  CardLink,
  ImageWrapper,
  CopyAndLinkSection,
  Copy,
  CTA,
  CTAText,
  ArrowIconWrapper,
  CardWrapper
} from './CTAMultiCard.style';

const isInternalUrl = url => allowListed(url) || url.charAt(0) === '/' || url.charAt(0) === '#';

// Convert Contentful rich text to React components
const renderRichText = body => {
  // If body is already a React node, return it as-is
  if (React.isValidElement(body)) {
    return body;
  }

  if (body && body.raw) {
    try {
      const parsed = JSON.parse(body.raw);
      return documentToReactComponents(parsed);
    } catch (e) {
      return null;
    }
  }
  return null;
};

const SingleCard = ({
  card,
  isCarousel
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    body,
    image,
    backgroundColour,
    link,
    linkLabel
  } = card;

  const fallback = image?.gatsbyImageData?.images?.fallback?.src;
  const imageLow = image?.gatsbyImageData?.placeholder?.fallback;
  const images = image?.gatsbyImageData?.images?.sources[0]?.srcSet;
  const bgColour = snakeCase(backgroundColour || 'white');
  const description = image?.description ? image.description : '';
  const isInternalLink = isInternalUrl(link);
  const target = isInternalLink ? 'self' : 'blank';
  const external = target === 'blank' ? 'noopener' : null;

  const bodyContent = renderRichText(body);

  return (
    <CardWrapper key={id} isCarousel={isCarousel}>
      <CardLink
        href={link}
        target={target}
        rel={external}
        isCarousel={isCarousel}
        backgroundColor={bgColour}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageLow && (
          <ImageWrapper isHovered={isHovered}>
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
        <CopyAndLinkSection backgroundColor={bgColour}>
          <Copy>
            {bodyContent}
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
    </CardWrapper>
  );
};

SingleCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.shape({
        raw: PropTypes.string.isRequired
      })
    ]),
    image: PropTypes.shape({
      description: PropTypes.string,
      gatsbyImageData: PropTypes.shape({
        placeholder: PropTypes.shape({
          fallback: PropTypes.string
        }),
        images: PropTypes.shape({
          fallback: PropTypes.shape({
            src: PropTypes.string,
            srcSet: PropTypes.string
          }),
          sources: PropTypes.arrayOf(
            PropTypes.shape({
              srcSet: PropTypes.string
            })
          )
        })
      })
    }),
    backgroundColour: PropTypes.string,
    link: PropTypes.string.isRequired,
    linkLabel: PropTypes.string
  }).isRequired,
  isCarousel: PropTypes.bool
};

export default SingleCard;
