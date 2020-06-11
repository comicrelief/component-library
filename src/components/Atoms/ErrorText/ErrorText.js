import styled from 'styled-components';
import Text from '../Text/Text';
import spacing from '../../../theme/shared/spacing';
import alertIcon from '../Input/assets/error-alert-icon.png';

const ErrorText = styled(Text)`
  display: inline-block;
  color: ${({ theme }) => theme.color('red')};
  font-weight: ${({ weight }) => weight};
  margin-top: ${spacing('sm')};
  :before {
    position: relative;
    content: '';
    top: 2px;
    margin-right: 6px;
    background: url(${alertIcon}) left 0/100% no-repeat;
    width: 18px;
    height: 19px;
    display: inline-block;
    vertical-align: top;
    color: ${({ theme }) => theme.color('red')};
  }
`;

export default ErrorText;
