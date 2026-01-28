import styled from 'styled-components';

export const SingleCardSection = styled.div`
  padding-top: ${({ paddingAbove }) => paddingAbove};
  padding-bottom: ${({ paddingBelow }) => paddingBelow};
  padding-inline: 1rem;
  @media ${({ theme }) => theme.breakpoints2026('M')} {
    padding-inline: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints2026('L')} {
    padding-inline: 4rem;
  }
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

export const SingleCardInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
`;

export default SingleCardSection;
