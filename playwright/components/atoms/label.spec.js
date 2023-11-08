const { test, expect } = require('@playwright/test');

test.describe('label component', () => {
  test('label - Wrapping a basic text input', async ({ page }) => {

    await page.goto('/#label');

    // select dropdown menu component-1 should be visible
    const specificElement = page.locator('[data-testid="Label-example-0"]');
    await expect(specificElement).toBeVisible();

    await page.locator('input[name="field-wrapper-test"]').type('This is test text');

    await page.close();
  });

  test('label component - Wrapping a styled input', async ({ page }) => {

    await page.goto('/#label');

    // select dropdown menu component-1 should be visible
    const specificElement = page.locator('[data-testid="Label-example-1"]');
    await expect(specificElement).toBeVisible();

    await page.locator('input[name="field-wrapper-test-1"]').type('This is test text');

    await page.close();
  });
});
