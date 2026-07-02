const { test, expect } = require('@playwright/test');

test.describe('checkbox', () => {
  test('checkbox component', async ({ page }) => {
    await page.goto('/#checkbox');

    // checkbox component should be visible
    await expect(page.locator('[data-testid="Checkbox-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="Checkbox"]')).toBeVisible();

    // tennis option
    const tennisCheckbox = page.locator('label[data-testid="checkbox-tennis"]');
    await tennisCheckbox.click();
    expect(await tennisCheckbox.locator('input').isChecked()).toBeTruthy();

    // basketball option
    const basketballCheckbox = page.locator('label[data-testid="checkbox-basketball"]');
    await basketballCheckbox.click();
    expect(await basketballCheckbox.locator('input').isChecked()).toBeTruthy();

    // cycling option
    const cyclingCheckbox = page.locator('label[data-testid="checkbox-cycling"]');
    await cyclingCheckbox.click();
    expect(await cyclingCheckbox.locator('input').isChecked()).toBeTruthy();

    // football checkbox
    const footballCheckbox = page.locator('label[data-testid="checkbox-football"]');
    await footballCheckbox.click();
    expect(await footballCheckbox.locator('input').isChecked()).toBeTruthy();

    // terms and conditions (with long label containing links)
    const termsCheckbox = page.locator('label[data-testid="checkbox-terms"]');
    await termsCheckbox.click();
    expect(await termsCheckbox.locator('input').isChecked()).toBeTruthy();

    // ensure checkboxes are unchecked when clicked again
    // tennis option
    await tennisCheckbox.click();
    expect(await tennisCheckbox.locator('input').isChecked()).toBeFalsy();

    // basketball option
    await basketballCheckbox.click();
    expect(await basketballCheckbox.locator('input').isChecked()).toBeFalsy();

    // cycling option
    await cyclingCheckbox.click();
    expect(await cyclingCheckbox.locator('input').isChecked()).toBeFalsy();

    // football checkbox
    await footballCheckbox.click();
    expect(await footballCheckbox.locator('input').isChecked()).toBeFalsy();

    // terms and conditions
    await termsCheckbox.click();
    expect(await termsCheckbox.locator('input').isChecked()).toBeFalsy();

    await page.close();
  });
});
