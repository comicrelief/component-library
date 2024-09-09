import styled, { css } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
    justify-content: center;
  }

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  z-index: 999;
`;

const Image = styled.div`
  height: auto;
  margin: 0 0 0 1.5rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    margin: 0 -1.5rem 0 1.5rem;
  }

  img {
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;

const MediaLink = styled.a`
  width: 100%;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    width: calc(50% + 6rem);
  }

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    width: 100%;
  }
`;

const Copy = styled.div`
  padding: 2rem;
  ${({ hasLink }) => hasLink && 'padding-bottom: 4rem'};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  margin: 0 1.5rem 0 0;
  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    height: 100%;
  }
  ${zIndex('low')};
  ${({ hasImage }) => hasImage
    && css`
      margin-top: calc(-2 * 1.5rem);
      min-height: calc(5 * 2rem);

      @media ${({ theme }) => theme.allBreakpoints('M')} {
        margin: 1.5rem 0 -1.5rem -1.5rem;
        width: calc(50% + 6rem);
      }

      @media ${({ theme }) => theme.allBreakpoints('XL')} {
        margin: calc(-2 * 1.5rem) 0 -1.5rem 0;
        width: 100%;
      }
    `};
`;

// 'CTA' functions as a wrapper for the link
const CTA = styled.div`
  display: flex;
  justify-content: end;
  > a {
    width: auto;
  }
  margin: -1.5rem 1.5rem 0 0;
  z-index: 999;
`;

export {
  Container, Wrapper, Image, MediaLink, Copy, CTA
};
