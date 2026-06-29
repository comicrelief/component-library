import React from 'react';
import Card from './Card';
import Text from '../../Atoms/Text/Text';
import { defaultData } from '../../../data/data';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function CardExample() {
  return (
    <>
      <ExampleContainer>
        <h3>Default</h3>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="blue"
          height="auto"
        >
          <Text tag="h3" size="xl">Title</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world,
            whether you donate through Red Nose Day, Sport Relief or to Comic Relief at any other
            time of year.
          </Text>
        </Card>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Card - row layout on small breakpoint only</h3>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="red"
          height="auto"
          smallBreakpointRowLayout
          mediumBreakpointRowLayout={false}
        >
          <Text tag="h3" size="xl">Row layout on small breakpoint only</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world.
          </Text>
        </Card>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Card - row layout on medium breakpoint only</h3>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="orange"
          height="auto"
          smallBreakpointRowLayout={false}
          mediumBreakpointRowLayout
        >
          <Text tag="h3" size="xl">Row layout on medium breakpoint only</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world.
          </Text>
        </Card>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Card - row layout on small and medium breakpoints</h3>
        <Card
          imageLow={defaultData.image}
          images={defaultData.images}
          backgroundColor="purple"
          height="auto"
          smallBreakpointRowLayout
          mediumBreakpointRowLayout
        >
          <Text tag="h3" size="xl">Row layout on small and medium breakpoints</Text>
          <Text tag="p">
            Your donations make a very real difference to people in the UK and around the world.
          </Text>
        </Card>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Card - no body</h3>
        <Card imageLow={defaultData.image} images={defaultData.image} />
      </ExampleContainer>
    </>
  );
}
