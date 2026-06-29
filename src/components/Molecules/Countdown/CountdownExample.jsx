import React from 'react';
import Countdown from './Countdown';
import Text from '../../Atoms/Text/Text';
import { ExampleContainer } from '../../../demos/SharedStyles';

export default function CountdownExample() {
  const intro = <Text tag="h2" size="xl">Hello</Text>;
  const end = <Text tag="h2" size="xl">Bye</Text>;

  return (
    <ExampleContainer>
      <Countdown
        endDate="Dec 25, 2026 10:30:00"
        endMessage={end}
        introMessage={intro}
      />
    </ExampleContainer>
  );
}
