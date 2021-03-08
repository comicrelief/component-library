import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';

const NoMessage = ({ askingFor }) => {
  const message = `Please provide ${askingFor} so we can remove it from our database, otherwise untick this option.`;

  return (
    <Text tag="p" size="s" color="grey_dark">{message}</Text>
  );
};

NoMessage.propTypes = {
  askingFor: PropTypes.string.isRequired
};

export default NoMessage;
