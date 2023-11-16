const { test, expect } = require('@playwright/test');

test.describe('footer component', () => {
  test('Standard footer', async ({ page }) => {

    await page.goto('/#footer');

    await expect(page.locator('[data-testid="Footer-example-1"]')).toBeVisible();
    // footer social icons should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(2) > footer[role="banner"] [title="Check out our Facebook page"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(2) > footer[role="banner"] [title="Check out our Instagram account"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(2) > footer[role="banner"] [title="Check out our Twitter account"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(2) > footer[role="banner"] [title="Check out our YouTube channel"]')).toBeVisible();

    // CR logo in the footer should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(2) > footer[role="banner"] [title="Go to Comic Relief homepage"]')).toBeVisible();

    // footer menu should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(2) > footer[role="banner"] [aria-label="main-menu"]')).toBeVisible();

    await page.close();
  });

  test('Overrides allowList functionality', async ({ page }) => {

    await page.goto('/#footer');

    await expect(page.locator('[data-testid="Footer-example-1"]')).toBeVisible();
    // footer social icons should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [title="Check out our Facebook page"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [title="Check out our Instagram account"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [title="Check out our Twitter account"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [title="Check out our YouTube channel"]')).toBeVisible();

    // CR logo in the footer should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [title="Go to Comic Relief homepage"]')).toBeVisible();

    // footer menu should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [aria-label="main-menu"]')).toBeVisible();

    await page.close();
  });

  test('additional legal line footer', async ({ page }) => {

    await page.goto('/#footer');

    await expect(page.locator('[data-testid="Footer-example-1"]')).toBeVisible();

    // legal line to the top of the footer should be present
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(6) > footer[role="banner"] > div > p')).toContainText('MR. MEN ™ LITTLE MISS ™ © 2022 THOIP (a SANRIO Company). All rights reserved.');

    // footer social icons should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(4) > footer[role="banner"] [title="Check out our Facebook page"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(6) > footer[role="banner"] [title="Check out our Instagram account"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(6) > footer[role="banner"] [title="Check out our Twitter account"]')).toBeVisible();
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(6) > footer[role="banner"] [title="Check out our YouTube channel"]')).toBeVisible();

    // CR logo in the footer should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(6) > footer[role="banner"] [title="Go to Comic Relief homepage"]')).toBeVisible();

    // footer menu should be visible
    await expect(page.locator('[data-preview="Footer"] > div > div:nth-child(6) > footer[role="banner"] [aria-label="main-menu"]')).toBeVisible();

    await page.close();
  });
});
