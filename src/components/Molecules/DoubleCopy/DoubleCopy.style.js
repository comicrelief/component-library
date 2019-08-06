import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    display: flex;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
`;

export { Section, CopyWrapper };
