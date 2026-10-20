import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text/Text';

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

const BodyText = styled(Text)`
  margin: 0;
`;

const SecurePaymentModal = ({
  backgroundColor = 'grey',
  textColor = 'black',
  ...rest
}) => (
  <Wrapper
    $backgroundColor={backgroundColor}
    $textColor={textColor}
    data-testid="secure-payment-modal"
    {...rest}
  >
    <BodyText tag="p">
      We’ve partnered with trusted payment services like
      Braintree, Stripe, GoCardless, PayPal, Google, and Apple to keep your
      payment information safe and sound. Every transaction is fully encrypted.
    </BodyText>
    <BodyText tag="p">
      We also use a secure server and follow best practices to protect your data,
      like your name and address. Our systems get checked every year by the NCC Group,
      and we regularly chat with AWS to stay ahead of any potential issues.
    </BodyText>
  </Wrapper>
);

SecurePaymentModal.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string
};

export default SecurePaymentModal;
