import React from 'react';
import PopUpSecurePayment from './PopUpSecurePayment';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  background: green;
`;

export default function PopUpSecurePaymentExample() {
  return (
    <Wrapper>
      <PopUpSecurePayment />
    </Wrapper>
  );
}
