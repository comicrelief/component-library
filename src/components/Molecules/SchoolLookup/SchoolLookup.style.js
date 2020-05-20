import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0;
  max-height: 300px;
  max-width: 500px;
  overflow: auto;
  background-color: white;
  border: 1px solid lightgrey;
  width: 100%;
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
  border-top: 1px solid lightgrey;

  &:hover {
    background-color: lightgrey;
  }
`;

export {
  Container,
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownItemSelectable
};
