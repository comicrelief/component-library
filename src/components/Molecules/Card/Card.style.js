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
`;

export { Container, Wrapper, Copy };
