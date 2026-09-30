import styled, { css, keyframes } from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { Copywrapper, IconWrapper } from '../../Atoms/Button/Button.style';

// To reduce icon flash when switching between images:
const iconFadeIn = keyframes`
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

const FilterSection = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Title = styled(Text)`
//
`;

const BodyCopy = styled.div`
//
`;

const Results = styled(Text)`
  display: flex;
  align-items: center;
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

const FilterControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }
`;

const FilterButtonsWrapper = styled.div`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled(Button)`
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.color('grey_medium')} inset;
  display: inline-flex;

  // Increase specificity to override style defaults:
  ${FilterButtonsWrapper} & {

    // Match the pre-existing transition with the icon animation so it looks as natural as poss:
    transition: all 0.2s ease-in;

    > ${IconWrapper} {
      margin: 0;
      // Squirm-reduction
      width: 1.25rem;
      animation: ${iconFadeIn} 0.2s ease-in;
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

        // Flip the colour 
        // > ${IconWrapper} {
        //   // filter: invert(1);
        // }
      }
  `)};
  }
`;

export {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  Results,
  FilterControlsWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  FilterButtonsWrapper,
  FilterButton
};
