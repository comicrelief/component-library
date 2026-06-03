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
        <Link href="#anchor" target="blank">
          Link standard
        </Link>
      </ExampleWrapper>

      <Link
        href="#anchor"
        target="blank"
        icon={<Download colour="black" />}
      >
        Link standard icon
      </Link>

      <Link href="#anchor" type="standard_white">
        Link standard white
      </Link>

      <h3>Link as Buttons</h3>

      <Link color="black" href="#anchor" target="self" type="button">
        Link as button
      </Link>

      <Link color="red" href="/test" target="self" type="button">
        Link as button
      </Link>

      <Link color="yellow" href="/test" target="blank" type="button">
        Link as button
      </Link>

      <h3>Link as Secondary</h3>

      <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.SECONDARY}>
        Link as button (secondary)
      </Link>

      <Link color="black" href="/test" target="self" type="button"buttonType={buttonTypes.SECONDARY}>
        Link as button (secondary)
      </Link>

      <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.SECONDARY}>
        Link as button (secondary)
      </Link>

      <h3>Link as Tertiary</h3>

      <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.TERTIARY}>
        Link as button (tertiary)
      </Link>

      <Link color="black" href="/test" target="self" type="button"buttonType={buttonTypes.TERTIARY}>
        Link as button (tertiary)
      </Link>

      <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.TERTIARY}>
        Link as button (tertiary)
      </Link>

      <Link color="red" href="/test" target="blank" type="button" fullWidth>
        Link as full-width red button
      </Link>

      <h3>Iconography</h3>

      <Link
        color="red"
        mobileColour="blue"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Internal colour="white" mobileColour="red"/>}
      >
        Internal link, 'blue' with red icon on tablet and mobile
      </Link>

      <Link
        color="blue"
        mobileColour="black"
        href="#anchor"
        target="blank"
        type="button"
        icon={<External colour="white" mobileColour="blue" />}
      >
        External link (black on mobile, blue on desktop)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Download colour="white" mobileColour="blue" />}
      >
        Download link (blue mobile-tablet icon, white desktop icon)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Favourite colour="white" mobileColour="blue" />}
      >
        Favourite link (blue mobile-tablet icon, white desktop icon)
      </Link>


      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Chevron direction="up" colour="white" mobileColour="blue" />}
      >
        Chevron Up (blue mobile-tablet icon, white desktop icon)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Chevron direction="down" colour="white" mobileColour="blue" />}
      >
        Chevron Down (blue mobile-tablet icon, white desktop icon)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Chevron direction="left" colour="white" mobileColour="blue" />}
      >
        Chevron Left (blue mobile-tablet icon, white desktop icon)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<Chevron direction="right" colour="white" mobileColour="blue" />}
      >
        Chevron Right (blue mobile-tablet icon, white desktop icon)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        iconFirst
        icon={<Arrow direction="left" colour="white" mobileColour="blue" />}
      >
        Arrow Left (blue mobile-tablet icon, white desktop icon)
      </Link>

      <Link
        color="red"
        href="#anchor"
        target="blank"
        type="button"
        icon={<AtSign colour="white" mobileColour="blue" />}
      >
        At Sign (blue mobile-tablet icon, white desktop icon)
      </Link>
    </>
  );
}
