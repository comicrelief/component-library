import { throttle } from 'lodash';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext
} from 'react';
import { breakpointValues2026 as breakpointValues } from '../../../theme/shared/breakpoints2026';
import {
  Card,
  CardImageContainer,
  CardTitle,
  CardAgeGroup,
  Column,
  Container,
  EmptyMessage,
  ImageGrid,
  CardDetails
} from './DynamicGallery.style';
import Picture from '../../Atoms/Picture/Picture';
import Lightbox, { LightboxContext } from './Lightbox';

/**
 * the Dynamic Gallery component displays a grid of images,
 * by default using dynamic heights per image to create an more organic look
 */
const DynamicGallery = ({
  // options
  maxColumns = 3,
  // dynamicImageHeights = false,
  // content
  cards
  // ...rest
}) => {
  const hasCards = cards?.length > 0;

  /**
   * handle column counts;
   * column count is based on a combination of the maxColumns prop and the window width
   * - for small screens columns = 1
   * - for medium screens columns = 2
   * - for large and xl screens we use the maxColumns prop which defaults to 3
   * .
   * we need to use JS here rather than CSS because our columns are created dynamically;
   * this is to allow us to assign cards in the natural "horizontal" order rather than "vertically"
   * .
   * the resize listener is throttled to allow resizing to happen as the window size changes
   * without being too expensive
   */
  const [columnCount, setColumnCount] = useState(maxColumns);

  const updateColumnCount = useCallback(() => {
    let newColumnCount = 1;
    switch (true) {
      case window.innerWidth < breakpointValues.S:
        newColumnCount = 1;
        break;
      case window.innerWidth < breakpointValues.M:
        newColumnCount = 2;
        break;
      default:
        newColumnCount = maxColumns;
        break;
    }
    setColumnCount(newColumnCount);
  }, [maxColumns, setColumnCount]);

  // call once on initialisation
  const isInitialised = useRef(false);
  if (!isInitialised.current) {
    updateColumnCount();
    isInitialised.current = true;
  }

  // call repeatedly on window resize
  useEffect(() => {
    const handleWindowResize = throttle(updateColumnCount, 250);

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [updateColumnCount]);

  // handle selected card
  const [selectedCard, setSelectedCard] = useState(null);

  function handleNextCard(card) {
    const cardIndex = cards.indexOf(card);
    const nextCardIndex = (cardIndex + 1) % cards.length;
    setSelectedCard(cards[nextCardIndex]);
  }

  function handlePreviousCard(card) {
    const cardIndex = cards.indexOf(card);
    const previousCardIndex = (cardIndex - 1 + cards.length) % cards.length;
    setSelectedCard(cards[previousCardIndex]);
  }

  return (
    <Container>
      <LightboxContext.Provider
        value={{
          selectedCard,
          setSelectedCard,
          nextCard: handleNextCard,
          previousCard: handlePreviousCard
        }}
      >
        <ImageGrid>
          {hasCards
            && Array(columnCount)
              .fill(null)
              .map((column, columnIndex) => {
                const columnCards = cards?.filter(
                  (_, cardIndex) => cardIndex % columnCount === columnIndex
                );
                return (
                  <ColumnComponent
                    // disabling the lint rule here
                    // as we're chunking an array and have no unique keys
                    // eslint-disable-next-line react/no-array-index-key
                    key={columnIndex}
                    columnIndex={columnIndex}
                    cards={columnCards}
                  />
                );
              })}

          <EmptyMessage isEmpty={!hasCards}>No cards to display</EmptyMessage>
        </ImageGrid>
        <Lightbox />
      </LightboxContext.Provider>
      {/* <Button onClick={handleLoadMore}>Load more</Button> */}
    </Container>
  );
};

DynamicGallery.propTypes = {
  maxColumns: PropTypes.oneOf([2, 3, 4, 5]),
  // dynamicImageHeights: PropTypes.bool,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      ageGroup: PropTypes.string
    })
  )
};

export default DynamicGallery;

/**
 * a separate component to handle columns of images;
 * this component handles aspect ratio calculations to enfore a min/max ratio for its images
 */
function ColumnComponent({ cards }) {
  const [minHeight, setMinHeight] = useState();
  const [maxHeight, setMaxHeight] = useState();
  const elRef = useRef(null);

  const updateMinMaxHeight = useCallback(() => {
    if (!elRef.current) return;
    const columnWidth = elRef.current.clientWidth;
    const maxAspectRatio = 9 / 16;
    const minAspectRatio = 2.35 / 1;
    setMinHeight(columnWidth / minAspectRatio);
    setMaxHeight(columnWidth / maxAspectRatio);
  }, [setMinHeight, setMaxHeight]);

  // call repeatedly on column resize
  useEffect(() => {
    // when the column width changes, recalculate the min/max height for images
    const handleResize = throttle(() => {
      updateMinMaxHeight();
    }, 250);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(elRef.current);

    // call once on initial mount
    updateMinMaxHeight();

    return () => {
      resizeObserver.disconnect();
    };
  }, [updateMinMaxHeight]);

  // handle selected card
  const { setSelectedCard } = useContext(LightboxContext);

  function handleSelectCard(card) {
    setSelectedCard(card);
  }

  function handleKeyDown(event, card) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedCard(card);
    }
  }

  return (
    <Column ref={elRef}>
      {cards.map((card, cardIndex) => (
        <Card
          // disabling the lint rule here as we're chunking an array and have no unique keys
          // eslint-disable-next-line react/no-array-index-key
          key={cardIndex}
          onPointerUp={() => handleSelectCard(card)}
          onKeyDown={event => handleKeyDown(event, card)}
          tabIndex={0}
        >
          <CardImageContainer style={{ minHeight, maxHeight }}>
            <Picture
              alt={card.title}
              image={card.image}
              height="100%"
              objectFit="cover"
            />
          </CardImageContainer>
          <CardDetails>
            <CardTitle>{card.title}</CardTitle>
            {card.ageGroup && (
              <CardAgeGroup>
                Age group:
                {' '}
                {card.ageGroup}
              </CardAgeGroup>
            )}
          </CardDetails>
        </Card>
      ))}
    </Column>
  );
}
ColumnComponent.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string,
      ageGroup: PropTypes.string
    })
  )
};
