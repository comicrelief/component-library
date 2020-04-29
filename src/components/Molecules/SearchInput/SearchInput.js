import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  InnerWrapper,
  SearchBox,
  SearchWrapper,
  SearchField
} from './SearchInput.style';

const SearchInput = ({ onChange, placeholder, value, ...rest }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <SearchBox role="search">
          <SearchWrapper>
            <SearchField
              role="searchbox"
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
        </SearchBox>
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
