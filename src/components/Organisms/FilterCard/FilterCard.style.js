import styled, { css, keyframes } from 'styled-components';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { Copywrapper, IconWrapper } from '../../Atoms/Button/Button.style';
import defaultBoxShadow from '../../../theme/shared/boxShadows';

// To reduce icon flash when switching between images:
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme, $pageBackgroundColour }) => theme.color($pageBackgroundColour)};
  justify-content: center;
  ${({ $paddingAbove, $paddingBelow }) => css`padding: ${$paddingAbove} 2rem ${$paddingBelow};`}
`;

const OuterWrapper = styled.div`
//
`;

const Title = styled(Text)`
//
`;

const BodyCopy = styled.div`
  margin-bottom: 1rem;
`;

const DynamicContentWrapper = styled.div`
  animation: ${fadeIn} 0.2s ease-in;
`;

const ResultsWrapper = styled.div`
  text-align: center;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    display: flex;
    align-items: center;
  }
`;

// Tweaks to suit this context:
const CustomisedButton = styled(Button)`
  // Override 'Button w/icon' styles for this use-case:
  display: inline-flex;
  grid-column-gap: 0.5rem;
  width: auto;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    justify-content: left;
  }
  
  ${({ theme }) => css`
    color: ${theme.color('black')};
    box-shadow: 0px 0px 0px 1px ${theme.color('black')} inset;
  `};

  > ${Copywrapper} {
    padding-right: 0;
    text-align: left;
  }

  > ${IconWrapper} {
    margin-left: 0;
    height: calc(2.25rem - (0.6rem * 2));
  }
`;

const ShowHideFiltersButton = styled(CustomisedButton)`
  > ${Copywrapper} {
    // Fixed label width to prevent squirming when the label copy changes:
    width: 7rem;
    text-align: center;

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      width: 8rem;
    }
  }

  // More squirm-prevention when switching icons:
  > ${IconWrapper} {
    width: 1rem;
  }
`;

const ClearSelectionButton = styled(CustomisedButton)`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }
`;

const FilterButtonsWrapper = styled.div`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: ${fadeIn} 0.1s ease-in;
`;

const FilterButton = styled(Button)`
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.color('grey_medium')} inset;
  display: inline-flex;

  // Increase specificity to override style defaults:
  ${FilterButtonsWrapper} & {

    // Match the pre-existing transition with the icon animation so it looks as natural as poss:
    transition: all 0.2s ease-in;

    > ${IconWrapper} {
      // Squirm-reduction
      width: 1.25rem;
      margin: 0;
      animation: ${fadeIn} 0.2s ease-in;
    }

    > ${Copywrapper} {
      padding-inline: 0;
    }
    
    // Match the focus and hover states to default, as it makes for confusing UX:
    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.color('grey')} inset;
    }

    ${({ $isSelected }) => ($isSelected && css`
      &,
      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.color('red')};
        color: ${({ theme }) => theme.color('white')};
        box-shadow: none;
      }
  `)};
  }
`;

const FilterCardsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4rem;
`;

const FilterCardNode = styled.div`
  flex: 0 0 calc(100% - 0.5rem);
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  align-items: center;
  gap: 1rem;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex: 0 0 calc(50% - 0.5rem);
  }
`;

const FilterCardNodeImageWrapper = styled.div`
  flex: 0 0 40%;
`;

const FilterCardNodeImage = styled(Picture)`  
  img {
    border-radius: 0.5rem;
  }
`;

const FilterCardNodeCopy = styled.div`
  flex: 0 0 calc(60% - 1rem);
  align-self: start;
`;

const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.color('white')};
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  ${defaultBoxShadow};

  &:after {
    --size: 1.5rem;
    position: absolute;
    content: "";
    width: 0; 
    height: 0;
    // Tiny lil' overlap to prevent ugliness when zooming the browser
    bottom: calc((var(--size) * -1) + 1px);
    left: calc(50% - (var(--size) / 2));
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid ${({ theme }) => theme.color('white')};
    // Recreating defaultBoxShadow in a manner that actual works with all the CSS funkiness:
    filter: drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.1));
  }
  
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: 4rem;

    &:after {
      left: 4rem;
    }
  }
`;

export {
  Container,
  OuterWrapper,
  Title,
  BodyCopy,
  ResultsWrapper,
  DynamicContentWrapper,
  ControlsWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  FilterButtonsWrapper,
  FilterButton,
  FilterCardsWrapper,
  FilterCardNode,
  FilterCardNodeImageWrapper,
  FilterCardNodeImage,
  FilterCardNodeCopy,
  HeaderWrapper
};
