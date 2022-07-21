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
  @media ${({ theme }) => theme.breakpoint('small')} {
    min-height: 448px;
    height: auto;
  }
  img {
    border-radius: 1rem;
    ${boxShadow};
  }
`;

const MediaLink = styled.a`
  ${({ imageLeft }) => (imageLeft
    ? `margin-right: ${spacing('m')}`
    : `margin-left: ${spacing('m')}`)};

  @media ${({ theme }) => theme.breakpoint('small')} {
    margin: 0;
    min-height: 448px;
    height: auto;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;
  }
`;

const PlayHolder = styled.div`
  position: relative;
`;

const PlayImage = styled.img`
  position: absolute;
  margin: auto;
  ${zIndex('medium')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  z-index: 2;
  top: -45px;
  right: 0px;
  display: inline-block;
  width: 35px;
  height: 35px;
  overflow: hidden;
  border: none;
  background: transparent;
  :before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
    transform: rotate(45deg);
  }
  :after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
    transform: rotate(-45deg);
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
  height: auto;
  padding: ${spacing('m')};
  ${zIndex('low')};
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  ${boxShadow};
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};

  ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

  ${({ imageLeft }) => (imageLeft
    ? `margin: -${spacing('m')} 0 ${spacing('m')} ${spacing('m')}; ${CTA} { right: ${spacing('m')};}`
    : `margin: -${spacing('m')} ${spacing('m')} ${spacing('m')} 0; ${CTA} { left: ${spacing('m')};}`
  )};


  @media ${({ theme }) => theme.breakpoint('small')} {
    min-height: 448px;
    height: auto;
    width: calc(50% + 1.5rem);
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(50% + 1.5rem);
    padding: ${spacing('l')};

    ${({ hasLink }) => hasLink && `padding-bottom: calc(${spacing('l')} + ${spacing('m')})`};

    ${({ imageLeft }) => (imageLeft
    ? `margin: ${spacing('l')} 0 ${spacing('m')} -${spacing('m')}`
    : `margin: ${spacing('l')} -${spacing('m')} ${spacing('m')} 0`)};
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
  Container, Copy, CTA, MediaLink, Image, Subtitle, PlayHolder, PlayImage, CloseButton
};
