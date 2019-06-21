import React from 'react';
import PropTypes from 'prop-types';

import {
  InputWrapper,
  HelperText,
  ErrorText
} from '../../../helpers/Input/InputStyle';
import Input from '../InputField/InputField';

const TextField = ({ error, helperText, ...rest }) => {
  return (
    <InputWrapper>
      <Input {...rest} />
      {helperText && <HelperText tag="p">{helperText}</HelperText>}
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  elementType: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string
};

export default TextField;
