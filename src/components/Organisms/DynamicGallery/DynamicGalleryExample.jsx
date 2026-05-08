import React from 'react';
import DynamicGallery from './DynamicGallery';
import createMockGalleryNodes from './_utils';

export default function DynamicGalleryExample() {
  return (
    <>
      <div data-testid="gallery-empty">
        <h3>Empty gallery</h3>
        <DynamicGallery />
      </div>

      <div data-testid="gallery-basic">
        <h3>Basic gallery (50 nodes)</h3>
        <DynamicGallery nodes={createMockGalleryNodes(50)} />
      </div>

      <div data-testid="gallery-customised">
        <h3>Customised (4 columns, load all, 4:3 ratio, blue bg)</h3>
        <DynamicGallery
          gridWidth={4}
          nodes={createMockGalleryNodes(30)}
          loadingBehaviour="all"
          imageRatio="4:3"
          pageBackgroundColour="blue"
          textColour="white"
          paddingTop="6rem"
          paddingBottom="6rem"
          useLightbox={false}
        />
      </div>

      <div data-testid="gallery-max5">
        <h3>Max 5 columns</h3>
        <DynamicGallery gridWidth={5} nodes={createMockGalleryNodes(5)} />
      </div>
    </>
  );
}
