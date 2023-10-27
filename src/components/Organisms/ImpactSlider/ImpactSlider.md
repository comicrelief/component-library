# Impact Slider

```js

const fakeItems = [
  { amount: 111, title: 'Some title 111', copy: 'Some copy 111' },
  { amount: 222, title: 'Some title 222', copy: 'Some copy 222' },
  { amount: 333, title: 'Some title 333', copy: 'Some copy 333' },
  { amount: 444, title: 'Some title 444', copy: 'Some copy 444' }
];

<ImpactSlider
  copy={`<p>Use this slider to see how your donation can make a difference to lives in the UK and around the globe this winter.</p>`}
  heading="Your donations will change lives"
  donateLink="https://donation-staging.spa.comicrelief.com/"
  rowID="to-come-from-the-cms"
  clientID="donate" // to-do: is this really required?
  items={fakeItems}
/>
```
