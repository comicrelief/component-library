import React, { useState } from 'react';
import PopUpGiftAid from './PopUpGiftAid';
import styled from 'styled-components';

/**
  * Parent styling from the JS state (onOpenChange) uses data-open attribute
  * on the popup's container to fire CSS styles via :has()
 */
const Container = styled.div`
  position: relative;
  background: ${({ $isOpen }) => ($isOpen ? 'orange' : 'green')};
  padding: 1rem;
  height: 100px;
  margin: 0 auto;

  &:has([data-open="true"]) {
    outline: 2px solid black;
  }

  /* Shade over the Container's content while the popup is open */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    pointer-events: none;
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  }
`;

const PopUpExampleWrapper = styled.div`
  width: 150px;
  height: auto;
  margin: 0 auto;
`;

export default function PopUpGiftAidExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container $isOpen={isOpen}>
      <PopUpExampleWrapper>
        <PopUpGiftAid onOpenChange={setIsOpen} />
      </PopUpExampleWrapper>
    </Container>
  );
}
