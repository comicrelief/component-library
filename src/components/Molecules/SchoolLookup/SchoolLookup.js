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

const PLACEHOLDER = 'Type to start search';
const INPUT_LABEL = 'Enter the name or postcode of your school or nursery';
const DROPDOWN_TIP = 'Please select a school from the list below';
const DEFAULT_LOOKUP_ERROR_MESSAGE =
  'Sorry, there was an unexpected error. Please try again';

const lookup = async (query, config = {}) => {
  const response = await axios.get(
    'https://lookups.sls.comicrelief.com/schools/lookup',
    { params: { query }, ...config }
  );
  return response.data.data.schools;
};

/**
 * Todo:
 *  - Proper styling
 *  - Responsiveness
 *  - Accessibility
 *  - Do we need to process / sanitize / url encode the query in any way?
 *  - Do we need to send any errors to Sentry or any other service?
 *  - Tests
 *  - ??
 */
const SchoolLookup = ({ onSelect, notFoundMessage, lookupErrorMessage }) => {
  const initialState = {
    query: '',
    schoolOptions: [],
    errorMsg: '',
    timeoutId: 0,
    cancelTokenSource: null
  };
  const [state, setState] = useState(initialState);
  const updateState = updatedValues =>
    setState(prevState => ({ ...prevState, ...updatedValues }));

  const lookupHandler = async e => {
    const query = e.currentTarget.value;
    let { errorMsg, schoolOptions } = initialState;
    // clearing error and dropdown as soon as input changes (seemed to me to be the nicest UX.)
    updateState({ query, errorMsg, schoolOptions });

    clearTimeout(state.timeoutId);
    // cancel previous axios request if it was already initiated (before we attempted to clear the timeout above.)
    if (state.cancelTokenSource) {
      state.cancelTokenSource.cancel();
    }

    const timeoutId = setTimeout(async () => {
      let cancelled = false;
      const trimmed = query.trim();

      if (trimmed.length > 2) {
        try {
          const source = axios.CancelToken.source();
          updateState({ cancelTokenSource: source });
          schoolOptions = await lookup(trimmed, { cancelToken: source.token });
          if (schoolOptions.length === 0) {
            errorMsg = notFoundMessage;
          }
        } catch (err) {
          if (axios.isCancel(err)) {
            cancelled = true;
          } else if (lookupErrorMessage) {
            errorMsg = lookupErrorMessage;
          } else {
            // In case we want to handle any errors further up the tree.
            // (need to provide an empty string to the lookupErrorMessage prop to get here).
            throw err;
          }
        }

        if (cancelled === false) {
          updateState({ schoolOptions, errorMsg });
        }
      }
    }, 50);

    updateState({ timeoutId });
  };

  const getSelectHandler = school => () => {
    setState(initialState);
    onSelect(school);
  };

  return (
    <Container>
      <SchoolLookupInput
        value={state.query}
        onChange={lookupHandler}
        errorMsg={state.errorMsg}
      />
      {state.schoolOptions.length > 0 && (
        <Dropdown>
          <DropdownList>
            <DropdownItem>
              <Text>{DROPDOWN_TIP}</Text>
            </DropdownItem>
            {state.schoolOptions.map(school => (
              <DropdownItemSelectable
                key={school.id}
                onClick={getSelectHandler(school)}
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
      label: INPUT_LABEL,
      placeholder: PLACEHOLDER
    }}
  />
);

SchoolLookup.propTypes = {
  onSelect: PropTypes.func.isRequired,
  notFoundMessage: PropTypes.string.isRequired,
  lookupErrorMessage: PropTypes.string
};

SchoolLookup.defaultProps = {
  lookupErrorMessage: DEFAULT_LOOKUP_ERROR_MESSAGE
};

export default SchoolLookup;
