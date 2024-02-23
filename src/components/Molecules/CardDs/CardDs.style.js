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
  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    flex-direction: column;
  }
`;

const Image = styled.div`
  height: auto;
  margin: 0 0 0 ${spacing('m')};
  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: 0 -${spacing('m')} 0 ${spacing('m')};
  }

  img {
    border-radius: ${spacing('md')};
    box-shadow: 0 0 ${spacing('md')} rgba(0, 0, 0, 0.15);
  }
`;

const MediaLink = styled.a`
  width: 100%;
  @media ${({ theme }) => theme.breakpoint('small')} {
    width: calc(50% + 6rem);
  }
  @media ${({ theme }) => theme.breakpoint('large')} {
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
  // width: 100%;
  margin: 0 ${spacing('md')} 0 0;
  @media ${({ theme }) => theme.breakpoint('large')} {
    height: 100%;
  }
  ${zIndex('low')};
  ${({ hasImage }) => hasImage
    && css`
      margin-top: calc(-2 * ${spacing('m')});
      min-height: calc(5 * ${spacing('l')});
      @media ${({ theme }) => theme.breakpoint('small')} {
        margin: ${spacing('m')} 0 -${spacing('m')} -${spacing('m')};
        width: calc(50% + 6rem);
      }

      @media ${({ theme }) => theme.breakpoint('large')} {
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
  @media ${({ theme }) => theme.breakpoint('small')} {
    bottom: calc(-1 * (${spacing('l')} + ${spacing('md')}));
    ${({ hasImage }) => !hasImage && `bottom: -${spacing('m')};`};
  }
`;

export {
  Container, Image, MediaLink, Copy, CTA
};
