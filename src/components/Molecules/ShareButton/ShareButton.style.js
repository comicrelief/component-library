import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  width: auto;
  margin: 0 20px 0 0;
`;

const StyledList = styled.ul`
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledItem = styled.li`
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 4px;
`;

export { Wrapper, StyledParagraph, StyledList, StyledItem };
