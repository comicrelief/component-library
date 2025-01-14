const { test, expect } = require('@playwright/test');

test.describe('header component', () => {
  test('Comic Relief header', async ({ page }) => {
    await page.goto('/#header');

    await expect(page.locator('[data-testid="Header-example-1"]')).toBeVisible();
    // donate locator
    await expect(page.locator('[data-testid="Header-example-1"] header[role="banner"] a[href="/donation"]')).toBeVisible();
    // CR logo
    await expect(page.locator('[data-testid="Header-example-1"] [title="Go to Comic Relief homepage"]')).toBeVisible();
    // shop
    await expect(page.locator('[data-testid="Header-example-1"] header[role="banner"] a[href*="/shop"]')).toBeVisible();

    await page.close();
  });

  test('Sport Relief header', async ({ page }) => {
    await page.goto('/#header');

    await expect(page.locator('[data-testid="Header-example-3"]')).toBeVisible();
    // donate locator
    await expect(page.locator('[data-testid="Header-example-3"] header[role="banner"] a[href="/donation"]')).toBeVisible();
    // SR logo
    await expect(page.locator('[data-testid="Header-example-3"] header[role="banner"] a[href="/sportrelief"]')).toBeVisible();
    // shop
    await expect(page.locator('[data-testid="Header-example-3"] header[role="banner"] a[href*="/shop"]')).toBeVisible();

    await page.close();
  });

  test('Pride header', async ({ page }) => {
    await page.goto('/#header');

    await expect(page.locator('[data-testid="Header-example-5"]')).toBeVisible();
    // donate locator
    await expect(page.locator('[data-testid="Header-example-5"] header[role="banner"] a[href="/donation"]')).toBeVisible();
    // CR logo
    await expect(page.locator('[data-testid="Header-example-5"] [title="Go to Comic Relief homepage"]')).toBeVisible();
    // shop
    await expect(page.locator('[data-testid="Header-example-5"] header[role="banner"] a[href*="/shop"]')).toBeVisible();

    await page.close();
  });

  test('Comic Relief header with Search', async ({ page }) => {
    await page.goto('/#header');

    await expect(page.locator('[data-testid="Header-example-7"]')).toBeVisible();
    // donate locator
    await expect(page.locator('[data-testid="Header-example-7"] header[role="banner"] a[href="/donation"]')).toBeVisible();
    // CR logo
    await expect(page.locator('[data-testid="Header-example-7"] [title="Go to Comic Relief homepage"]')).toBeVisible();
    // shop
    await expect(page.locator('[data-testid="Header-example-7"] header[role="banner"] a[href*="/shop"]')).toBeVisible();
    // search
    await expect(page.locator('[data-testid="Header-example-7"] header[role="banner"] a[href="/search"]')).toBeVisible();

    await page.close();
  });

  test('Comic Relief header with Search and Shop', async ({ page }) => {
    await page.goto('/#header');

    await expect(page.locator('[data-testid="Header-example-9"]')).toBeVisible();
    // donate locator
    await expect(page.locator('[data-testid="Header-example-9"] header[role="banner"] a[href="/donation"]')).toBeVisible();
    // CR logo
    await expect(page.locator('[data-testid="Header-example-9"] [title="Go to Comic Relief homepage"]')).toBeVisible();
    // shop icon
    await expect(page.locator('[data-testid="Header-example-9"] header[role="banner"] [title="Shop"]')).toBeVisible();
    // search
    await expect(page.locator('[data-testid="Header-example-9"] header[role="banner"] a[href="/search"]')).toBeVisible();

    await page.close();
  });
});
