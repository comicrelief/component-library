import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import Text from '../../Atoms/Text/Text';
// import Link from '../../Atoms/Link/Link';
// import zIndex from '../../../theme/shared/zIndex';
import spacing from '../../../theme/shared/spacings';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing('l')};
`;
const TopMessage = styled.div`
  display: flex;
`;
const Form = styled.form`
  display: flex;
`;
const PrivacyMessage = styled.form`
  display: flex;
`;
const EmailSignUp = ({ topMessage, isSuccess, successMessage, ...rest }) => {
  return (
    <ESUWrapper {...rest}>
      <TopMessage>{!isSuccess ? topMessage : successMessage}</TopMessage>
      <Form>Form</Form>
      <PrivacyMessage>Privacy</PrivacyMessage>
    </ESUWrapper>
  );
};

EmailSignUp.propTypes = {
  topMessage: PropTypes.node.isRequired,
  successMessage: PropTypes.node.isRequired,
  isSuccess: PropTypes.bool.isRequired
};

export default EmailSignUp;
