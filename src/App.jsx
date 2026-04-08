import React, { useState } from 'react';
import { atoms, molecules, organisms } from './demos/index.jsx';
import { Layout, Sidebar, SidebarTitle, SidebarItem, Preview, PreviewHeader, PreviewBox, Logo, IsolateButton } from './App.styles.js';

const groups = [
  { label: 'Atoms', items: atoms },
  { label: 'Molecules', items: molecules },
  { label: 'Organisms', items: organisms },
];

export default function App() {
  const [selected, setSelected] = useState({ group: 'Atoms', name: atoms[0].name });
  const [isIsolated, setIsIsolated] = useState(false);

  const currentItem = groups
    .flatMap(g => g.items)
    .find(item => item.name === selected.name);

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
                onClick={() => setSelected({ group: group.label, name: item.name })}
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
        <PreviewBox>
          {currentItem?.demo}
        </PreviewBox>
      </Preview>
    </Layout>
  );
}
