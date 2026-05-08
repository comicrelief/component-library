import React from 'react';
import RichtextCarousel from './RichtextCarousel';
import { RichtextCarouselItems, RichtextCarouselItemsWithPadding } from '../../../styleguide/data/data';

export default function RichtextCarouselExample() {
  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>Richtext Carousel #1 (default padding)</h2>
        <RichtextCarousel data={RichtextCarouselItems} />
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>Richtext Carousel #2 (custom padding)</h2>
        <RichtextCarousel data={RichtextCarouselItemsWithPadding} />
      </div>
    </>
  );
}
