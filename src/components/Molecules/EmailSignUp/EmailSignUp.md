# Email Sign Up

```js
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

initialState = { isSuccess: false, errorMsg: '' };

const sendEmail = email => {
  setTimeout(() => setState({ isSuccess: !state.isSuccess }), 2000);
  console.log(email);
};

const validate = ({ email }) => {
  let isValid = false;
  if (email.includes('@')) {
    isValid = true;
    setState({ errorMsg: '' });
  } else {
    setState({ errorMsg: 'invalid email!' });
  }
  return isValid;
};

<EmailSignUp
  title={title}
  topCopy={topCopy}
  successCopy={successCopy}
  isSuccess={state.isSuccess}
  privacyCopy={privacyCopy}
  errorMsg={state.errorMsg}
  subscribe={sendEmail}
  validate={validate}
/>;
```

# Email Sign Up Schools

```js
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know!';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our <a class="link link--white inline" href="/privacy-notice">Privacy Policy</a> describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);
const selectItems = [
  { value: '', displayValue: '-- Select age group --' },
  { value: 'Option one', displayValue: 'The first option' },
  {
    value: 'Option two',
    displayValue: 'The second option'
  },
  { value: 'Option three', displayValue: 'The third option' },
  { value: 'Option four', displayValue: 'The fourth option' }
];

initialState = { isSuccessSchools: false, errorMsg: '' };

sendEmail = emailAndAge => {
  setTimeout(
    () => setState({ isSuccessSchools: !state.isSuccessSchools }),
    2000
  );
  console.log(emailAndAge);
};

const validate = ({ email, age }) => {
  let isValid = false;
  if (email.includes('@')) {
    isValid = true;
    setState({ errorMsg: '' });
  } else {
    setState({ errorMsg: 'invalid email!' });
  }
  if (isValid === true && typeof age !== 'undefined') {
    if (age) {
      setState({ errorMsg: '' });
    } else {
      isValid = false;
      setState({ errorMsg: 'invalid age!' });
    }
  }
  return isValid;
};

<EmailSignUp
  title={title}
  topCopy={topCopy}
  successCopy={successCopy}
  schoolsCopy="Now please select your teaching group so you get the right updates."
  isSuccess={state.isSuccessSchools}
  selectItems={selectItems}
  isSchools
  privacyCopy={privacyCopy}
  errorMsg={state.errorMsg}
  subscribe={sendEmail}
  validate={validate}
/>;
```
