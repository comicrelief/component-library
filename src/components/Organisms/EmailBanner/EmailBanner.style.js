import styled, { css } from 'styled-components';

import fontHelper from '../../../theme/crTheme/fontHelper';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import defaultBoxShadow from '../../../theme/shared/boxShadows';
import { playPauseReveal } from '../../../theme/shared/animations';

import {
  Container,
  Wrapper,
  TitleWrapperOuter,
  TitleWrapperInner,
  FormWrapper,
  Error,
  FormFieldset
} from '../shared/Banner.styles';

const InnerContainer = styled.div`
  position: relative;
  background-color: ${({ theme, componentBackgroundColour }) => theme.color(componentBackgroundColour)};
  border-radius: 1rem;
  overflow: hidden;
  padding: none;
  width: 100%;
  box-sizing: border-box;
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
  }


  ${playPauseReveal}
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
