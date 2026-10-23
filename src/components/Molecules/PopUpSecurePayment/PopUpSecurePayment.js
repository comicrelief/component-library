import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../Atoms/Text/Text';
import Cross from '../../Atoms/Icons/Cross';
import Padlock from '../../Atoms/Icons/Padlock';

const Container = styled.div`
  background-color: ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  color: ${({ theme, $textColour }) => theme.color($textColour)};
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  ${({ $isOpen }) => ($isOpen
    ? css`padding: 1rem;`
    : css`padding: 0;`)}

  ${({ $hoverColour, theme }) => $hoverColour && css`
    &:hover {
      color: ${theme.color($hoverColour)};
    }
  `}
`;

const PopUp = styled.div`
  color: ${({ theme, $textColour }) => theme.color($textColour)};
  display: flex;
  flex-direction: column;
`;

const SecureButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
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
border: 1px solid red;
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
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Container
      $backgroundColour="white"
      $textColour={textColour}
      $hoverColour={hoverColour}
      $isOpen={isOpen}
      data-testid="pop-up-secure-payment"
      {...rest}
    >
      {isOpen ? (
        <PopUp $textColour={textColour}>
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
        </PopUp>
      ) : (
        <SecureButton
          type="button"
          onClick={openModal}
          aria-expanded="false"
          $hoverColour={hoverColour}
        >
          <Padlock colour={textColour} size={16} />
          <Text color={textColour}>Your donation is secure and encrypted</Text>
        </SecureButton>
      )}
    </Container>
  );
};

PopUpSecurePayment.propTypes = {
  textColour: PropTypes.string,
  hoverColour: PropTypes.string
};

export default PopUpSecurePayment;
