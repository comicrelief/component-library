import styled, { css } from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import Picture from '../../Atoms/Picture/Picture';
import zIndex from '../../../theme/shared/zIndex';
import handlePadding from '../../../utils/_utils';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  background-color: ${({ theme, mobileBackgroundColor }) => theme.color(mobileBackgroundColor)};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
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
  // TO-DO: this condition is WRONG and needs fixing (should be 'false'), but deploy this change will
  // require a lot of content updates down the line in order to bring the pages back to the desired layout
  flex-direction: ${({ formAlignRight }) => (formAlignRight === true ? 'row-reverse' : 'row')};

  ${({ noTitlesAtAll }) => noTitlesAtAll === true && css`
    justify-content: center;
  `};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${spacing('xl')} ${spacing('md')};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    display: flex;
    padding: ${spacing('xl')} 0;
    ${({ paddingOption }) => handlePadding(paddingOption)};
  }
`;

const TitleWrapperOuter = styled.div`
  width: 100%;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: 50%;
    padding: ${spacing('xl')};
    align-items: center;
  }
`;

const TitleWrapperInner = styled.div`
  position: relative;
  text-align: left;
`;

const FormWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
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
  border-radius: 0.5rem;
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

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 450px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const OuterFieldset = styled.fieldset`
  padding: 0 ${spacing('md')} ${spacing('md')};
  margin: 0;
  border: none;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
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
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }
  label {
    flex: 0 0 30%;
    margin-bottom: ${spacing('sm')};
    @media ${({ theme }) => theme.allBreakpoints('M')} {
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

  @media ${({ theme }) => theme.allBreakpoints('M')} {
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
    border-radius: 0.5rem;
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

  @media ${({ theme }) => theme.allBreakpoints('M')} {
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
  TitleWrapperInner,
  TitleWrapperOuter,
  Label,
  Wrapper,
  Form,
  MoneyBuys,
  AmountField,
  OuterFieldset,
  Legend
};
