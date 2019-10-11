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
`;

const CloseButton = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 25%;
  width: 30px;
  height: 30px;
  margin: ${spacing('xl')} 10px 10px;
`;

const HeaderESU = styled(EmailSignUp)`
  margin-top: ${spacing('xl')};
  width: 50%;
`;

export { IconWrapper, EsuWrapper, CloseButton, HeaderESU };
