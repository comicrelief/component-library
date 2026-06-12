import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
`;

const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid #e1e2e3;
  border-radius: 6px;
  min-width: 100px;
  background: ${({ dark }) => dark ? '#222' : '#fff'};
`;

const Label = styled.p`
  font-size: 0.75rem;
  color: ${({ dark }) => dark ? '#fff' : '#333'};
  margin: 0;
  text-align: center;
`;

const Section = styled.div`
  padding: 1rem;
`;

const directions = ['up', 'down', 'left', 'right'];
const colours = ['black', 'red', 'white'];

export default function ArrowExample() {
  return (
    <div style={{ padding: '1rem' }}>

      <Section>
        <h3>Directions</h3>
        <Grid>
          {directions.map(dir => (
            <IconCard key={dir}>
              <Arrow size={48} colour="black" direction={dir} />
              <Label>{dir}</Label>
            </IconCard>
          ))}
        </Grid>
      </Section>

      <Section>
        <h3>Colours</h3>
        <Grid>
          {colours.map(colour => (
            <IconCard key={colour} dark={colour === 'white'}>
              <Arrow size={48} colour={colour} direction="right" />
              <Label dark={colour === 'white'}>{colour}</Label>
            </IconCard>
          ))}
        </Grid>
      </Section>

      <Section>
        <h3>Sizes</h3>
        <Grid>
          {[16, 24, 32, 48, 64].map(size => (
            <IconCard key={size}>
              <Arrow size={size} colour="black" direction="right" />
              <Label>{size}px</Label>
            </IconCard>
          ))}
        </Grid>
      </Section>

    </div>
  );
}
