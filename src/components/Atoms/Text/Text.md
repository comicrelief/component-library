```js
import fontConfig from  '../../../theme/crTheme/fontConfig';

<div>
  <Text
    tag="h1"
    mobileColor="blue"
    // To be phased out: tags to use the prescribed family always
    family="Anton"
  >
    <span style={{ width: "55px", display: "inline-block" }}>H1 </span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['h1'].family} -  
    <b>mobileColor:</b> blue
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['h1'].small.fontSize} / {fontConfig['h1'].medium.fontSize} / {fontConfig['h1'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['h1'].small.lineHeight} / {fontConfig['h1'].medium.lineHeight} / {fontConfig['h1'].large.lineHeight}
  </Text>


  <Text
    tag="h2"
    mobileColor="green"
    family="Anton"
  >
    <span style={{ width: "55px", display: "inline-block" }}>H2 </span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['h2'].family} - 
    <b>mobileColor:</b> green
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['h2'].small.fontSize} / {fontConfig['h2'].medium.fontSize} / {fontConfig['h2'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['h2'].small.lineHeight} / {fontConfig['h2'].medium.lineHeight} / {fontConfig['h2'].large.lineHeight} 
  </Text>

  <Text
    tag="h3"
    mobileColor="red"
    family="Montserrat"
  >
    <span style={{ width: "55px", display: "inline-block" }}>H3 </span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['h3'].family} -  
    <b>mobileColor:</b> red
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['h3'].small.fontSize} / {fontConfig['h3'].medium.fontSize} / {fontConfig['h3'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['h3'].small.lineHeight} / {fontConfig['h3'].medium.lineHeight} / {fontConfig['h3'].large.lineHeight} 
  </Text>

  <Text
    tag="h4"
    family="Montserrat"
    weight="normal"
    // To be phased out: text to always be rendered as typed
    uppercase>
    <span style={{ width: "55px", display: "inline-block" }}>H4 </span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['span'].family} -  
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['h4'].small.fontSize} / {fontConfig['h4'].medium.fontSize} / {fontConfig['h4'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['h4'].small.lineHeight} / {fontConfig['h4'].medium.lineHeight} / {fontConfig['h4'].large.lineHeight} 
  </Text>



  <Text tag="p" size="m" style={{ marginTop: "2rem"}}>
    <span style={{ width: "55px", display: "inline-block" }}>Body</span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['p'].family} -  
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['p'].small.fontSize} / {fontConfig['p'].medium.fontSize} / {fontConfig['p'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['p'].small.lineHeight} / {fontConfig['p'].medium.lineHeight} / {fontConfig['p'].large.lineHeight} 
  </Text>

  <Text tag="p" style={{ marginTop: "55px", fontStyle: "italic"}}>
    Tags to be phased out:
  </Text>

  <Text 
    tag="h5"
    family="Anton"
    uppercase
    // To be phased-out
    weight="normal">
    <span style={{ width: "55px", display: "inline-block" }}>H5 </span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['h5'].family} -  
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['h5'].small.fontSize} / {fontConfig['h5'].medium.fontSize} / {fontConfig['h5'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['h5'].small.lineHeight} / {fontConfig['h5'].medium.lineHeight} / {fontConfig['h5'].large.lineHeight} 
  </Text>

  <Text tag="h6" 
    family="Anton" 
    uppercase
    weight="normal">
    <span style={{ width: "55px", display: "inline-block" }}>H6</span>
  </Text>
  <Text style={{ textTransform: "none" }} tag="span" size="s">
    <b>family:</b> {fontConfig['h6'].family}
    <br/>
    <b>font size (S / M / L breakpoints):</b> {fontConfig['h6'].small.fontSize} / {fontConfig['h6'].medium.fontSize} / {fontConfig['h6'].large.fontSize} 
    <br/>
    <b>line height (S / M / L breakpoints):</b> {fontConfig['h6'].small.lineHeight} / {fontConfig['h6'].medium.lineHeight} / {fontConfig['h6'].large.lineHeight} 
  </Text>

</div>
```
