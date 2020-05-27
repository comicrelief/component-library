# Typeahead

```jsx
import axios from 'axios';
import Typeahead from './Typeahead';

const schoolsLookup = async query => {
  const response = await axios.get(
    'https://lookups.sls.comicrelief.com/schools/lookup',
    { params: { query } }
  );
  return response.data.data.schools.map(school => school.name);
};

<Typeahead
  optionFetcher={schoolsLookup}
  onSelect={school => alert(JSON.stringify(school, null, 2))}
  id="typeahead-test"
  label="Typeahead test"
  name="q"
  placeholder="Type to start searching..."
  notFoundMessage="Sorry, we couldn't find anything"
/>;
```
