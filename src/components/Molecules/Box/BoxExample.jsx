import React from 'react';
import Box from './Box';
import Text from '../../Atoms/Text/Text';
import { defaultData } from '../../../styleguide/data/data';

export default function BoxExample() {
  return (
    <>
      <h3>Two-column layout</h3>
      <div style={{ display: 'flex', background: '#E1E2E3' }}>
        <div style={{ width: '50%', margin: '1rem' }}>
          <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
            <Text tag="h3" family="Anton" color="black" size="xl" uppercase>Title</Text>
            <Text tag="p">Text body copy description</Text>
          </Box>
        </div>
        <div style={{ width: '50%', margin: '1rem' }}>
          <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
            <Text tag="h3" family="Anton" color="black" size="xl" uppercase>Title</Text>
            <Text tag="p">Text body copy description</Text>
          </Box>
        </div>
      </div>

      <h3>No body</h3>
      <Box imageLow={defaultData.image} images={defaultData.image} />
    </>
  );
}
