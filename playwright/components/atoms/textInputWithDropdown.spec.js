const { test, expect } = require('@playwright/test');

test.describe('Text Input With Dropdown Component', () => {
  test('TextInputWithDropdown component', async ({ page }) => {

    await page.goto('/#textinputwithdropdown');

    const specificElement = page.locator('[data-testid="TextInputWithDropdown-example-1"]');
    await expect(specificElement).toBeVisible();

    await page.locator('label[for="input-with-dropdown"]').type('This is test text for textarea field');

    // Text input with dropdown
    await page.locator('label[for="input-with-dropdown"]').type('test');

    // ensure select dropdown values are visible
    await expect(page.locator('ul[role="listbox"]')).toBeVisible();

    await page.locator('ul[role="listbox"] > li[id="option-1"]').click();

    await page.close();
  });
});
