import React from 'react';
import RichtextCarousel from './RichtextCarousel';
import { RichtextCarouselItems } from '../../../styleguide/data/data';

export default function RichtextCarouselExample() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Richtext Carousel #1</h2>
      <RichtextCarousel data={RichtextCarouselItems} />
    </div>
  );
}
