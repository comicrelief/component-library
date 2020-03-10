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
  border-radius: 0 0 0 2rem;
  flex-direction: row;
`;

const NudgeBottom = styled.div`
  border-top: 0 solid transparent;
  border-bottom: 160px solid white;
  border-left: 2160px solid transparent;
  border-right: 0 solid transparent;
  position: absolute;
  height: 0;
  left: 2rem;
  right: 0;
  bottom: 0;
`;

const NudgeTop = styled.div`
  border-top: 70px solid white;
  border-bottom: 0 solid transparent;
  border-left: 0 solid white;
  border-right: 999px solid transparent;
  position: absolute;
  height: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${container.large};
  height: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: absolute;
  ${media('small')} {
    ${({ copyFirst }) => (copyFirst ? 'justify-content: flex-end;' : null)}
  }
`;

const Copy = styled.div`
  width: 90%;
  padding: ${spacing('m')};
  ${media('small')} {
    width: 70%;
  }
  ${media('medium')} {
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

export { Container, NudgeBottom, NudgeTop, Wrapper, Copy, Media, Image };
