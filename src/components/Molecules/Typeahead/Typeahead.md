# Typeahead

```jsx
import axios from 'axios';
import Typeahead from './Typeahead';

const suggestions = async suggestion => {
  const response = await axios.get(
    'https://api.datamuse.com/sug',
    { params: { s: suggestion } }
  );
  return response.data.map(({word}) => word);
};

<Typeahead
  optionFetcher={suggestions}
  onSelect={suggestion => alert(JSON.stringify(suggestion, null, 2))}
  id="typeahead-test"
  label="Typeahead test (word/phrase suggestions)"
  name="suggestion"
  placeholder="Start searching..."
  notFoundMessage="Sorry, we couldn't find anything"
/>;
```
