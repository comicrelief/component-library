import styled, { css } from 'styled-components';
import spacing from '../../../theme/shared/spacing';
import defaultBoxShadow from '../../../theme/shared/boxShadows';
import imageZoom from '../../../theme/shared/imageZoom';
import Text from '../../Atoms/Text/Text';
import Picture from '../../Atoms/Picture/Picture';
import link from '../../Atoms/Link/Link';
import { bounceUpAnimation } from '../../../theme/shared/animations';

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.color('white')};
  border-radius: 1rem;
  overflow: hidden;
  ${bounceUpAnimation(true, 4, 2)};
  ${defaultBoxShadow()}

  img {
    // Given that this component is used for both 'Press Release' and 'News Article' teasers (the former
    // having 'category' is set to a non-null value), we need to tweak the styles a bit to best suit:
    ${({ category }) => ((category !== null) ? css`
      ${imageZoom({ initialScale: 1 })}`
    : css`
      ${imageZoom()}
    `)};
  }

  &:hover {
    ${defaultBoxShadow(true)}

    img {
      ${imageZoom({ zoomed: true })}
    }
  }
`;

const Link = styled(link)`
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: ${({ category }) => (category || category === '' ? 'row' : 'column')};
  align-items: ${({ category }) => (category || category === '') && 'center'};
  text-decoration: none;
  color: inherit;
  width: 100%;

  @media ${({ theme }) => theme.allBreakpoints('M')} {
    flex-direction: row;
  }

  @media ${({ theme }) => theme.allBreakpoints('L')} {
    flex-direction: ${({ category }) => !category && category !== '' && 'column'};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ category }) => (category || category === '') && css`
    padding: ${spacing('md')} 0 ${spacing('md')} ${spacing('md')};
    padding: 1rem 0px 1rem 2rem;
    
    img {
      border-radius: 0;
    }
  `};

  ${({ category }) => !category && category !== '' && css`
    img {
      // border-radius: 1rem 1rem 0 0;
    }

    @media ${({ theme }) => theme.allBreakpoints('M')} {
      width: 45%;
      
      img {
        // border-radius: 1rem 0 0 1rem;
      }
    }

    @media ${({ theme }) => theme.allBreakpoints('L')} {
      width: 100%;
      
      img {
        // border-radius: 1rem 1rem 0 0;
      }
    }
  `};
`;

const CopyWrapper = styled.div`
  padding: ${spacing('l')};
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ category }) => !category
    && category !== ''
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

const Image = styled(Picture)`
  display: flex;
  // To allow us to zoom the image
  overflow: hidden;
`;

export {
  Wrapper, Link, ImageWrapper, CopyWrapper, Title, Date, Time, Image
};
