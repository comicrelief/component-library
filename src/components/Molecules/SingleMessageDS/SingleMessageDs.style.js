import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const boxShadow = 'box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15)';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  @media ${({ theme }) => theme.breakpoint('small')} {
    flex-direction: ${({ imageLeft }) => (imageLeft ? 'row' : 'row-reverse')};
  }
`;

const Subtitle = styled(Text)`
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const Image = styled.div`
  height: 100%;

  img {
    border-radius: 1rem;
    ${boxShadow};
  }
`;

const MediaLink = styled.a`
  height: 240px;

  ${({ imageLeft }) => (imageLeft
    ? `margin-right: ${spacing('m')}`
    : `margin-left: ${spacing('m')}`)};

  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 448px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;
  }
`;

const CTA = styled.div`
  position: absolute;
  bottom: -${spacing('m')};
  ${zIndex('medium')};

  a {
    font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  }

  @media ${({ theme }) => theme.breakpoint('small')} {
    ${({ hasImage }) => !hasImage && `bottom: -${spacing('m')};`}
  }
`;

const Copy = styled.div`
  position: relative;
  height: 100%;
  padding: ${spacing('m')};
  ${zIndex('low')};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  ${boxShadow};
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

  ${({ imageLeft }) => (imageLeft
    ? `margin: calc(-${spacing('m')} * 2) 0 -${spacing('m')} ${spacing('m')}; ${CTA} { right: ${spacing('m')};}`
    : `margin: calc(-${spacing('m')} * 2) ${spacing('m')} -${spacing('m')} 0; ${CTA} { left: ${spacing('m')};}`
  )};


  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;
    padding: ${spacing('l')};

    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

    ${({ imageLeft }) => (imageLeft
    ? `margin: ${spacing('l')} 0 -${spacing('m')} calc(-${spacing('m')} * 2)`
    : `margin: ${spacing('l')} calc(-${spacing('m')} * 2) -${spacing('m')} 0`)};
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    padding: calc(${spacing('m')} * 2);

    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('m')} * 3)`};

    margin: ${({ imageLeft }) => (imageLeft
    ? `${spacing('l')} 0 ${spacing('m')} -${spacing('l')}`
    : `${spacing('l')} -${spacing('l')} ${spacing('m')} 0`)};
  }
`;

export {
  Container, Copy, CTA, MediaLink, Image, Subtitle
};
