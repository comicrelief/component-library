const { test, expect } = require('@playwright/test');

test.describe('select component', () => {
  test('select dropdown menu', async ({ page }) => {

    await page.goto('/#select');

    // select dropdown menu component-1 should be visible
    await expect(page.locator('[data-testid="Select-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="Select"]')).toBeVisible();

    // get the first select (DROPDOWN MENU)
    const selectOne = page.locator('select[data-testid="select-one"]');

    await selectOne.selectOption('The first option');
    await expect(selectOne).toHaveValue('Option one');

    await selectOne.selectOption('The second option');
    await expect(selectOne).toHaveValue('Option two');

    await selectOne.selectOption('The third option');
    await expect(selectOne).toHaveValue('Option three');

    await selectOne.selectOption('The fourth option');
    await expect(selectOne).toHaveValue('Option four');

    // get the second select (DROPDOWN MENU with error)
    const selectTwo = page.locator('select[data-testid="select-two"]');
    await selectTwo.selectOption('The second option');
    await expect(selectTwo).toHaveValue('Option two');

    await page.close();
  });
});
