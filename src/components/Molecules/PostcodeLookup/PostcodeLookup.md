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
        label="Custom label"
        buttonText="Custom Button Text"
        // Example for could not find address - n22 4qa
        noResultsMessage='Sorry, we could not find etc'
        reportError='Custom report error'
        dropdownInstruction="Dropdown instruction here..."
    />
  )
```
