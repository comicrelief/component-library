# PostcodeLookup

```js
import PostcodeLookup from './PostcodeLookup';

// This is just an example of how a parent component might handle fetch errors within the component.
const [enterManually, setEnterManually] = React.useState(false);

const fetchErrorHandler = () => {
  setEnterManually(true);
}

enterManually
  ? 'Sorry, there appears to be a problem. Please enter your details manually.'
  : (
    <PostcodeLookup
        onSelect={address => alert(JSON.stringify(address, null, 2))}
        label="Custom label"
    />
  )
```
