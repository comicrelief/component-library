import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Cross from '../../../Atoms/Icons/Cross';
import GiftAidLogo from '../../../Atoms/Icons/GiftAidLogo';
import {
  Container, Trigger, CloseButton, PopUpWindow, usePopUpOpen
} from '../PopUpShared';

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

const PopUpGiftAid = ({
  textColour = 'black',
  hoverColour = 'red',
  onOpenChange,
  ...rest
}) => {
  const { isOpen, openPopUp, closePopUp } = usePopUpOpen(onOpenChange);

  return (
    <Container
      data-testid="pop-up-gift-aid"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      <Trigger $hidden={isOpen}>
        <PopUpWindow
          $backgroundColour="white"
          $textColour={textColour}
        >
          <LogoWrapper
            type="button"
            onClick={openPopUp}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="What is Gift Aid?"
            $hoverColour={hoverColour}
          >
            <GiftAidLogo size={140} colour={textColour} />
          </LogoWrapper>
        </PopUpWindow>
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

          <h3>What is Gift Aid and how does it work?</h3>

          <p>
            As a UK taxpayer, you pay tax on your income, savings, or pensions.
            When you donate to charity, it comes from money you&apos;ve already
            paid tax on. Charities can reclaim this tax back from the Government
            through Gift Aid, so if you donated £10 and used Gift Aid, it’s will
            actually be worth £12.50! How awesome is that?
          </p>

          <p>
            Since this extra cash comes straight from the government and not from
            your pocket, you’ll still only be spending £10 of your own money. Which
            is great news for you!
          </p>

          <p>
            In short, £1 + Gift Aid = £1.25, at no extra cost to you.
          </p>
        </PopUpWindow>
      )}
    </Container>
  );
};

PopUpGiftAid.propTypes = {
  textColour: PropTypes.string,
  hoverColour: PropTypes.string,
  onOpenChange: PropTypes.func
};

export default PopUpGiftAid;
