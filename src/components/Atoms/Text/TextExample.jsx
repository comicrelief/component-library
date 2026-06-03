import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import fontConfig from '../../../theme/crTheme/fontConfig';

const Wrapper = styled.div`
  padding: 1rem;
  background: lightblue;
  margin-top: 1rem;
  border-radius: 5px;
`;

export default function TextExample() {
  return (
    <>
      <Text
        tag="h1"
        mobileColor="blue"
        // To be phased out: tags to use the prescribed family always
        family="Anton"
      >
        <span style={{ width: '55px' }}>H1</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['h1'].family} -
        <b>mobileColor:</b> blue
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['h1'].small.fontSize} / {fontConfig['h1'].medium.fontSize} / {fontConfig['h1'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['h1'].small.lineHeight} / {fontConfig['h1'].medium.lineHeight} / {fontConfig['h1'].large.lineHeight}
      </Text>

      <Text tag="h2" mobileColor="green" family="Anton">
        <span style={{ width: '55px' }}>H2</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['h2'].family} -
        <b>mobileColor:</b> green
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['h2'].small.fontSize} / {fontConfig['h2'].medium.fontSize} / {fontConfig['h2'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['h2'].small.lineHeight} / {fontConfig['h2'].medium.lineHeight} / {fontConfig['h2'].large.lineHeight}
      </Text>

      <Text tag="h3" mobileColor="red" family="Montserrat">
        <span style={{ width: '55px' }}>H3</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['h3'].family} -
        <b>mobileColor:</b> red
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['h3'].small.fontSize} / {fontConfig['h3'].medium.fontSize} / {fontConfig['h3'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['h3'].small.lineHeight} / {fontConfig['h3'].medium.lineHeight} / {fontConfig['h3'].large.lineHeight}
      </Text>

      <Text
        tag="h4"
        family="Montserrat"
        weight="normal"
        // To be phased out: text to always be rendered as typed
        uppercase
      >
        <span style={{ width: '55px' }}>H4</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['span'].family} -
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['h4'].small.fontSize} / {fontConfig['h4'].medium.fontSize} / {fontConfig['h4'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['h4'].small.lineHeight} / {fontConfig['h4'].medium.lineHeight} / {fontConfig['h4'].large.lineHeight}
      </Text>

      <Text tag="p" size="m" style={{ marginTop: '2rem' }} weight="500">
        <span style={{ width: '55px' }}>P (body)</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['p'].family} -
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['p'].small.fontSize} / {fontConfig['p'].medium.fontSize} / {fontConfig['p'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['p'].small.lineHeight} / {fontConfig['p'].medium.lineHeight} / {fontConfig['p'].large.lineHeight}
      </Text>

      <Text tag="p" style={{ marginTop: '55px', fontStyle: 'italic' }}>
        Tags to be phased out:
      </Text>

      <Text
        tag="h5"
        family="Anton"
        uppercase
        // To be phased-out
        weight="normal"
      >
        <span style={{ width: '55px' }}>H5</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['h5'].family} -
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['h5'].small.fontSize} / {fontConfig['h5'].medium.fontSize} / {fontConfig['h5'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['h5'].small.lineHeight} / {fontConfig['h5'].medium.lineHeight} / {fontConfig['h5'].large.lineHeight}
      </Text>

      <Text tag="h6" family="Anton" uppercase weight="normal">
        <span style={{ width: '55px' }}>H6</span>
      </Text>
      <Text style={{ textTransform: 'none' }} tag="span" size="s">
        <b>family:</b> {fontConfig['h6'].family}
        <br />
        <b>font size (S / M / L breakpoints):</b> {fontConfig['h6'].small.fontSize} / {fontConfig['h6'].medium.fontSize} / {fontConfig['h6'].large.fontSize}
        <br />
        <b>line height (S / M / L breakpoints):</b> {fontConfig['h6'].small.lineHeight} / {fontConfig['h6'].medium.lineHeight} / {fontConfig['h6'].large.lineHeight}
      </Text>

      <Text tag="h2" family="Anton" uppercase weight="normal">
        <span style={{ width: '55px' }}>Context styles:</span>
      </Text>

      <Wrapper>
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third and final paragraph</p>
      </Wrapper>

      <Wrapper>
        <p>Only child paragraph</p>
      </Wrapper>

      <Wrapper>
        <h1>h1 Only child</h1>
      </Wrapper>

      <Wrapper>
        <h1>h1 First child</h1>
        <h1>h1 Second child</h1>
      </Wrapper>

      <Wrapper>
        <h1>h1</h1>
        <p>Paragraph</p>
        <p>Paragraph</p>
        <p>Paragraph, last child</p>
      </Wrapper>

      <Wrapper>
        <p>A preceding paragraph</p>
        <p>A preceding paragraph</p>
        <h1>H1 with an added margin-top as it follows a p tag</h1>
        <p>Proceeding paragraph</p>
        <p>Paragraph, last child</p>
      </Wrapper>

      <Wrapper>
        <p>A preceding paragraph</p>
        <p>A preceding paragraph</p>
        <h1>H2 with an added margin-top as it follows a p tag</h1>
        <p>Proceeding paragraph</p>
        <p>Paragraph, last child</p>
      </Wrapper>
    </>
  );
}
