# SchoolLookup

```js
import SchoolLookup from './SchoolLookup';

const [isBroken, setIsBroken] = React.useState(false);

const fetchErrorHandler = (error, errorCount) => {
  if (errorCount > 1) {
      setIsBroken(true);
  }

  return 'Sorry, there was an unexpected error. Please try again';
}

isBroken 
  ? 'Sorry, there appears to be a problem. Please enter the school\'s details manually.' 
  : (
    <SchoolLookup onSelect={school => alert(JSON.stringify(school, null, 2))} fetchErrorHandler={fetchErrorHandler} />
  )
```
