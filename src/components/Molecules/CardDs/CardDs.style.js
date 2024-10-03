import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
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
  margin: 0 0 0 ${spacing('m')};

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      margin: 0 -${spacing('m')} 0 ${spacing('m')};
    }
  `};

  img {
    border-radius: ${spacing('md')};
    box-shadow: 0 0 ${spacing('md')} rgba(0, 0, 0, 0.15);
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
  padding: ${spacing('l')};
  ${({ hasLink }) => hasLink && `padding-bottom: ${spacing('xl')}`};
  display: flex;
  flex-direction: column;
  border-radius: ${spacing('md')};
  box-shadow: 0 0 ${spacing('md')} rgba(0, 0, 0, 0.15);
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  margin: 0 ${spacing('m')} 0 0;

  @media ${({ theme }) => theme.allBreakpoints('XL')} {
    height: 100%;
  }

  ${zIndex('low')};

  ${({ hasImage, isCarousel, theme }) => hasImage && css`
    margin-top: calc(-2 * ${spacing('m')});
    min-height: calc(5 * ${spacing('l')});

    ${!isCarousel && css`
      @media ${theme.allBreakpoints('M')} {
        margin: ${spacing('m')} 0 -${spacing('m')} -${spacing('m')};
        width: calc(50% + 6rem);
      }
    `};

    @media ${theme.allBreakpoints('XL')} {
      margin: calc(-2 * ${spacing('m')}) 0 -${spacing('m')} 0;
      width: 100%;
    }
  `};
`;

const CTA = styled.div`
  position: absolute;
  right: ${spacing('m')};
  bottom: -${spacing('m')};

  ${zIndex('medium')};

  ${({ isCarousel, theme }) => !isCarousel && css`
    @media ${theme.allBreakpoints('M')} {
      bottom: calc(-1 * (${spacing('l')} + ${spacing('md')}));
      ${({ hasImage }) => !hasImage && `bottom: -${spacing('m')};`};
    }
  `};
`;

export {
  Container, Image, MediaLink, Copy, CTA
};
