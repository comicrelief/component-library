import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import {
  ESUWrapper,
  TopCopyWrapper,
  Form,
  PrivacyCopyWrapper,
  InputField,
  ButtonWrapper
} from './EmailSignUp.style';

const EmailSignUp = ({
  title,
  topCopy,
  isSuccess,
  successCopy,
  errorMsg,
  privacyCopy,
  subscribe,
  buttonColor,
  backgroundColor,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const subscriptionForm = (
    <Form>
      <InputField
        name="email"
        id="email"
        hasAria={false}
        showLabel={false}
        type="email"
        errorMsg={errorMsg}
        label="email"
        placeholder="example@youremail.com"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <ButtonWrapper backgroundColor={backgroundColor}>
        <Link
          type="button"
          color={buttonColor}
          as="button"
          href="/#"
          onClick={() => subscribe(value)}
        >
          Subscribe
        </Link>
      </ButtonWrapper>
    </Form>
  );

  const privacyContainer = (
    <PrivacyCopyWrapper>{privacyCopy}</PrivacyCopyWrapper>
  );
  return (
    <ESUWrapper backgroundColor={backgroundColor} {...rest}>
      {title && <Text tag="h1">{title}</Text>}
      <TopCopyWrapper>{isSuccess ? successCopy : topCopy}</TopCopyWrapper>
      {!isSuccess && subscriptionForm}
      {!isSuccess && privacyContainer}
    </ESUWrapper>
  );
};

EmailSignUp.propTypes = {
  /** title */
  title: PropTypes.string,
  /** top copy */
  topCopy: PropTypes.node.isRequired,
  /** displayed copy when subscription is successful */
  successCopy: PropTypes.node.isRequired,
  /** boolean if true display successCopy */
  isSuccess: PropTypes.bool.isRequired,
  /** email error message */
  errorMsg: PropTypes.string.isRequired,
  /** privacy copy */
  privacyCopy: PropTypes.node.isRequired,
  /** subscription function */
  subscribe: PropTypes.func.isRequired,
  /** background color */
  backgroundColor: PropTypes.string,
  /** button color */
  buttonColor: PropTypes.string
};

EmailSignUp.defaultProps = {
  title: null,
  backgroundColor: 'deep_violet',
  buttonColor: 'red'
};

export default EmailSignUp;
