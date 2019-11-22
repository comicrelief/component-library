import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize('s')};
  color: ${({ theme }) => theme.color('white')};
  background-color: ${({ theme, backgroundColor }) =>
    theme.color(backgroundColor)};
`;

const TopCopyWrapper = styled.div`
  display: flex;
  margin-bottom: ${spacing('md')};
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacing('xl')};
  button {
    border-color: ${({ theme, backgroundColor }) =>
      theme.color(backgroundColor)};
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize('s')};
    @media ${({ theme }) => theme.breakpoint('small')} {
      width: auto;
    }
  }
`;

const PrivacyCopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing('md')};
  p {
    font-size: ${({ theme }) => theme.fontSize('s')};
    line-height: ${({ theme }) => theme.fontSize('xl')};
    a {
      span {
        font-size: ${({ theme }) => theme.fontSize('s')};
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputField = styled(Input)`
  width: 100%;
`;

const Title = styled(Text)`
  margin-bottom: ${spacing('l')};
  font-size: ${({ theme }) => theme.fontSize('xxl')};

  @media ${({ theme }) => theme.breakpoint('medium')} {
    font-size: ${({ theme }) => theme.fontSize('big')};
  }
`;

export {
  ESUWrapper,
  TopCopyWrapper,
  PrivacyCopyWrapper,
  ButtonWrapper,
  Form,
  InputField,
  Title
};
