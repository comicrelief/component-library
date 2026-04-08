import React from 'react';
import WYMDCarousel from './WYMDCarousel';
import { carouselItemsComplete, carouselItemsIncomplete, carouselItemsMinimal } from '../../../styleguide/data/data';

export default function WYMDCarouselExample() {
  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center' }}>All fields supplied, autoplay on:</h2>
        <WYMDCarousel data={carouselItemsComplete} />
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>All REQUIRED fields supplied (nodes 1-4), various incomplete nodes, autoplay off:</h2>
        <WYMDCarousel data={carouselItemsIncomplete} />
      </div>

      <div>
        <h2 style={{ textAlign: 'center' }}>All REQUIRED fields supplied (nodes 1-4), autoplay off:</h2>
        <WYMDCarousel data={carouselItemsMinimal} />
      </div>
    </>
  );
}
