import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../../Atoms/Text/Text';
import Cross from '../../../Atoms/Icons/Cross';
import Padlock from '../../../Atoms/Icons/Padlock';
import PopUpWindow from '../PopUpWindow';

const Container = styled.div`
  position: relative;
  width: 100%;
`;

// Hidden rather than unmounted when open, so the closed trigger keeps its
// space and content below the popup doesn't do the janky move around when it overlays/opens
const Trigger = styled.div`
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
`;

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

const CloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;

  ${({ $hoverColour, theme }) => $hoverColour && css`
    &:hover svg {
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
  const [isOpen, setIsOpen] = useState(false);

  const updateOpen = nextOpen => {
    setIsOpen(nextOpen);
    if (onOpenChange) {
      onOpenChange(nextOpen);
    }
  };

  const openModal = () => updateOpen(true);
  const closeModal = () => updateOpen(false);

  return (
    <Container
      data-testid="pop-up-secure-payment"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      <Trigger $hidden={isOpen}>
        <SecureButton
          type="button"
          onClick={openModal}
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
            onClick={closeModal}
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
