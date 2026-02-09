import styled from 'styled-components';

import spacing from '../../../../theme/shared/spacing';
import zIndex from '../../../../theme/shared/zIndex';
import hideVisually from '../../../../theme/shared/hideVisually';

const Switch = styled.span`
  width: 50%;
  height: 48px;
  ${zIndex('low')};
  display: block;
  position: absolute;
  transition: left 0.15s ease-out;
  background-color: ${({ theme }) => theme.color('red')};
`;

const Wrapper = styled.div`
  display: flex;
  margin: ${spacing('md')} 0;
`;

const MoneyBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  margin: ${spacing('sm')} 0;
  overflow: hidden;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color('white')};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    margin: 0 auto;
  }
  .give-monthly:checked ~ ${Switch} {
    left: calc(50%);
  }
  input {
    ${hideVisually}
  }
  input:focus-visible + label {
    ${zIndex('high')};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color('blue_donate')}, inset 0 0 0 2px ${({ theme }) => theme.color('blue_donate')};
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  font-weight: bold;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-basis: 50%;
  border: none;
  transition: color 0.15s ease-out;
  ${zIndex('medium')};
  cursor: ${({ active }) => (active === true ? 'default' : 'pointer')};
  color: ${({ active, theme }) => (active === true ? theme.color('white') : theme.color('black'))};

  /* All this long winded border CSS below is to ensure that the border
  of the 'selected' giving type is red, rather than a grey line around
  the whole outside */
  &:first-of-type {
    border-left: 1px solid ${({ active, theme }) => (active ? theme.color('red') : theme.color('grey'))};
    border-top: 1px solid ${({ active, theme }) => (active ? theme.color('red') : theme.color('grey'))};
    border-bottom: 1px solid ${({ active, theme }) => (active ? theme.color('red') : theme.color('grey'))};
    border-radius: 0.5rem 0 0 0.5rem;
  }
  &:last-of-type {
    border-right: 1px solid ${({ active, theme }) => (active ? theme.color('red') : theme.color('grey'))};
    border-top: 1px solid ${({ active, theme }) => (active ? theme.color('red') : theme.color('grey'))};
    border-bottom: 1px solid ${({ active, theme }) => (active ? theme.color('red') : theme.color('grey'))};
    border-radius: 0 0.5rem 0.5rem 0;
  }

  &:active:focus {
    box-shadow: none;
  }
  &:focus {
    border: none;
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color('red')};
  }
`;

export {
  Switch, Wrapper, MoneyBox, Label
};
