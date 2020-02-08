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
  padding: 2rem 0;
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

  :before {
    background-image: linear-gradient( bottom,
        rgba( 244, 242, 244, 0 ) 0%, 
        rgba( 244, 242, 244, 1 ) 90% );
        rgba( 244, 242, 244, 0 ) 0%, 
        rgba( 244, 242, 244, 1 ) 90% );
    background-image: -ms-linear-gradient( bottom, 
        rgba( 244, 242, 244, 0 ) 0%, 
        rgba( 244, 242, 244, 1 ) 90% );
    background-image: -o-linear-gradient( bottom, 
        rgba( 244, 242, 244, 0 ) 0%, 
        rgba( 244, 242, 244, 1 ) 90% );
    background-image: -webkit-linear-gradient( bottom,
        rgba( 244, 242, 244, 0 ) 0%, 
        rgba( 244, 242, 244, 1 ) 90% );
    content: " ";
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 3em;
  flex-direction: row;
  display: block;
  width: 90%;
  flex-direction: ${({ formAlignRight }) =>
    formAlignRight === true ? 'row-reverse' : 'row'};

  ${media('medium')} {
    display: flex;
    margin: 0 ${spacing('xxl')} ${spacing('l')};
  }
`;

const Header = styled.div`
  ${media('medium')} {
    padding: ${({ formAlignRight }) =>
      formAlignRight === true ? '2rem 0 0 4rem' : '2rem 4rem 0 0'};
    margin-bottom: ${spacing('l')};
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
  width: 100%%;
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px ${spacing('md')} ${spacing('xl')} rgba(0, 0, 0, 0.3);
  border: 1px solid #dfdfd7;
  border-radius: 3px;
  margin-top: 1em;

  h3 {
    margin-top: ${spacing('md')};
  }

  input {
    max-width: 100%;
    margin: 0;
  }

  ${media('medium')} {
    width: 380px;
  }
`;

const OuterFieldset = styled.fieldset`
  padding: ${spacing('md')};
  margin: 0;
  border: none;
`;

const Legend = styled.legend`
  margin: 0;
  padding: 1em 0;
  border-bottom: 1px solid #dfdfd7;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: block;
  width: 100%;

  h3 {
    padding: 0;
    margin: 0;
  }
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

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
  width: 100%;
  margin: 2rem 0 2rem;
  color: ${({ theme }) => theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-weight: bold;
  cursor: pointer;
  padding: ${spacing('md')} ${spacing('sm')};
  background: ${({ theme }) => theme.color('red')};
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
  Label,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField,
  OuterFieldset,
  Legend
};
