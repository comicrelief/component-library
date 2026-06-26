import styled from 'styled-components';

export const ExampleContainer = styled.div`
  background-color: ${({ $bg }) => $bg || '#ddd'};
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
