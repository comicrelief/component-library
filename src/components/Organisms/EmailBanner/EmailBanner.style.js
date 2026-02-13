import styled, { css } from 'styled-components';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import Picture from '../../Atoms/Picture/Picture';

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
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    height: 724px;
    padding: ${spacing('l')};
    ${({ $emailWidgetIsTextOnly }) => $emailWidgetIsTextOnly && css`
      padding-top: 7.5rem;
      padding-bottom: 7.5rem;
    `}
  }
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    padding-left: ${spacing('xxl')};
    padding-right: ${spacing('xxl')};
  }
  max-width: 1500px;
`;

const BgImage = styled(Picture)`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
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
    order: ${({ orientation }) => (orientation === 'left' ? 2 : 1)};
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
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
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
    margin-top: ${spacing('md')};
    border-radius: 0.5rem;
    max-width: 461px;
    min-width: 400px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const OuterFieldset = styled.fieldset`
  color: ${({ theme }) => theme.color('black')};
  padding: ${spacing('m')};
  margin: 0;
  border: none;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: ${spacing('l')};
  }
`;

const PrimaryTitleText = styled(Text)`
  display: block;
  width: 100%;
  margin-bottom: ${spacing('sm')};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-weight: 700;
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
`;

const PrivacyCopyWrapper = styled.div`
  padding: ${spacing('md')} ${spacing('sm')} 0;
  color: ${({ theme }) => theme.color('black')};
  font-size: ${({ theme }) => theme.fontSize('s')};
  line-height: normal;
`;

const SuccessCopyWrapper = styled.div`
  padding: 0 ${spacing('sm')} ${spacing('md')};
  color: ${({ theme }) => theme.color('black')};
`;

const ButtonWrapper = styled.div`
  margin: ${spacing('sm')} 0;

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
  BgImage,
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
