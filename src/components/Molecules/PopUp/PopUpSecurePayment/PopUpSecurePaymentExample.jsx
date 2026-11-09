import React, { useState } from 'react';
import PopUpSecurePayment from './PopUpSecurePayment';
import { ExampleContainer } from '../PopUpShared.style';

export default function PopUpSecurePaymentExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ExampleContainer $isOpen={isOpen}>
        <h3>Default / no props, isOpen trigger</h3>
        <PopUpSecurePayment onOpenChange={setIsOpen} />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Props: triggerText, openWindowWidth</h3>
        <PopUpSecurePayment triggerText="Your payment is protected by 256-bit encryption" openWindowWidth="280px" />
      </ExampleContainer>

      <ExampleContainer>
        <h3>Custom heading and paragraphs.</h3>
        <PopUpSecurePayment
          heading="Your details are safe with us"
          paragraphs={[
            'We only use your payment details to process your donation.',
            'Card details are encrypted and never stored on our servers.'
          ]}
        />
      </ExampleContainer>
    </>
  );
}
