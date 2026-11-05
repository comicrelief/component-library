import React, { useState } from 'react';
import PopUpGiftAid from './PopUpGiftAid';
import styled from 'styled-components';

/**
  * Parent styling from the JS state (onOpenChange) uses data-open attribute
  * on the popup's container to fire CSS styles via :has()
 */
const Container = styled.div`
  position: relative;
  padding: 1rem;
  background: ${({ $isOpen }) => ($isOpen ? 'orange' : 'green')};
  height: 100px;
  margin: 0 0 0 auto;

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
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
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
    <Container $isOpen={isOpen}>
      <h1>Example Heading</h1>
      <PopUpExampleWrapper>
        <PopUpGiftAid onOpenChange={setIsOpen} openWindowWidth='550px'/>
      </PopUpExampleWrapper>
    </Container>
  );
}
