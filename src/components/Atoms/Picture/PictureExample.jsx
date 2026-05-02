import React from 'react';
import Picture from './Picture';
import { defaultData } from '../../../styleguide/data/data';

export default function PictureExample() {
  return (
    <>
      <h3>Picture</h3>
      <Picture
        alt="test Image"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
      />

      <h3>Custom Size</h3>
      <Picture
        alt="test Image"
        imageLow={defaultData.imageLow}
        images={defaultData.images}
        objectFit="cover"
        width="300px"
        height="200px"
      />

      <h3>Single image</h3>
      <Picture
        alt="test Image"
        image={defaultData.image}
        objectFit="cover"
      />
    </>
  );
}
