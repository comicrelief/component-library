import React from 'react';
import PropTypes from 'prop-types';
import CTACard from '../shared/CTACard';
import SingleCardWrapper, { SingleCardInner } from './CTASingleCard.style';

/**
 * CTASingleCard Component
 *
 * This component displays a single card, full-width across the page.
 * It looks and behaves like the single cards from CTAMultiCard, but
 * is always displayed as a single full-width card with no grid layout.
 *
 * Note: The component expects pre-rendered content in the `body`
 * field of the card. The frontend should handle rich text rendering
 * before passing data to this component.
 */

const CTASingleCard = ({ data }) => {
  const { card, paddingAbove, paddingBelow } = data || {};

  if (!card) {
    return null;
  }

  return (
    <SingleCardWrapper
      paddingAbove={paddingAbove}
      paddingBelow={paddingBelow}
    >
      <SingleCardInner>
        <CTACard
          card={card}
          isCarousel={false}
          isSingleCard
        />
      </SingleCardInner>
    </SingleCardWrapper>
  );
};

CTASingleCard.propTypes = {
  data: PropTypes.shape({
    card: PropTypes.shape({
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
    }),
    paddingAbove: PropTypes.string,
    paddingBelow: PropTypes.string
  }).isRequired
};

export default CTASingleCard;
