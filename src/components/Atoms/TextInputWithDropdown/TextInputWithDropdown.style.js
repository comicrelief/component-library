import styled from 'styled-components';

import { screen } from '../../../theme/shared/size';

const Container = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  z-index: 1;
  position: absolute;
  left: 0;
  max-height: 300px;
  overflow: auto;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color('grey_light')};
  width: 100%;

  @media (min-width: ${screen.small}) {
    max-width: 500px;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  line-height: 1.5rem;
  padding: 0.5rem;
`;

const DropdownItemSelectable = styled(DropdownItem)`
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.color('grey_light')};

  &:hover {
    background-color: ${({ theme }) => theme.color('grey_light')};
  }
`;

export {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable
};
