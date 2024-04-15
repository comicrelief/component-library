import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  position: relative;
  display: flex;

  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS, if so make horizontal layout */
  @media ${({ theme }) => theme.allBreakpoints('mobile')} {
    flex-direction: ${props => ((props.smallBreakpointRowLayout === true) ? 'row' : 'column')};
  }

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS, if so make horizontal layout */
  @media ${({ theme }) => theme.allBreakpoints('tablet')} {
    flex-direction: ${props => ((props.mediumBreakpointRowLayout === true) ? 'row' : 'column')};
  }

  /* Set desktop and up to normal column view */
  @media ${({ theme }) => theme.allBreakpoints('desktop')} {
    flex-direction: column;
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
    ${({ smallBreakpointRowLayout }) => (smallBreakpointRowLayout
      === true) && css`
        padding: ${spacing('sm')};
        h1, h2, h3, h4, h5 {
          margin: ${spacing('sm')} 0 ${spacing('sm')};
        }
      `}
  }
`;

export { Container, Wrapper, Copy };
