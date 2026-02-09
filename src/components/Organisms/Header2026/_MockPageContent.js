import React from 'react';

import Text from '../../Atoms/Text/Text';
import Card from '../../Molecules/Card/Card';

const cards = [
  { title: 'Red Nose Day 2026', desc: 'Get ready for the biggest night of fundraising and fun — Red Nose Day is back this March.' },
  { title: 'Schools & Youth', desc: 'Inspire young people to make a difference with free resources and fundraising ideas for schools.' },
  { title: 'Our Impact', desc: 'See how your donations are helping communities across the UK and around the world.' }
];

const MockPageContent = () => (
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    background: 'transparent',
    border: '1px solid green'
  }}
  >
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      marginBottom: '60px',
      flexWrap: 'wrap'
    }}
    >
      <div style={{ flex: '1', minWidth: '300px' }}>
        <Text tag="h1" size="super" color="black">
          Together we can change lives through the power of laughing gas.
        </Text>
        <Text tag="p" color="grey_dark" size="md">
          Comic Relief changes lives - Please please give us some money.
        </Text>
      </div>
      <div style={{
        flex: '1',
        minWidth: '300px',
        height: '360px',
        backgroundColor: '#FDE8E9',
        borderRadius: '16px'
      }}
      />
    </div>

    <Text tag="h2" color="black">Some stuff</Text>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px',
      marginTop: '24px'
    }}
    >
      {cards.map(card => (
        <Card key={card.title} backgroundColor="white">
          <Text tag="h3">{card.title}</Text>
          <Text tag="p" color="grey_dark">{card.desc}</Text>
        </Card>
      ))}
    </div>
  </div>
);

export default MockPageContent;
