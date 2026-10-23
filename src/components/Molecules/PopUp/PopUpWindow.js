import styled, { css } from 'styled-components';

const PopUpWindow = styled.div`
  background-color: ${({ theme, $backgroundColour }) => theme.color($backgroundColour)};
  color: ${({ theme, $textColour }) => theme.color($textColour)};
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  border-radius: 1rem;
  ${({ $isOpen }) => ($isOpen
    ? css`padding: 1rem;`
    : css`padding: 0;`)}

  ${({ $hoverColour, theme }) => $hoverColour && css`
    &:hover {
      color: ${theme.color($hoverColour)};
    }
  `}
`;

export default PopUpWindow;
