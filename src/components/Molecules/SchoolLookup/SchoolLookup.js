import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Input from '../../Atoms/Input/Input';
import {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable
} from './SchoolLookup.style';
import Text from '../../Atoms/Text/Text';

const lookup = async query => {
  const response = await axios.get(
    'https://lookups.sls.comicrelief.com/schools/lookup',
    { params: { query } }
  );
  return response.data.data.schools;
};

/**
 * Todo: Lots, including
 *  - Debouncing
 *  - Proper styling
 *  - Accessibility
 *  - Do we need to process / sanitize / url encode the query in any way?
 *  - Do we need to send any errors to Sentry or any other service?
 */
const SchoolLookup = ({ onSelect, notFoundMessage, lookupErrorMessage }) => {
  const [query, setQuery] = useState('');
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const reset = clearInput => {
    setSchoolOptions([]);
    setErrorMsg('');
    if (clearInput) {
      setQuery('');
    }
  };

  const handleLookup = async e => {
    reset();
    setQuery(e.target.value);
    const trimmed = query.trim();
    if (trimmed.length > 2) {
      try {
        const schools = await lookup(trimmed);
        if (schools.length > 0) {
          setSchoolOptions(schools);
        } else {
          setErrorMsg(notFoundMessage);
        }
      } catch (err) {
        if (lookupErrorMessage) {
          setErrorMsg(lookupErrorMessage);
        } else {
          // If we want to handle any error further up the tree.
          throw err;
        }
      }
    }
  };

  return (
    <Container>
      <SchoolLookupInput
        value={query}
        onChange={handleLookup}
        errorMsg={errorMsg}
      />
      {schoolOptions.length > 0 && (
        <Dropdown>
          <DropdownList>
            <DropdownItem>
              <Text>Please select a school from the list below</Text>
            </DropdownItem>
            {schoolOptions.map(school => (
              <DropdownItemSelectable
                key={school.id}
                onClick={e => onSelect(school, reset, e)}
              >
                <Text>{`${school.name}, ${school.post_code}`}</Text>
              </DropdownItemSelectable>
            ))}
          </DropdownList>
        </Dropdown>
      )}
    </Container>
  );
};

const SchoolLookupInput = props => (
  <Input
    {...{
      ...props,
      id: 'school-lookup-input',
      type: 'text',
      name: 'query',
      label: 'Enter the name or postcode of your school or nursery'
    }}
  />
);

SchoolLookup.propTypes = {
  onSelect: PropTypes.func.isRequired,
  notFoundMessage: PropTypes.string.isRequired,
  lookupErrorMessage: PropTypes.string
};

SchoolLookup.defaultProps = {
  lookupErrorMessage: 'Sorry, there was an unexpected error. Please try again'
};

export default SchoolLookup;
