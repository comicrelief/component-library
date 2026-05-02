import React, { useState, useEffect } from 'react';
import { atoms, molecules, organisms } from './demos/index.jsx';
import { Layout, Sidebar, SidebarTitle, SidebarItem, Preview, PreviewHeader, PreviewBox, Logo, IsolateButton } from './App.styles.js';

const groups = [
  { label: 'Atoms', items: atoms },
  { label: 'Molecules', items: molecules },
  { label: 'Organisms', items: organisms },
];

const allItems = groups.flatMap(g => g.items);

function itemFromHash() {
  const hash = window.location.hash.slice(1).toLowerCase();
  return allItems.find(item => item.name.toLowerCase() === hash) || atoms[0];
}

export default function App() {
  const [selected, setSelected] = useState(itemFromHash);
  const [isIsolated, setIsIsolated] = useState(false);

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
        <Logo>Comic Relief</Logo>
        {groups.map(group => (
          <div key={group.label}>
            <SidebarTitle>{group.label}</SidebarTitle>
            {group.items.map(item => (
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
        <PreviewBox data-testid={`${selected.name}-example-1`}>
          <div data-preview={selected.name}>
            {currentItem?.demo}
          </div>
        </PreviewBox>
      </Preview>
    </Layout>
  );
}
