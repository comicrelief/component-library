import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';
import checkBoxIcon from './assets/CR_Tick.svg';

// import EmailIcon from './assets/CR_@.svg';
// import PostIcon from './assets/CR_Mail.svg';
// import PhoneIcon from './assets/CR_Phone.svg';
// import SMSIcon from './assets/CR_SMS.svg';

const TopCopyWrapper = styled.div`
  margin: ${spacing('l')} 0;
`;

const BottomCopyWrapper = styled.div`
  margin: ${spacing('md')} 0;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FormField = styled.div`${({ theme }) => css`
  position: relative;
  margin-bottom: ${spacing('md')};
  
  // Hide the labels for the non-multi fieldsets
  &.field-phone,
  &.field-sms,
  &.field-email {
    span + label > span {
      display: none;
    }
  }

  label {
    position: relative;
    margin-bottom: ${spacing('md')};
    width: 100%;
    padding: 10px;
    color: ${theme.color('grey_dark')};

    @media ${theme.breakpoint('small')} {
      padding: 12px 16px;
    }
  }

  h3 {
    position: relative;
    margin-bottom: ${spacing('md')};

    &:before {
      position: absolute;
      top:0;
      left: 0;
      width: 24px;
      height: 24px;
      content: '';
    }
  }
  `}`;

const CheckContainer = styled.div`${({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSize('md')};
  font-family: ${theme.fontFamilies(theme.font.regular)};

  ${media('medium')} {
    width: 50%;
  }
  `}`;

const CheckLabel = styled.label`${({ theme, userSelection }) => css`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize('xs')};
  padding: 10px;

  @media ${theme.breakpoint('small')} {
    font-size: ${theme.fontSize('s')};
    padding: 12px 16px;
  }
  
  &:hover,
  &:focus {
    // border: 2px solid ${theme.color('grey')};
    // padding: 9px;
    @media ${theme.breakpoint('small')} {
      padding: 11px 15px;
    }
  }

  ${userSelection && `
    &[for$="${userSelection}"] {
      // background: ${theme.color('grey_medium')};
      // padding: 9px;
      // border: 2px solid ${theme.color('grey')};

      @media ${theme.breakpoint('small')} {
        padding: 11px 15px;
      }
    }
  `}
`}
`;

const CheckInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top:0;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  + span {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color('grey_light')};
    border: 1px solid ${({ theme }) => theme.color('grey')};
    float: left;
    border-radius: 8px;

    @media ${({ theme }) => theme.breakpoint('small')} {
      margin-right: 15px;
    }
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center;
    background-color: ${({ theme }) => theme.color('red')};
    background-size: contain;
  }
`;

const ShowHideInputWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: ${spacing('lg')};
  width: 100%;

  ${media('small')} {
    max-width: 290px;
  }

  label {
    width: 100%;
    border: none;
    padding: 0;
    
    // NAH WRONG PLACE
    span {
      font-weight: normal;
    }
  }
`;

const ExtraInfo = styled.span`
  display: block;
  width: 100%;
  font-size: 1rem;
  text-transform: inherit;
  font-weight: normal;
  line-height: normal;
  font-family: 'Montserrat',Helvetica,Arial,sans-serif;
  margin-bottom: 0.5rem;

  + label {
    margin-top: 20px;
  }
`;

export {
  TopCopyWrapper,
  BottomCopyWrapper,
  Head,
  FormField,
  CheckLabel,
  CheckInput,
  CheckContainer,
  ShowHideInputWrapper,
  ExtraInfo
};
