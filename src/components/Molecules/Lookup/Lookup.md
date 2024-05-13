# Lookup
This is a simple basic vanilla component and is rendered here mainly for dev purposes.
You may would be best served using one of these more substantial components in projects / production:
- PostcodeLookup
- SchoolLookup
- SimpleSchoolLookup

The `lookupHandler` should be an async function which is called when a lookup is triggered (either by hitting enter or clicking the button).

It will receive the current search term and should:
- take care of any validation on the search term
- perform the actual lookup request
- return an array of options (or an empty array if none were found)
- only throw errors with user-friendly messages

Any errors thrown will be caught and the message will be displayed to the user.

The `onSelect` function will receive the chosen option.

```js
import Lookup from './Lookup';

const schoolFetcher = async query => {
  if (!query || !query.trim()) {
    throw new Error('Please enter a search query');
  }

  if (query.length < 2) {
    throw new Error('Please enter at least two characters');
  }

  try {
    const res = await axios.get(
      'https://lookups.sls.comicrelief.com/schools/lookup',
      { timeout: 10000, params: { query } }
    );
    return res.data.data.schools;
  } catch (error) {
    // if (typeof Sentry !== 'undefined') {
    //   Sentry.captureException(error);
    // }
    throw new Error('Sorry, something unexpected went wrong. Please try again or enter your school manually');
  }
};

const schoolToString = school => `${school.name}, ${school.post_code}`;

<Lookup
    name="Lookup"
    label="Custom label"
    placeholder="...placeholder"
    buttonText="Lookup Button"
    dropdownInstruction="Please select an organisation from the list below"
    noResultsMessage='Sorry, we could not find anything matching your search; please use the manual entry option.'
    lookupHandler={schoolFetcher}
    mapOptionToString={schoolToString}
    onSelect={address => alert(JSON.stringify(address, null, 2))}
/>
```

