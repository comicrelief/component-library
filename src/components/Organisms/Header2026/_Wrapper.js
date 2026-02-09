import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px 16px 0;

  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding: 18px 32px 0;
  }
`;

export default Wrapper;
