import React, { useState } from 'react';
import PopUpSecurePayment from './PopUpSecurePayment';
import styled from 'styled-components';

/**
  * Parent styling from the JS state (onOpenChange) uses data-open attribute
  * on the popup's container to fire CSS styles via :has()
 */
const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  background: ${({ $isOpen }) => ($isOpen ? 'orange' : 'green')};

  &:has([data-open="true"]) {
    outline: 2px solid black;
  }

  /* Shade over the wrapper's content while the popup is open */
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
`;

const Status = styled.p`
  margin: 0 0 0.5rem;
  color: white;
`;

export default function PopUpSecurePaymentExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper $isOpen={isOpen}>
      <Status>{isOpen ? 'Popup is open' : 'popup is closed'}</Status>
      <PopUpSecurePayment onOpenChange={setIsOpen} />
    </Wrapper>
  );
}
