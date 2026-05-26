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

export default function ThemeExample() {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Primary (CR Theme)</h2>
      <Grid>
        <Item><Card backgroundColor="white" height="auto"><h4>DEFAULT / WHITE</h4><p>#FFFFFF</p></Card></Item>
        <Item><Card backgroundColor="black" height="auto"><h4 style={{ color: "white"}}>DEFAULT / BLACK</h4><p style={{ color: "white"}}>#000000</p></Card></Item>
      </Grid>

      <Grid>
        <Label><Card backgroundColor="white" height="auto"><h4>LIGHT</h4><p>Used for light background</p></Card></Label>
        <Label><Card backgroundColor="white" height="auto"><h4>MEDIUM</h4><p>Used as background and highlighted content</p></Card></Label>
        <Label><Card backgroundColor="white" height="auto"><h4>DEFAULT</h4><p>Used on CTA default state and special features</p></Card></Label>
        <Label><Card backgroundColor="white" height="auto"><h4>DARK</h4><p>Special CTA states (secondary and hovers)</p></Card></Label>
      </Grid>

      <Grid>
        <Item><Card backgroundColor="grey_light" height="auto"><h4>grey_light</h4><p>#F4F2F4</p></Card></Item>
        <Item><Card backgroundColor="grey_medium" height="auto"><h4>grey_medium</h4><p>#E1E2E3</p></Card></Item>
        <Item><Card backgroundColor="grey" height="auto"><h4>grey</h4><p>#969598</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="grey_4" height="auto"><h4>grey_4</h4><p>#6E6E6E</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="grey_dark" height="auto"><h4>grey_dark</h4><p>#222222</p></Card></Item>
      </Grid>

      <Grid>
        <Item><Card backgroundColor="coral_light" height="auto"><h4>coral_light</h4><p>#FFCECE</p></Card></Item>
        <Item><Card backgroundColor="coral" height="auto"><h4>coral</h4><p>#F9686D</p></Card></Item>
        <Item><Card backgroundColor="red" height="auto"><h4>red</h4><p>#E52630</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="red_dark" height="auto"><h4>red_dark</h4><p>#890B11</p></Card></Item>
      </Grid>

      <Grid>
        <Item><Card backgroundColor="blue_light" height="auto"><h4>blue_light</h4><p>#BECCF9</p></Card></Item>
        <Item><Card backgroundColor="blue_royal" height="auto"><h4>blue_royal</h4><p>#6489FC</p></Card></Item>
        <Item><Card backgroundColor="blue" height="auto"><h4>blue</h4><p color="white" tag="p">#0565D1</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="blue_dark" height="auto"><h4>blue_dark</h4><p>#274084</p></Card></Item>
      </Grid>

      <Grid>
        <Item><Card backgroundColor="purple_light" height="auto"><h4>purple_light</h4><p>#DFC6F6</p></Card></Item>
        <Item><Card backgroundColor="lavender" height="auto"><h4>lavender</h4><p>#C180F9</p></Card></Item>
        <Item><Card backgroundColor="purple" height="auto"><h4>purple</h4><p>#6F3AAB</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="purple_dark" height="auto"><h4>purple_dark</h4><p>#48276E</p></Card></Item>
      </Grid>

      <h2 style={{ marginTop: "60px"}}>Accent Colours (CR Theme)</h2>
      <h4 tag="h4" color="black" size="xs">Used for highlighted actions and content</h4>
      <Grid>
        <Item><Card backgroundColor="yellow" height="auto"><h4>yellow</h4><p>#FFE400</p></Card></Item>
        <Item><Card backgroundColor="orange" height="auto"><h4>orange</h4><p>#FF9635</p></Card></Item>
        <Item><Card backgroundColor="green" height="auto"><h4>green</h4><p>#49D267</p></Card></Item>
        <Item><Card backgroundColor="teal" height="auto"><h4>teal</h4><p>#4ECDBE</p></Card></Item>
      </Grid>

      <h2 style={{ marginTop: "60px"}}>Additional Colours (CR Theme)</h2>
      <h4>Currently, just one new colour used exclusively in the Donate widget on CRcom and the 2024 Donate build</h4>
      <Grid>
        <Item style={{ color: 'white' }}><Card backgroundColor="blue_donate" height="auto"><h4>blue_donate</h4><p>#2042AD</p></Card></Item>
        <Item style={{ color: 'white' }}><Card backgroundColor="blue_donate_interact" height="auto"><h4>blue_donate_interact</h4><p>#001A85</p></Card></Item>
      </Grid>
    </div>
  );
}
