import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';

const NoMessage = ({ askingFor }) => {
  const message = `Please provide ${askingFor} so we can make sure you're not on our database already. Untick the box if you don't want to enter ${askingFor}.`;

  return (
    <Text tag="p" size="s">{message}</Text>
  );
};

NoMessage.propTypes = {
  askingFor: PropTypes.string.isRequired
};

export default NoMessage;
