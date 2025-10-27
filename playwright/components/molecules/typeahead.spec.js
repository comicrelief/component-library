const { test, expect } = require('@playwright/test');

test.describe('typeahead component', () => {
  test('typeahead', async ({ page }) => {
    await page.goto('/#typeahead');

    await expect(page.locator('[data-testid="Typeahead-example-1"]')).toBeVisible();

    await expect(page.locator('[data-preview="Typeahead"]')).toBeVisible();

    const inputElement = page.locator('#typeahead-test');

    // Get the 'placeholder' attribute
    const placeholderAttribute = await inputElement.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(placeholderAttribute).toBe('Start searching...');

    // type a word and typeahead should give options
    await page.locator('input#typeahead-test').type('red nos');
    await expect(page.locator('label[for="typeahead-test"] ~ div > ul[role="listbox"]')).toBeVisible();
    await expect(page.locator('label[for="typeahead-test"] ~ div > ul[role="listbox"] > li[id="option-0"]')).toContainText('red nose');

    await page.close();
  });
});
