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

const SearchInput = ({ onChangeInput }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Form>
          <SearchWrapper>
            <SearchField
              onChange={onChangeInput}
              name="search"
              showLabel={false}
              type="text"
              label="Search"
              id="search"
              placeholder=""
              errorMsg=""
            />
          </SearchWrapper>
          <ActionWrapper>
            <ActionButton
              type="submit"
              id=""
              name="action"
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
  onChangeInput: PropTypes.func.isRequired
};

export default SearchInput;
