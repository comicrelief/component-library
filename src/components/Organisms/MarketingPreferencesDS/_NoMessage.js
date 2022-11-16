import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../../Atoms/Text/Text';

const NoMessageWrapper = styled.div`${({ theme }) => css`
  background-color: ${theme.color('red')};
  padding: 15px;
  margin-bottom: 15px;
`}`;

const NoMessage = ({ askingFor, optInType }) => {
  const message = `This will remove the supplied ${askingFor} from any *previous* ${optInType} opt-in from our database.`;

  return (
    <NoMessageWrapper>
      <Text tag="p" size="s" color="white">{message}</Text>
    </NoMessageWrapper>
  );
};

NoMessage.propTypes = {
  askingFor: PropTypes.string.isRequired,
  optInType: PropTypes.string.isRequired
};

export default NoMessage;
