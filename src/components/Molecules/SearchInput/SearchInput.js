import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  InnerWrapper,
  Form,
  SearchWrapper,
  SearchField,
  ActionWrapper,
  ActionButton
} from './SearchInput.style';

const SearchInput = ({ submitSearch }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Form onSubmit={submitSearch}>
          <SearchWrapper>
            <SearchField
              name="search"
              showLabel={false}
              type="text"
              label="Search"
              id="edit-text"
              placeholder=""
              errorMsg=""
            />
          </SearchWrapper>
          <ActionWrapper>
            <ActionButton
              type="submit"
              id="edit-submit-search"
              name="search action"
              placeholder=""
              label=""
              errorMsg=""
            />
          </ActionWrapper>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
};

SearchInput.propTypes = {
  submitSearch: PropTypes.func.isRequired
};

export default SearchInput;
