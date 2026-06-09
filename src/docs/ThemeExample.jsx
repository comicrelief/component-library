import React from 'react';
import styled from 'styled-components';
import Card from '../components/Molecules/Card/Card';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Label = styled.div`
  width: calc(25% - 2rem);
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 1rem;
`;

const Item = styled.div`
  width: calc(25% - 2rem);
  align-items: center;
  justify-content: flex-end;
  margin: 1rem;
  div {
    width: 160px;
    height: 160px;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    justify-content: flex-end;
  }
`;

const greys = [
  { bg: 'grey_light', hex: '#F4F2F4' },
  { bg: 'grey_medium', hex: '#E1E2E3' },
  { bg: 'grey', hex: '#969598', white: true },
  { bg: 'grey_4', hex: '#6E6E6E', white: true },
  { bg: 'grey_dark', hex: '#222222', white: true },
];

const corals = [
  { bg: 'coral_light', hex: '#FFCECE' },
  { bg: 'coral', hex: '#F9686D' },
  { bg: 'red', hex: '#E52630', white: true },
  { bg: 'red_dark', hex: '#890B11', white: true },
];

const blues = [
  { bg: 'blue_light', hex: '#BECCF9' },
  { bg: 'blue_royal', hex: '#6489FC' },
  { bg: 'blue', hex: '#0565D1', white: true },
  { bg: 'blue_dark', hex: '#274084', white: true },
];

const purples = [
  { bg: 'purple_light', hex: '#DFC6F6' },
  { bg: 'lavender', hex: '#C180F9' },
  { bg: 'purple', hex: '#6F3AAB', white: true },
  { bg: 'purple_dark', hex: '#48276E', white: true },
];

const accents = [
  { bg: 'yellow', hex: '#FFE400' },
  { bg: 'orange', hex: '#FF9635' },
  { bg: 'green', hex: '#49D267' },
  { bg: 'teal', hex: '#4ECDBE' },
];

const donate = [
  { bg: 'blue_donate', hex: '#2042AD', white: true },
  { bg: 'blue_donate_interact', hex: '#001A85', white: true },
];

const labels = [
  { label: 'LIGHT', desc: 'Used for light background' },
  { label: 'MEDIUM', desc: 'Used as background and highlighted content' },
  { label: 'DEFAULT', desc: 'Used on CTA default state and special features' },
  { label: 'DARK', desc: 'Special CTA states (secondary and hovers)' },
];

function Swatch({ bg, hex, white }) {
  return (
    <Item style={white ? { color: 'white' } : undefined}>
      <Card backgroundColor={bg} height="auto">
        <h4>{bg}</h4>
        <p>{hex}</p>
      </Card>
    </Item>
  );
}

function SwatchGroup({ colours }) {
  return (
    <Grid>
      {colours.map(c => <Swatch key={c.bg} {...c} />)}
    </Grid>
  );
}

export default function ThemeExample() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Primary (CR Theme)</h2>
      <Grid>
        <Item><Card backgroundColor="white" height="auto"><h4>DEFAULT / WHITE</h4><p>#FFFFFF</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="black" height="auto"><h4>DEFAULT / BLACK</h4><p>#000000</p></Card></Item>
      </Grid>

      <Grid>
        {labels.map(({ label, desc }) => (
          <Label key={label}>
            <Card backgroundColor="white" height="auto"><h4>{label}</h4><p>{desc}</p></Card>
          </Label>
        ))}
      </Grid>

      <SwatchGroup colours={greys} />
      <SwatchGroup colours={corals} />
      <SwatchGroup colours={blues} />
      <SwatchGroup colours={purples} />

      <h2 style={{ marginTop: '60px' }}>Accent Colours (CR Theme)</h2>
      <h4>Used for highlighted actions and content</h4>
      <SwatchGroup colours={accents} />

      <h2 style={{ marginTop: '60px' }}>Additional Colours (CR Theme)</h2>
      <h4>Currently, just one new colour used exclusively in the Donate widget on CRcom and the 2024 Donate build</h4>
      <SwatchGroup colours={donate} />
    </div>
  );
}
