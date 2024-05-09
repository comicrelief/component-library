import styled from 'styled-components';

import spacing from '../../../theme/shared/spacing';
import zIndex from '../../../theme/shared/zIndex';
import Text from '../Text/Text';

const Container = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  ${zIndex('high')}
  font-family: ${({ theme }) => theme.fontFamilies('Montserrat')};
  position: absolute;
  left: 0;
  max-height: 300px;
  overflow: auto;
  background-color: ${({ theme }) => theme.color('white')};
  border: 1px solid;
  margin-top: -1px;
  width: 100%;
  @media ${({ theme }) => theme.allBreakpoints('M')} {
    max-width: 500px;
  }
`;

const DropdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  padding: ${spacing('sm')};
`;

const DropdownItemSelectable = styled(DropdownItem)`
  cursor: pointer;
  border-top: 1px solid ${({ theme }) => theme.color('grey_light')};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color('grey_light')};
  }
`;

const TextItalic = styled(Text)`
  font-style: italic;
`;

export {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable,
  TextItalic
};
