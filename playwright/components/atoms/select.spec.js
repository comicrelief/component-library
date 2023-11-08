const { test, expect } = require('@playwright/test');

test.describe('select component', () => {
  test('select dropdown menu', async ({ page }) => {

    await page.goto('/#select');

    // select dropdown menu component-1 should be visible
    await expect(page.locator('[data-testid="Select-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="Select"]')).toBeVisible();

    // ensure select dropdown values are visible
    await page.locator('[data-preview="Select"] label:nth-child(2) > select').click();

    await page.locator('[data-preview="Select"] label:nth-child(2) > select').selectOption('The first option');
    await expect(page.locator('[data-preview="Select"] label:nth-child(2) > select > option[value="Option one"]')).toHaveValue('Option one');

    await page.locator('[data-preview="Select"] label:nth-child(2) > select').selectOption('The second option');
    await expect(page.locator('[data-preview="Select"] label:nth-child(2) > select > option[value="Option two"]')).toHaveValue('Option two');

    await page.locator('[data-preview="Select"] label:nth-child(2) > select').selectOption('The third option');
    await expect(page.locator('[data-preview="Select"] label:nth-child(2) > select > option[value="Option three"]')).toHaveValue('Option three');

    await page.locator('[data-preview="Select"] label:nth-child(2) > select').selectOption('The fourth option');
    await expect(page.locator('[data-preview="Select"] label:nth-child(2) > select > option[value="Option four"]')).toHaveValue('Option four');

    await page.locator('[data-preview="Select"] label:nth-child(4) > select').selectOption('The second option');

    const optionElement = page.locator('[data-preview="Select"] label:nth-child(4) > select > option[value="Option two"]');
    const isSelected = await optionElement.evaluate(option => option.selected);

    expect(isSelected).toBe(true);

    await page.close();
  });
});
