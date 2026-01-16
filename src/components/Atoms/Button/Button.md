```js

import buttonTypes from '../../../theme/crTheme/buttonTypes';

<>
    <h1>Primary</h1>
    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button">Primary red button (default)</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" disabled>Primary red button (default): disabled</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="black">Primary black button</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="black" disabled>Primary black button: disabled</Button>
    </div>

    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="white">Primary white button</Button>
    </div>

    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="white" disabled>Primary white button: disabled</Button>
    </div>

    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="non-existent-colour">Using a non-existent colour will default to red</Button>
    </div>

    <br/>
    <h1>Secondary</h1>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px", borderRadius: "5px"}}>
        <Button type="button" buttonType={buttonTypes.SECONDARY}>Secondary red button</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" buttonType={buttonTypes.SECONDARY} disabled>Secondary red button: disabled</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="black" buttonType={buttonTypes.SECONDARY}>Secondary black button</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="black" buttonType={buttonTypes.SECONDARY} disabled>Secondary black button: disabled</Button>
    </div>


    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="white" buttonType={buttonTypes.SECONDARY} buttonType={buttonTypes.SECONDARY}>Secondary white button</Button>
    </div>

    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="white" buttonType={buttonTypes.SECONDARY} disabled>Secondary white button: disabled</Button>
    </div>

    <br/>
    <h1>Teritary</h1>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" buttonType={buttonTypes.TERTIARY}>Tertiary red button</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" buttonType={buttonTypes.TERTIARY} disabled>Tertiary red button: disabled</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="black" buttonType={buttonTypes.TERTIARY}>Tertiary black button</Button>
    </div>

    <div style={{backgroundColor:"#ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="black" buttonType={buttonTypes.TERTIARY} disabled>Tertiary black button: disabled</Button>
    </div>


    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="white" buttonType={buttonTypes.TERTIARY} buttonType={buttonTypes.TERTIARY}>Tertiary white button</Button>
    </div>

    <div style={{backgroundColor:"#222222", padding: "15px", marginBottom: "10px", borderRadius: "5px"}}>
        <Button type="button" color="white" buttonType={buttonTypes.TERTIARY} disabled>Tertiary white button: disabled</Button>
    </div>
</>


```

```js
<Button wrapper>My button as a span</Button>
```

```js
<Button type="button" fullWidth>Full-width button</Button>
```