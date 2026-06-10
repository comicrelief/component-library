# Accordion

```js
import Text from '../../Atoms/Text/Text';

<Accordion
  title={
    <Text family="Anton" size="l" uppercase>
      I am the title
    </Text>
  }
  >
 <Text tag="p" size="s">Name, surname, email and billing address We need these to process your payment, create a receipt and send it to you. Establishment information We use this information to understand which institutions (e.g. schools, companies) raise money for us. Your details will be kept safe and never shared with other organisations; see our Privacy Policy for more information</Text>
</Accordion>
```

```js
import Text from '../../Atoms/Text/Text';

<Accordion
  contentBottomPadding="100px"
  title={
    <Text family="Anton" size="l" uppercase>
      I am the title
    </Text>
  }
  >
  
  <Text tag="p" size="s">Customised bottom padding here!</Text>
  
  <Text tag="p" size="s">
    <a href="https://www.google.com">A plain anchor link, made to resemble a Link component</a>.
  </Text>
</Accordion>
```

```js
import Text from '../../Atoms/Text/Text';
<div style={{width: '752px'}}>
<Accordion
  contentBottomPadding="100px"
  title={
    <Text textTag="p" weight="700">
      I am a title with an overridden text type and weight, to 'p' 700 which is the new donate preference, and in a width simulating our real world use on desktop (NB because width is fixed, this is only to demonstrate desktop mode, don't use for examining mobile view)
    </Text>
  }
  >
  <Text tag="p" size="s">
    A STAR template answer is a structured way of responding to behavioural interview questions. Here's what it stands for:
    <br />
    <br />
    S - Situation: Begin by setting the scene. Describe the context or situation you were in.
    <br />
    <br />
    T - Task: Next, explain the task or challenge you were faced with. What needed to be accomplished?
    <br />
    <br />
    A - Action: Then, detail the actions you took to address the situation or task. What specific steps did you take, and why?
    <br />
    <br />
    R - Result: Finally, discuss the results or outcomes of your actions. What happened as a result of your efforts? Try to quantify the impact if possible.
    <br />
    <br />
    Using the STAR template helps you provide a clear and concise response that highlights your abilities and experiences effectively. It guides you through structuring your answer in a way that makes it easy for the interviewer to understand and evaluate your skills and competencies.
  </Text>
</Accordion>
</div>
```
