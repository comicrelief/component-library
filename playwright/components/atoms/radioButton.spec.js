const { test, expect } = require('@playwright/test');

test.describe('radio button component', () => {
  test('radio button', async ({ page }) => {

    await page.goto('/#radiobutton');

    // radio button component should be visible
    await expect(page.locator('[data-testid="RadioButton-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="RadioButton"]')).toBeVisible();

    // ensure radio buttons are checked when clicked
    // male option
    const maleRadio = page.locator('label[data-testid="radio-male"]');
    await maleRadio.click();
    expect(await maleRadio.locator('input').isChecked()).toBeTruthy();

    // female option
    const femaleRadio = page.locator('label[data-testid="radio-female"]');
    await femaleRadio.click();
    expect(await femaleRadio.locator('input').isChecked()).toBeTruthy();

    // other option
    const otherRadio = page.locator('label[data-testid="radio-other"]');
    await otherRadio.click();
    expect(await otherRadio.locator('input').isChecked()).toBeTruthy();

    await page.close();
  });
});
