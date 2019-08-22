import styled from 'styled-components';
import spacing from '../../../theme/shared/spacing';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copy = styled.p`
  width: auto;
  margin: 0 ${spacing('md')} 0 0;
`;

const ShareButtonList = styled.ul`
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ShareButtonItem = styled.li`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: ${spacing('sm')};
`;

export { Wrapper, Copy, ShareButtonList, ShareButtonItem };
