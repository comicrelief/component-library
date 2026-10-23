import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../../Atoms/Text/Text';
import Cross from '../../../Atoms/Icons/Cross';
import GiftAidLogo from '../../../Atoms/Icons/GiftAidLogo';
import PopUpWindow from '../PopUpWindow';

const LogoWrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  ${({ $hoverColour, theme }) => $hoverColour && css`
    &:hover svg {
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

const PopUpGiftAid = ({
  textColour = 'black',
  hoverColour = 'red',
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <PopUpWindow
      $backgroundColour="white"
      $textColour={textColour}
      $isOpen={isOpen}
      data-testid="pop-up-gift-aid"
      {...rest}
    >
      {isOpen ? (
        <>
          <CloseButton
            type="button"
            onClick={closeModal}
            aria-label="Close"
            $hoverColour={hoverColour}
          >
            <Cross colour={textColour} size={24} />
          </CloseButton>

          <Text tag="h3">What is Gift Aid and how does it work?</Text>

          <Text tag="p">
            As a UK taxpayer, you pay tax on your income, savings, or pensions.
            When you donate to charity, it comes from money you&apos;ve already
            paid tax on. Charities can reclaim this tax back from the Government
            through Gift Aid, so if you donated £10 and used Gift Aid, it’s will
            actually be worth £12.50! How awesome is that?
          </Text>

          <Text tag="p">
            Since this extra cash comes straight from the government and not from
            your pocket, you’ll still only be spending £10 of your own money. Which
            is great news for you!
          </Text>

          <Text tag="p">
            In short, £1 + Gift Aid = £1.25, at no extra cost to you.
          </Text>
        </>
      ) : (
        <LogoWrapper
          type="button"
          onClick={openModal}
          aria-expanded="false"
          aria-label="What is Gift Aid?"
          $hoverColour={hoverColour}
        >
          <GiftAidLogo size={140} colour={textColour} />
        </LogoWrapper>
      )}
    </PopUpWindow>
  );
};

PopUpGiftAid.propTypes = {
  textColour: PropTypes.string,
  hoverColour: PropTypes.string
};

export default PopUpGiftAid;
