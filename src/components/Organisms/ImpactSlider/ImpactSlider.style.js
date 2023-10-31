import styled from 'styled-components';
import RichText from '../../Atoms/RichText/RichText';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

const OuterWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  background-color: ${props => props.theme.color('grey_extra_light')};
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
`;

const Copy = styled(RichText)`
  position: relative;
`;

const CurrentAmountCopy = styled(Text)`
  font-weight: bold;
  margin-top: 16px;
`;

const SubmitButton = styled(Button)`
  margin-top: 32px;
  width: 100%;

  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-top: 40px;
  }
`;

export {
  OuterWrapper, Copy, CurrentAmountCopy, SubmitButton, InnerWrapper
};
