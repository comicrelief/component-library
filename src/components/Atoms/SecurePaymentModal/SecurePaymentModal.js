import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';
import Cross from '../Icons/Cross';

const Wrapper = styled.div`
  background-color: ${({ theme, $backgroundColor }) => theme.color($backgroundColor)};
  color: ${({ theme, $textColor }) => theme.color($textColor)};
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  width: 100%;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const SecurePaymentModal = ({
  backgroundColor = 'white',
  textColor = 'black',
  /** call for function in the consuming App / parent decides what closing does. */
  onClose,
  ...rest
}) => (
  <Wrapper
    $backgroundColor={backgroundColor}
    $textColor={textColor}
    data-testid="secure-payment-modal"
    {...rest}
  >
    <CloseButton type="button" onClick={onClose} aria-label="Close">
      <Cross colour={textColor} size={24} />
    </CloseButton>
    <Text tag="h3">How we keep your donations secure and encrypted</Text>
    <Text tag="p">
      We’ve partnered with trusted payment services like
      Braintree, Stripe, GoCardless, PayPal, Google, and Apple to keep your
      payment information safe and sound. Every transaction is fully encrypted.
    </Text>
    <Text tag="p">
      We also use a secure server and follow best practices to protect your data,
      like your name and address. Our systems get checked every year by the NCC Group,
      and we regularly chat with AWS to stay ahead of any potential issues.
    </Text>
  </Wrapper>
);

SecurePaymentModal.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onClose: PropTypes.func
};

export default SecurePaymentModal;
