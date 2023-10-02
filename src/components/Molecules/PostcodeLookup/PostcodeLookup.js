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
  notFoundMessage: PropTypes.string
};

PostcodeLookup.defaultProps = {
  label: 'Find address by postcode',
  placeholder: 'Enter postcode...',
  notFoundMessage: "Sorry, we can't find this address"
};

export default PostcodeLookup;
