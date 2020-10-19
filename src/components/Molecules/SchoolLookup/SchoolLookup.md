# SchoolLookup

```js
import SchoolLookup from './SchoolLookup';

// This error count stuff is just an example of how your parent
//  might handle repeated errors (in case the school lookup api stops working)
const [errorCount, setErrorCount] = React.useState(0);

const fetchErrorHandler = (error, errorCount) => {
  setErrorCount(prevCount => prevCount + 1);

  return 'Sorry, there was an unexpected error. Please try again';
}

errorCount > 1 
  ? 'Sorry, there appears to be a problem. Please enter the school\'s details manually.' 
  : (
    <SchoolLookup onSelect={school => alert(JSON.stringify(school, null, 2))} fetchErrorHandler={fetchErrorHandler} />
  )
```
