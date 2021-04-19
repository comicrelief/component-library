import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize('s')};
  color: ${({ theme }) => theme.color('white')};
  background-color: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const TopCopyWrapper = styled.div`
  display: flex;
  margin-bottom: ${spacing('md')};
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacing('md')};
  input {
    text-align: center;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize('s')};
    @media ${({ theme }) => theme.breakpoint('small')} {
      font-size: ${({ theme }) => theme.fontSize('m')};
      max-width: 180px;
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
      font-size: ${({ theme }) => theme.fontSize('s')};
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${spacing('md')} 0;
`;

const InputField = styled(Input)`
  width: 100%;
`;

const Title = styled(Text)`
  margin-bottom: ${spacing('m')};
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
