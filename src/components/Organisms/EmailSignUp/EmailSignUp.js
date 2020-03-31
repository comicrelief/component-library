import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Select from '../../Atoms/SelectField/SelectField';
import Text from '../../Atoms/Text/Text';
import {
  ESUWrapper,
  TopCopyWrapper,
  Form,
  PrivacyCopyWrapper,
  InputField,
  ButtonWrapper,
  Title
} from './EmailSignUp.style';
import { Button } from '../Membership/Membership.style';

const EmailSignUp = ({
  title,
  topCopy,
  isSuccess,
  isSchools,
  schoolsCopy,
  selectItems,
  successCopy,
  errorMsg,
  privacyCopy,
  subscribe,
  validate,
  buttonColor,
  backgroundColor,
  ...rest
}) => {
  const [value, setValue] = useState('');
  const [age, setAge] = useState('');
  const [next, setNext] = useState(false);

  const handleSubmit = e => {
    // Just stopping weird things happening for now when the user submits with the enter key
    // rather than the Submit button
    e.preventDefault();
  };

  const schoolsSelect = (
    <>
      <Select
        hideLabel
        label="Please choose an option"
        placeholder="Please choose an option"
        description="Please choose an option"
        errorMsg={errorMsg}
        options={selectItems}
        value={age}
        onChange={event => setAge(event.target.value)}
      />
      <Text tag="p" weight="400" size="m">
        {schoolsCopy}
      </Text>
    </>
  );

  const subscriptionSchoolsForm = (
    <Form onSubmit={e => handleSubmit(e)}>
      {!next && (
        <>
          <InputField
            aria-label="Email address"
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
            <Button
              as="input"
              type="submit"
              data-test="subscribe-button-school"
              color={buttonColor}
              onClick={() => validate({ email: value }) && setNext(true)}
              value=" Subscribe"
            />
          </ButtonWrapper>
        </>
      )}
      {next && (
        <>
          {schoolsSelect}
          <ButtonWrapper backgroundColor={backgroundColor}>
            <Button
              as="input"
              type="submit"
              data-test="subscribe-button-school"
              color={buttonColor}
              onClick={() =>
                validate({ email: value, age }) &&
                subscribe({ email: `${value}`, age: `${age}` })
              }
              value=" Subscribe"
            />
          </ButtonWrapper>
        </>
      )}
    </Form>
  );

  const subscriptionForm = (
    <Form onSubmit={e => handleSubmit(e)}>
      <InputField
        aria-label="Email address"
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
        <Button
          as="input"
          data-test="subscribe-button"
          type="submit"
          color={buttonColor}
          onClick={() => validate({ email: value }) && subscribe(value)}
          value=" Subscribe"
        />
      </ButtonWrapper>
    </Form>
  );

  const privacyContainer = (
    <PrivacyCopyWrapper>{privacyCopy}</PrivacyCopyWrapper>
  );

  return (
    <ESUWrapper backgroundColor={backgroundColor} {...rest}>
      <Title tag="h2" size="xxl" weight="400" family="Anton" uppercase>
        {title}
      </Title>
      {(!next || isSuccess) && (
        <TopCopyWrapper>{isSuccess ? successCopy : topCopy}</TopCopyWrapper>
      )}
      {!isSuccess && (isSchools ? subscriptionSchoolsForm : subscriptionForm)}
      {privacyContainer}
    </ESUWrapper>
  );
};

EmailSignUp.propTypes = {
  /** title */
  title: PropTypes.string.isRequired,
  /** top copy */
  topCopy: PropTypes.node.isRequired,
  /** displayed copy when subscription is successful */
  successCopy: PropTypes.node.isRequired,
  /** boolean if true display successCopy */
  isSuccess: PropTypes.bool.isRequired,
  /** boolean if true display schools dropdown */
  isSchools: PropTypes.bool,
  /** email error message */
  errorMsg: PropTypes.string.isRequired,
  /** privacy copy */
  privacyCopy: PropTypes.node.isRequired,
  /** privacy copy */
  schoolsCopy: PropTypes.node,
  selectItems: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      displayValue: PropTypes.string.isRequired
    })
  ),
  /** subscription function */
  subscribe: PropTypes.func.isRequired,
  /** validation function */
  validate: PropTypes.func.isRequired,
  /** background color */
  backgroundColor: PropTypes.string,
  /** button color */
  buttonColor: PropTypes.string
};

EmailSignUp.defaultProps = {
  backgroundColor: 'deep_violet_dark',
  buttonColor: 'red',
  isSchools: false,
  schoolsCopy: '',
  selectItems: []
};

export default EmailSignUp;
