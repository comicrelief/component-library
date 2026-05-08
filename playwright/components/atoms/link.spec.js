const { test, expect } = require('@playwright/test');

test.describe('link component', () => {
  test('link', async ({ page, context }) => {

    await page.goto('/#link');

    // select dropdown menu component-1 should be visible
    const specificElement = page.locator('[data-testid="Link-example-0"]');
    await expect(specificElement).toBeVisible();

    const [popup] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new page (popup)
      page.click('[data-preview="Link"] div:nth-child(1) > a'), // Click the link
    ]);

    // Check if the popup is a new window
    const isNewWindow = await popup.evaluate(() => window !== window.opener);

    expect(isNewWindow).toBe(true);

    await page.close();
  });

  test('link standard icon', async ({ page, context }) => {

    await page.goto('/#link');

    // select dropdown menu component-1 should be visible
    const specificElement = page.locator('[data-testid="Link-example-0"]');
    await expect(specificElement).toBeVisible();

    // link standard icon should be visible
    await expect(page.locator('[data-preview="Link"] div:nth-child(2) > a > span[type="standard"]')).toBeVisible();

    const [popup] = await Promise.all([
      context.waitForEvent('page'), // Wait for a new page (popup)
      page.click('[data-preview="Link"] div:nth-child(2) > a'), // Click the link
    ]);

    // Check if the popup is a new window
    const isNewWindow = await popup.evaluate(() => window !== window.opener);

    expect(isNewWindow).toBe(true);

    await page.close();
  });
});
