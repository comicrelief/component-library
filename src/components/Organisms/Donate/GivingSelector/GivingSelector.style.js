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
  margin: ${spacing('md')} 0;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color('grey')};
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
  border-radius: 2rem;
  color: ${({ active, theme }) => (active === true ? theme.color('white') : theme.color('black'))};

  &:active:focus {
    box-shadow: none;
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color('red')};
  }
`;

export {
  Switch, Wrapper, MoneyBox, Label
};
