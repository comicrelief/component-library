import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Typeahead from '../Typeahead/Typeahead';

const optionFetcher = async query => {
  const response = await axios.get(
    'https://lookups.sls.comicrelief.com/schools/lookup',
    {
      params: { query },
      timeout: 3000
    }
  );
  return response.data.data.schools;
};

const optionParser = school => `${school.name}, ${school.post_code}`;

const PostcodeLookup = React.forwardRef(
  (
    {
      label,
      placeholder,
      notFoundMessage,
      dropdownInstruction,
      onSelect,
      ...rest
    },
    ref
  ) => {
    const props = {
      optionFetcher,
      optionParser,
      onSelect,
      id: 'school-lookup',
      name: 'school-lookup',
      label,
      placeholder,
      notFoundMessage,
      dropdownInstruction,
      ...rest
    };

    return <Typeahead {...props} ref={ref} />;
  }
);

PostcodeLookup.propTypes = {
  /** This function is used to provide data to the parent component when a selection is made. */
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  dropdownInstruction: PropTypes.string,
  notFoundMessage: PropTypes.string
};

PostcodeLookup.defaultProps = {
  label: 'Enter the name or postcode of your school or nursery',
  placeholder: 'Type to start search',
  dropdownInstruction: 'Please select a school from the list below',
  notFoundMessage: "Sorry, we can't find this school"
};

export default PostcodeLookup;
