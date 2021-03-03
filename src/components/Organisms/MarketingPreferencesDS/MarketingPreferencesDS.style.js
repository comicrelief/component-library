import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';
import checkBoxIcon from './assets/CR_Tick.svg';

import EmailIcon from './assets/CR_@.svg';
import PostIcon from './assets/CR_Mail.svg';
import PhoneIcon from './assets/CR_Phone.svg';
import SMSIcon from './assets/CR_SMS.svg';

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

  label {
    position: relative;
    margin-bottom: ${spacing('md')};
    width: 48%;
    padding: 10px;
    border: 1px solid ${theme.color('grey')};
    box-sizing: border-box;
    border-radius: 8px;
    color: ${theme.color('grey_dark')};

    @media ${theme.breakpoint('small')} {
      padding: 12px 16px;
    }
  }

  h3 {
    position: relative;
    padding-left: 35px;
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

  &.field-email h3:before {
    background: url(${EmailIcon}) top left/contain no-repeat;
  }

  &.field-sms h3:before {
    background: url(${SMSIcon}) top left/contain no-repeat;
  }

  &.field-phone h3:before {
    background: url(${PhoneIcon}) top left/contain no-repeat;
  }

  &.field-post h3:before {
    background: url(${PostIcon}) top left/contain no-repeat;
  }
  `}`;

const CheckContainer = styled.div`${({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSize('md')};
  font-family: ${theme.fontFamilies(theme.font.regular)};

  ${media('small')} {
    width: 380px;
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
    border: 2px solid ${theme.color('grey')};
    padding: 9px;
    @media ${theme.breakpoint('small')} {
      padding: 11px 15px;
    }
  }

  ${userSelection && `
    &[for$="${userSelection}"] {
      background: ${theme.color('grey_medium')};
      padding: 9px;
      border: 2px solid ${theme.color('grey')};

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
  ShowHideInputWrapper
};
