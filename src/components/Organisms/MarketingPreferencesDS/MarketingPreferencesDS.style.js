import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import checkBoxIcon from './assets/CR_Tick.svg';
import TextInput from './_TextInput';
import EmailIcon from './assets/Email.svg';
import PhoneIcon from './assets/Phone.svg';
import PostIcon from './assets/Post.svg';
import SMSIcon from './assets/Text.svg';
import EmailIconRed from './assets/Email--red.svg';
import PhoneIconRed from './assets/Phone--red.svg';
import PostIconRed from './assets/Post--red.svg';
import SMSIconRed from './assets/Text--red.svg';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopCopyWrapper = styled.div`
  margin: ${spacing('l')} 0;
  display: flex;
  width: 100%;
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
    background-image: url("${EmailIcon}")
  }

  &.icon-mp_permissionPhone {
    background-image: url("${PhoneIcon}")
  }

  &.icon-mp_permissionPost {
    background-image: url("${PostIcon}")
  }

  &.icon-mp_permissionSMS {
    background-image: url("${SMSIcon}")
  }
`;

const FormField = styled.div`${({ theme, $isError }) => css`
  position: relative;
  margin-bottom: ${spacing('md')};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spacing('m')};
  background-color: ${theme.color('white')};
  border-radius: 0.5rem;
  border: 1px solid ${$isError ? theme.color('red') : theme.color('grey')};
  color: ${$isError ? theme.color('red') : theme.color('black')};

  ${$isError && css`
    ${AssociatedFieldsName} {
      &.icon-mp_permissionEmail {
        background-image: url("${EmailIconRed}");
      }

      &.icon-mp_permissionPhone {
        background-image: url("${PhoneIconRed}");
      }

      &.icon-mp_permissionPost {
        background-image: url("${PostIconRed}");
      }

      &.icon-mp_permissionSMS {
        background-image: url("${SMSIconRed}");
      }
    }
  `}

  /* All labels; input AND checkbox */
  label {
    position: relative;
    margin-bottom: 0;
    width: 100%;
    color: inherit;
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
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize('xs')};

  @media ${theme.allBreakpoints('M')} {
    font-size: ${theme.fontSize('s')};
  }
`}`;

const CheckInput = styled.input`${({ theme }) => css`
  font-size: ${theme.fontSize('sm')};
  display: block;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  margin: 0;
  cursor: pointer;

  + span {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    background-color: ${theme.color('white')};
    border: 1px solid ${theme.color('grey')};
    border-radius: 0.5rem;
    pointer-events: none;
  }

  &:not(:checked):hover + span,
  &:not(:checked):focus-visible + span {
    background-color: ${theme.color('grey_extra_light')};
  }

  &:checked + span {
    background: url("${checkBoxIcon}") no-repeat center ${theme.color('red')};
    background-size: contain;
    border-color: ${theme.color('red')};
  }

  &:checked:hover + span,
  &:checked:focus-visible + span {
    background-color: ${theme.color('red_dark')};
    border-color: ${theme.color('red_dark')};
  }
`}`;

const ShowHideInputWrapper = styled.div`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
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
  color: inherit;

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
  }
`;

const MPTextInput = styled(TextInput)`${({ theme, $isError }) => css`
  color: ${$isError ? theme.color('red') : theme.color('black')};

  input {
    background-color: ${theme.color('white')};
    color: ${$isError ? theme.color('red') : theme.color('black')};
    @media ${theme.allBreakpoints('M')} {
      max-width: none;
    }
  }
`}`;

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
