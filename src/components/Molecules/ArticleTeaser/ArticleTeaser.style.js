import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import defaultBoxShadow from '../../../theme/shared/boxShadows';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import { bounceUpAnimation, imageZoom } from '../../../theme/shared/animations';
import { CtaTextUnderline, CtaIconWrapper } from '../shared/ctaText/ctaText.style';
import { ArrowIconWrapper } from '../shared/ctaArrow/CtaArrowCircle.style';

const Image = styled(Picture)`
  display: flex;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color('white')};
  flex-direction: ${({ isNewsTeaser }) => (!isNewsTeaser ? 'row' : 'column')};

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }

    @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex-direction: ${({ isNewsTeaser }) => isNewsTeaser && 'column'};
  }
`;

const CtaWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: auto;
  padding: 2rem 2.5rem 0 0;

  ${CtaIconWrapper} {
    transform: none;
    top: auto;
    bottom: -8px;
  }

  span {
    font-weight: bold;
    font-size: 1rem;
    transition: color 0.15s 0.1s;
    color: ${({ theme }) => theme.color('red')};

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      color: ${({ theme }) => theme.color('black')};
    }
  }
`;

const Link = styled(link)`
  padding: 0;
  display: flex;
  height: 100%;
  align-items: ${({ isNewsTeaser }) => (!isNewsTeaser) && 'center'};
  text-decoration: none;
  color: inherit;
  width: 100%;

  ${ArrowIconWrapper} {
    background-color: ${({ theme }) => theme.color('red')};

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      transition: background-color 0.15s 0.1s;
      background-color: ${({ theme }) => theme.color('black')};
    }
  }

  ${InnerWrapper}{
    ${defaultBoxShadow()}
  }

  &:hover {
    ${InnerWrapper} {
      ${defaultBoxShadow(true)}
    }
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    ${bounceUpAnimation(true, 10, 2, true)};

    ${Image} img {
      // Only set up imageZoom pre-zoom defaults when we actually need them:
      ${({ isNewsTeaser }) => css`
        ${imageZoom({ initialScale: (isNewsTeaser ? 1.02 : 0.9) })}
      `}
    }
      
    &:hover {
      ${Image} img {
        ${({ isNewsTeaser }) => css`
          ${imageZoom({ zoomed: true, finalScale: (isNewsTeaser ? 1.04 : 1) })}
        `}
      }

      ${ArrowIconWrapper} {
        background-color: ${({ theme }) => theme.color('red')};
      }
        
      // Fade in the 'Alt CTA'-style squiggley underline:
      ${CtaTextUnderline} {
        opacity: 1;
      }

      ${CtaWrapper} {
        span {
          color: ${({ theme }) => theme.color('red')};
        }
      }
    }
  }
`;

const OuterWrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ isNewsTeaser }) => (!isNewsTeaser) && css`
    padding: 1rem 0px 1rem 2rem;
  `};

  ${({ isNewsTeaser }) => isNewsTeaser && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      width: 45%;
    }

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      width: 100%;
    }
  `};
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ isNewsTeaser }) => isNewsTeaser && css`
    @media ${({ theme }) => theme.allBreakpoints('M')} {
      width: 55%;
    }
      
    @media ${({ theme }) => theme.allBreakpoints('L')} {
      width: 100%;
    }
  `};
`;

const Title = styled(Text)`
  margin: ${({ time }) => (time ? `0 0 ${spacing('md')}` : '0')};
`;

const Date = styled(Text)`
  display: block;
  margin-bottom: ${spacing('md')};
`;

const Time = styled(Text)`
  display: block;
  margin-top: auto;
`;

export {
  OuterWrapper, InnerWrapper, Link, ImageWrapper, CopyWrapper, Title, Date, Time, Image, CtaWrapper
};
