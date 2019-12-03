import styled from 'styled-components';
import Icon from '../../Atoms/SocialIcons/Icon/Icon';
import spacing from '../../../theme/shared/spacing';
import EmailSignUp from '../EmailSignUp/EmailSignUp';

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  display: inline-block;
`;

const EsuWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 100;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  div[aria-modal='true'] {
    padding: ${spacing('l')};
  }
`;

const CloseButton = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  margin-left: 0;

  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: ${spacing('xl')} 0 0;
    right: 25%;
  }
`;

const HeaderESU = styled(EmailSignUp)`
  width: 100%;
  input {
    font-size: ${({ theme }) => theme.fontSize('s')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    margin-top: ${spacing('xl')};
    width: 50%;
    input {
      font-size: ${({ theme }) => theme.fontSize('m')};
    }
  }
`;

export { IconWrapper, EsuWrapper, CloseButton, HeaderESU };
