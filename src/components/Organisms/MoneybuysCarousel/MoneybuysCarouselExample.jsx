import React, { useState } from 'react';
import styled from 'styled-components';
import MoneybuysCarousel from './MoneybuysCarousel';
import Input from '../../Atoms/Input/Input';
import { ExampleContainer } from '../../../demos/SharedStyles';

const exampleMoneybuys = [
  {
    amount: 20,
    description: 'could help stock a community pantry, so local people can access essential support closer to home.'
  },
  {
    amount: 50,
    description: 'could support a young person experiencing homelessness to access somewhere safe and warm to sleep for the night.'
  },
  {
    amount: 100,
    description: 'could help youth workers run workshops for young people, helping them learn new skills and realise their potential.'
  }
];

const DemoWidth = styled.div`
  width: 500px;
  max-width: 100%;
  margin-top: 1rem;
`;

export default function MoneybuysCarouselExample() {
  const [currentAmount, setCurrentAmount] = useState('');

  return (
    <ExampleContainer>
      <Input
        label="Use this input to simulate the amount being input elsewhere"
        showLabel
        type="number"
        name="moneybuys-carousel-current-amount"
        id="moneybuys-carousel-current-amount"
        value={currentAmount}
        onChange={(event) => setCurrentAmount(event.target.value)}
      />
      <DemoWidth>
        <MoneybuysCarousel
          moneybuys={exampleMoneybuys}
          currentAmount={currentAmount}
        />
      </DemoWidth>
    </ExampleContainer>
  );
}
