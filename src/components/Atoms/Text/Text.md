```js
import fontConfig from  '../../../theme/crTheme/fontConfig';

<div>
  <Text
    tag="h1"
    mobileColor="blue"
    // To be phased-out:
    family="Anton"
  >
    <b style={{ width: "55px", display: "inline-block" }}>H1 </b>
    <Text style={{ textTransform: "none" }} tag="span" size="s">
      <b>family:</b> {fontConfig['h1'].family} -  
      <b>mobileColor:</b> blue - 
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['h1'].small.fontSize}/{fontConfig['h1'].medium.fontSize}/{fontConfig['h1'].large.fontSize} - 
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['h1'].small.lineHeight}/{fontConfig['h1'].medium.lineHeight}/{fontConfig['h1'].large.lineHeight} - 
      
    </Text>
  </Text>
  
  <Text
    tag="h2"
    mobileColor="green"
    family="Anton"
  >
    <b style={{ width: "55px", display: "inline-block" }}>H2 </b>
    <Text style={{ textTransform: "none" }} tag="span" size="s">
      <b>family:</b> {fontConfig['h2'].family} - 
      <b>mobileColor:</b> greeb
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['h2'].small.fontSize}/{fontConfig['h2'].medium.fontSize}/{fontConfig['h2'].large.fontSize} - 
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['h2'].small.lineHeight}/{fontConfig['h2'].medium.lineHeight}/{fontConfig['h2'].large.lineHeight} - 
    </Text>
  </Text>

  <Text
    tag="h3"
    mobileColor="red"
    // To be phased-out:
    family="Anton"
  >
    <b style={{ width: "55px", display: "inline-block" }}>H3 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> {fontConfig['h3'].family} -  
      <b>mobileColor:</b> red
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['h3'].small.fontSize}/{fontConfig['h3'].medium.fontSize}/{fontConfig['h3'].large.fontSize} - 
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['h3'].small.lineHeight}/{fontConfig['h3'].medium.lineHeight}/{fontConfig['h3'].large.lineHeight} - 
    </Text>
  </Text>

  <Text
    tag="h4"
    family="Anton"
    weight="normal"
    uppercase>
    <b style={{ width: "55px", display: "inline-block" }}>H4 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> {fontConfig['span'].family} -  
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['span'].small.fontSize}/{fontConfig['span'].medium.fontSize}/{fontConfig['span'].large.fontSize} - 
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['span'].small.lineHeight}/{fontConfig['span'].medium.lineHeight}/{fontConfig['span'].large.lineHeight} - 
    </Text>
  </Text>

  <Text tag="p" size="m">
    <span style={{ width: "55px", display: "inline-block" }}>Body</span>
      <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> {fontConfig['p'].family} -  
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['p'].small.fontSize}/{fontConfig['p'].medium.fontSize}/{fontConfig['p'].large.fontSize}
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['p'].small.lineHeight}/{fontConfig['p'].medium.lineHeight}/{fontConfig['p'].large.lineHeight}
      </Text>
    </Text>

    <Text tag="p" style={{ marginTop: "50px"}}>
      To be phased out:
    </Text>

    <Text 
    tag="h5"
    // To be phased-out:
    family="Anton"
    uppercase
    weight="normal">
    <b style={{ width: "55px", display: "inline-block" }}>H5 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> {fontConfig['h5'].family} -  
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['h5'].small.fontSize}/{fontConfig['h5'].medium.fontSize}/{fontConfig['h5'].large.fontSize}
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['h5'].small.lineHeight}/{fontConfig['h5'].medium.lineHeight}/{fontConfig['h5'].large.lineHeight}
    </Text>
  </Text>
  

  <Text tag="h6" 
    // To be phased-out:
    family="Anton" 
    uppercase
    weight="normal">
    <b style={{ width: "55px", display: "inline-block" }}>H6</b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> {fontConfig['h6'].family}
      <br/>
      <b>font size s/m/l breakpoints:</b> {fontConfig['h6'].small.fontSize}/{fontConfig['h6'].medium.fontSize}/{fontConfig['h6'].large.fontSize}
      <br/>
      <b>line height s/m/l breakpoints:</b> {fontConfig['h6'].small.lineHeight}/{fontConfig['h6'].medium.lineHeight}/{fontConfig['h6'].large.lineHeight}
    </Text>
  </Text>
  
</div>
```
