import styled from 'styled-components';
import crTheme from '../../../theme/crTheme/theme';
import containers from '../../../theme/shared/containers';

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
  position: relative;
  display: block;
  padding: 1rem;
  padding-right: 50px;
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
    background-color: ${crTheme.color('grey_light')};
  }

  @media ${crTheme.allBreakpoints('M')} {
    padding: 3rem;
    padding-right: 60px;
    min-height: 200px;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transform: rotate(45deg);

  svg {
    width: 100%;
    height: 100%;
  }

  @media ${crTheme.allBreakpoints('M')} {
    width: 28px;
    height: 28px;
    top: 1.5rem;
    right: 1.5rem;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  color: ${crTheme.color('black')};
  margin: 0 0 0.25rem 0;
  display: flex;
  align-items: center;

  @media ${crTheme.allBreakpoints('M')} {
    font-size: 18px;
  }
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
    width: 24px;
    height: 24px;
  }

  @media ${crTheme.allBreakpoints('M')} {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const HeadingText = styled.span``;

const CardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${crTheme.color('black')};
  margin: 0;

  @media ${crTheme.allBreakpoints('M')} {
    font-size: 15px;
  }
`;

export {
  Wrapper,
  Grid,
  ButtonCard,
  CardTitle,
  CardDescription,
  ArrowWrapper,
  HeadingContentWrapper,
  HeadingIconWrapper,
  HeadingText
};
