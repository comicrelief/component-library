import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import Link from '../../Atoms/Link/Link';
import spacing from '../../../theme/shared/spacings';

const ESUWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing('l')};
`;

const TopCopy = styled.div`
  display: flex;
  margin-bottom: ${spacing('md')};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing('md')};
`;

const PrivacyCopy = styled.div`
  display: flex;
`;

const InputField = styled(Input)`
  width: 100%;
  input {
    width: auto;
  }
`;

const Button = styled.div`
  margin-top: ${spacing('md')};
  button {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize('s')};
    @media ${({ theme }) => theme.breakpoint('small')} {
      width: auto;
    }
  }
`;

const EmailSignUp = ({
  topCopy,
  isSuccess,
  successCopy,
  errorMsg,
  ...rest
}) => {
  return (
    <ESUWrapper {...rest}>
      <TopCopy>{!isSuccess ? topCopy : successCopy}</TopCopy>
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
        <Button>
          <Link type="button" as="button" href="/#">
            Subscribe
          </Link>
        </Button>
      </Form>
      <PrivacyCopy>Privacy Copy here</PrivacyCopy>
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
  errorMsg: PropTypes.string.isRequired
};

export default EmailSignUp;
