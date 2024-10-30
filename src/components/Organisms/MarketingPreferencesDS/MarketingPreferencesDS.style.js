import styled, { css } from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import checkBoxIcon from './assets/CR_Tick_black.svg';
import TextInput from './_TextInput';

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    // flex-direction: row;
    // flex-wrap: wrap;
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
`;

const CheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FormField = styled.div`${({ theme }) => css`
  position: relative;
  margin-bottom: ${spacing('md')};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${spacing('m')};
  border: 1px solid ${theme.color('grey')};;
  border-radius: 10px;
  background-color: ${theme.color('grey_light')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.color('grey_medium')};
  }

  &.selected {
    background-color: ${theme.color('blue_donate')};

    label, span {
      color: white;
    }
    
    &:hover {
      background-color: #161a85;
    }
  }


  @media ${theme.allBreakpoints('M')} {
    // width: 50%;
  }

  // All labels; input AND checkbox
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
  border: 1px solid ${({ theme }) => theme.color('grey_for_forms')};
  + span {
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.color('white')};
    border: 1px solid ${({ theme }) => theme.color('black')};
    float: left;
    border-radius: 8px;
  }
  :checked + span {
    background: url(${checkBoxIcon}) no-repeat center ${({ theme }) => theme.color('white')};;
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

    // Visually hide the actual field label for the
    // non-multifield options, as we have the
    // more chatty 'extra info' language
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
  > span {
    // background-color: purple;
    margin-bottom: 0.5rem;
  }

  input {
    border: 1px solid  ${({ theme }) => theme.color('black')};
    background-color: ${({ theme }) => theme.color('white')};
    margin-bottom: 10px;
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      max-width: none;
    }
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
  MPTextInput
};
