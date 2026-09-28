import styled, { css } from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';
import { Copywrapper, IconWrapper } from '../../Atoms/Button/Button.style';

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

const CustomisedButton = styled(Button)`
  // Override Button w/icon styles to match styles:
  display: inline-flex;
  grid-column-gap: 0;
  width: auto;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    justify-content: left;
  }
  
  ${({ theme }) => css`
    color: ${theme.color('black')};
    box-shadow: 0px 0px 0px 2px ${theme.color('black')} inset;`};

  > ${Copywrapper} {
    padding-right: 0;
    text-align: left;
    
    // Fixed label width to prevent squirming when the label copy changes:
    width: 7rem;
    @media ${({ theme }) => theme.allBreakpoints('L')} {
      width: 8rem;
    }
  }

  > ${IconWrapper} {
    margin-left: 0;
    height: calc(2.25rem - (0.6rem * 2));
    // More squirm-prevention when switching icons:
    width: 1rem;
  }
`;

const ShowHideFiltersButton = styled(CustomisedButton)`
//
`;

const ClearSelectionButton = styled(CustomisedButton)`
//
`;

const UpperButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }
//
`;

const FiltersWrapper = styled.div`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled(Button)`
  // Will need a fixed width to stop resizing with switching button copy;
  // width: 225px;
  // height: 60px;
  // margin-top: 1rem;
  // justify-content: left;
  display: flex;
  
  ${({ theme }) => css`
    color: ${theme.color('black')};
    box-shadow: 0px 0px 0px 2px ${theme.color('black')} inset;`
};
`;

export {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  UpperButtonWrapper,
  ShowHideFiltersButton,
  ClearSelectionButton,
  FiltersWrapper,
  FilterButton
};
