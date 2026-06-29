const { test, expect } = require('@playwright/test');

test.describe('checkbox', () => {
  test('checkbox component', async ({ page }) => {
    await page.goto('/#checkbox');

    // checkbox component should be visible
    await expect(page.locator('[data-testid="Checkbox-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="Checkbox"]')).toBeVisible();

    // Get all labels within the preview (they're inside ExampleContainers now)
    const labels = page.locator('[data-preview="Checkbox"] label');

    // tennis option (1st checkbox)
    await labels.nth(0).click();
    await expect(labels.nth(0)).toHaveValue('Tennis');
    expect(await labels.nth(0).locator('input').isChecked()).toBeTruthy();

    // basketball option (2nd checkbox)
    await labels.nth(1).click();
    await expect(labels.nth(1)).toHaveValue('Basketball');
    expect(await labels.nth(1).locator('input').isChecked()).toBeTruthy();

    // cycling option (3rd checkbox)
    await labels.nth(2).click();
    await expect(labels.nth(2)).toHaveValue('Cycling');
    expect(await labels.nth(2).locator('input').isChecked()).toBeTruthy();

    // football checkbox (4th checkbox)
    await labels.nth(3).click();
    await expect(labels.nth(3)).toHaveValue('Football (with wacky styling to test props)');
    expect(await labels.nth(3).locator('input').isChecked()).toBeTruthy();

    // terms and conditions (7th checkbox - skipping the long label in between)
    await labels.nth(6).click();
    expect(await labels.nth(6).locator('input').isChecked()).toBeTruthy();

    // ensure checkboxes are unchecked when clicked again
    // tennis option
    await labels.nth(0).click();
    await expect(labels.nth(0)).toHaveValue('Tennis');
    expect(await labels.nth(0).locator('input').isChecked()).toBeFalsy();

    // basketball option
    await labels.nth(1).click();
    await expect(labels.nth(1)).toHaveValue('Basketball');
    expect(await labels.nth(1).locator('input').isChecked()).toBeFalsy();

    // cycling option
    await labels.nth(2).click();
    await expect(labels.nth(2)).toHaveValue('Cycling');
    expect(await labels.nth(2).locator('input').isChecked()).toBeFalsy();

    // football checkbox
    await labels.nth(3).click();
    await expect(labels.nth(3)).toHaveValue('Football (with wacky styling to test props)');
    expect(await labels.nth(3).locator('input').isChecked()).toBeFalsy();

    // terms and conditions
    await labels.nth(6).click();
    expect(await labels.nth(6).locator('input').isChecked()).toBeFalsy();

    await page.close();
  });
});
