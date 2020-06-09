```js
initialState = { marketingPreferences: {} };

const onSubmitPreferences = data => console.log(data);

const submit = () => {
  console.log(onSubmitPreferences);
};
<form onSubmit={submit}>
  <MarketingPreferences />

  <button type="button">Submit Form</button>
</form>;
```
