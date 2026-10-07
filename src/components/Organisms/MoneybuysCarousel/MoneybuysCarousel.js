import React, {
  useCallback, useEffect, useMemo, useRef
} from 'react';
import PropTypes from 'prop-types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../../../vendor/splide/splide.min.css';

import { CarouselCard, SlideCopy, Wrapper } from './MoneybuysCarousel.style';

// Safeguard incase number is passed as a string
const normalizeAmount = value => {
  if (value === '' || value === null || value === undefined) {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const findMatchingIndex = (moneybuys, currentAmount) => {
  const normalizedAmount = normalizeAmount(currentAmount);

  if (normalizedAmount === null) {
    return -1;
  }

  return moneybuys.findIndex(
    ({ amount }) => Number(amount) === normalizedAmount
  );
};

const MoneybuysCarousel = ({
  moneybuys,
  currentAmount,
  currency = '£'
}) => {
  const splideRef = useRef(null);
  const matchedIndex = useMemo(
    () => findMatchingIndex(moneybuys, currentAmount),
    [moneybuys, currentAmount]
  );
  const hasMultipleSlides = moneybuys.length > 1;
  const shouldAutoplay = matchedIndex < 0 && hasMultipleSlides;

  const splideOptions = useMemo(() => ({
    speed: 750,
    rewindSpeed: 750,
    interval: 5000,
    arrows: hasMultipleSlides,
    pagination: hasMultipleSlides,
    drag: 'free',
    flickPower: 50,
    perMove: 1,
    dragMinThreshold: { mouse: 50, touch: 50 },
    updateOnMove: true,
    snap: true,
    autoplay: shouldAutoplay,
    pauseOnHover: true,
    pauseOnFocus: true,
    perPage: 1,
    rewind: true,
    padding: { left: '1rem', right: '1rem' }
  }), [hasMultipleSlides, shouldAutoplay]);

  const goToMatchedSlide = useCallback(splideInstance => {
    if (matchedIndex < 0 || !splideInstance) {
      return;
    }

    if (splideInstance.index !== matchedIndex) {
      splideInstance.go(matchedIndex);
    }
  }, [matchedIndex]);

  // The useEffect is only for changes, this is necessary
  // to get it to the right slide on mount
  const handleMounted = useCallback(splide => {
    goToMatchedSlide(splide);
  }, [goToMatchedSlide]);

  useEffect(() => {
    const splideInstance = splideRef.current?.splide;
    goToMatchedSlide(splideInstance);
  }, [goToMatchedSlide]);

  if (!moneybuys?.length) {
    return null;
  }

  return (
    <Wrapper data-testid="moneybuys-carousel">
      <CarouselCard>
        <Splide
          ref={splideRef}
          className="moneybuys-carousel"
          data-testid="moneybuys-carousel--splide"
          options={splideOptions}
          onMounted={handleMounted}
        >
          {moneybuys.map(({ amount, description }) => (
            <SplideSlide
              key={`${amount}-${description}`}
              data-testid="moneybuys-carousel--slide"
              data-amount={amount}
            >
              <SlideCopy data-testid="moneybuys-carousel--copy">
                <strong>{`${currency}${amount}`}</strong>
                {` ${description}`}
              </SlideCopy>
            </SplideSlide>
          ))}
        </Splide>
      </CarouselCard>
    </Wrapper>
  );
};

MoneybuysCarousel.propTypes = {
  moneybuys: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  currentAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string
};

export default MoneybuysCarousel;
