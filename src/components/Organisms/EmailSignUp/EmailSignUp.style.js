import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import TextInput from './_TextInput';
import Text from '../../Atoms/Text/Text';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize('s')};
  color: ${({ theme }) => theme.color('white')};
  background-color: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  padding: ${spacing('m')};
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
      color: ${({ theme }) => theme.color('white')};
    }
  }
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing('md')} 0;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  @media ${({ theme }) => theme.breakpoint('medium')} {
    justify-content: start;
    flex-direction: row;
    gap: ${spacing('md')};
  }
`;

const InputField = styled(TextInput)`
  width: 100%;
  max-width: 290px;
  margin-bottom: ${spacing('md')};

  & > span:first-child {
    color: ${({ theme }) => theme.color('white')};
  }
`;

const Title = styled(Text)`
  margin-bottom: ${spacing('m')};
`;

export {
  ESUWrapper,
  TopCopyWrapper,
  PrivacyCopyWrapper,
  ButtonWrapper,
  FormInner,
  InputField,
  NameWrapper,
  Title
};
