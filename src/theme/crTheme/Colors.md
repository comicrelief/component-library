```js
import Card from '../../components/Molecules/Card/Card';
import Text from '../../components/Atoms/Text/Text';
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
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
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    justify-content: flex-end;
  }
`;

<div>
  <Text tag="h3" family="Anton" uppercase color="black" size="l">
    Primary
  </Text>
  <Grid>
    <Item>
      <Card backgroundColor="white" height="auto">
        <Text tag="h3" color="black" size="s">
          DEFAULT / WHITE
        </Text>
        <Text tag="p">#FFFFFF</Text>
      </Card>
    </Item>
    <Item>
      <Card backgroundColor="black" height="auto">
        <Text tag="h3" color="white" size="s">
          DEFAULT / BLACK
        </Text>
        <Text tag="p" color="white">
          #000000
        </Text>
      </Card>
    </Item>
  </Grid>

  <Grid>
    <Label>
      <Card backgroundColor="white" height="auto">
        <Text tag="h3" color="black" size="xs">
          LIGHT
        </Text>
        <Text tag="p" size="xxs">
          Used for light background
        </Text>
      </Card>
    </Label>
    <Label>
      <Card backgroundColor="white" height="auto">
        <Text tag="h3" color="black" size="xs">
          MEDIUM
        </Text>
        <Text tag="p" size="xxs">
          Used as background and highlighted content
        </Text>
      </Card>
    </Label>
    <Label>
      <Card backgroundColor="white" height="auto">
        <Text tag="h3" color="black" size="xs">
          DEFAULT
        </Text>
        <Text tag="p" size="xxs">
          Used on CTA default state and special features
        </Text>
      </Card>
    </Label>
    <Label>
      <Card backgroundColor="white" height="auto">
        <Text tag="h3" color="black" size="xs">
          DARK
        </Text>
        <Text tag="p" size="xxs">
          Special CTA states (secondary and hovers)
        </Text>
      </Card>
    </Label>
  </Grid>

  <Grid>
    <Item>
      <Card backgroundColor="grey_light" height="auto">
        <Text tag="h3" color="black" size="xs">
          grey_light
        </Text>
        <Text tag="p">#F4F2F4</Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="grey_medium" height="auto">
        <Text tag="h3" color="black" size="xs">
          grey_medium
        </Text>
        <Text tag="p">#E1E2E3</Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="grey" height="auto">
        <Text tag="h3" color="white" size="xs">
          grey
        </Text>
        <Text color="white" tag="p">
          #969598
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="grey_dark" height="auto">
        <Text tag="h3" color="white" size="xs">
          grey_dark
        </Text>
        <Text color="white" tag="p">
          #222222
        </Text>
      </Card>
    </Item>
  </Grid>

  <Grid>
    <Item>
      <Card backgroundColor="coral_light" height="auto">
        <Text tag="h3" color="black" size="xs">
          coral_light
        </Text>
        <Text color="black" tag="p">
          #FFCECE
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="coral" height="auto">
        <Text tag="h3" color="black" size="xs">
          coral
        </Text>
        <Text color="black" tag="p">
          #F9686D
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="red" height="auto">
        <Text tag="h3" color="white" size="xs">
          red
        </Text>
        <Text color="white" tag="p">
          #E52630
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="red_dark" height="auto">
        <Text tag="h3" color="white" size="xs">
          red_dark
        </Text>
        <Text color="white" tag="p">
          #890B11
        </Text>
      </Card>
    </Item>
  </Grid>

  <Grid>
    <Item>
      <Card backgroundColor="blue_light" height="auto">
        <Text tag="h3" color="black" size="xs">
          blue_light
        </Text>
        <Text color="black" tag="p">
          #BECCF9
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="blue_royal" height="auto">
        <Text tag="h3" color="white" size="xs">
          blue_royal
        </Text>
        <Text color="white" tag="p">
          #6489FC
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="blue" height="auto">
        <Text tag="h3" color="white" size="xs">
          blue
        </Text>
        <Text color="white" tag="p">
          #0565D1
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="blue_dark" height="auto">
        <Text tag="h3" color="white" size="xs">
          blue_dark
        </Text>
        <Text color="white" tag="p">
          #274084
        </Text>
      </Card>
    </Item>
  </Grid>

  <Grid>
    <Item>
      <Card backgroundColor="purple_light" height="auto">
        <Text tag="h3" color="black" size="xs">
          purple_light
        </Text>
        <Text color="black" tag="p">
          #DFC6F6
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="lavender" height="auto">
        <Text tag="h3" color="black" size="xs">
          lavender *
        </Text>
        <Text color="black" tag="p">
          #C180F9
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="purple" height="auto">
        <Text tag="h3" color="white" size="xs">
          purple
        </Text>
        <Text color="white" tag="p">
          #6F3AAB
        </Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="purple_dark" height="auto">
        <Text tag="h3" color="white" size="xs">
          purple_dark
        </Text>
        <Text color="white" tag="p">
          #48276E
        </Text>
      </Card>
    </Item>
  </Grid>
  <Text tag="h3" family="Anton" uppercase color="black" size="l">
    Accent Colours
  </Text>
  <Text tag="h3" color="black" size="xs">
    Used for highlighted actions and content
  </Text>
  <Grid>
    <Item>
      <Card backgroundColor="yellow" height="auto">
        <Text tag="h3" color="black" size="xs">
          yellow
        </Text>
        <Text tag="p">#FFE400</Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="orange" height="auto">
        <Text tag="h3" color="black" size="xs">
          orange
        </Text>
        <Text tag="p">#FF9635</Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="green" height="auto">
        <Text tag="h3" color="black" size="xs">
          green
        </Text>
        <Text tag="p">#49D267</Text>
      </Card>
    </Item>

    <Item>
      <Card backgroundColor="teal" height="auto">
        <Text tag="h3" color="black" size="xs">
          teal
        </Text>
        <Text tag="p">#4ECDBE</Text>
      </Card>
    </Item>
  </Grid>
</div>;
```
