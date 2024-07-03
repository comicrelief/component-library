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
  ${({ smallBreakpointRowLayout }) => (smallBreakpointRowLayout === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('S')} {
      padding: ${spacing('sm')};
      h1 {
        margin: 0 0 ${spacing('sm')};
        font-size: 1.5rem;
      }
    }
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding: ${spacing('l')};
      h1 {
        font-size: 2rem;
      }
    )};
  `}

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS, adjust text spacing */
  ${({ mediumBreakpointRowLayout }) => (mediumBreakpointRowLayout === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding: ${spacing('sm')};
      h1 {
        margin: 0 0 ${spacing('sm')};
        font-size: 1.5rem;
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

  /* Setting colors based on row (transparent background) vs column view */
  @media ${({ theme }) => theme.allBreakpoints('S')} {
    color: ${props => ((props.smallBreakpointRowLayout === true)
    ? `${props.rowTextColor}`
    : `${props.columnTextColor}`
  )};
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    color: ${props => ((props.mediumBreakpointRowLayout === true)
    ? `${props.rowTextColor}`
    : `${props.columnTextColor}`
  )};
  }
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    color: ${props => props.columnTextColor};
  }
`;

export { Container, Wrapper, Copy };
