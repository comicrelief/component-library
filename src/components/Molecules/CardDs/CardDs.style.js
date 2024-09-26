import styled, { css } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: grid;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ hasImage }) => hasImage
    && css`
      @media ${({ theme }) => theme.allBreakpoints('M')} {
        grid-template-columns: 1fr 1fr;
      }
  `};

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  padding: 0 0 0 1.5rem;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    margin: 0 -1.5rem 0 1.5rem;
    padding: 0 0 1.5rem 0;
  }

  img {
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;

const TextCtaWrapper = styled.div`
  height: 100%;
  border: 1px solid red;
  z-index: 4;

  ${({ hasImage }) => hasImage
    && css`
      padding: 0 1.5rem 0 0;
      @media ${({ theme }) => theme.allBreakpoints('M')} {
        padding: 1.5rem 0 0;
      }
      @media ${({ theme }) => theme.allBreakpoints('XL')} {
        padding: 0;
      }
    `};
`;

const Copy = styled.div`
  height: 100%;
  border: 1px solid blue;
  padding: 2rem;
  ${({ hasLink }) => hasLink && 'padding-bottom: 4rem'};

  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  ${zIndex('low')};

  ${({ hasImage }) => hasImage
    && css`
      margin: -1.5rem 0 0;
      padding-bottom: 4rem;
      min-height: 10rem;

      @media ${({ theme }) => theme.allBreakpoints('M')} {
        margin: 0;
        height: 100%;
      }

      @media ${({ theme }) => theme.allBreakpoints('XL')} {
        margin: -3rem 0 0;
        min-height: 100%;
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
`;

const MediaLink = styled.a`
  width: 100%;
`;

export {
  Container, TextCtaWrapper, ImageWrapper, MediaLink, Copy, CTA
};
