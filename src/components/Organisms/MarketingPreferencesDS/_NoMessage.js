import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';

const NoMessage = ({ askingFor }) => {
  const message = `This will remove the supplied ${askingFor} from any *previous* phone opt-in from our database; otherwise, you can leave this unchecked.`;

  return (
    <Text tag="p" size="s" color="grey_dark">{message}</Text>
  );
};

NoMessage.propTypes = {
  askingFor: PropTypes.string.isRequired
};

export default NoMessage;
