import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import checkBoxIcon from './assets/CR_Tick_black.svg';
import TextInput from './_TextInput';
import EmailIcon from './assets/Email.svg';
import PhoneIcon from './assets/Phone.svg';
import PostIcon from './assets/Post.svg';
import SMSIcon from './assets/Text.svg';
import EmailIconWhite from './assets/Email--white.svg';
import PhoneIconWhite from './assets/Phone--white.svg';
import PostIconWhite from './assets/Post--white.svg';
import SMSIconWhite from './assets/Text--white.svg';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* Preload 'selected' icons */
  &:after {
    position:absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
    content:
      url(${EmailIconWhite})
      url(${PhoneIconWhite})
      url(${PostIconWhite})
      url(${SMSIconWhite});
  }
`;

const TopCopyWrapper = styled.div`
  margin: ${spacing('l')} 0;
  display: flex;
  width: 100%;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    padding: 10px;
  }
`;

const BottomCopyWrapper = styled.div`
  margin: ${spacing('md')} 0;
  text-align: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const AssociatedFieldsName = styled.span`
  padding-left: 40px;
  line-height: 30px;
  background-repeat: no-repeat;
  background-position: left center;

  &.icon-mp_permissionEmail {
    background-image: url(${EmailIcon})
  }

  &.icon-mp_permissionPhone {
    background-image: url(${PhoneIcon})
  }

  &.icon-mp_permissionPost {
    background-image: url(${PostIcon})
  }

  &.icon-mp_permissionSMS {
    background-image: url(${SMSIcon})
  }
`;

const FormField = styled.div`${({ theme, isError }) => css`
  position: relative;
  margin-bottom: ${spacing('md')};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spacing('m')};
  background-color: ${theme.color('grey_light')};
  transition: background-color 0.3s, color 0.3s;
  border-radius: 10px;
  border: 1px solid ${theme.color('grey')};

  &.selected {
    background-color: ${isError ? theme.color('red') : theme.color('blue_donate')};
    &:hover {
      background-color: ${isError ? theme.color('red_dark') : theme.color('blue_donate')};
      border-color: ${theme.color('grey_4')};
    }

    span.icon-mp_permissionEmail {
      background-image: url(${EmailIconWhite});
    }

    span.icon-mp_permissionPhone {
      background-image: url(${PhoneIconWhite});
    }

    span.icon-mp_permissionPost {
      background-image: url(${PostIconWhite});
    }

    span.icon-mp_permissionSMS {
      background-image: url(${SMSIconWhite});
    }

    > div {
      label, > span {
        color: ${theme.color('white')};
      }
    }
  }

  /* All labels; input AND checkbox */
  label {
    position: relative;
    margin-bottom: 0;
    width: 100%;
    color: ${theme.color('black')};
    font-weight: 600;
    display: flex;
    justify-content: space-between;
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
`}`;

const CheckLabel = styled.label`${({ theme }) => css`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize('xs')};

  @media ${theme.allBreakpoints('M')} {
    font-size: ${theme.fontSize('s')};
  }
`}`;

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
  border: 1px solid ${({ theme }) => theme.color('grey')};
  + span {
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color('white')};
    border: 1px solid ${({ theme }) => theme.color('grey')};
    float: left;
    border-radius: 8px;
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center ${({ theme }) => theme.color('white')};
    background-size: contain;
  }
`;

const ShowHideInputWrapper = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 100%;

  label {
    width: 100%;
    border: none;
    padding: 0;
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
  margin-bottom: 0rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color('black')};

  + label {
    margin-top: ${spacing('md')};
    margin-bottom: 0;

    /* Visually hide the actual field label for the */
    /* non-multifield options, as we have the */
    /* more chatty 'extra info' language */
    &[for="mp_email"],
    &[for="mp_mobile"],
    &[for="mp_phone"] {
      > span:first-child {
        position: absolute;
        margin: -1px;
        padding: 0;
        width: 1px;
        height: 1px;
        border: 0;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        word-wrap: normal;
      }
  }
`;

const MPTextInput = styled(TextInput)`
  input {
    border: 1px solid  ${({ theme }) => theme.color('black')};
    background-color: ${({ theme }) => theme.color('white')};
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      max-width: none;
    }
  }
  /* error message text colour */
  span {
    color: white;
  }
`;

export {
  TopCopyWrapper,
  BottomCopyWrapper,
  CheckboxWrapper,
  FormField,
  CheckLabel,
  CheckInput,
  CheckContainer,
  ShowHideInputWrapper,
  ExtraInfo,
  OuterWrapper,
  MPTextInput,
  AssociatedFieldsName
};
