const { test, expect } = require('@playwright/test');

test.describe('checkbox', () => {
  test('checkbox component', async ({ page }) => {
    await page.goto('/#checkbox');

    // checkbox component should be visible
    await expect(page.locator('[data-testid="Checkbox-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="Checkbox"]')).toBeVisible();

    // ensure checkboxes are checked when clicked
    // tennis option
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(2)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(2)')).toHaveValue('Tennis');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(2)').isChecked()).toBeTruthy();

    // basketball option
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(3)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(3)')).toHaveValue('Basketball');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(3)').isChecked()).toBeTruthy();

    // cycling option
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(4)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(4)')).toHaveValue('Cycling');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(4)').isChecked()).toBeTruthy();

    // football checkbox
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(5)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(5)')).toHaveValue('Football (with wacky styling to test props)');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(5)').isChecked()).toBeTruthy();

    // terms and conditions
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(8)').click();
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(8)').isChecked()).toBeTruthy();

    // ensure checkboxes are unchecked when clicked again
    // tennis option
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(2)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(2)')).toHaveValue('Tennis');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(2)').isChecked()).toBeFalsy();

    // basketball option
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(3)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(3)')).toHaveValue('Basketball');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(3)').isChecked()).toBeFalsy();

    // cycling option
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(4)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(4)')).toHaveValue('Cycling');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(4)').isChecked()).toBeFalsy();

    // football checkbox
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(5)').click();
    await expect(page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(5)')).toHaveValue('Football');
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(5)').isChecked()).toBeFalsy();

    // terms and conditions
    await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(8)').click();
    expect(await page.locator('[data-testid="Checkbox-example-1"] div > label:nth-child(8)').isChecked()).toBeFalsy();

    await page.close();
  });
});
