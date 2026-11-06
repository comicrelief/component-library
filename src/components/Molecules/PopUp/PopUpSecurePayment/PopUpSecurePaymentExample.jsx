import React, { useState } from 'react';
import styled from 'styled-components';
import PopUpSecurePayment from './PopUpSecurePayment';

const Container = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 100px;
  margin: 0 0 1rem auto;
  border-radius: 6px;
  background: light_grey;
  min-height: 100px;

  /* Shade over the wrapper's content while the popup is open */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    pointer-events: none;
  }
`;

export default function PopUpSecurePaymentExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container $isOpen={isOpen}>
        <h3>Default / no props, isOpen trigger</h3>
        <PopUpSecurePayment onOpenChange={setIsOpen} />
      </Container>

      <Container>
        <h3>Props: triggerText, openWindowWidth</h3>
        <PopUpSecurePayment triggerText="Your payment is protected by 256-bit encryption" openWindowWidth="280px" />
      </Container>

      <Container>
        <h3>Custom heading and paragraphs.</h3>
        <PopUpSecurePayment
          heading="Your details are safe with us"
          paragraphs={[
            'We only use your payment details to process your donation.',
            'Card details are encrypted and never stored on our servers.'
          ]}
        />
      </Container>
    </>
  );
}
