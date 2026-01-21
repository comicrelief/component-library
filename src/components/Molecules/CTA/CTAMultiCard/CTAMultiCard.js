import React from 'react';
import PropTypes from 'prop-types';
import { snakeCase } from 'lodash';
import { useMediaQuery } from 'react-responsive';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Line below imports the built CSS directly because Jest needs it
import '@splidejs/react-splide/dist/css/splide.min.css';
import CTACard from '../shared/CTACard';
import CardsContainer from './CTAMultiCard.style';
import { breakpointValues } from '../../../../theme/shared/allBreakpoints';

/**
 * CTAMultiCard Component
 *
 * This component is a successor to the CardsDs component.
 * Previously, the comicrelief-contentful frontend would map
 * through data and create multiple CardsDs instances.
 * Now CTAMultiCard handles the mapping internally, accepting
 * a data object and rendering all cards.
 *
 * Where a carousel is requested (carouselOfCards is true), the component will use the Splide library to create it.
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

  const isBelowL = useMediaQuery({ maxWidth: breakpointValues.L - 1 });
  const useSplideCarousel = Boolean(carouselOfCards && isBelowL);

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
      useSplideCarousel={useSplideCarousel}
      paddingAbove={paddingAbove}
      paddingBelow={paddingBelow}
    >
      {useSplideCarousel ? (
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: true,
            dragMinThreshold: 10,
            gap: '1rem',
            fixedWidth: '309px',
            padding: { left: '0px', right: '0px' }
          }}
        >
          {cards.map((card, index) => (
            <SplideSlide key={card?.id ? `${card.id}-${index}` : `cta-card-${index}`}>
              <CTACard
                card={card}
                columns={columns}
                isCarousel
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        cards.map((card, index) => (
          <CTACard
            key={card?.id ? `${card.id}-${index}` : `cta-card-${index}`}
            card={card}
            columns={columns}
            isCarousel={carouselOfCards}
          />
        ))
      )}
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
