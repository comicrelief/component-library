import React from 'react';
import Link from './Link';
import buttonTypes from '../../../theme/crTheme/buttonTypes';
import { External, Download, Favourite, Internal, Chevron, Arrow, AtSign } from '../Icons/index';
import Wrapper from '../../../demos/Wrapper';

export default function LinkExample() {
  return (
    <>
      <h3>Standard links</h3>

      <Wrapper>
        <Link href="#anchor" target="blank">
          Link standard
        </Link>
      </Wrapper>

      <Wrapper>
        <Link
          href="#anchor"
          target="blank"
          icon={<Download colour="black" />}
        >
          Link standard icon
        </Link>
      </Wrapper>

      <Wrapper $bg="#222">
        <Link href="#anchor" type="standard_white">
          Link standard white
        </Link>
      </Wrapper>

      <h3>Link as Buttons</h3>

      <Wrapper>
        <Link color="black" href="#anchor" target="self" type="button">
          Link as button
        </Link>
      </Wrapper>

      <Wrapper>
        <Link color="red" href="/test" target="self" type="button">
          Link as button
        </Link>
      </Wrapper>

      <Wrapper>
        <Link color="yellow" href="/test" target="blank" type="button">
          Link as button
        </Link>
      </Wrapper>

      <h3>Link as Secondary</h3>

      <Wrapper>
        <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.SECONDARY}>
          Link as button (secondary)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link color="black" href="/test" target="self" type="button" buttonType={buttonTypes.SECONDARY}>
          Link as button (secondary)
        </Link>
      </Wrapper>

      <Wrapper $bg="#222">
        <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.SECONDARY}>
          Link as button (secondary)
        </Link>
      </Wrapper>

      <h3>Link as Tertiary</h3>

      <Wrapper>
        <Link color="red" href="#anchor" target="self" type="button" buttonType={buttonTypes.TERTIARY}>
          Link as button (tertiary)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link color="black" href="/test" target="self" type="button" buttonType={buttonTypes.TERTIARY}>
          Link as button (tertiary)
        </Link>
      </Wrapper>

      <Wrapper $bg="#222">
        <Link color="white" href="/test" target="blank" type="button" buttonType={buttonTypes.TERTIARY}>
          Link as button (tertiary)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link color="red" href="/test" target="blank" type="button" fullWidth>
          Link as full-width red button
        </Link>
      </Wrapper>

      <h3>Iconography</h3>

      <Wrapper>
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
      </Wrapper>

      <Wrapper>
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
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Download colour="white" mobileColour="blue" />}
        >
          Download link (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Favourite colour="white" mobileColour="blue" />}
        >
          Favourite link (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Chevron direction="up" colour="white" mobileColour="blue" />}
        >
          Chevron Up (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Chevron direction="down" colour="white" mobileColour="blue" />}
        >
          Chevron Down (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Chevron direction="left" colour="white" mobileColour="blue" />}
        >
          Chevron Left (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<Chevron direction="right" colour="white" mobileColour="blue" />}
        >
          Chevron Right (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>

      <Wrapper>
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
      </Wrapper>

      <Wrapper>
        <Link
          color="red"
          href="#anchor"
          target="blank"
          type="button"
          icon={<AtSign colour="white" mobileColour="blue" />}
        >
          At Sign (blue mobile-tablet icon, white desktop icon)
        </Link>
      </Wrapper>
    </>
  );
}
