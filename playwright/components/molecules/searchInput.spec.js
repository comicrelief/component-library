const { test, expect } = require('@playwright/test');

test.describe('search input component', () => {
  test('search input', async ({ page, context }) => {
    await page.goto('/#searchinput');

    // accordian elements should be visible
    await expect(page.locator('[data-testid="SearchInput-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="SearchInput"]')).toBeVisible();

    const inputElement = page.locator('#search');

    // Get the 'placeholder' attribute
    const placeholderAttribute = await inputElement.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(placeholderAttribute).toBe('Search...');

    await page.locator('#search').type('Red Nose Day');

    await page.close();
  });
});
