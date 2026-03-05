import styled, { css } from 'styled-components';

import fontHelper from '../../../theme/crTheme/fontHelper';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import defaultBoxShadow from '../../../theme/shared/boxShadows';
import { playPauseReveal } from '../../../theme/shared/animations';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: ${({ theme, pageBackgroundColour }) => theme.color(pageBackgroundColour)};
  width: 100%;
  padding: ${({ paddingAbove, paddingBelow }) => `${paddingAbove} ${spacing('md')} ${paddingBelow} ${spacing('md')}`};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${({ paddingAbove, paddingBelow }) => `${paddingAbove} ${spacing('l')} ${paddingBelow} ${spacing('l')}`};
  }
`;

const InnerContainer = styled.div`
  position: relative;
  background-color: ${({ theme, componentBackgroundColour }) => theme.color(componentBackgroundColour)};
  border-radius: 1rem;
  overflow: hidden;
  padding: none;
  width: 100%;
  box-sizing: border-box;
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: ${spacing('l')} clamp(${spacing('l')}, 3%, ${spacing('xxl')});
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    padding-left: ${spacing('xxl')};
    padding-right: ${spacing('xxl')};
  }
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;

  ${playPauseReveal}
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: block;
  width: 100%;

  ${({ hasTopImage, showTitleSection }) => hasTopImage && !showTitleSection && css`
    padding: 0;
  `}

  ${({ noTitlesAtAll }) => noTitlesAtAll === true && css`
    justify-content: center;
  `};

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    display: flex;
    max-width: 1216px;
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
    order: ${({ orientation }) => (orientation === 'left' ? 2 : 1)};
  }
`;

const TitleWrapperInner = styled.div`
  position: relative;
  text-align: left;
  ${({ $copyColor, theme }) => $copyColor && `color: ${theme.color($copyColor)};`}
`;

const FormWrapper = styled.div`
  position: relative;
  font-family: ${({ theme }) => theme.fontFamilies(theme.font.regular)};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex: 1 1 0;
    min-width: 0;
    width: auto;
    display: flex;
    justify-content: ${({ orientation }) => (
    orientation === 'left' ? 'flex-start' : 'flex-end'
  )};
    order: ${({ orientation }) => (orientation === 'left' ? 1 : 2)};
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
  ${defaultBoxShadow()}
  text-align: left;

  margin-left: auto;
  margin-right: auto;

  ${({ hasTopImage, showTitleSection }) => hasTopImage && !showTitleSection && css`
    margin-top: 0;
  `}

  input {
    max-width: 100%;
    margin: 0;
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    border-radius: ${spacing('md')};
    max-width: 461px;
    min-width: 400px;
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
`;

const PrimaryTitleText = styled(Text)`
  display: block;
  width: 100%;
  margin-bottom: ${({ $emailWidgetIsTextOnly }) => ($emailWidgetIsTextOnly ? spacing('md') : spacing('sm'))};
  text-align: left;
  ${({ theme, $emailWidgetIsTextOnly }) => fontHelper(theme, $emailWidgetIsTextOnly ? 'h1' : 'h4')}
  font-family: ${({ theme, $emailWidgetIsTextOnly }) => theme.fontFamilies(($emailWidgetIsTextOnly ? 'Anton' : 'Montserrat'))};
`;

const FormFieldset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

const InputField = styled.div`
  width: 100%;
  margin-bottom: ${spacing('md')};
`;

const BodyCopyWrapper = styled.div`
  padding-bottom: ${spacing('md')};
  color: ${({ theme }) => theme.color('black')};
  ${({ theme }) => fontHelper(theme, 'span')}
`;

const PrivacyCopyWrapper = styled.div`
  color: ${({ theme }) => theme.color('black')};
  font-size: ${({ theme }) => theme.fontSize('xs')};
  line-height: normal;
  padding-bottom: ${spacing('sm')};

  /* Forces the descendants to inherit the same font size and line height here,
  because contentful's WYSIWYG editor doesn't offer the particular text
  styles we want here */
  & p,
  & span,
  & * {
    font-size: inherit;
    line-height: inherit;
  }
`;

const SuccessCopyWrapper = styled.div`
  padding: 0 ${spacing('sm')} ${spacing('md')};
  color: ${({ theme }) => theme.color('black')};
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacing('md')};

  button {
    width: 100%;
    min-height: 48px;
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    button {
      padding: ${spacing('md')} ${spacing('l')};
    }
  }
`;

export {
  Container,
  InnerContainer,
  Error,
  FormFieldset,
  FormWrapper,
  TitleWrapperInner,
  TitleWrapperOuter,
  Wrapper,
  Form,
  OuterFieldset,
  PrimaryTitleText,
  NameWrapper,
  InputField,
  BodyCopyWrapper,
  PrivacyCopyWrapper,
  SuccessCopyWrapper,
  ButtonWrapper
};
