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
  background: #eeeeee;
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #eeeeee;
`;

export const EmptyMessage = styled.div`
  display: ${({ isEmpty }) => (isEmpty ? 'block' : 'none')};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #dddddd;
`;

export const CardImageContainer = styled.div`
  width: 100%;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CardAgeGroup = styled.div`
  font-size: 0.8rem;
`;

export const Lightbox = styled.a``;
