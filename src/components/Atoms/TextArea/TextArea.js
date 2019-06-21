import React from 'react';
import PropTypes from 'prop-types';

import InputHelper from '../../../helpers/Input/InputHelper';
import { InputWrapper, HelperText } from '../../../helpers/Input/InputStyle';

const TextArea = ({ helperText, ...rest }) => {
  return (
    <InputWrapper>
      <InputHelper
        elementType="textarea"
        tag="textarea"
        color="black"
        {...rest}
      />
      {helperText && <HelperText tag="p">{helperText}</HelperText>}
    </InputWrapper>
  );
};

TextArea.propTypes = {
  name: PropTypes.string,
  elementType: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string
};

export default TextArea;
