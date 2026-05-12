import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import defaultBoxShadow from '../../../theme/shared/boxShadows';
import imageZoom from '../../../theme/shared/imageZoom';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import { bounceUpAnimation } from '../../../theme/shared/animations';
import { CtaTextUnderline } from '../HeroBanner/HeroBanner.style';
import { ArrowIconWrapper } from '../shared/ctaArrow/CtaArrowCircle.style';

const Image = styled(Picture)`
  display: flex;
  overflow: hidden;
`;

const CtaWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 2rem;
  padding-right: 2.5rem;

  span {
    font-weight: bold;
    font-size: 1rem;
    color: ${({ theme }) => theme.color('red')};
  }

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    span {
      transition: color 0.15s 0.1s;
      color: ${({ theme }) => theme.color('black')};
    }
  }
`;

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color('white')};
  border-radius: 1rem;
  overflow: hidden;
  ${bounceUpAnimation(true, 10, 2)};
  ${defaultBoxShadow()}

  ${Image} {
    // Given that this component is used for both 'Press Release' and 'News Article'
    // teasers, we need to tweak the styles a bit to best suit:
    ${({ isNewsTeaser }) => (isNewsTeaser ? css`
      ${imageZoom()}`
    : css`
      ${imageZoom({ initialScale: 0.9 })}
    `)};
  }

  ${ArrowIconWrapper} {
    background-color: ${({ theme }) => theme.color('red')};

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      transition: background-color 0.15s 0.1s;
      background-color: ${({ theme }) => theme.color('black')};
    }
  }

  &:hover {
    ${defaultBoxShadow(true)}

    ${Image} {
      ${({ isNewsTeaser }) => (isNewsTeaser ? css`
        ${imageZoom({ zoomed: true })}`
    : css`
        ${imageZoom({ zoomed: true, finalScale: 1 })}
      `)};
    }

    // Fade in the 'Alt CTA'-style squiggley underline:
    ${CtaTextUnderline} {
    // TODO: should this be always visible on XS-SM, given we're not doing hover styles there?
      opacity: 1;
    }

    ${ArrowIconWrapper} {
      @media ${({ theme }) => theme.allBreakpoints('M')} {
        background-color: ${({ theme }) => theme.color('red')};
      }
    }

    ${CtaWrapper} {
      span {
        color: ${({ theme }) => theme.color('red')};
      }
    }
  }
`;

const Link = styled(link)`
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: ${({ isNewsTeaser }) => (!isNewsTeaser ? 'row' : 'column')};
  align-items: ${({ isNewsTeaser }) => (!isNewsTeaser) && 'center'};
  text-decoration: none;
  color: inherit;
  width: 100%;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex-direction: ${({ isNewsTeaser }) => isNewsTeaser && 'column'};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ isNewsTeaser }) => (!isNewsTeaser) && css`
    padding: ${spacing('md')} 0 ${spacing('md')} ${spacing('md')};
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
  ${({ isNewsTeaser }) => isNewsTeaser
    && css`
      @media ${({ theme }) => theme.allBreakpoints('M')} {
        width: 55%;
      }
    `};
  @media ${({ theme }) => theme.allBreakpoints('L')} {
    width: 100%;
  }
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
  Wrapper, Link, ImageWrapper, CopyWrapper, Title, Date, Time, Image, CtaWrapper
};
