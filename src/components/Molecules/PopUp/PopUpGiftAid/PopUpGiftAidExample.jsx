import React, { useState } from 'react';
import styled from 'styled-components';
import PopUpGiftAid from './PopUpGiftAid';

const Container = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 100px;
  margin: 0 0 1rem auto;
  border-radius: 6px;
  background: light_grey;
  min-height: 100px;

  /* Shade over the Container's content while the popup is open */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
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
      <Container $isOpen={isOpen}>
        <h3>Default / no props, isOpen trigger</h3>
        <PopUpExampleWrapper> <PopUpGiftAid onOpenChange={setIsOpen}/> </PopUpExampleWrapper>
      </Container>

      <Container>
        <h3>Props - textColour, backgroundColour, hoverColour, openWindowWidth</h3>
        <PopUpExampleWrapper>
          <PopUpGiftAid textColour="green" backgroundColour="blue_light" hoverColour='coral_light' openWindowWidth='550px'/>
        </PopUpExampleWrapper>
      </Container>

      <Container>
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
      </Container>
    </>
  );
}
