import styled from 'styled-components';

import Text from '../../components/Atoms/Text/Text';

const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 10px 0;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
  background-color: white;
  outline: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize('m')};
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ color, theme, error }) =>
    color && !error ? theme.color(color) : 'red'};
  margin: 0;
`;

const Label = styled.label`
  font-family: inherit;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const HelperText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize('xs')};
  color: ${({ theme }) => theme.color('grey')};
  margin: 5px 0;
  letter-spacing: -1px;
`;

const ErrorText = styled(Text)`
  font-size: 12px;
  color: red;
`;
export { InputWrapper, StyledInput, Label, HelperText, ErrorText };
