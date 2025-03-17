import styled from 'styled-components';
import hideVisually from '../../../theme/shared/hideVisually';
import Text from '../Text/Text';

const LabelElement = styled.label`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme, errorMsg }) => (errorMsg ? theme.color('red') : theme.color('grey_label'))};
  border: 1px solid green;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    max-width: 290px;
    border: 1px solid red;
  }

  ${({ optional, theme }) => optional === true && `
  :after {
    position: absolute;
    top: 0;
    right: 0;
    content: 'Optional';
    font-family: ${theme.fontFamilies(theme.font.regular)};
    font-size: ${theme.fontSize('s')};
  }`}
`;

const VisibleText = styled(Text)`
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const HiddenText = styled(Text)`${hideVisually}`;

export {
  LabelElement,
  VisibleText,
  HiddenText
};
