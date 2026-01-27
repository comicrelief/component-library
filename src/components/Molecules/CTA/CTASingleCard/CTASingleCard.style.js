import styled from 'styled-components';

export const SingleCardSection = styled.div`
  padding-top: ${({ paddingAbove }) => paddingAbove};
  padding-bottom: ${({ paddingBelow }) => paddingBelow};
  width: 100%;
  background: transparent;
`;

export const SingleCardInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;

  img {
    // Zoom the image in slightly by default so the 'bounce' animation doesn't cause issues
    transform: scale(1.02);
    transition: transform ${0.4}s cubic-bezier(0.68, ${-1.15}, 0.265, ${2.35});
   }
`;

export default SingleCardSection;
