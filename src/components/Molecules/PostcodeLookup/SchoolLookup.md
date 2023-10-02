# SchoolLookup

```js
import SchoolLookup from './SchoolLookup';

// This is just an example of how a parent component might handle fetch errors within the component.
const [enterManually, setEnterManually] = React.useState(false);

const fetchErrorHandler = () => {
  setEnterManually(true);
}

enterManually
  ? 'Sorry, there appears to be a problem. Please enter the school\'s details manually.' 
  : (
    <SchoolLookup onSelect={school => alert(JSON.stringify(school, null, 2))} fetchErrorHandler={fetchErrorHandler} />
  )
```
