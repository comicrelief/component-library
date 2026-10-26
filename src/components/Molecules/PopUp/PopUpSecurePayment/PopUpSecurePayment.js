import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../../Atoms/Text/Text';
import Cross from '../../../Atoms/Icons/Cross';
import Padlock from '../../../Atoms/Icons/Padlock';
import PopUpWindow from '../PopUpWindow';
import {
  Container, Trigger, CloseButton, usePopUpOpen
} from '../PopUpShared';

const SecureButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 1rem;
  border: none;
  background: none;
  cursor: pointer;

  &:hover span {
    text-decoration: underline;
  }

  ${({ $hoverColour, theme }) => $hoverColour && css`
    &:hover,
    &:hover span,
    &:hover svg {
      color: ${theme.color($hoverColour)};
      fill: ${theme.color($hoverColour)};
    }
  `}
`;

const PopUpSecurePayment = ({
  textColour = 'black',
  hoverColour = 'red',
  onOpenChange,
  ...rest
}) => {
  const { isOpen, openPopUp, closePopUp } = usePopUpOpen(onOpenChange);

  return (
    <Container
      data-testid="pop-up-secure-payment"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      <Trigger $hidden={isOpen}>
        <SecureButton
          type="button"
          onClick={openPopUp}
          aria-expanded={isOpen ? 'true' : 'false'}
          $hoverColour={hoverColour}
        >
          <Padlock colour={textColour} size={16} />
          <Text color={textColour}>Your donation is secure and encrypted</Text>
        </SecureButton>
      </Trigger>

      {isOpen && (
        <PopUpWindow
          $backgroundColour="white"
          $textColour={textColour}
          $isOpen={isOpen}
        >
          <CloseButton
            type="button"
            onClick={closePopUp}
            aria-label="Close"
            $hoverColour={hoverColour}
          >
            <Cross colour={textColour} size={24} />
          </CloseButton>

          <Text tag="h3">How we keep your donations secure and encrypted</Text>

          <Text tag="p">
            We’ve partnered with trusted payment services like Braintree, Stripe,
            GoCardless, PayPal, Google, and Apple to keep your payment information
            safe and sound. Every transaction is fully encrypted.
          </Text>

          <Text tag="p">
            We also use a secure server and follow best practices to protect your
            data, like your name and address. Our systems get checked every year by
            the NCC Group, and we regularly chat with AWS to stay ahead of any
            potential issues.
          </Text>
        </PopUpWindow>
      )}
    </Container>
  );
};

PopUpSecurePayment.propTypes = {
  textColour: PropTypes.string,
  hoverColour: PropTypes.string,
  onOpenChange: PropTypes.func
};

export default PopUpSecurePayment;
