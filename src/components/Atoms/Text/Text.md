```js
import fontConfig from  '../../../theme/crTheme/fontConfig';

<div>
  <Text
    tag="h1"
    // TODOL: Do we even need the 'family' prop now, given it should be 100% determined by the tag?
    family="Anton"
    mobileColor="blue"
  >
    <b style={{ width: "100px", display: "inline-block" }}>H1 </b>
    <Text style={{ textTransform: "none" }} tag="span" size="s">
      <b>Family:</b> Anton 
      <b>size:</b>
      Font size: {fontConfig['h1'].small.fontSize};
      Line height: {fontConfig['h1'].small.lineHeight};
      <b>mobileColor:</b> blue
    </Text>
  </Text>
  
  <Text
    tag="h2"
    family="Anton"
    mobileColor="green"
  >
    <b style={{ width: "100px", display: "inline-block" }}>H2 </b>
    <Text style={{ textTransform: "none" }} tag="span" size="s">
      <b>family:</b> Anton <b>size:</b> 64px / 4rem / big

      <b>mobileColor:</b> green
    </Text>
  </Text>

  <Text
    tag="h3"
    family="Anton"
    mobileColor="red"
  >
    <b style={{ width: "100px", display: "inline-block" }}>H3 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> Anton <b>size:</b> 48px / 3rem

      <b>mobileColor:</b> red
    </Text>
  </Text>

  <Text tag="h4" family="Anton" uppercase weight="normal">
    <b style={{ width: "100px", display: "inline-block" }}>H4 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> Anton <b>size:</b> 32px / 2rem
    </Text>
  </Text>

  <Text tag="p" size="m">
    <span style={{ width: "100px", display: "inline-block" }}>Body</span>
      <Text style={{ textTransform: "none" }} tag="span">
        <b>family:</b> Montserrat <b>weight:</b> Regular <b>size:</b> 20px /
        1.25rem
      </Text>
    </Text>

    <Text tag="p" style={{ marginTop: "50px"}}>
      To be phased out:
    </Text>

    <Text tag="h5" family="Anton" uppercase weight="normal">
    <b style={{ width: "100px", display: "inline-block" }}>H5 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> Anton <b>size:</b> 32px / 2rem
    </Text>
  </Text>
  

    <Text tag="h5" family="Anton" uppercase weight="normal">
    <b style={{ width: "100px", display: "inline-block" }}>H6 </b>
    <Text style={{ textTransform: "none" }} tag="span">
      <b>family:</b> Anton <b>size:</b> 32px / 2rem
    </Text>
  </Text>
  
  

</div>
```
