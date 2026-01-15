import styled, { css } from 'styled-components';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import spacing from '../../../theme/shared/spacing';
import { formFieldInputAnimation } from '../../../theme/shared/animations';
import fontHelper from '../../../theme/crTheme/fontHelper';

export const EmailSignUpWrapper = styled.div`
  margin-bottom: ${spacing('m')};
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    margin-bottom: ${spacing('m')};
  }
  color: ${({ theme }) => theme.color('white')};
`;

export const LabelWrapper = styled.div`
  margin-bottom: ${spacing('md')};
`;

export const StyledLabel = styled.span`
  ${({ theme }) => css`
    ${fontHelper(theme, 'p')}
    font-weight: bold;
  `}
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${spacing('md')};
  overflow: visible;


  @media ${({ theme }) => theme.breakpoints2026('M')} {
    flex-direction: row;
    align-items: center;
    ${({ error }) => error && `
    align-items: flex-start;
  `}
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  overflow: visible;
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    width: auto;
    min-width: 360px;
  }
`;

export const StyledEmailInput = styled(Input)`
  overflow: visible;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    ${formFieldInputAnimation(4)}
  }

  input {
    ${({ theme }) => css`
      // Here we're not using the fontHelper because we want to override the font size. It's a special case where we don't
      // want the default size for the formFieldInput field type.
      font-size: 1rem;
      line-height: 1.25rem;
      font-family: ${theme.fontFamilies('Montserrat')};
      background-color: ${theme.color('grey_5')};
      border-color: transparent;
      padding-left: 18px;
      transition: background-color 0.2s ease, text-indent 0.18s ease;
      border: 1px solid ${theme.color('white')};
      color: ${theme.color('white')};
      &::placeholder {
        color: ${theme.color('grey_2')};
      }
      &:hover,
      &:focus {
        background-color: ${theme.color('grey_4_hover')};
      }
    `}
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    width: auto;
  }
`;

export const StyledEmailSignUpButton = styled(Button)`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  padding: ${spacing('md')};
  border-radius: 0.5rem;
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    margin: 0;
  }

  .emailSignUpButtonContent {
    display: inline-grid;
    grid-auto-flow: column;
    grid-template-columns: auto 18px;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  .emailSignUpButtonLabel {
    display: inline-block;
    /* Counterbalance the reserved arrow slot so the label is centered at rest */
    transform: translateX(13px);
    transition: transform 0.22s ease;
    will-change: transform;
  }

  .emailSignUpButtonArrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    opacity: 0;
    /* Start from the midpoint between the label and the arrow slot */
    transform: translateX(-13px);
    transition: opacity 0.22s ease, transform 0.22s ease;
    will-change: transform, opacity;

    svg {
      fill: currentColor !important;
    }
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color('grey_2')};
    color: ${({ theme }) => theme.color('black')};

    .emailSignUpButtonLabel {
      transform: translateX(0);
    }

    .emailSignUpButtonArrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
