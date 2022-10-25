import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Select from '../../Atoms/Select/Select';
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
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [schoolsStep2, setSchoolsStep2] = useState(false);

  const handleSubmit = e => {
    // Just stopping weird things happening for now when the user submits with the enter key
    // rather than the Submit button
    e.preventDefault();
  };

  const handleSubscribe = useCallback(
    data => {
      validate(data);
      if (isSchools && !schoolsStep2) {
        setSchoolsStep2(true);
      } else {
        subscribe(data);
      }
    },
    [isSchools, schoolsStep2, subscribe, validate]
  );

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

  const subscriptionForm = (
    <Form onSubmit={e => handleSubmit(e)}>
      {(!isSchools || (isSchools && !schoolsStep2)) && (
        <>
          <InputField
            aria-label="First Name"
            name="first-name"
            id="first-name"
            hasAria={false}
            type="text"
            errorMsg={errorMsg}
            label="First Name"
            placeholder="Lenny"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
          <InputField
            aria-label="Last Name"
            name="last-name"
            id="last-name"
            hasAria={false}
            type="text"
            errorMsg={errorMsg}
            label="Last Name"
            placeholder="Henry"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
          <InputField
            aria-label="Email address"
            name="email"
            id="email"
            hasAria={false}
            type="email"
            errorMsg={errorMsg}
            label="Email Address"
            placeholder="lenny@comicrelief.com"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <ButtonWrapper>
            <Button
              as="input"
              type="submit"
              data-test={
                isSchools ? 'subscribe-button-school' : 'subscribe-button'
              }
              color={buttonColor}
              onClick={() => handleSubscribe({ email, firstName, lastName })}
              value=" Subscribe"
            />
          </ButtonWrapper>
        </>
      )}
      {schoolsStep2 && (
        <>
          {schoolsSelect}
          <ButtonWrapper>
            <Button
              as="input"
              type="submit"
              data-test={
                isSchools ? 'subscribe-button-school' : 'subscribe-button'
              }
              color={buttonColor}
              onClick={() => handleSubscribe({
                email,
                age,
                firstName,
                lastName
              })
              }
              value=" Subscribe"
            />
          </ButtonWrapper>
        </>
      )}
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
      {(!setSchoolsStep2 || isSuccess) && (
        <TopCopyWrapper>{isSuccess ? successCopy : topCopy}</TopCopyWrapper>
      )}
      {!isSuccess && subscriptionForm}
      {privacyContainer}
    </ESUWrapper>
  );
};

EmailSignUp.propTypes = {
  title: PropTypes.string.isRequired,
  topCopy: PropTypes.node.isRequired,
  successCopy: PropTypes.node.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isSchools: PropTypes.bool,
  errorMsg: PropTypes.string.isRequired,
  privacyCopy: PropTypes.node.isRequired,
  schoolsCopy: PropTypes.node,
  selectItems: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      displayValue: PropTypes.string.isRequired
    })
  ),
  subscribe: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
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
