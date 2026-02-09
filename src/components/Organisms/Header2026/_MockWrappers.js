import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px 16px 0;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding: 38px 32px 0;
  }
border: 1px solid red;
`;

const Wrapper2 = styled.div`
  padding: 0 16px;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding: 0 32px;
  }
  border: 1px solid green;
    margin: '0',
    padding: '0'
`;

export {
  Wrapper,
  Wrapper2
};
