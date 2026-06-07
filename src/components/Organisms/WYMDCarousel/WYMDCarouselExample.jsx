import React from 'react';
import WYMDCarousel from './WYMDCarousel';
import { carouselItemsComplete, carouselItemsCompleteWithPadding, carouselItemsIncomplete, carouselItemsMinimal } from '../../../data/data';

export default function WYMDCarouselExample() {
  return (
    <>
      <div>
        <h2 style={{textAlign: 'center'}}>
            All fields supplied, autoplay on, default padding:
        </h2>
        <WYMDCarousel data={carouselItemsComplete}/>
      </div>

      <div>
        <h2 style={{textAlign: 'center'}}>
            All fields supplied, autoplay on, custom padding:
        </h2>
        <WYMDCarousel data={carouselItemsCompleteWithPadding}/>
      </div>

      <div>
        <h2 style={{textAlign: 'center'}}>
            All REQUIRED fields supplied (nodes 1-4), various incomplete nodes, node 11 complete, autoplay off:
        </h2>
        <WYMDCarousel data={carouselItemsIncomplete}/>
      </div>

      <div>
        <h2 style={{textAlign: 'center'}}>
            All REQUIRED fields supplied (nodes 1-4), autoplay off:
        </h2>
        <WYMDCarousel data={carouselItemsMinimal}/>
      </div>
    </>
  );
}
