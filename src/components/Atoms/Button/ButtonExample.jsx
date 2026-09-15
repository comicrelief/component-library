import React from 'react';
import Button from './Button';
import buttonTypes from '../../../theme/crTheme/buttonTypes';
import { ExampleContainer } from '../../../demos/SharedStyles';
import Cross from '../Icons/Cross';

export default function ButtonExample() {
  const placeholderIconUrl = 'https://images.ctfassets.net/zsfivwzfgl3t/4IlLxZnddkg1pHWZP3AZnA/447078df666932751c9c618a296f24db/Icon__Shelter.png';

  return (
    <>
      <h3>Primary</h3>

      <ExampleContainer>
        <Button type="button">Primary red button (default)</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" disabled>Primary red button (default): disabled</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" color="black">Primary black button</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" color="black" disabled>Primary black button: disabled</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="white">Primary white button</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="white" disabled>Primary white button: disabled</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="non-existent-colour">Using a non-existent colour will default to red</Button>
      </ExampleContainer>

      <br />
      <h3>Secondary</h3>

      <ExampleContainer>
        <Button type="button" buttonType={buttonTypes.SECONDARY}>Secondary red button</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" buttonType={buttonTypes.SECONDARY} disabled>Secondary red button: disabled</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" color="black" buttonType={buttonTypes.SECONDARY}>Secondary black button</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" color="black" buttonType={buttonTypes.SECONDARY} disabled>Secondary black button: disabled</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="white" buttonType={buttonTypes.SECONDARY}>Secondary white button</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="white" buttonType={buttonTypes.SECONDARY} disabled>Secondary white button: disabled</Button>
      </ExampleContainer>

      <br />
      <h3>Tertiary</h3>

      <ExampleContainer>
        <Button type="button" buttonType={buttonTypes.TERTIARY}>Tertiary red button</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" buttonType={buttonTypes.TERTIARY} disabled>Tertiary red button: disabled</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" color="black" buttonType={buttonTypes.TERTIARY}>Tertiary black button</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" color="black" buttonType={buttonTypes.TERTIARY} disabled>Tertiary black button: disabled</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="white" buttonType={buttonTypes.TERTIARY}>Tertiary white button</Button>
      </ExampleContainer>

      <ExampleContainer $bg="#222222">
        <Button type="button" color="white" buttonType={buttonTypes.TERTIARY} disabled>Tertiary white button: disabled</Button>
      </ExampleContainer>

      <br />
      <h3>Other</h3>

      <ExampleContainer>
        <Button wrapper>My button as a span</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button type="button" fullWidth>Full-width button</Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button
          type="button"
          icon={<Cross size={48} colour="white" />}
        >
          Button with an Icon component
        </Button>
      </ExampleContainer>

      <ExampleContainer>
        <Button
          type="button"
          icon={placeholderIconUrl}
        >
          Button with an image URL provided for the icon
        </Button>
      </ExampleContainer>
    </>
  );
}
