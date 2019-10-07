import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';
// import Link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';

const Wrapper = styled.div`
  max-width: 320px;
  text-align: center;

  ${media('small')} {
    max-width: 420px;
    padding: 0 ${spacing('l')};
  }
`;

const Header = styled.div`
  padding: 0 ${spacing('md')};
  margin-bottom: ${spacing('l')};
`;

const FormWrapper = styled.div`
  box-shadow: 0px ${spacing('md')} ${spacing('xl')} rgba(0, 0, 0, 0.3);
  height: 450px;

  ${media('small')} {
    height: 430px;
  }
`;

const Error = styled(Text)`
  color: #ea0043;
  font-size: 15px;
  font-weight: 500;
`;

const Form = styled.form`
  padding: 0 ${spacing('md')};
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: ${spacing('l')};
  }

  h3 {
    margin-top: ${spacing('md')};
  }

  input {
    max-width: 100%;
    margin: 0;
  }

  ${Error} {
    margin: ${spacing('l')} 0;
  }
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    flex: 0 0 30%;

    input {
      cursor: pointer;
      padding: ${spacing('md')};
    }

    :hover input {
      border-color: ${({ theme }) => theme.color('red')};
    }
  }
`;

const FormFieldset = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled(Text)`
  margin-right: auto;
`;

const AmountField = styled(Input)`
  position: relative;
  flex: 0 0 50%;
  font-weight: 400;

  ${media('small')} {
    flex: 0 0 60%;
  }

  span {
    position: absolute;
    padding: 0px 15px;
    font-size: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-weight: 500;
  }

  input {
    border: 2px solid ${({ theme }) => theme.color('grey_medium')};
    background: transparent;
    padding: ${spacing('sm')} ${spacing('md')} ${spacing('sm')} ${spacing('l')};
    ${({ inputBorderColor, theme }) =>
      inputBorderColor &&
      `border: 2px solid ${theme.color('red')};
      :focus { outline: none; border: 2px solid ${theme.color('red')};`}
  }
`;

const Copy = styled(Text)`
  line-height: 1.5;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-weight: bold;
  cursor: pointer;
  padding: ${spacing('md')} ${spacing('sm')};
  background: ${({ theme }) => theme.color('red')};
  border: none;
  border-radius: 100px;

  ${media('small')} {
    padding: ${spacing('md')} ${spacing('l')};
    margin: 0 auto ${spacing('l')};
  }
`;

export {
  Button,
  Copy,
  Error,
  FormFieldset,
  FormWrapper,
  Header,
  Label,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField
};
