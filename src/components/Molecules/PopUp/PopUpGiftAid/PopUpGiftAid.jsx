import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import crTheme from '../../../../theme/crTheme/theme';

import Cross from '../Icons/CrossRoundedCorners';
import GiftAidLogo from '../Icons/GiftAidLogo';
import {
  Container, CloseButton, PopUpWindow, PopUpHeading, PopUpBodyText, PageOverlay
} from '../PopUpShared.style';
import { usePopUpOpen } from '../PopUpShared.utils';

const DEFAULT_HEADING = 'What is Gift Aid and how does it work?';

const DEFAULT_PARAGRAPHS = [
  "As a UK taxpayer, you pay tax on your income, savings, or pensions. When you donate to charity, it comes from money you've already paid tax on. Charities can reclaim this tax back from the Government through Gift Aid, so if you donated £10 and used Gift Aid, it’s will actually be worth £12.50! How awesome is that?",
  'Since this extra cash comes straight from the government and not from your pocket, you’ll still only be spending £10 of your own money. Which is great news for you!',
  'In short, £1 + Gift Aid = £1.25, at no extra cost to you.'
];

/**
 * Not positioned itself, so the open popup is absolutely positioned against
 * the parent container and centred within it
 */
const GiftAidContainer = styled(Container)`
  position: static;
`;

/**
 * The open popup is positioned over the parent container, so its width is set
 * independently of the trigger's width (via openWindowWidth) and centred within it
 */
const OpenPopUpWindow = styled(PopUpWindow)`
  width: ${({ $openWindowWidth }) => $openWindowWidth};
  left: 50%;
  right: auto;
  margin-left: ${({ $openWindowWidth }) => `calc(${$openWindowWidth} / -2)`};

  /* Open window: fixed and centred in the viewport, so it stays put when the page scrolls.
     Fixed widths resolve against the viewport, so the width is set here per breakpoint.
     On S it sits 24px in from the screen edge (no container inset). */
  /* Centred with inset + auto margins rather than transform, as the library animates transform on open */
  position: fixed;
  inset: 0;
  margin: auto;
  height: fit-content;
  width: calc(100vw - 48px);

  // this needs to stay in the repo and not be moved into the CL component itself
  @media ${crTheme.allBreakpoints('M')} {
    width: 544px;
  }

  /* Bug fix: these two keep the shade above the page's inputs (which sit at z-index 2-3) and the popup above the shade */
  z-index: 6;
`;

const LogoWrapper = styled.button`
  display: block;
  width: 100%;
  padding: 0;
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
  backgroundColour = 'transparent',
  openWindowWidth = '20rem',
  heading = DEFAULT_HEADING,
  paragraphs = DEFAULT_PARAGRAPHS,
  onOpenChange,
  ...rest
}) => {
  const {
    isOpen, isClosing, isRendered, containerRef, openPopUp, closePopUp
  } = usePopUpOpen(onOpenChange);

  return (
    <GiftAidContainer
      ref={containerRef}
      data-testid="gift-aid-popup"
      data-open={isOpen ? 'true' : 'false'}
      {...rest}
    >
      {isRendered && <PageOverlay data-testid="gift-aid-page-overlay" aria-hidden="true" />}

      <div data-testid="gift-aid-pop-up-trigger">
        <PopUpWindow
          data-testid="gift-aid-pop-up-window"
          $backgroundColour={backgroundColour}
          $textColour={textColour}
        >
          <LogoWrapper
            data-testid="gift-aid-pop-up-logo-wrapper"
            type="button"
            onClick={openPopUp}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-label="What is Gift Aid?"
            $hoverColour={hoverColour}
          >
            <GiftAidLogo colour={textColour} data-testid="gift-aid-pop-up-gift-aid-logo"/>
          </LogoWrapper>
        </PopUpWindow>
      </div>

      {isRendered && (
        <OpenPopUpWindow
          data-testid="gift-aid-pop-up-open-window"
          $backgroundColour="white"
          $textColour={textColour}
          $isOpen={isRendered}
          $isClosing={isClosing}
          $openWindowWidth={openWindowWidth}
        >
          <CloseButton
            data-testid="gift-aid-pop-up-close-button"
            type="button"
            onClick={closePopUp}
            aria-label="Close"
            $hoverColour={hoverColour}
          >
            <Cross colour={textColour} size={24} data-testid="gift-aid-pop-up-cross"/>
          </CloseButton>

          <PopUpHeading data-testid="gift-aid-pop-up-heading">{heading}</PopUpHeading>

          {paragraphs.map(paragraph => (
            <PopUpBodyText key={paragraph} data-testid="gift-aid-pop-up-body-text">{paragraph}</PopUpBodyText>
          ))}
        </OpenPopUpWindow>
      )}
    </GiftAidContainer>
  );
};

PopUpGiftAid.propTypes = {
  textColour: PropTypes.string,
  hoverColour: PropTypes.string,
  backgroundColour: PropTypes.string,
  openWindowWidth: PropTypes.string,
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  onOpenChange: PropTypes.func
};

export default PopUpGiftAid;
