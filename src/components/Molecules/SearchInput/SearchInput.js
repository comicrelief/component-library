import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';

import Input from '../../Atoms/Input/Input';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const InnerWrapper = styled.div`
  width: calc(70%);
  padding: 0 ${spacing('sm')};
  margin: ${spacing('none')} auto;
`;

const Form = styled.form`
  margin: ${spacing('xl')} auto;
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.color('red')};
  overflow: hidden;
`;

const InnerForm = styled.div`
  width: 80%;
  margin: ${spacing('md')} ${spacing('md')} 0;
  @media ${({ theme }) => theme.breakpoint('medium')} {
    margin-bottom: calc(${spacing('md')} - ${spacing('xsm')});
  }
`;

const InputField = styled(Input)`
  max-width: 100%;
  border: 0;
  outline: ${({ theme }) => theme.color('red')};
  :focus {
    border: 0;
  }

  @media ${({ theme }) => theme.breakpoint('medium')} {
    height: 100px;
    font-size: ${({ theme }) => theme.fontSize('super')};
  }
`;
const SearchInput = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Form>
          <InnerForm>
            <InputField />
          </InnerForm>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
};

// SearchInput.propTypes = {

// }

export default SearchInput;
