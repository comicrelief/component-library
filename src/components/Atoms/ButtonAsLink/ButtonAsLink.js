import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const ButtonAsLink = styled.button.attrs({
  type: 'button'
})`
  background: none;
  border: 0;
  margin: 0 0 ${spacing('l')};
  padding: 0;
  font-family: inherit;
  text-decoration: underline;
  cursor: pointer;
  ${({ theme }) => `
    color: ${theme.color('blue_royal')};
    font-size: ${theme.fontSize('s')};
  `}
`;

export default ButtonAsLink;
