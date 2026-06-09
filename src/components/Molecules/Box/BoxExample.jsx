import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import Text from '../../Atoms/Text/Text';
import { defaultData } from '../../../data/data';

const ExampleWrapper = styled.div`
  width: 50%;
  margin: 1rem;
`;

export default function BoxExample() {
  return (
    <>
      <h3>Flexible container only (‘invisible’ to user)</h3>

      <div style={{ display: 'flex', background: '#E1E2E3' }}>

        <ExampleWrapper>
          <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
            <Text tag="h3" family="Anton" color="black" size="xl" uppercase>Title</Text>
            <Text tag="p">Text body copy description</Text>
          </Box>
        </ExampleWrapper>

        <ExampleWrapper>
          <Box imageLow={defaultData.image} images={defaultData.images} height="auto">
            <Text tag="h3" family="Anton" color="black" size="xl" uppercase>Title</Text>
            <Text tag="p">Text body copy description</Text>
          </Box>
        </ExampleWrapper>

      </div>

      <h3>Box no body</h3>
      <Box imageLow={defaultData.image} images={defaultData.image} />
    </>
  );
}
