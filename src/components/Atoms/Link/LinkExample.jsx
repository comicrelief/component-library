import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import buttonTypes from '../../../theme/crTheme/buttonTypes';
import { External, Download, Favourite, Internal, Chevron, Arrow, AtSign } from '../Icons/index';

const ExampleWrapper = styled.div`
  background-color: ${({ $bg }) => $bg || '#ddd'};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export default function LinkExample() {
  return (
    <>
      <h3>Standard links</h3>
      <ExampleWrapper>
        <Link href="#anchor" target="blank">Link standard</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link href="#anchor" target="blank" color="green">Link override colour</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link href="#anchor" target="blank" icon={<Download colour="black" />}>
          Link standard icon
        </Link>
      </ExampleWrapper>
      <ExampleWrapper $bg="#000">
        <Link href="#anchor" type="standard_white">Link standard white</Link>
      </ExampleWrapper>

      <h3>Links as buttons</h3>
      <ExampleWrapper>
        <Link color="black" href="#anchor" target="self" type="button">Link as button</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="/test" target="self" type="button">Link as button</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="yellow" href="/test" target="blank" type="button">Link as button</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.SECONDARY}>Link as button (secondary)</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="black" href="/test" target="self" type="button" buttonType={buttonTypes.SECONDARY}>Link as button (secondary)</Link>
      </ExampleWrapper>
      <ExampleWrapper $bg="#222222">
        <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.SECONDARY}>Link as button (secondary)</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.TERTIARY}>Link as button (tertiary)</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="black" href="/test" target="self" type="button" buttonType={buttonTypes.TERTIARY}>Link as button (tertiary)</Link>
      </ExampleWrapper>
      <ExampleWrapper $bg="#222222">
        <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.TERTIARY}>Link as button (tertiary)</Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <div style={{ display: 'block', marginTop: '10px' }}>
          <Link color="red" href="/test" target="blank" type="button" fullWidth>Link as full-width red button</Link>
        </div>
      </ExampleWrapper>

      <h3>Iconography</h3>
      <ExampleWrapper>
        <Link color="red" mobileColour="blue" href="#anchor" target="blank" type="button" icon={<Internal colour="white" mobileColour="red" />}>
          Internal link, 'blue' with red icon on tablet and mobile
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="blue" mobileColour="black" href="#anchor" target="blank" type="button" icon={<External colour="white" mobileColour="blue" />}>
          External link (black on mobile, blue on desktop)
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="blank" type="button" icon={<Download colour="white" mobileColour="blue" />}>
          Download link (blue mobile-tablet icon, white desktop icon)
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="blank" type="button" icon={<Favourite colour="white" mobileColour="blue" />}>
          Favourite link (blue mobile-tablet icon, white desktop icon)
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="blank" type="button" icon={<Chevron direction="up" colour="white" mobileColour="blue" />}>
          Chevron Up
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="blank" type="button" icon={<Chevron direction="down" colour="white" mobileColour="blue" />}>
          Chevron Down
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="blank" type="button" iconFirst icon={<Arrow direction="left" colour="white" mobileColour="blue" />}>
          Arrow Left
        </Link>
      </ExampleWrapper>
      <ExampleWrapper>
        <Link color="red" href="#anchor" target="blank" type="button" icon={<AtSign colour="white" mobileColour="blue" />}>
          At Sign
        </Link>
      </ExampleWrapper>
    </>
  );
}
