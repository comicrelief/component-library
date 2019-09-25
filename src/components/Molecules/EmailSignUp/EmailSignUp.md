# Email Sign Up

```js
import RichText from '../../Atoms/RichText/RichText';
initialState = { isSuccess: false };

<EmailSignUp
  title="Stay in the know!"
  topCopy={
    <RichText
      markup={`<h1>Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> `}
    />
  }
  successCopy={
    <RichText
      markup={`<h1>Succes Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> `}
    />
  }
  isSuccess={state.isSuccess}
  errorMsg=""
  privacyCopy={
    <RichText
      markup={`<h1>Privacy Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> `}
    />
  }
  subscribe={() => setState({ isSuccess: !state.isSuccess })}
  title="Example title"
/>;
```
