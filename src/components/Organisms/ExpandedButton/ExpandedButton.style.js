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
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  transform: rotate(45deg);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${crTheme.color('black')};
  margin: 0 0 0.25rem 0;
  display: flex;
  align-items: center;
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
    width: 18px;
    height: 18px;
  }
`;

const HeadingText = styled.span``;

const CardDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: ${crTheme.color('black')};
  margin: 0;
`;

export {
  Wrapper,
  Grid,
  ButtonCard,
  CardTitle,
  CardDescription,
  ArrowWrapper,
  HeadingContentWrapper,
  HeadingIconWrapper
};
