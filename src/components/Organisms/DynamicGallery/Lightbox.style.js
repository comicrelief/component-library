import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 0;
`;

export const Dialog = styled.dialog`
  display: block;
  position: relative;
  z-index: 1;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #ffffff;
`;

export const CardImage = styled.div`
  & img {
    max-width: 80vw;
    max-height: 80vh;
  }
`;

export const CardTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardAgeGroup = styled.div`
  font-size: 0.8rem;
`;

export const CardNavButton = styled.button`
  &:focus,
  &:focus-visible {
    outline: 2px solid #000000;
  }
`;
