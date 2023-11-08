const { test, expect } = require('@playwright/test');

test.describe('text area component', () => {
  test('text area - Long copy/Message field', async ({ page }) => {

    await page.goto('/#textarea');

    // input required with label and hint
    const specificElement = page.locator('[data-testid="TextArea-example-1"]');
    await expect(specificElement).toBeVisible();

    const inputElement = page.locator('[aria-describedby="textarea-test"]');

    // Get the placeholder attribute
    const placeholderText = await inputElement.getAttribute('placeholder');

    // Verify the placeholder text
    expect(placeholderText).toBe('This is a placeholder');

    await page.locator('[aria-describedby="textarea-test"]').type('This is test text for textarea field');

    await page.close();
  });

  test('text area - Long copy/Message field with error message', async ({ page }) => {

    await page.goto('/#textarea');

    const specificElement = page.locator('[data-testid="TextArea-example-1"]');
    await expect(specificElement).toBeVisible();

    await page.locator('[aria-describedby="textarea-test-2"]').type('This is test text for textarea field');

    // error message should be visible
    await expect(page.locator('[aria-describedby="textarea-test-2"] ~ span[data-test="error-message"]')).toBeVisible();

    await page.close();
  });
});
