import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  border-radius: ${props => (props.squaredCorners ? '0' : '0.8rem')};
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS, if so make horizontal layout */
  @media ${({ theme }) => theme.allBreakpoints('S')} {
    flex-direction: ${props => ((props.smallBreakpointRowLayout === true) ? 'row' : 'column')};
    gap: ${spacing('md')};
    background: ${({ theme, backgroundColor, smallBreakpointRowLayout }) => ((smallBreakpointRowLayout === true) ? 'transparent' : theme.color(backgroundColor))};
  }

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS, if so make horizontal layout */
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: ${props => ((props.mediumBreakpointRowLayout === true) ? 'row' : 'column')};
    gap: ${spacing('md')};
    background: ${({ theme, backgroundColor, mediumBreakpointRowLayout }) => ((mediumBreakpointRowLayout === true) ? 'transparent' : theme.color(backgroundColor))};
  }

  /* Set desktop and upwards to normal vertical layout */
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex-direction: column;
    background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  }
`;

const Wrapper = styled.div`
  height: auto;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing('l')};

  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS, adjust text spacing */
  ${({ smallBreakpointRowLayout }) => (smallBreakpointRowLayout
    === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('S')} {
      padding: ${props => ((props.smallBreakpointRowLayout === true) ? `${spacing('sm')}` : `${spacing('l')}`)};
      h1 {
        margin: ${props => ((props.smallBreakpointRowLayout === true) && `0 0 ${spacing('sm')}`)};
        font-size: ${props => ((props.smallBreakpointRowLayout === true) ? '1.5rem' : '2rem')};
      }
    }
  `}

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS, adjust text spacing */
  ${({ mediumBreakpointRowLayout }) => (mediumBreakpointRowLayout
    === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding: ${props => ((props.mediumBreakpointRowLayout === true) ? `${spacing('sm')}` : `${spacing('l')}`)};
      h1 {
        margin: ${props => ((props.mediumBreakpointRowLayout === true) && `0 0 ${spacing('sm')}`)};
        font-size: ${props => ((props.mediumBreakpointRowLayout === true) ? '1.5rem' : '2rem')};
      }
    }
  `}

  /* Reset styles at large breakpoint */
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    padding: ${spacing('l')};
    h1 {
      font-size: 2rem;
    }
  }
`;

export { Container, Wrapper, Copy };
