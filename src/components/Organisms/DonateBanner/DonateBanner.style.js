import styled, { css } from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: ${({ paddingAbove, paddingBelow }) => `${paddingAbove} 0 ${paddingBelow}`};
  background-color: ${({ theme, pageBackgroundColour }) => theme.color(pageBackgroundColour)};
  width: 100%;
  padding: 2rem;
`;

const InnerContainer = styled.div`
  position: relative;
  background-color: ${({ theme, componentBackgroundColour }) => theme.color(componentBackgroundColour)};
  border-radius: 1rem;
  overflow: hidden;
  padding: none;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: ${spacing('l')} clamp(${spacing('l')}, 3%, ${spacing('xxl')});
    min-height: 600px;
    max-height: 750px;
    ${({ $donateWidgetIsTextOnly }) => $donateWidgetIsTextOnly && css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
  }
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;

  &:hover button[data-play-pause],
  &:focus-within button[data-play-pause] {
    opacity: 0.8;
    transition-delay: 0s;
  }
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: block;
  width: 100%;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;

  ${({ hasTopImage, shouldShowTitleSection }) => hasTopImage && !shouldShowTitleSection && css`
    padding: 0;
  `}

  ${({ noTitlesAtAll }) => noTitlesAtAll === true && css`
    justify-content: center;
  `};


  @media ${({ theme }) => theme.allBreakpoints('L')} {
    display: flex;
    padding: ${spacing('l')} ${spacing('md')};
    gap: ${spacing('l')};
    flex-direction: row;
  }
`;

const TitleWrapperOuter = styled.div`
  width: 100%;
  display: flex;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  padding-bottom: ${spacing('l')};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex: 1 1 0;
    width: auto;
    padding: 0;
    align-items: center;
    order: ${({ donateOrientation }) => (donateOrientation === 'left' ? 2 : 1)};
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
    flex: 1 1 0;
    min-width: 0;
    width: auto;
    display: flex;
    justify-content: ${({ donateOrientation }) => (
    donateOrientation === 'left' ? 'flex-start' : 'flex-end'
  )};
    order: ${({ donateOrientation }) => (donateOrientation === 'left' ? 1 : 2)};
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

  margin-left: auto;
  margin-right: auto;

  ${({ hasTopImage, shouldShowTitleSection }) => hasTopImage && !shouldShowTitleSection && css`
    margin-top: 0;
  `}

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
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    border-radius: 1rem;
    max-width: 461px;
    min-width: 400px;
    /* Alignment is handled by the outer wrapper on desktop. */
    margin-left: 0;
    margin-right: 0;
  }
`;

const OuterFieldset = styled.fieldset`
  color: ${({ theme }) => theme.color('black')};
  padding: ${spacing('l')};
  margin: 0;
  border: none;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${spacing('l')};
  }

  input[type='submit'] {
    margin-bottom: 0;
  }
`;

const BannerTitleText = styled.div`
  margin: 0;
  padding: ${spacing('sm')} 0 ${spacing('md')};
  display: block;
  width: 100%;
`;

const PrimaryTitleText = styled(Text)`
  display: block;
  text-align: left;
  font-weight: ${({ $donateWidgetIsTextOnly }) => ($donateWidgetIsTextOnly ? 400 : 700)};
  margin: 0;
`;

const SecondaryTitleText = styled(Text)`
  display: block;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize('s')};
  line-height: 1.5;
  margin: ${spacing('sm')} 0 !important;
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: ${spacing('md')};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }
  label {
    flex: 0 0 31%;
    margin-bottom: ${spacing('md')};
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      margin-bottom: 0;
    }
    input {
      cursor: pointer;
      padding: ${spacing('sm')}  ${spacing('m')};
    }
  }
`;

const FormFieldset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Label = styled(Text)`
  margin-bottom: ${spacing('sm')};
`;

const AmountField = styled(Input)`
  position: relative;
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 0;
  font-weight: 400;
  display: block;

  ${({ $noMoneyBuys }) => $noMoneyBuys === true && css`
    margin-top: ${spacing('sm')};
  `}

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
    border: 1px solid ${({ theme }) => theme.color('grey')};
    background: ${({ theme }) => theme.color('grey_light')};
    border-radius: 0.5rem;
    padding: ${spacing('sm')} ${spacing('md')} ${spacing('sm')} ${spacing('l')};
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color('grey')};
    }
  }
`;

const MoneybuyCopy = styled.p`
  line-height: 1.5;
  margin-top: ${spacing('l')};
  color: ${({ theme }) => theme.color('black')};
  margin: ${spacing('md')} 0 ${spacing('sm')};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    margin: ${spacing('m')} 0 ${spacing('md')};
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: ${spacing('md')};
  color: ${({ theme }) => theme.color('white')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-weight: bold;
  min-height: 44px;
  cursor: pointer;
  background: ${({ theme, color }) => theme.color(color)};
  text-decoration: none;
  border-radius: 0.5rem;
  border: none;
  appearance: none;
  :active,
  :focus,
  :hover {
    outline: none;
    background-color: ${({ theme }) => theme.color('coral_dark')};
  }
`;

export {
  Button,
  MoneybuyCopy,
  Container,
  InnerContainer,
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
  BannerTitleText,
  PrimaryTitleText,
  SecondaryTitleText
};
