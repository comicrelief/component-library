import React, { useState } from 'react';
import styled from 'styled-components';
import PopUpGiftAid from './PopUpGiftAid';
import { ExampleContainer } from '../PopUpShared.style';

const GiftExampleContainer = styled(ExampleContainer)`
  display: flex;
  justify-content: space-between;
`;

const PopUpExampleWrapper = styled.div`
  width: 150px;
  height: auto;
`;

export default function PopUpGiftAidExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GiftExampleContainer $isOpen={isOpen}>
        <h3>Default / no props, isOpen trigger</h3>
        <PopUpExampleWrapper> <PopUpGiftAid onOpenChange={setIsOpen}/> </PopUpExampleWrapper>
      </GiftExampleContainer>

      <GiftExampleContainer>
        <h3>Props - textColour, backgroundColour, hoverColour, openWindowWidth</h3>
        <PopUpExampleWrapper>
          <PopUpGiftAid textColour="green" backgroundColour="blue_light" hoverColour='coral_light' openWindowWidth='550px'/>
        </PopUpExampleWrapper>
      </GiftExampleContainer>

      <GiftExampleContainer>
        <h3>Custom heading and paragraphs</h3>
        <PopUpExampleWrapper>
          <PopUpGiftAid
            heading="Why does Gift Aid matter?"
            paragraphs={[
              'Gift Aid lets charities reclaim the tax you have already paid on your donation.',
              'Every £1 you give can be worth £1.25 to the charity at no extra cost to you.'
            ]}
          />
        </PopUpExampleWrapper>
      </GiftExampleContainer>
    </>
  );
}
