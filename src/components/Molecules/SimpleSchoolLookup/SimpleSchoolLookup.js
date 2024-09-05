import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Lookup from '../Lookup/Lookup';

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

/**
 * The component library's school lookup component uses a typeahead/search-as-you-type approach.
 *
 * Given the API we use is v flaky and can be slow, this isn't really ideal.
 *
 * This version just has a simple input + a button (or you can hit enter) to trigger the search.
 *
 * @param onSelect
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const SimpleSchoolLookup = ({
  onSelect, noResultsMessage = 'Sorry, we could not find anything matching your search; please use the manual entry option.',
  ...rest
}) => (
  <Lookup
    name="school_lookup"
    label="Enter the name or postcode of your organisation"
    placeholder="Enter name or postcode..."
    buttonText="Find school"
    dropdownInstruction="Please select an organisation from the list below"
    noResultsMessage={noResultsMessage}
    lookupHandler={schoolFetcher}
    mapOptionToString={schoolToString}
    onSelect={onSelect}
    {...rest}
  />
);

SimpleSchoolLookup.propTypes = {
  onSelect: PropTypes.func.isRequired,
  noResultsMessage: PropTypes.string
};

export default SimpleSchoolLookup;
