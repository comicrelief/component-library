import styled from 'styled-components';
import color from './theme/crTheme/colors';

export const Layout = styled.div`
  display: flex;
  height: 100vh;
  font-family: sans-serif;
`;

export const Sidebar = styled.nav`
  width: 240px;
  min-width: 240px;
  background: ${color('grey_5')};
  color: ${color('white')};
  overflow-y: auto;
  padding: 1rem 0;
`;

export const SidebarTitle = styled.div`
  padding: 0.75rem 1rem 0.25rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${color('grey')};
`;

export const SidebarItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.4rem 1rem;
  background: ${({ $active }) => ($active ? color('grey_4_hover') : color('transparent'))};
  color: ${({ $active }) => ($active ? color('white') : color('grey'))};
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  border-left: 3px solid ${({ $active }) => ($active ? color('red') : color('transparent'))};

  &:hover {
    background: ${color('grey_dark')};
    color: ${color('white')};
  }
`;

export const Preview = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  background: ${color('grey_light')};
`;

export const PreviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1.5rem;
  border-bottom: 1px solid ${color('grey_medium')};
  padding-bottom: 0.75rem;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: ${color('grey_5')};
  }
`;

export const PreviewBox = styled.div`
  background: ${color('white')};
  border: 1px solid ${color('grey_medium')};
  border-radius: 6px;
  padding: 2rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color('red')};
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${color('grey_dark')};
  margin-bottom: 0.5rem;
`;

export const IsolateButton = styled.button`
  background: none;
  border: 1px solid ${color('grey_medium')};
  border-radius: 4px;
  color: ${({ $active }) => ($active ? color('red') : color('grey_5'))};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.6rem;

  &:hover {
    border-color: ${color('red')};
    color: ${color('red')};
  }
`;
