import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';
import Picture from '../../Atoms/Picture/Picture';

const Container = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    theme.color(backgroundColor)};
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    justify-content: inherit;
    min-height: 750px;
    height: 100vh;
    max-height: 900px;
    flex-direction: ${({ formAligntRight }) =>
      formAligntRight ? 'row-reverse' : 'row'};
  }
`;

const BgImage = styled(Picture)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;

  :before {
    color: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px ${spacing('xl')} ${spacing('l')} -${spacing('l')};
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    height: 100%;

    :before {
      content: none;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 320px;
  text-align: center;
  margin-bottom: 50%;
  padding-top: ${spacing('l')};

  ${media('medium')} {
    margin-bottom: 0;
    padding: ${spacing('l')};
    max-width: 420px;
  }
`;

const Header = styled.div`
  padding: 0 ${spacing('md')};
  margin-bottom: ${spacing('l')};
`;

const FormWrapper = styled.div`
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px ${spacing('md')} ${spacing('xl')} rgba(0, 0, 0, 0.3);
  height: 450px;

  ${media('small')} {
    height: 430px;
  }
`;

const Error = styled(Text)`
  color: ${({ theme }) => theme.color('red')};
  font-size: ${spacing('md')};
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
      inputBorderColor && `border: 2px solid ${theme.color('red')};`}

    :focus {
      border: 2px solid ${({ theme }) => theme.color('red')};
    }
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
  :active,
  :focus,
  :hover {
    background-color: ${({ theme }) => theme.color('coral_dark')};
  }

  ${media('small')} {
    padding: ${spacing('md')} ${spacing('l')};
    margin: 0 auto ${spacing('l')};
  }
`;

export {
  BgImage,
  Button,
  Copy,
  Container,
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
