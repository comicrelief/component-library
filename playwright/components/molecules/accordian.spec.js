const { test, expect } = require('@playwright/test');

test.describe('accordian component', () => {
  test('accordian', async ({ page, context }) => {

    await page.goto('/#accordion');

    // accordian elements should be visible
    await expect(page.locator('[data-testid="Accordion-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="Accordion"]')).toBeVisible();
    // dropdown svg icon should be visible
    await expect(page.locator('[data-preview="Accordion"] svg')).toBeVisible();

    // clicking the accordian should show the paragraph
    await page.locator('[data-preview="Accordion"] svg').click();
    await expect(page.locator('[data-preview="Accordion"] p')).toBeVisible();

    await page.close();
  });
});
