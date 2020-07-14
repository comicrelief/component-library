import styled from 'styled-components';
import { media, container } from '../../../theme/shared/size';
import spacing from '../../../theme/shared/spacing';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme, backgroundColor }) => theme.color(backgroundColor)};
  ${media('small')} {
    flex-direction: row;
  }
`;

const NudgeBottom = styled.div`
  ${media('small')} {
    border-top: 0 solid transparent;
    border-bottom: 160px solid white;
    border-left: 2160px solid transparent;
    border-right: 0 solid transparent;
    position: absolute;
    height: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${container.medium};
  height: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  ${media('small')} {
    position: absolute;
  }
`;

const Copy = styled.div`
  width: 100%;
  padding: ${spacing('m')};
  ${media('small')} {
    width: 50%;
  }
`;

const Media = styled.div`
  width: 100%;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
`;

export {
  Container, NudgeBottom, Wrapper, Copy, Media, Image
};
