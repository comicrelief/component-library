import styled, { css } from 'styled-components';
import alertIcon from './assets/error-alert-icon-red.svg';
import zIndex from '../../../theme/shared/zIndex';

// This seems to get a decent approximation of the necessary width (without resorting to measuring
//  the element with JS)

const getPrefixWidth = prefixLength => `calc(1.5rem + (${prefixLength} * 0.5rem))`;

const InputWrapper = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize('m')};
`;

const InputFieldContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    max-width: 290px;
  }
`;

const InputField = styled.input`${({ theme, error, prefixLength }) => css`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  padding: 1rem 2.4rem 1rem 1.5rem;
  ${prefixLength > 0 ? `padding-left: ${getPrefixWidth(prefixLength)};` : ''}
  background-color: ${theme.color('grey_light')};
  border: 1px solid;
  border-color: ${error ? theme.color('red') : theme.color('grey_medium')};
  box-shadow: none;
  appearance: none;
  color: ${theme.color('black')};
  border-radius: 0.5rem;
  font-size: inherit;
  z-index: 2;
  font-family: ${theme.fontFamilies(theme.font.regular)};

  :focus {
    border: 1px solid ${theme.color('grey_for_forms')};
  }

  @media ${theme.allBreakpoints('M')} {
    max-width: 290px;
  }
`}`;

const ErrorIconWrapper = styled.div`
  position: absolute;
  right: 0.6rem;
  background: url(${alertIcon}) center/contain no-repeat;
  --iconSize: 19px;
  width: var(--iconSize);
  height: var(--iconSize);
  z-index: 3;
`;

const Prefix = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  ${zIndex('high')}
  display: flex;
  height: 100%;
  width: ${({ length }) => getPrefixWidth(length)};
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color('grey_dark')};
  font-weight: 700;
  font-size: inherit;
  margin-left: 2px; // Just doesn't look quite right without this.
`;

export {
  InputWrapper,
  InputFieldContainer,
  InputField,
  ErrorIconWrapper,
  Prefix
};
