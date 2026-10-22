import React from 'react';
import SecurePaymentPopUp from './SecurePaymentPopUp';
import Padlock from '../Icons/Padlock';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: green;
  padding: 10px;
`;

const SecurePaymentBody = () => (
  <>
    <p>
        We’ve partnered with trusted payment services like Braintree, Stripe, GoCardless, PayPal, Google, and Apple to keep your payment information safe and sound. Every transaction is fully encrypted.
    </p>
    <p>
        We also use a secure server and follow best practices to protect your data, like your name and address. Our systems get checked every year by the NCC Group, and we regularly chat with AWS to stay ahead of any potential issues.
    </p>
  </>
);

export default function SecurePaymentPopUpExample() {
  return (
    <Wrapper>

      <h3>Secure Payments Example</h3>
      <SecurePaymentPopUp
        icon={<Padlock colour="black" size={16} />}
        initialText="Your donation is secure and encrypted"
        headingText="How we keep your donations secure and encrypted"
        bodyText={<SecurePaymentBody/>}
      />

    </Wrapper>
  );
}
