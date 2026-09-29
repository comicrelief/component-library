import styled from 'styled-components';
import crTheme from '../../../theme/crTheme/theme';
import containers from '../../../theme/shared/containers';
import Text from '../../Atoms/Text/Text';

const Wrapper = styled.div`
  background: ${crTheme.color('grey_light')};
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  @media ${crTheme.allBreakpoints('M')} {
    padding: 3rem 2rem;
  }
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
  max-width: ${containers.medium};
  margin: 0 auto;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonCard = styled.button`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${crTheme.color('white')};
  border: 2px solid ${crTheme.color('grey')};
  border-radius: 8px;
  cursor: pointer;
  flex: 1;
  text-align: left;
  transition: all linear 0.2s;
  min-height: 180px;
  width: 100%;

  &:hover {
    background-color: ${crTheme.color('grey_medium')};
  }

  @media ${crTheme.allBreakpoints('M')} {
    padding: 1rem;
    min-height: 200px;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  flex-shrink: 0;

  svg {
    width: auto;
    height: auto;
  }
`;

const CardTopWrapper = styled.div`
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const HeadingContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeadingIconWrapper = styled.span`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: auto;
    height: auto;
  }
`;

const CardHeading = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${crTheme.color('black')};
`;

export {
  Wrapper,
  Grid,
  ButtonCard,
  CardTopWrapper,
  ArrowWrapper,
  HeadingContentWrapper,
  HeadingIconWrapper,
  CardHeading
};
