import styled from 'styled-components';
// import styled, { css } from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';
import Picture from '../../Atoms/Picture/Picture';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  background-color: ${({ theme, mobileBackgroundColor }) => theme.color(mobileBackgroundColor)};
  ${media('medium')} {
    flex-direction: row;
    align-items: center;
    justify-content: inherit;
    background-color: ${({ theme, desktopOverlayColor }) => theme.color(desktopOverlayColor)};
  }
`;

const PopUp = styled.div`
  background: green;
  height: 100px;
`;

const BgImage = styled(Picture)`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  ${({ backgroundColor }) => backgroundColor !== 'transparent' && `
    opacity: 0.4;
  `}
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: ${spacing('l')} ${spacing('md')};
  flex-direction: row;
  align-items: center;
  display: block;
  width: 100%;
  flex-direction: ${({ formAlignRight }) => (formAlignRight === true ? 'row-reverse' : 'row')};
  ${media('small')} {
    padding: ${spacing('xl')} ${spacing('md')};
  }
  ${media('medium')} {
    display: flex;
    padding: ${spacing('xl')} 0;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  ${media('medium')} {
    width: 50%;
    padding: ${spacing('xl')};
    align-items: center;
  }
`;

const HeaderInner = styled.div`
  position: relative;
  text-align: left;
`;

const FormWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  ${media('medium')} {
    width: 50%;
  }
`;

const Error = styled(Text)`
  color: ${({ theme }) => theme.color('red')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-weight: 500;
  margin-top: ${spacing('l')};
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color('white')};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: ${spacing('md')};

  h3 {
    margin-top: ${spacing('md')};
  }

  input {
    max-width: 100%;
    margin: 0;
  }
  input[type='submit'] {
    margin: ${spacing('l')} 0;
  }

  ${media('small')} {
    width: 450px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const OuterFieldset = styled.fieldset`
  padding: 0 ${spacing('md')} ${spacing('md')};
  margin: 0;
  border: none;
  ${media('small')} {
    padding: 0 ${spacing('l')} ${spacing('l')};
  }

  input[type='submit'] {
    margin-bottom: 0;
  }
`;

const Legend = styled.legend`
  margin: 0;
  padding: ${spacing('l')} ${spacing('sm')};
  display: block;
  width: 100%;
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: ${spacing('l')};
  ${media('small')} {
    flex-direction: row;
  }
  label {
    flex: 0 0 30%;
    margin-bottom: ${spacing('sm')};
    ${media('small')} {
      margin-bottom: 0;
    }
    input {
      cursor: pointer;
      padding: ${spacing('m')}  ${spacing('sm')};
    }
  }
`;

const FormFieldset = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled(Text)`
  margin-right: ${spacing('sm')};
`;

const AmountField = styled(Input)`
  position: relative;
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 0;
  font-weight: 400;
  display: block;

  ${media('small')} {
    flex-basis: 60%;
  }

  span {
    position: absolute;
    font-size: 20px;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    font-weight: 500;
    padding: 0px 15px;
    ${zIndex('high')};
  }

  input {
    height: 48px;
    border: 2px solid ${({ theme }) => theme.color('grey')};
    background: ${({ theme }) => theme.color('grey_light')};
    border-radius: 10px;
    padding: ${spacing('sm')} ${spacing('md')} ${spacing('sm')} ${spacing('l')};
    &:focus {
      outline: none;
      border: 2px solid ${({ theme }) => theme.color('grey')};
    }
  }
`;

const Copy = styled(Text)`
  line-height: 1.5;
  margin-top: ${spacing('l')};
`;

const Button = styled.button`
  width: 100%;
  margin: ${spacing('l')} 0 ${spacing('l')};
  color: ${({ theme }) => theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-weight: bold;
  cursor: pointer;
  min-height: 48px;
  background: ${({ theme, color }) => theme.color(color)};
  text-decoration: none;
  border-radius: 2rem;
  border: none;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  appearance: none;
  :active,
  :focus,
  :hover {
    outline: none;
    background-color: ${({ theme }) => theme.color('coral_dark')};
  }

  ${media('small')} {
    padding: ${spacing('md')} ${spacing('l')};
  }
`;

export {
  BgImage,
  Button,
  Copy,
  Container,
  PopUp,
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
