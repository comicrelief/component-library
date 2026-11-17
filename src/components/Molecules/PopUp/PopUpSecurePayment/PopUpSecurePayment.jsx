import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import crTheme from '../../../../theme/crTheme/theme';

import Cross from '../Icons/CrossRoundedCorners';
import Padlock from '../Icons/Padlock';
import {
  Container, CloseButton, PopUpWindow, PopUpHeading, PopUpBodyText, PageOverlay
} from '../PopUpShared.style';
import { usePopUpOpen } from '../PopUpShared.utils';

const SecurePaymentContainer = styled(Container)`
  /* Keep the trigger visible while the popup is open (the library hides it), so it stays in place */
  & > div {
    visibility: visible;
  }
  width: auto;
  flex: 0 1 auto;
`;

/**
 * The open popup is positioned over the trigger, so its width is set
 * independently of the trigger's width (via openWindowWidth) and centred on it
 */
const OpenPopUpWindow = styled(PopUpWindow)`
  width: ${({ $openWindowWidth }) => $openWindowWidth};
  left: 50%;
  right: auto;
  margin-left: ${({ $openWindowWidth }) => `calc(${$openWindowWidth} / -2)`};

  position: fixed;
  /* Centred with inset + auto margins */
  inset: 0;
  margin: auto;
  height: fit-content;
  width: calc(100vw - 48px);

  @media ${crTheme.allBreakpoints('M')} {
    width: 544px;
  }
`;

const DEFAULT_TRIGGER_TEXT = 'Your donation is secure and encrypted';

const DEFAULT_HEADING = 'How we keep your donations secure and encrypted';

const DEFAULT_PARAGRAPHS = [
  'We’ve partnered with trusted payment services like Braintree, Stripe, GoCardless, PayPal, Google, and Apple to keep your payment information safe and sound. Every transaction is fully encrypted.',
  'We also use a secure server and follow best practices to protect your data, like your name and address. Our systems get checked every year by the NCC Group, and we regularly chat with AWS to stay ahead of any potential issues.'
];

const SecureTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SecureButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color('black')};

  &:hover span,
  &:focus span {
    text-decoration: underline;
  }

  margin: 0;
`;

const SecureTriggerText = styled.span`
  font-size: 0.75rem;
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

  const closeButtonRef = useRef(null);

  // The trigger doesn't toggle the popup, so move focus to the close button
  // when it opens so keyboard users land inside the dialog
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  return (
    <SecurePaymentContainer
      ref={containerRef}
      data-testid="secure-text-popup"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      {isRendered && <PageOverlay aria-hidden="true" />}

      <SecureTextContainer data-testid="secure-text-trigger-button-wrapper">
        <SecureButton
          type="button"
          onClick={openPopUp}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <Padlock colour="black" size={12} />
          <SecureTriggerText>{triggerText}</SecureTriggerText>
        </SecureButton>
      </SecureTextContainer>

      {isRendered && (
        <OpenPopUpWindow
          data-testid="secure-text-open-popup-window"
          $backgroundColour="white"
          $isOpen={isRendered}
          $isClosing={isClosing}
          $openWindowWidth={openWindowWidth}
        >
          <CloseButton
            ref={closeButtonRef}
            data-testid="secure-text-close-button"
            type="button"
            onClick={closePopUp}
            aria-label="Close"
          >
            <Cross
              data-testid="secure-text-cross"
              colour="black" size={24}
            />
          </CloseButton>

          <PopUpHeading data-testid="secure-text-popup-heading">{heading}</PopUpHeading>

          {paragraphs.map((paragraph, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <PopUpBodyText data-testid="secure-text-body-text" key={index}>{paragraph}</PopUpBodyText>
          ))}
        </OpenPopUpWindow>
      )}
    </SecurePaymentContainer>
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
