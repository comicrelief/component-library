import React from 'react';
import SecurePaymentModal from './SecurePaymentModal';

export default function SecurePaymentModalExample() {
  return (
    <>
      <SecurePaymentModal />

      <br />

      <h3>Example using backgroundColor prop:</h3>
      <SecurePaymentModal backgroundColor="coral_light" />
    </>
  );
}
