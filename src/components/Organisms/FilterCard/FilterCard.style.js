import styled, { css } from 'styled-components';
import Text from '../../Atoms/Text/Text';
import Button from '../../Atoms/Button/Button';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme, $pageBackgroundColour }) => theme.color($pageBackgroundColour)};
  justify-content: center;
  ${({ $paddingAbove, $paddingBelow }) => css`padding: ${$paddingAbove} 2rem ${$paddingBelow};`}
`;

const FilterSection = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Title = styled(Text)`
//
`;

const BodyCopy = styled.div`
//
`;

const ShowHideFiltersBtn = styled(Button)`
//
`;

export {
  Container,
  FilterSection,
  Title,
  BodyCopy,
  ShowHideFiltersBtn
};
