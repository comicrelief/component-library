const { test, expect } = require('@playwright/test');

test.describe('dynamic gallery component', () => {
  test('dynamic gallery', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    await page.close();
  });
});
