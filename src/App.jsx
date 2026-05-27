import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { atoms, molecules, organisms, docs } from './demos/index.jsx';
import { Layout, Sidebar, SidebarTitle, SidebarItem, Preview, PreviewHeader, PreviewBox, Logo, IsolateButton } from './App.styles.js';
import crLogo from './components/Atoms/Logo/assets/cr-logo.svg';

const Chevron = styled.span`
  font-size: 1.2rem;
  transition: transform 0.2s;
  transform: ${({ $open }) => ($open ? 'rotate(0deg)' : 'rotate(-90deg)')};
`;

const groups = [
  { label: 'Docs', items: docs },
  { label: 'Atoms', items: atoms },
  { label: 'Molecules', items: molecules },
  { label: 'Organisms', items: organisms },
];

// unpack all items in all groups into one flay array
const allItems = groups.flatMap(g => g.items);

// return the item that matches the url element hash tag
function itemFromHash() {
  const hash = window.location.hash.slice(1).toLowerCase();
  return allItems.find(item => item.name.toLowerCase() === hash) || atoms[0];
}

export default function App() {
  const [selected, setSelected] = useState(itemFromHash);
  const [isIsolated, setIsIsolated] = useState(false);
  const [openGroups, setOpenGroups] = useState(() =>
    groups.reduce((acc, g) => ({ ...acc, [g.label]: false }), {})
  );

  const toggleGroup = label => setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));

  useEffect(() => {
    const onHashChange = () => setSelected(itemFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const currentItem = allItems.find(item => item.name === selected.name);

  const handleSelect = item => {
    window.location.hash = item.name.toLowerCase();
    setSelected(item);
  };

  return (
    <Layout>
      {!isIsolated && (
      <Sidebar>
        <Logo><img src={crLogo} alt="Comic Relief" /></Logo>
        {groups.map(group => (
          <div key={group.label}>
            <SidebarTitle onClick={() => toggleGroup(group.label)}>
              {group.label}
              <Chevron $open={openGroups[group.label]}>▾</Chevron>
            </SidebarTitle>
            {openGroups[group.label] && group.items.map(item => (
              <SidebarItem
                key={item.name}
                $active={selected.name === item.name}
                onClick={() => handleSelect(item)}
              >
                {item.name}
              </SidebarItem>
            ))}
          </div>
        ))}
      </Sidebar>
      )}
      <Preview>
        <PreviewHeader>
          <h2>{selected.name}</h2>
          <IsolateButton $active={isIsolated} onClick={() => setIsIsolated(s => !s)}>
            {isIsolated ? 'Show Sidebar' : 'Isolate'}
          </IsolateButton>
        </PreviewHeader>
        {(currentItem?.examples ?? (currentItem?.demo != null ? [currentItem.demo] : [])).map((example, idx) => (
          <PreviewBox key={idx} data-testid={`${selected.name}-example-${idx + 1}`}>
            <div data-preview={selected.name}>
              {example}
            </div>
          </PreviewBox>
        ))}
      </Preview>
    </Layout>
  );
}
