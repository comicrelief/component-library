import styled, { css, keyframes } from 'styled-components';
import Picture from '../../Atoms/Picture/Picture';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { Copywrapper, IconWrapper } from '../../Atoms/Button/Button.style';
import defaultBoxShadow from '../../../theme/shared/boxShadows';
import Link from '../../Atoms/Link/Link';
import { IconWrapper as LinkIconWrapper } from '../../Atoms/Link/Link.style';
import Rectangle from './assets/Rectangle.svg';

// To reduce icon flash when switching between images:
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Just for the lovely clean markup:
const OuterWrapper = styled.div`
//
`;

const Title = styled(Text)`
   @media ${({ theme }) => theme.allBreakpoints('L')} {
    margin-bottom: 2rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme, $pageBackgroundColour }) => theme.color($pageBackgroundColour)};
  justify-content: center;
  ${({ $paddingAbove, $paddingBelow }) => css`padding: ${$paddingAbove} 1rem ${$paddingBelow};`}

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding-inline: 2rem;
  }
`;

const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.color('white')};
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  ${defaultBoxShadow()};

  // Down 'arrow':
  &:after {
    --size: 3rem;
    position: absolute;
    content: "";
    width: var(--size); 
    height: var(--size); 
    bottom: calc((var(--size) * -0.5));
    left: calc(50% - (var(--size) / 2));
    background: center / contain no-repeat url("${Rectangle}");
    // Since the boxShadow won't extend to cover this, adding a little dropshadow to help it blend better:
    filter: drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.05));
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    &:after {
      left: 3rem;
    }
  }
  
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: 4rem;
    
    &:after {
      left: 4rem;
    }
  }
`;

const Body = styled.div`
  margin-bottom: 40px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
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
  // Override all normal button styles to make this work more as a 'toggle':
  &,
  &:hover,
  &:focus,
  &:focus-within,
  &:focus-visible {
    background-color: ${({ theme, $isActive }) => ($isActive ? `${theme.color('grey_medium')}` : `${theme.color('white')}`)};
  }

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

const ResultsWrapper = styled.div`
  text-align: center;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    display: flex;
    align-items: center;
  }
`;

const ClearSelectionButton = styled(CustomisedButton)`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
`;

const FilterButtonsWrapper = styled.div`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: ${fadeIn} 0.1s ease-in;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    gap: 1rem;
  }
`;

const FilterButton = styled(CustomisedButton)`
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

const NodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3rem;
  gap: 1.5rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    gap: 2rem;
    margin-top: 4rem;
  }
`;

const NodeImageWrapper = styled.div`
  flex: 0 0 20%;
  aspect-ratio: 1;
  align-self: start;
  min-width: 75px;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex: 0 0 20%;
    min-width: 165px;
  }
`;

const NodeCopyWrapper = styled.div`
  flex: 0 0 calc(auto - var(--s-gap));
  align-self: start;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex: 0 0 calc(auto - var(--m-gap));
  }
`;

const Node = styled.div`
  --s-gap: 1rem;
  --m-gap: 2rem;
  --l-gap: 4rem;
  position: relative;
  display: flex;
  flex: 0 0 100%;
  flex-direction: row;
  align-items: center;
  gap: var(--s-gap);
  border-radius: 0.5rem;
  height: fit-content;
  animation: ${fadeIn} 0.2s ease-in;

  // Hero-only customisations:
  ${({ $isHero }) => ($isHero ? css`
    flex-direction: column;
    margin-bottom: 1.5rem;

    ${NodeImageWrapper},
    ${NodeCopyWrapper} {
      width: 100%;
    }`
    : css`
    // Add a funky underline accent to all non-Hero, non-last nodes:
    &:not(:last-child) {
      // Space for funky accent
      padding-bottom: 1.5rem;

      // The titular funky accent
      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color:  ${({ theme }) => theme.color('grey_medium')};
      }
    }
  `)};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    gap: var(--m-gap);

    ${({ $isHero }) => ($isHero ? css`
      flex-direction: row;
      margin-bottom: 2rem;

      ${NodeImageWrapper} {
        flex: 0 0 calc(40% - var(--s-gap));
      }

      ${NodeCopyWrapper} {
        flex: 0 0 calc(60% - var(--s-gap));
        align-self: center;
      }
  ` : css`
    // Remove funky underline from all non-Hero nodes on this breakpoint
    && {
      padding-bottom: 0;
      
      &:after {
        content: none;
      }
    }
  `)}
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex-direction: row;

    ${({ $isHero }) => ($isHero
    ? css`
      gap: var(--l-gap);
      flex: 0 0 100%;

      ${NodeImageWrapper} {
        flex: 0 0 40%;
      }

      ${NodeCopyWrapper} {
        flex: 0 0 calc(60% - var(--m-gap));
      }`
    : css`
    flex: 0 0 calc(50% - 1rem);
  `)};
  }
`;

const NodeImage = styled(Picture)`
  img {
    ${defaultBoxShadow()};
    border-radius: ${({ $isHero }) => ($isHero ? '1rem' : '0.5rem')};

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      border-radius: 1rem;
    }
  }
`;

const NodeCopyLabel = styled(Text)`
  font-size: 14px;

  ${({ $isHero }) => (!$isHero && css`
    margin-bottom: 6px;

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      margin-bottom: 12px;
    }`
  )}
`;

const NodeCopyDescription = styled(Text)`
  margin-bottom: ${({ $isHero }) => ($isHero ? '2rem' : '1.5rem')};
`;

const NodeCopyHeading = styled(Text)`
    ${({ $isHero }) => ($isHero ? css`
      ${({ $hasDescription }) => (!$hasDescription && css`margin-bottom: 2rem;`)};
      font-weight: normal;
      margin-top: 0;`
    : css`
    // Replicates the larger, standard margin Description usually has, allowing
    // spacing above the CTA to be consistent when Desciption isn't present:
    margin-bottom: ${({ $hasDescription }) => ($hasDescription ? '6px' : '1.5rem')};

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      margin-bottom: ${({ $hasDescription }) => ($hasDescription ? '12px' : '1.5rem')};
    }
  `)}
`;

// Override 'interesting' styling choices made within the underlying Link
// component in the past to ensure icon doesn't escape constraints of the parent:
// without accidentally borking anything in other contexts:
const NodeCopyLink = styled(Link)`
  display: inline-block;
  padding-right: 2rem;

  ${LinkIconWrapper} {
    right: 0;
    margin: 0;
  }
`;

const ShowMoreButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

export {
  Container,
  OuterWrapper,
  HeaderWrapper,
  Title,
  Body,
  ControlsWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  ResultsWrapper,
  FilterButtonsWrapper,
  FilterButton,
  NodeWrapper,
  Node,
  NodeImageWrapper,
  NodeImage,
  NodeCopyWrapper,
  NodeCopyLabel,
  NodeCopyHeading,
  NodeCopyDescription,
  NodeCopyLink,
  ShowMoreButtonWrapper
};
