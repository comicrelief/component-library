import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ $bg, $themeColor, theme }) => $themeColor ? theme.color($themeColor) : $bg || 'transparent'};
  padding: ${({ $padding }) => $padding || '1rem'};
  margin: ${({ $margin }) => $margin || '0 0 1rem'};
  border-radius: ${({ $bg, $themeColor }) => ($bg || $themeColor) ? '5px' : '0'};
`;

export default Wrapper;
