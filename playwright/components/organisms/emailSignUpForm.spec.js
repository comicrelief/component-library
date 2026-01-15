const { test, expect } = require('@playwright/test');

test.describe('Email Signup Form component', () => {
  test('Email SignUp Form', async ({ page }) => {
    await page.goto('/#emailsignupform');

    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name')).toBeVisible();
    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name')).toBeVisible();
    await expect(page.locator('[data-testid="EmailSignUpForm-example-1"] #email')).toBeVisible();

    // firstname field
    const firstnamePlaceholder = page.locator('#first-name');

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
    const lastnamePlaceholder = page.locator('#last-name');

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
    const emailPlaceholder = page.locator('#email');

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
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #first-name').type('test firstname');

    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').fill('');
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #last-name').type('test lastname');

    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').fill(''); // clear the email field
    await page.locator('[data-testid="EmailSignUpForm-example-1"] #email').type('email-signup@email.sls.comicrelief.com');

    // submit the ESU form
    await page.locator('[data-testid="EmailSignUpForm-example-1"] button[type="submit"]').click();

    await page.close();
  });
});
