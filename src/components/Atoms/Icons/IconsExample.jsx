import React from 'react';
import styled from 'styled-components';
import { Arrow, AtSign, Chevron, CtaArrow, Download, External, Favourite, Internal } from './index';
import Cross from './Cross';
import Curve from './Curve';
import { ExampleContainer } from '../../../demos/SharedStyles';

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

const Name = styled.p`
  font-size: 0.75rem;
  color: ${({ dark }) => dark ? '#fff' : '#333'};
  margin: 0;
  text-align: center;
`;

const directions = ['up', 'down', 'left', 'right'];

export default function IconsExample() {
  return (
    <div style={{ padding: '1rem' }}>

      <ExampleContainer>
        <h3>Standard Icons</h3>
        <p style={{ fontSize: '0.85rem', color: '#666' }}>Shown at size=48, colour="black"</p>
        <Grid>
          {[
            ['Download', <Download size={48} colour="black" />],
            ['External', <External size={48} colour="black" />],
            ['Favourite', <Favourite size={48} colour="black" />],
            ['Internal', <Internal size={48} colour="black" />],
            ['AtSign', <AtSign size={48} colour="black" />],
            ['Cross', <Cross size={48} colour="black" />],
          ].map(([name, icon]) => (
            <IconCard key={name}>
              {icon}
              <Name>{name}</Name>
            </IconCard>
          ))}
        </Grid>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Arrow — directions</h3>
        <Grid>
          {directions.map(dir => (
            <IconCard key={dir}>
              <Arrow size={48} colour="black" direction={dir} />
              <Name>{dir}</Name>
            </IconCard>
          ))}
        </Grid>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Chevron — directions</h3>
        <Grid>
          {directions.map(dir => (
            <IconCard key={dir}>
              <Chevron size={48} colour="black" direction={dir} />
              <Name>{dir}</Name>
            </IconCard>
          ))}
        </Grid>
      </ExampleContainer>

      <ExampleContainer>
        <h3>CtaArrow — directions</h3>
        <Grid>
          {directions.map(dir => (
            <IconCard key={dir} dark>
              <CtaArrow size={48} colour="red" direction={dir} />
              <Name dark>{dir}</Name>
            </IconCard>
          ))}
        </Grid>
      </ExampleContainer>

      <ExampleContainer>
        <h3>Curve</h3>
        <ExampleContainer style={{ background: '#f4f2f4', borderRadius: '6px', overflow: 'hidden' }}>
          <Curve />
        </ExampleContainer>
      </ExampleContainer>

    </div>
  );
}
