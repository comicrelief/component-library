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

const [success, setSuccess] = React.useState(false);
const [error, setError] = React.useState('');

const sendEmail = email => {
  setTimeout(() => setSuccess(!success), 2000);
  console.log(email);
};

const validate = ({ email }) => {
  let isValid = false;
  if (email.includes('@')) {
    isValid = true;
    setError('');
  } else {
    setError('invalid email!');
  }
  return isValid;
};

<EmailSignUp
  title={title}
  topCopy={topCopy}
  successCopy={successCopy}
  isSuccess={success}
  privacyCopy={privacyCopy}
  errorMsg={error}
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

const [successSchools, setSuccessSchools] = React.useState(false);
const [error, setError] = React.useState('');

sendEmail = emailAndAge => {
  setTimeout(
    () => setSuccessSchools(!successSchools),
    2000
  );
  console.log(emailAndAge);
};

const validate = ({ email, age }) => {
  let isValid = false;
  if (email.includes('@')) {
    isValid = true;
    setError('');
  } else {
    setError('invalid email!');
  }
  if (isValid === true && typeof age !== 'undefined') {
    if (age) {
      setError('');
    } else {
      isValid = false;
      setError('invalid age!');
    }
  }
  return isValid;
};

<EmailSignUp
  title={title}
  topCopy={topCopy}
  successCopy={successCopy}
  schoolsCopy="Now please select your teaching group so you get the right updates."
  isSuccess={successSchools}
  selectItems={selectItems}
  isSchools
  privacyCopy={privacyCopy}
  errorMsg={error}
  subscribe={sendEmail}
  validate={validate}
/>;
```
