const { test, expect } = require('@playwright/test');

test.describe('accordian component', () => {
  test('accordian', async ({ page, context }) => {
    await page.goto('/#accordion');

    // accordian elements should be visible
    await expect(page.locator('[data-testid="Accordion-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="Accordion-example-1"] [data-preview="Accordion"]')).toBeVisible();
    // dropdown icon should be visible
    await expect(page.locator('[data-testid="Accordion-example-1"] [data-preview="Accordion"] img').first()).toBeVisible();

    // clicking the accordian should show the paragraph
    await page.locator('[data-testid="Accordion-example-1"] [data-preview="Accordion"] img').first().click();
    await expect(page.locator('[data-testid="Accordion-example-1"] [data-preview="Accordion"] p').first()).toBeVisible();

    await page.close();
  });
});
