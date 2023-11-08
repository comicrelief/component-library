const { test, expect } = require('@playwright/test');

test.describe('header component', () => {
  test('header - Comic Relief header', async ({ page }) => {

    await page.goto('/#header');

    await expect(page.locator('[data-testid="Header-example-1"]')).toBeVisible();

    await expect(page.locator('[data-testid="Header-example-1"] header[role="banner"] a[href="/donation"]')).toBeVisible();
    // CR logo
    await expect(page.locator('[data-testid="Header-example-1"] [title="Go to Comic Relief homepage"]')).toBeVisible();

    await page.close();
  });
});
