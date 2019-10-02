import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import { media } from '../../../theme/shared/size';

const Wrapper = styled.div`
  max-width: 320px;
  padding: 0 ${spacing('md')};
  text-align: center;

  ${media('small')} {
    max-width: 420px;
    padding: 0 ${spacing('l')};
  }
`;

const Header = styled.div`
  margin-bottom: ${spacing('l')};
`;

const FormWrapper = styled.div`
  height: 400px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: ${spacing('l')};
  }

  h3 {
    margin: ${spacing('l')} 0;
  }

  input {
    border: 2px solid ${({ theme }) => theme.color('grey_medium')};
    max-width: 100%;
    margin: 0;
  }
`;

const MoneyBuys = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    flex: 0 0 30%;

    input {
      cursor: pointer;
      padding: ${spacing('md')};
    }

    :hover input {
      border-color: ${({ theme }) => theme.color('red')};
    }
  }
`;

const AmountField = styled(Input)`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  span {
    flex: 0 0 60%;
    font-weight: 400;

    ${media('small')} {
      flex: 0 0 40%;
    }
  }

  input {
    background: transparent;
    padding: ${spacing('sm')} ${spacing('md')};
    ${({ inputBorderColor, theme }) =>
      inputBorderColor &&
      `:focus { outline: none; border: 2px solid ${theme.color('red')};`}
  }
`;

const Copy = styled(Text)`
  margin-top: ${spacing('l')};
  line-height: 1.5;
`;

export { Copy, FormWrapper, Header, Wrapper, Form, MoneyBuys, AmountField };
