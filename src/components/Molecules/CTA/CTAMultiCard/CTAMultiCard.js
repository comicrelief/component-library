import React from 'react';
import PropTypes from 'prop-types';
import { snakeCase } from 'lodash';
import CTACard from '../shared/CTACard';
import CardsContainer from './CTAMultiCard.style';

/**
 * CTAMultiCard Component
 *
 * This component is a successor to the CardsDs component.
 * Previously, the comicrelief-contentful frontend would map
 * through data and create multiple CardsDs instances.
 * Now CTAMultiCard handles the mapping internally, accepting
 * a data object and rendering all cards.
 *
 * Note: The component expects pre-rendered content in the `body`
 * field of each card. The frontend should handle rich text rendering
 * before passing data to this component.
 */

const CTAMultiCard = ({ data }) => {
  const {
    cards,
    backgroundColour: bgCards,
    layout,
    carouselOfCards,
    paddingAbove,
    paddingBelow
  } = data;

  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    return null;
  }

  // Convert layout string to number (e.g., "3 columns"
  // (that's how it comes through from Contentful) -> 3)
  const columns = layout && layout.includes('3') ? 3 : 2;

  const cardsBackground = snakeCase(bgCards || 'white');

  return (
    <CardsContainer
      backgroundColor={cardsBackground}
      columns={columns}
      isCarousel={carouselOfCards}
      paddingAbove={paddingAbove}
      paddingBelow={paddingBelow}
    >
      {cards.map(card => (
        <CTACard
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
    ).isRequired,
    backgroundColour: PropTypes.string,
    layout: PropTypes.string,
    carouselOfCards: PropTypes.bool,
    paddingAbove: PropTypes.string,
    paddingBelow: PropTypes.string
  }).isRequired
};

export default CTAMultiCard;
