const { test, expect } = require('@playwright/test');

test.describe('school lookup component', () => {
  test('school lookup', async ({ page, context }) => {

    await page.goto('/#schoollookup');

    // school lookup elements should be visible
    await expect(page.locator('[data-testid="SchoolLookup-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="SchoolLookup"]')).toBeVisible();

    const inputElement = page.locator('[aria-describedby="school-lookup"]');

    // Get the 'placeholder' attribute
    const placeholderAttribute = await inputElement.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(placeholderAttribute).toBe('Type to start search');

    await page.locator('#school-lookup').type('St Paul');
    await expect(page.locator('label[for="school-lookup"] ~ div > ul[role="listbox"]')).toBeVisible();
    await page.locator('label[for="school-lookup"] ~ div > ul[role="listbox"] > li[id="option-6"]').click();

    await page.close();
  });
});
