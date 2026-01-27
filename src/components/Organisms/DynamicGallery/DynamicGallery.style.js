import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: ${({ maxWidth }) => maxWidth};
  background: ${({ theme, pageBackgroundColour }) => theme.color(pageBackgroundColour)};
  ${({ paddingTop, paddingBottom }) => css`padding: ${paddingTop} 2rem ${paddingBottom};`}
  color: ${({ theme, textColour }) => theme.color(textColour)};
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyMessage = styled.div`
  display: ${({ isEmpty }) => (isEmpty ? 'block' : 'none')};
`;

const GalleryNodeBase = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  border-radius: 0.5rem;
  text-align: left;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  & > div:first-child {
    display: flex;
    height: auto;
    background: ${({ theme }) => theme.color('grey_2')};
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);

    img {
      height: 100%;
    }
  }
`;

export const GalleryNode = styled.div`
  ${GalleryNodeBase}
`;

export const InteractiveGalleryNode = styled.button`
  ${GalleryNodeBase}
  cursor: pointer;

  & div:first-child {
    transition: all 0.1s ease-out;
  }

    &:focus-visible {
      outline: 2px solid #000000;
    }

    & > div:first-child {
      &:hover {
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
      }
    }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 8px;
`;

export const Title = styled.div`
  &:first-child {
    margin-bottom: 0;
  }
`;

export const Caption = styled.div`
  line-height: 1;
`;

export const Lightbox = styled.a``;
