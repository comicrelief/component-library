import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../Text/Text';
import Cross from '../Icons/Cross';

import giftAidLogo from './assets/gift-aid-logo.svg';

const Wrapper = styled.div`
  background-color: ${({ theme, $backgroundColor }) => theme.color($backgroundColor)};
  color: ${({ theme, $textColor }) => theme.color($textColor)};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  ${({ $isOpen }) => ($isOpen
    ? css`padding: 1rem;`
    : css`padding: 0;`)}
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
`;

const Logo = styled.img`
  display: block;
  width: 140px;
  height: auto;
  margin: 0 0 1rem;
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

const GiftAidPopUp = ({
  backgroundColor = 'white',
  textColor = 'black',
  initialText,
  icon,
  headingText,
  bodyText,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Wrapper
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $isOpen={isOpen}
      data-testid="gift-aid-pop-up"
      {...rest}
    >
      {isOpen ? (
        <>
          <CloseButton type="button" onClick={closeModal} aria-label="Close">
            <Cross colour={textColor} size={24} />
          </CloseButton>

          <Logo src={giftAidLogo} alt="Gift Aid logo" />

          {headingText && <Text tag="h3">{headingText}</Text>}

          {bodyText && <Text tag="p">{bodyText}</Text>}
        </>
      ) : (
        <SecureButton type="button" onClick={openModal} aria-expanded="false">
          {icon}
          {initialText && <Text>{initialText}</Text>}
        </SecureButton>
      )}
    </Wrapper>
  );
};

GiftAidPopUp.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  initialText: PropTypes.string,
  icon: PropTypes.node,
  headingText: PropTypes.string,
  bodyText: PropTypes.node
};

export default GiftAidPopUp;
