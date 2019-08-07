import styled from 'styled-components';

import spacing from '../../../theme/shared/spacings';
import Link from '../../Atoms/Link/Link';
import Input from '../../Atoms/Input/Input';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize('s')};
  padding: ${spacing('l')};
  color: ${({ theme }) => theme.color('white')};
  background-color: ${({ theme }) => theme.color('deep_violet')};
`;

const TopCopy = styled.div`
  display: flex;
  margin-bottom: ${spacing('none')};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing('md')};
`;

const PrivacyCopyWraper = styled.div`
  display: flex;
`;

const PrivacyLink = styled(Link)`
  cursor: pointer;
  padding: 0 ${spacing('xsm')};
  color: ${({ theme }) => theme.color('white')};
  border-color: ${({ theme }) => theme.color('white')};
  :hover {
    color: ${({ theme }) => theme.color('white')};
    border-color: ${({ theme }) => theme.color('white')};
  }
`;

const InputField = styled(Input)`
  width: 100%;
  input {
    width: auto;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacing('md')};
  button {
    border-color: ${({ theme }) => theme.color('deep_violet')};
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize('s')};
    @media ${({ theme }) => theme.breakpoint('small')} {
      width: auto;
    }
  }
`;

export {
  ESUWrapper,
  TopCopy,
  Form,
  PrivacyCopyWraper,
  PrivacyLink,
  InputField,
  ButtonWrapper
};
