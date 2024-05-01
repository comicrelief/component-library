import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  position: relative;
  display: flex;

  /* Check for Cards/smallBreakpointRowLayout prop coming from the CMS, if so make horizontal layout */
  @media ${({ theme }) => theme.allBreakpoints('S')} {
    flex-direction: ${props => ((props.smallBreakpointRowLayout === true) ? 'row' : 'column')};
  }

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS, if so make horizontal layout */
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: ${props => ((props.mediumBreakpointRowLayout === true) ? 'row' : 'column')};
  }

  /* Set desktop and upwards to normal vertical layout */
  @media ${({ theme }) => theme.allBreakpoints('L')} {
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
  ${({ smallBreakpointRowLayout }) => (smallBreakpointRowLayout
    === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('S')} {
      padding: ${props => ((props.smallBreakpointRowLayout === true) && `${spacing('sm')}`)};
      h1, h2, h3, h4, h5 {
        margin: ${props => ((props.smallBreakpointRowLayout === true) && `0 0 ${spacing('sm')}`)};
        font-size: 24px;
      }
    }
  `}

  /* Check for Cards/mediumBreakpointRowLayout prop coming from the CMS, adjust text spacing */
  ${({ mediumBreakpointRowLayout }) => (mediumBreakpointRowLayout
    === true) && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      padding: ${props => ((props.mediumBreakpointRowLayout === true) && `${spacing('sm')}`)};
      h1, h2, h3, h4, h5 {
        margin: ${props => ((props.mediumBreakpointRowLayout === true) && `0 0 ${spacing('sm')}`)};
        font-size: 24px;
      }
    }
  `}

  /* Check for Cards/smallBreakpointRowLayout or mediumBreakpointRowLayout prop coming from the CMS and adjust styling back to normal */
  ${({ smallBreakpointRowLayout, mediumBreakpointRowLayout }) => ((smallBreakpointRowLayout === true) || (mediumBreakpointRowLayout === true)) && css`
      @media ${({ theme }) => theme.allBreakpoints('L')} {
        padding: ${spacing('l')};
        h1 {
          margin: 0 0 ${spacing('md')} 0;
          font-size: 2rem;
        }
        h2 {
          margin-bottom: ${spacing('l')};
          font-size: 2rem;
        }
        h3, h4, h5 {
          margin-bottom: ${spacing('md')};
          font-size: 2rem;
        }
      }
  `}
`;

export { Container, Wrapper, Copy };
