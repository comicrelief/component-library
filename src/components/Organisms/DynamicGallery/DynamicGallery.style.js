import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1500px;
`;

export const ImageGrid = styled.div`
  display: flex;
  gap: 1rem;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:focus-visible {
    outline: 2px solid #000000;
  }
  & div:first-child {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const CardImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 8px;
`;

export const CardTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize('s')};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color('black')};
`;

export const CardAgeGroup = styled.span`
  font-size: ${({ theme }) => theme.fontSize('xs')};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color('grey')};
  line-height: 1;
`;

export const Lightbox = styled.a``;
