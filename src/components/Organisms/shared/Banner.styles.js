import styled, { css } from 'styled-components';

import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';

/**
 * Shared banner styles, currently used by EmailBanner and DonateBanner.
 */

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

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  align-items: center;
  display: block;
  width: 100%;
  max-width: 1216px;
  margin-left: auto;
  margin-right: auto;

  ${({ hasTopImage, showTitleSection }) => hasTopImage && !showTitleSection && css`
    padding: 0;
  `}

  ${({ noTitlesAtAll }) => noTitlesAtAll === true && css`
    justify-content: center;
  `}

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    display: flex;
    padding: ${spacing('l')};
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

const FormFieldset = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export {
  Container,
  Wrapper,
  TitleWrapperOuter,
  TitleWrapperInner,
  FormWrapper,
  Error,
  FormFieldset
};
