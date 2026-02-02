import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: ${({ maxWidth }) => maxWidth};
  background: ${({ theme, pageBackgroundColour }) => theme.color(pageBackgroundColour)};
  padding: ${({ paddingTop, paddingBottom }) => `${paddingTop} 1rem ${paddingBottom}`};
  color: ${({ theme, textColour }) => theme.color(textColour)};

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    gap: 1rem;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    gap: 2rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  @media ${({ theme }) => theme.breakpoints2026('M')} {
    gap: 2rem;
  }
`;

export const EmptyMessage = styled.div`
  display: ${({ isEmpty }) => (isEmpty ? 'block' : 'none')};
`;

const GalleryNodeBase = css`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  text-align: left;

  &:focus-visible {
    outline: 2px solid ${({ focusOutlineColour }) => focusOutlineColour};
    outline-offset: 0.5rem;
    border-radius: 1rem;
  }
`;

export const GalleryNode = styled.div`
  ${GalleryNodeBase}
`;

export const InteractiveGalleryNode = styled.button`
  ${GalleryNodeBase}
  cursor: pointer;
  color: inherit;

  & div:first-child {
    transition: all 0.1s ease-out;
  }

    & > div:first-child {
      &:hover {
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
      }
    }
`;

export const ImageContainer = styled.div`
 display: flex;
  height: auto;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: hidden;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);

  img {
    height: 100%;
    opacity: 0;
    transition: opacity 0.1s ease-out 0.3s;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
`;
