import styled from 'styled-components';
import Text from '../../Atoms/Text/Text';
import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';

const boxShadow = 'box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15)';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
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
  img {
    border-radius: 1rem;
    ${boxShadow};
  }
`;

const MediaLink = styled.a`
  width: 320px;
  height: 240px;
  @media ${({ theme }) => theme.breakpoint('small')} {
    height: 448px;
    width: 360px;
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 600px;
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
  width: 320px;
  padding: ${spacing('m')};
  ${zIndex('low')};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  ${boxShadow};
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  margin: calc(-${spacing('m')} * 2) 0 -${spacing('m')} ${spacing('m')};
  ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

  ${({ imageLeft }) => (imageLeft
    ? `${CTA} { right: ${spacing('m')};}`
    : `${CTA} { left: ${spacing('m')};} margin-left: -${spacing('m')}`
  )};


  @media ${({ theme }) => theme.breakpoint('small')} {
    width: 360px;
    min-height: 350px;
    padding: ${spacing('l')};

    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

    ${({ imageLeft }) => (imageLeft
    ? `margin: ${spacing('l')} 0 -${spacing('m')} calc(-${spacing('m')} * 2)`
    : `margin: ${spacing('l')} calc(-${spacing('m')} * 2) -${spacing('m')} 0`)};
  }

  @media ${({ theme }) => theme.breakpoint('large')} {
    width: 600px;
    height: 448px;
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
