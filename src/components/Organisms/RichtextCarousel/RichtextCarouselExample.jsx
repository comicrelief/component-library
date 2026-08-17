import React from 'react';
import RichtextCarousel from './RichtextCarousel';
import { RichtextCarouselItems, RichtextCarouselItemsWithPadding } from '../../../data/data';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function RichtextCarouselExample() {
  return (
    <>
      <ExampleContainer>
        <h2 style={{ textAlign: 'center' }}>Richtext Carousel #1 (default padding, autoplay off)</h2>
        <RichtextCarousel data={RichtextCarouselItems} />
      </ExampleContainer>

      <ExampleContainer>
        <h2 style={{ textAlign: 'center' }}>Richtext Carousel #2 (custom padding, autoplay on)</h2>
        <RichtextCarousel data={RichtextCarouselItemsWithPadding} />
      </ExampleContainer>
    </>
  );
}
