import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Cross from '../../../Atoms/Icons/CrossRoundedCorners';
import GiftAidLogo from '../../../Atoms/Icons/GiftAidLogo';
import {
  Container, Trigger, CloseButton, PopUpWindow, PopUpHeading, PopUpBodyText
} from '../PopUpShared.style';
import { usePopUpOpen } from '../PopUpShared.utils';

const DEFAULT_HEADING = 'What is Gift Aid and how does it work?';

const DEFAULT_PARAGRAPHS = [
  "As a UK taxpayer, you pay tax on your income, savings, or pensions. When you donate to charity, it comes from money you've already paid tax on. Charities can reclaim this tax back from the Government through Gift Aid, so if you donated £10 and used Gift Aid, it’s will actually be worth £12.50! How awesome is that?",
  'Since this extra cash comes straight from the government and not from your pocket, you’ll still only be spending £10 of your own money. Which is great news for you!',
  'In short, £1 + Gift Aid = £1.25, at no extra cost to you.'
];

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
  backgroundColour = 'white',
  heading = DEFAULT_HEADING,
  paragraphs = DEFAULT_PARAGRAPHS,
  onOpenChange,
  ...rest
}) => {
  const {
    isOpen, isClosing, isRendered, containerRef, openPopUp, closePopUp
  } = usePopUpOpen(onOpenChange);

  return (
    <Container
      ref={containerRef}
      data-testid="pop-up-gift-aid"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      <Trigger $hidden={isRendered}>
        <PopUpWindow
          $backgroundColour={backgroundColour}
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

      {isRendered && (
        <PopUpWindow
          $backgroundColour="white"
          $textColour={textColour}
          $isOpen={isRendered}
          $isClosing={isClosing}
        >
          <CloseButton
            type="button"
            onClick={closePopUp}
            aria-label="Close"
            $hoverColour={hoverColour}
          >
            <Cross colour={textColour} size={24} />
          </CloseButton>

          <PopUpHeading>{heading}</PopUpHeading>

          {paragraphs.map(paragraph => (
            <PopUpBodyText key={paragraph}>{paragraph}</PopUpBodyText>
          ))}
        </PopUpWindow>
      )}
    </Container>
  );
};

PopUpGiftAid.propTypes = {
  textColour: PropTypes.string,
  hoverColour: PropTypes.string,
  backgroundColour: PropTypes.string,
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  onOpenChange: PropTypes.func
};

export default PopUpGiftAid;
