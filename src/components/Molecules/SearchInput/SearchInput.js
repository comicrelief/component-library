import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import spacing from '../../../theme/shared/spacing';
import searchIcon from './assets/search.svg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const InnerWrapper = styled.div`
  margin: ${spacing('md')} auto;
  padding: 0 calc((4 * ${spacing('xsm')}));
`;

const Form = styled.form`
  display: flex;
  margin: ${spacing('xl')} auto;
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.color('red')};
  overflow: hidden;
`;

const SearchWrapper = styled.div`
  width: 80%;
  margin: ${spacing('md')} ${spacing('md')} 0;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    margin-bottom: calc(${spacing('md')} - ${spacing('xsm')});
  }
  label {
    margin: ${spacing('md')} 0;
  }
`;

const Search = styled(Input)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize('l')};
  max-width: 100%;
  width: 100%;
  border: 0;
  outline: ${({ theme }) => theme.color('red')};
  :focus {
    border: 0;
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    height: 100px;
    font-size: calc(
      ${({ theme }) => theme.fontSize('super')} -
        ${({ theme }) => theme.fontSize('xxl')}
    );
  }
`;

const ActionWrapper = styled(SearchWrapper)`
  width: calc(100% - 80% - ${spacing('md')});
  margin: ${spacing('md')} ${spacing('md')} ${spacing('md')} 0;
`;
const Action = styled(Search)`
  text-indent: -9999px;
  background-color: ${({ theme }) => theme.color('grey_medium')};
  mask: url(${searchIcon}) no-repeat right center;
  mask-size: ${({ theme }) => theme.fontSize('xxl')};
  appearance: none;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color('deep_violet')};
  }
  @media ${({ theme }) => theme.breakpoint('medium')} {
    mask-size: calc(
      ${({ theme }) => theme.fontSize('super')} -
        ${({ theme }) => theme.fontSize('xxl')}
    );
  }
`;

const SearchInput = ({ submitSearch }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Form onSubmit={submitSearch}>
          <SearchWrapper>
            <Search
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
            <Action
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
