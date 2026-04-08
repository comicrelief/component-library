import React from 'react';
import Card from './Card';
import Text from '../../Atoms/Text/Text';
import { defaultData } from '../../../styleguide/data/data';

export default function CardExample() {
  return (
    <>
      <h3>Default</h3>
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="blue"
          height="auto"
        >
          <Text tag="h3" size="xl">Title</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world,
            whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other time of year.
          </Text>
        </Card>
      </div>

      <h3>Row layout on small breakpoint only</h3>
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="red"
          height="auto"
          smallBreakpointRowLayout={true}
          mediumBreakpointRowLayout={false}
        >
          <Text tag="h3" size="xl">Title</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world.
          </Text>
        </Card>
      </div>

      <h3>Row layout on medium breakpoint only</h3>
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="orange"
          height="auto"
          smallBreakpointRowLayout={false}
          mediumBreakpointRowLayout={true}
        >
          <Text tag="h3" size="xl">Title</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world.
          </Text>
        </Card>
      </div>

      <h3>Row layout on small and medium breakpoints</h3>
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="purple"
          height="auto"
          smallBreakpointRowLayout={true}
          mediumBreakpointRowLayout={true}
        >
          <Text tag="h3" size="xl">Title</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world.
          </Text>
        </Card>
      </div>

      <h3>No body</h3>
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <Card imageLow={defaultData.image} images={defaultData.image} />
      </div>
    </>
  );
}
