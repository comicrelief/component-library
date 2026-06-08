# Checklist Manual Organisms

# Organisms
- [ ] Organisms test run local
- [ ] Organisms test run remote

## Results 1
- [X] js export file diff = Identical
- [X] js example vs md example = Same examples.
- [X] playwright test = no test

## Results 2
- [X] js export file diff = only CSS "&" change for Styled Components 6
- [X] js example vs md example = Same examples
- [X] playwright test = Identical

## Results 3
- [X] js export file diff = Identical
- [X] js example vs md example = Same examples.
- [X] playwright test = Identical

### CookieBanner
- [X] js export file diff = Identical
- [X] js example vs md example = Same examples.
- [X] playwright test = no test

### Donate
- [X] js export file diff = Identical
- [X] js example vs md example = Same examples
- [X] playwright test = only test-id numbers changed

### DonateBanner
- [X] js export file diff = Identical
- [X] js example vs md example = needs looking at
- [X] playwright test = no test

### DynamicGallery
- [X] js export file diff = Identical
- [X] js example vs md example = Identical
- [ ] playwright test = same but more specificity around testid

### EmailBanner
- [X] js export file diff = Identical
- [X] js example vs md example = needs looking at
- [X] playwright test = Identical

### EmailSignUp !!!!!
- [X] js export file diff => tiny change => removed unneeded {} wrapper for RichText prop
- [X] js example vs md example = Same
- [X] playwright test = changes made as original test gets stuck / fails:
await page.evaluate(sel => document.querySelector(sel).dispatchEvent(new FocusEvent('focusout', { bubbles: true })), '[data-testid="EmailSignUpForm-example-1"] #first-name');

### Footer
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [X] playwright test = just syntax change to testid

### FooterNew
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [X] playwright test = just syntax change to testid

### Header
- [X] js export file diff = Identical
- [X] js example vs md example: Same but:
title, topCopy, privacyCopy, successCopy, plus initialState = ... are dead code in the Header.md example.
- [X] playwright test = just syntax change to testid

### Header2025
- [X] js export file diff = Identical
- [X] js example vs md example = Same, but with dead code similar to Header
- [X] playwright test = no test

### ImpactSlider
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [ ] playwright test = changes as failing around new dom structure and clicking the slider not sequencing.

### MarketingPreferencesDS
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [X] playwright test = Identical

### Membership
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [X] playwright test = Identical

### RichtextCarousel
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [X] playwright test = no test

### WYMDCarousel
- [X] js export file diff = Identical
- [X] js example vs md example = Same
- [X] playwright test = no test

