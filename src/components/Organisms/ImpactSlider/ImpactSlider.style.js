import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

const OuterWrapper = styled.div`
  position: relative;
  max-width: 100%;
  background-color: ${props => props.theme.color(`${props.backgroundColour}`)};
  padding: 32px 16px;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: 50px;
  }
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: 64px 0;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    h1 {
      font-size: 48px;
      line-height: 48px;
    }
  }
`;

const Copy = styled.div`
  position: relative;
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    p {
      font-size: 20px;
      line-height: 24.38px;
    }
  }
`;

const CurrentAmountCopy = styled(Text)`
  font-weight: bold;
  margin-top: 16px;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    font-size: 20px;
    line-height: 24.38px;
    margin: 24px 0 38px;
  }
`;

const SubmitButton = styled(Button)`
  margin: 32px auto 0;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  display: block;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 70%;
    margin: 40px auto 0;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: 100%;
  }
`;

export {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton, InnerWrapper
};
