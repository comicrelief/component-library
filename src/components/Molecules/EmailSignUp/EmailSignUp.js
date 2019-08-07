import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import {
  ESUWrapper,
  TopCopy,
  Form,
  PrivacyCopyWraper,
  PrivacyLink,
  InputField,
  ButtonWrapper
} from './EmailSignUp.style';

const EmailSignUp = ({
  topCopy,
  isSuccess,
  successCopy,
  errorMsg,
  privacyURL,
  HandleSubscription,
  ...rest
}) => {
  /** Top copy and form displayed before user subscribed */
  const subsriptionForm = (
    <>
      <TopCopy>{topCopy}</TopCopy>
      <Form>
        <InputField
          name="email"
          showLabel={false}
          type="text"
          id="edit-email"
          errorMsg={errorMsg}
          label="Label"
          placeholder="example@youremail.com"
        />
        <ButtonWrapper>
          <Link
            type="button"
            as="button"
            href="/#"
            onClick={HandleSubscription}
          >
            Subscribe
          </Link>
        </ButtonWrapper>
      </Form>
    </>
  );

  /** Swap Top copy - form with success copy if subscription is successful  */
  const isSubscriptionSuccessful = isSuccess ? (
    <TopCopy>{successCopy}</TopCopy>
  ) : (
    subsriptionForm
  );
  return (
    <ESUWrapper {...rest}>
      {isSubscriptionSuccessful}
      <PrivacyCopyWraper>
        <Text tag="p">
          Our
          <PrivacyLink href={privacyURL}>Privacy Policy</PrivacyLink>
          describes how we handle and protect your information.
          <br />
          <br />
          If you are under 18, please make sure you have your parents permission
          before providing us with any personal details.
        </Text>
      </PrivacyCopyWraper>
    </ESUWrapper>
  );
};

EmailSignUp.propTypes = {
  /** Top copy */
  topCopy: PropTypes.node.isRequired,
  /** Copy is displayed when subscription is successful  */
  successCopy: PropTypes.node.isRequired,
  /** boolean if true display successCopy */
  isSuccess: PropTypes.bool.isRequired,
  /** boolean if true display successCopy */
  errorMsg: PropTypes.string.isRequired,
  /** Link  URL */
  privacyURL: PropTypes.string.isRequired,
  /** Function    */
  HandleSubscription: PropTypes.func.isRequired
};

export default EmailSignUp;
