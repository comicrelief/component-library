import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import TextInput from './_TextInput';
import Text from '../../Atoms/Text/Text';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize('s')};
  color: ${({ theme, textColour }) => theme.color(textColour)};
  background-color: ${({ theme, backgroundColour }) => theme.color(backgroundColour)};
  padding: ${({ containerPadding }) => (containerPadding ? spacing('m') : 0)};
`;

const TopCopyWrapper = styled.div`
  display: flex;
  margin-bottom: ${spacing('md')};
`;

const ButtonWrapper = styled.div`
  margin-top: ${spacing('md')};
  button {
    background-color: ${({ theme, buttonColour }) => theme.color(buttonColour)};
  }
`;

const PrivacyCopyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing('md')};

  p {
    font-size: ${({ theme }) => theme.fontSize('s')};
    line-height: ${({ theme }) => theme.fontSize('xl')};
    a {
      font-size: ${({ theme }) => theme.fontSize('s')};
      color: ${({ theme, textColour }) => theme.color(textColour)};
    }
  }
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing('md')} 0;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    justify-content: start;
    flex-direction: ${({ columnLayout }) => (columnLayout ? 'column' : 'row')};
    gap: ${({ columnLayout }) => (columnLayout ? 0 : spacing('md'))};
)};

  }
`;

const InputField = styled(TextInput)`
  width: 100%;
  margin-bottom: ${spacing('md')};

  & > span:first-child {
    color: ${({ theme, textColour }) => theme.color(textColour)};
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    max-width: 290px;
  }
`;

const Title = styled(Text)`
  margin-bottom: ${spacing('m')};
`;

export {
  ESUWrapper,
  TopCopyWrapper,
  PrivacyCopyWrapper,
  ButtonWrapper,
  FormInner,
  InputField,
  NameWrapper,
  Title
};
