import styled from 'styled-components';

const SingleCardContainer = styled.div`
  padding-top: ${({ paddingAbove }) => paddingAbove};
  padding-bottom: ${({ paddingBelow }) => paddingBelow};
  display: flex;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  background: transparent;

  img {
    // Zoom the image in slightly by default so the 'bounce' animation doesn't cause issues
    transform: scale(1.02);
    transition: transform ${0.4}s cubic-bezier(0.68, ${-1.15}, 0.265, ${2.35});
   }
`;

export default SingleCardContainer;
