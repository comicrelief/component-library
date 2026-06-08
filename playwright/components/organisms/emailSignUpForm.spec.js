const { test, expect } = require('@playwright/test');

test.describe('Email Signup Form component', () => {
  test('Email SignUp Form', async ({ page }) => {
    await page.goto('/#emailsignupform');

    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name')).toBeVisible();
    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name')).toBeVisible();
    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"] #email')).toBeVisible();

    // firstname field
    const firstnamePlaceholder = page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name');

    // Get the 'placeholder' attribute
    const placeholderAttribute = await firstnamePlaceholder.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(placeholderAttribute).toBe('Enter your first name');

    // validate firstname field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').type('dwe$%£34');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').type('dwe$%£34');

    // firstname with special chars should show error message
    await expect(page.locator('label[for="first-name"]  div ~ span')).toContainText('This field only accepts letters and \' - and must start with a letter');

    // firstname starting with a space should show error message
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').type(' test firstname');
    await expect(page.locator('label[for="first-name"]  div ~ span')).toContainText('This field only accepts letters and \' - and must start with a letter');

    // firstname starting with numbers should show error message
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').type('1234567');
    await expect(page.locator('label[for="first-name"]  div ~ span')).toContainText('This field only accepts letters and \' - and must start with a letter');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').fill('');

    // lastname
    const lastnamePlaceholder = page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name');

    // Get the 'placeholder' attribute
    const lastnamePlaceholderAttribute = await lastnamePlaceholder.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(lastnamePlaceholderAttribute).toBe('Enter your last name');

    // validate lastname field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').type('dwe$%£34');

    // lastname with special chars should show error message
    await expect(page.locator('label[for="last-name"]  div ~ span')).toContainText('This field only accepts letters and \' - and must start with a letter');

    // lastname starting with a space should show error message
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').type(' test firstname');
    await expect(page.locator('label[for="last-name"]  div ~ span')).toContainText('This field only accepts letters and \' - and must start with a letter');

    // lastname starting with numbers should show error message
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').type('1234567');
    await expect(page.locator('label[for="last-name"]  div ~ span')).toContainText('This field only accepts letters and \' - and must start with a letter');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').fill('');

    // email
    const emailPlaceholder = page.locator('[data-testid="EmailSignUpForm-example-1"] #email');

    // Get the 'placeholder' attribute
    const emailPlaceholderAttribute = await emailPlaceholder.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(emailPlaceholderAttribute).toBe('example@youremail.com');

    // validate email field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').type('email-signup@email.sls.comicrelief.com');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').fill(''); // clear the email field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').click();
    await expect(page.locator('label[for="email"]  div ~ span')).toContainText('Please enter your email address');

    // email that has : should show error message
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').fill(''); // clear the email field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').type('test:@£$%£test@comicrelief.com');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').click();
    await expect(page.locator('label[for="email"]  div ~ span')).toContainText('Please enter a valid email address');

    // email that has mix of special chars that's valid and not valid should show error message
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').fill(''); // clear the email field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').type('Test0-9!#$%&\'*+/=?^_{|}~-@comicrelief_9-8.com.uk');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').click();
    await expect(page.locator('label[for="email"]  div ~ span')).toContainText('Please enter a valid email address');

    // enter valid inputs should not show error messages
    //
    // EmailSignUpForm runs react-hook-form in mode: 'onBlur' (see EmailSignUpForm.js),
    // so a field's validation - and therefore whether its error message clears - only
    // re-runs once that field actually blurs. Each field above this point was left holding
    // an invalid value with a visible error (e.g. first-name still had '1234567' from the
    // numeric-input check at line 35-37). `.fill('')` + `.type(...)` only fires React's
    // onChange handlers, not a blur, so the stale error would otherwise persist and
    // react-hook-form's validity state wouldn't reflect the freshly-typed valid value.
    // `.blur()` triggers a real native blur/focusout that bubbles up to where React's
    // synthetic event system listens, so the registered `onBlur` handler runs and clears it.
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').type('test firstname');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').blur();

    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').type('test lastname');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').blur();

    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').fill(''); // clear the email field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').type('email-signup@email.sls.comicrelief.com');
    // Blur the final field too, so handleSubmit (EmailSignUpForm.js:24) sees a
    // fully-validated, up-to-date form before we click submit.
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').blur();

    // submit the ESU form
    await page.locator('[data-testid="EmailSignUpForm-example-1"] button[type="submit"]').click();

    await page.close();
  });
});
