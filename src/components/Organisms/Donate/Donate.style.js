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
  height: auto;
  padding: ${spacing('l')} 0;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    align-items: center;
    justify-content: inherit;
  }
`;

const BgImage = styled(Picture)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  opacity: 0.2;
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: ${spacing('l')};
  flex-direction: row;
  display: block;
  width: 90%;
  flex-direction: ${({ formAlignRight }) =>
    formAlignRight === true ? 'row-reverse' : 'row'};

  ${media('medium')} {
    display: flex;
    margin: ${spacing('m')} ${spacing('xxl')};
  }
`;

const Header = styled.div`
  margin-left: auto;
  width: 100%;

  ${media('medium')} {
    transform-style: preserve-3d;
    padding: ${({ formAlignRight }) =>
      formAlignRight === true
        ? `${spacing('l')} 0 0 ${spacing('xl')}`
        : `${spacing('l')} ${spacing('xl')} 0 0`};
    margin-bottom: ${spacing('l')};
  }
`;

const HeaderInner = styled.div`
  position: relative;
  text-align: left;
  ${media('medium')} {
    top: 50%;
    transform: translateY(-50%);
    text-align: left;
  }
`;

const FormWrapper = styled.div`
  position: relative;
`;

const Error = styled(Text)`
  color: ${({ theme }) => theme.color('red')};
  font-size: ${spacing('md')};
  font-weight: 500;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px ${spacing('md')} ${spacing('xl')} rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: ${spacing('md')};

  h3 {
    margin-top: ${spacing('md')};
  }

  input {
    max-width: 100%;
    margin: 0;
  }

  ${media('small')} {
    width: 450px;
  }
`;

const OuterFieldset = styled.fieldset`
  padding: 0 ${spacing('l')} ${spacing('l')};
  margin: 0;
  border: none;
`;

const Legend = styled.legend`
  margin: 0;
  padding: ${spacing('l')} 0;
  display: block;
  width: 100%;
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing('l')};

  label {
    flex: 0 0 30%;

    input {
      cursor: pointer;
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
  display: block;

  ${media('medium')} {
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
  }
`;

const Copy = styled(Text)`
  line-height: 1.5;
`;

const Button = styled.button`
  width: 100%;
  margin: ${spacing('l')} 0 ${spacing('l')};
  color: ${({ theme }) => theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('m')};
  font-weight: bold;
  cursor: pointer;
  min-height: 48px;
  background: ${({ theme }) => theme.color('red')};
  padding: 0.875rem 1.25rem 0.625rem;
  text-decoration: none;
  border-radius: 2rem;
  border: none;
  :active,
  :focus,
  :hover {
    background-color: ${({ theme }) => theme.color('coral_dark')};
  }

  ${media('medium')} {
    padding: ${spacing('md')} ${spacing('l')};
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
  HeaderInner,
  Label,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField,
  OuterFieldset,
  Legend
};
