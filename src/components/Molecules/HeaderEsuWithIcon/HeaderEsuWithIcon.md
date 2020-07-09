# Header Email Sign Up

```js
import RichText from '../../Atoms/RichText/RichText';

const title = 'Stay in the know';
const topCopy = (
  <RichText
    markup={`<p>Get regular email updates and info on what we're up to!</p>`}
  />
);
const privacyCopy = (
  <RichText
    markup={`<p>Our Privacy Policy describes how we handle and protect your information.<br><br>If you are under 18, please make sure you have your parents’ permission before providing us with any personal details.</p>`}
  />
);
const successCopy = (
  <RichText
    markup={`<p>Thanks! Your first email will be with you shortly</p>`}
  />
);

const [success, setSuccess] = React.useState(false);
const [error, setError] = React.useState('');

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

<HeaderEsuWithIcon
  title={title}
  topCopy={topCopy}
  successCopy={successCopy}
  isSuccess={success}
  privacyCopy={privacyCopy}
  errorMsg={error}
  subscribe={() => setSuccess(!success)}
  validate={validate}
/>;
```
