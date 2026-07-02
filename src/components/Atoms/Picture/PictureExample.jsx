import React from 'react';
import Picture from './Picture';
import { defaultData } from '../../../data/data';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function PictureExample() {
  return (
    <>
      <ExampleContainer>
        <h3>Picture</h3>
        <Picture
          alt="test Image"
          imageLow={defaultData.imageLow}
          images={defaultData.images}
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Custom Size</h3>
        <Picture
          alt="test Image"
          imageLow={defaultData.imageLow}
          images={defaultData.images}
          objectFit="cover"
          width="300px"
          height="200px"
        />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Single image</h3>
        <Picture
          alt="test Image"
          image={defaultData.image}
          objectFit="cover"
        />
      </ExampleContainer>
    </>
  );
}
