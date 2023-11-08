const { test, expect } = require('@playwright/test');

test.describe('input component', () => {
  test('input required with label and hint', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('input#input-example-1');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="input-example-1"]');

    // Get the placeholder attribute
    const placeholderText = await inputElement.getAttribute('placeholder');

    // Verify the placeholder text
    expect(placeholderText).toBe('This is the hint text');

    await page.locator('#input-example-1').type('This is test input text');

    await page.close();
  });

  test('input with error message', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('input#input-example-2');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="input-example-2"]');

    // Get the placeholder attribute
    const placeholderText = await inputElement.getAttribute('placeholder');

    // Verify the placeholder text
    expect(placeholderText).toBe('This is the hint text');

    await page.locator('#input-example-2').type('This is test input text');

    // error message should be visible
    await expect(page.locator('[data-preview="Input"] > div > label > span[data-test="error-message"]')).toBeVisible();

    await page.close();
  });

  test('Simple input (optional)', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('input#input-example-3');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="input-example-3"]');

    // Get the 'name' attribute
    const nameAttribute = await inputElement.getAttribute('name');

    // Verify the 'name' attribute
    expect(nameAttribute).toBe('fullname');

    await page.locator('#input-example-3').type('This is test input text');

    await page.close();
  });

  test('Simple input (required)', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('input#input-example-4');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="input-example-4"]');

    // Get the 'name' attribute
    const nameAttribute = await inputElement.getAttribute('name');

    // Verify the 'name' attribute
    expect(nameAttribute).toBe('fullname');

    await page.locator('#input-example-4').type('This is test input text');

    await page.close();
  });

  test('Input Label with markup', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('input#input-example-5');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="input-example-5"]');

    // Get the 'name' attribute
    const nameAttribute = await inputElement.getAttribute('name');

    // Verify the 'name' attribute
    expect(nameAttribute).toBe('fullname');

    await page.locator('#input-example-5').type('This is test input text');

    await page.close();
  });

  test('Input label as React element', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('input#input-example-6');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="input-example-6"]');

    // Get the 'name' attribute
    const nameAttribute = await inputElement.getAttribute('name');

    // Verify the 'name' attribute
    expect(nameAttribute).toBe('email');

    await page.locator('#input-example-6').type('This is test input text');

    await page.close();
  });

  test('Input with prefix', async ({ page }) => {

    await page.goto('/#input');

    // input required with label and hint
    const specificElement = page.locator('#price');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="price"]');

    // Get the 'name' attribute
    const nameAttribute = await inputElement.getAttribute('name');

    const placeholderText = await inputElement.getAttribute('placeholder');

    // Verify the placeholder text
    expect(placeholderText).toBe('0.00');

    // Verify the 'name' attribute
    expect(nameAttribute).toBe('price');

    await page.locator('#price').type('15.99');

    await page.close();
  });
});
