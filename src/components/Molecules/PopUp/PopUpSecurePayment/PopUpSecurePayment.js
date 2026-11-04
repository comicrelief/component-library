import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../../../Atoms/Text/Text';
import Cross from '../../../Atoms/Icons/CrossRoundedCorners';
import Padlock from '../../../Atoms/Icons/Padlock';
import {
  Container, Trigger, CloseButton, PopUpWindow, PopUpHeading, PopUpBodyText
} from '../PopUpShared.style';
import { usePopUpOpen } from '../PopUpShared.utils';

/**
 * The open popup is positioned over the trigger, so its width is set
 * independently of the trigger's width (via openWindowWidth) and centred on it
 */
const OpenPopUpWindow = styled(PopUpWindow)`
  width: ${({ $openWindowWidth }) => $openWindowWidth};
  left: 50%;
  right: auto;
  margin-left: ${({ $openWindowWidth }) => `calc(${$openWindowWidth} / -2)`};
`;

const DEFAULT_TRIGGER_TEXT = 'Your donation is secure and encrypted';

const DEFAULT_HEADING = 'How we keep your donations secure and encrypted';

const DEFAULT_PARAGRAPHS = [
  'We’ve partnered with trusted payment services like Braintree, Stripe, GoCardless, PayPal, Google, and Apple to keep your payment information safe and sound. Every transaction is fully encrypted.',
  'We also use a secure server and follow best practices to protect your data, like your name and address. Our systems get checked every year by the NCC Group, and we regularly chat with AWS to stay ahead of any potential issues.'
];

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
  color: ${({ theme }) => theme.color('black')};

  &:hover span,
  &:focus span {
    text-decoration: underline;
  }
`;

const PopUpSecurePayment = ({
  triggerText = DEFAULT_TRIGGER_TEXT,
  heading = DEFAULT_HEADING,
  paragraphs = DEFAULT_PARAGRAPHS,
  openWindowWidth = '100%',
  onOpenChange,
  ...rest
}) => {
  const {
    isOpen, isClosing, isRendered, containerRef, openPopUp, closePopUp
  } = usePopUpOpen(onOpenChange);

  return (
    <Container
      ref={containerRef}
      data-testid="pop-up-secure-payment"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      <Trigger $hidden={isRendered}>
        <SecureButton
          type="button"
          onClick={openPopUp}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <Padlock colour="black" size={16} />
          <Text>{triggerText}</Text>
        </SecureButton>
      </Trigger>

      {isRendered && (
        <OpenPopUpWindow
          $backgroundColour="white"
          $isOpen={isRendered}
          $isClosing={isClosing}
          $openWindowWidth={openWindowWidth}
        >
          <CloseButton
            type="button"
            onClick={closePopUp}
            aria-label="Close"
          >
            <Cross colour="black" size={24} />
          </CloseButton>

          <PopUpHeading>{heading}</PopUpHeading>

          {paragraphs.map((paragraph, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <PopUpBodyText key={index}>{paragraph}</PopUpBodyText>
          ))}
        </OpenPopUpWindow>
      )}
    </Container>
  );
};

PopUpSecurePayment.propTypes = {
  triggerText: PropTypes.string,
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  openWindowWidth: PropTypes.string,
  onOpenChange: PropTypes.func
};

export default PopUpSecurePayment;
