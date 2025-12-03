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
  CardsContainer,
  CardWrapper
} from './CTAMultiCard.style';

/**
 * CTAMultiCard Component
 *
 * This component is a successor to the CardsDs component.
 * Previously, the comicrelief-contentful frontend would map
 * through data and create multiple CardsDs instances.
 * Now CTAMultiCard handles the mapping internally, accepting
 * a data object and rendering all cards.
 */

// Determine if URL is internal
const isInternalUrl = url => {
  if (!url) return false;
  return allowListed(url) || url.charAt(0) === '/' || url.charAt(0) === '#';
};

// Convert Contentful rich text to React components
const renderRichText = body => {
  // If body is already a React node, return it as-is
  if (React.isValidElement(body)) {
    return body;
  }

  // If body has raw property (Contentful rich text object), parse and render it
  if (body && body.raw) {
    try {
      const parsed = JSON.parse(body.raw);
      return documentToReactComponents(parsed);
    } catch (e) {
      return null;
    }
  }

  // If body is null/undefined, return null
  return null;
};

// Internal SingleCard component - renders individual card
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
  const isInternalLink = link && isInternalUrl(link);
  const target = isInternalLink ? 'self' : 'blank';
  const external = target === 'blank' ? 'noopener' : null;

  const bodyContent = renderRichText(body);

  // If no link provided, render as div instead of link
  if (!link) {
    return (
      <CardWrapper key={id} isCarousel={isCarousel}>
        <CardLink
          as="div"
          isCarousel={isCarousel}
          backgroundColor={bgColour}
        >
          {imageLow && (
            <ImageWrapper>
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
          </CopyAndLinkSection>
        </CardLink>
      </CardWrapper>
    );
  }

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
    link: PropTypes.string,
    linkLabel: PropTypes.string
  }).isRequired,
  isCarousel: PropTypes.bool
};

const CTAMultiCard = ({ data }) => {
  // Extract contentfulParagraphCardsDs if data is nested
  const contentData = data?.contentfulParagraphCardsDs || data;

  const {
    cards,
    backgroundColour: bgCards,
    layout,
    carouselOfCards
  } = contentData;

  const cardsBackground = snakeCase(bgCards || 'white');

  // Convert layout string to number (e.g., "3 columns"
  // (that's how it comes through from Contentful) -> 3)
  const columns = layout && layout.includes('3') ? 3 : 2;

  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    return null;
  }

  return (
    <CardsContainer
      backgroundColor={cardsBackground}
      columns={columns}
      isCarousel={carouselOfCards}
    >
      {cards.map(card => (
        <SingleCard
          key={card.id}
          card={card}
          isCarousel={carouselOfCards}
        />
      ))}
    </CardsContainer>
  );
};

CTAMultiCard.propTypes = {
  data: PropTypes.shape({
    contentfulParagraphCardsDs: PropTypes.shape({
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          body: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.string,
            PropTypes.shape({
              raw: PropTypes.string
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
          link: PropTypes.string,
          linkLabel: PropTypes.string
        })
      ).isRequired,
      backgroundColour: PropTypes.string,
      layout: PropTypes.string,
      carouselOfCards: PropTypes.bool
    }),
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.node,
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
        link: PropTypes.string,
        linkLabel: PropTypes.string
      })
    ),
    backgroundColour: PropTypes.string,
    layout: PropTypes.string,
    carouselOfCards: PropTypes.bool
  }).isRequired
};

export default CTAMultiCard;
