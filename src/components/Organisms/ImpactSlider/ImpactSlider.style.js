import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

const OuterWrapper = styled.div`
  position: relative;
  max-width: 100%;
  background-color: ${props => props.theme.color(`${props.backgroundColour}`)};
  padding: 32px 16px;

  @media ${({ theme }) => theme.breakpoint('small')} {
    padding: 50px;
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    padding: 64px 0;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    h1 {
      font-size: 48px;
      line-height: 48px;
    }
  }
`;

const Copy = styled.div`
  position: relative;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    p {
      font-size: 20px;
      line-height: 24.38px;
    }
  }
`;

const CurrentAmountCopy = styled(Text)`
  font-weight: bold;
  margin-top: 16px;

  @media ${({ theme }) => theme.breakpoint('medium')} {
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
  
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 70%;
    margin: 40px auto 0;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    width: 100%;
  }
`;

export {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton, InnerWrapper
};
