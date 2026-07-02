import React from 'react';
import Box from './Box';
import Text from '../../Atoms/Text/Text';
import { defaultData } from '../../../data/data';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function BoxExample() {
  return (
    <>
      <ExampleContainer>
        <h3>Flexible container only (‘invisible’ to user)</h3>
        <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
          <Text tag="h3" family="Anton" color="black" size="xl" uppercase>Title</Text>
          <Text tag="p">Text body copy description</Text>
        </Box>
      </ExampleContainer>

      <ExampleContainer>
        <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
          <Text tag="h3" family="Anton" color="black" size="xl" uppercase>Title</Text>
          <Text tag="p">Text body copy description</Text>
        </Box>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Box no body</h3>
        <Box imageLow={defaultData.image} images={defaultData.image} />
      </ExampleContainer>
    </>
  );
}
