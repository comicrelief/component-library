import React, { useState } from 'react';
import SecurePaymentModal from './SecurePaymentModal';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: coral;
  padding: 10px;
`;

const ShowButton = styled.button`
  margin-bottom: 2rem;
`;

export default function SecurePaymentModalExample() {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => setIsVisible(false);
  const openModal = () => setIsVisible(true);

  return (
    <Wrapper>
      <h3>Example using onClose prop:</h3>
      {isVisible ? (
        <SecurePaymentModal onClose={closeModal} />
      ) : (
        <ShowButton type="button" onClick={openModal}>
          Show secure payment modal
        </ShowButton>
      )}

      <br />

      <h3>Example using backgroundColor prop:</h3>
      <SecurePaymentModal backgroundColor="coral_light" />
    </Wrapper>
  );
}
