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

const SearchInput = ({ onChange, placeholder, value, ...rest }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Form onSubmit={e => e.preventDefault()}>
          <SearchWrapper>
            <SearchField
              value={value}
              onChange={onChange}
              name="search"
              showLabel={false}
              type="text"
              label="Search"
              id="search"
              placeholder={placeholder}
              errorMsg=""
              {...rest}
            />
          </SearchWrapper>
          <ActionWrapper>
            <ActionButton
              as="button"
              showLabel={false}
              disabled="disabled"
              aria-disabled="true"
              type="submit"
              aria-label="Search button disabled"
              errorMsg=""
            />
          </ActionWrapper>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired
};

SearchInput.defaultProps = {
  placeholder: ''
};

export default SearchInput;
