import styled, { css } from 'styled-components';
import zIndex from '../../../theme/shared/zIndex';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      flex-direction: row;
    }
  `};

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: auto;
  margin: 0 0 0 1.5rem;

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      margin: 0 -1.5rem 0 1.5rem;
    }
  `};

  img {
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  }
`;

const MediaLink = styled.a`
  width: 100%;

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      width: calc(50% + 6rem);
    }
  `};

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

  ${({ hasImage, isCarousel, theme }) => hasImage && css`
    margin-top: -3rem;
    min-height: 10rem;

    ${!isCarousel && css`
      @media ${theme.allBreakpoints('M')} {
        margin: 1.5rem 0 -1.5rem -1.5rem;
        width: calc(50% + 6rem);
      }
    `};

    @media ${theme.allBreakpoints('XL')} {
      margin: -3rem 0 -1.5rem 0;
      width: 100%;
    }
  `};
`;

const CTA = styled.div`
  position: absolute;
  right: 3rem;
  bottom: -1.5rem;

  ${zIndex('medium')};

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      bottom: -3rem;
      ${({ hasImage }) => !hasImage && 'bottom: -1.5rem;'};
    }
  `};
`;

export {
  Container, Image, MediaLink, Copy, CTA
};
