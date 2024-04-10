import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS */
  @media ${({ theme }) => theme.allBreakpoints('mobile')} {
    ${({ smallBreakpointRowLayout }) => smallBreakpointRowLayout
      && css`
        flex-direction: row;
      `}
  }
  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS */
  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
    ${({ mediumBreakpointRowLayout }) => mediumBreakpointRowLayout
      && css`
        flex-direction: row;
      `}
  }
  height: 100%;
  border-radius: ${props => (props.squaredCorners ? '0' : '1rem')};
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
`;

const Wrapper = styled.div`
  height: auto;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing('l')};
  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS, adjust text spacing */
  @media ${({ theme }) => theme.allBreakpoints('mobile')} {
    ${({ smallBreakpointRowLayout }) => smallBreakpointRowLayout
      && css`
        padding: ${spacing('sm')};
        h1, h2, h3, h4, h5 {
         margin-bottom: 0.5rem;
        }
      `}
  }
  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS */
  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
    ${({ mediumBreakpointRowLayout }) => mediumBreakpointRowLayout
      && css`
        padding: ${spacing('sm')};
        h1, h2, h3, h4, h5 {
         margin: 0.5rem 0 0.5rem;
        }
      `}
  }
`;

export { Container, Wrapper, Copy };
