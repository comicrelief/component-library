import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';

const CheckAnswer = ({ register, name }) => (
  <Text>
    <label htmlFor={`${name}-yes`}>
      <input
        type="radio"
        name={name}
        id={`${name}-yes`}
        value="yes"
        ref={register}
      />
      Yes, please
    </label>
    <label htmlFor={`${name}-no`}>
      <input
        type="radio"
        id={`${name}-no`}
        name="email"
        value="no"
        ref={register}
      />
      No, thanks
    </label>
  </Text>
);

CheckAnswer.propTypes = {
  register: PropTypes.objectOf.isRequired,
  name: PropTypes.string.isRequired
};

export default CheckAnswer;
