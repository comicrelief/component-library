const { test, expect } = require('@playwright/test');

test.describe('radio button component', () => {
  test('radio button', async ({ page }) => {

    await page.goto('/#radiobutton');

    // confetti component should be visible
    await expect(page.locator('[data-testid="RadioButton-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="RadioButton"]')).toBeVisible();

    // ensure radio buttons are checked when clicked
    // male option
    await page.locator('[data-preview="RadioButton"] div > label:nth-child(1)').click();
    await expect(page.locator('[data-preview="RadioButton"] div > label:nth-child(1)')).toHaveValue('male');
    expect(await page.locator('[data-preview="RadioButton"] div > label:nth-child(1)').isChecked()).toBeTruthy();

    // female option
    await page.locator('[data-preview="RadioButton"] div > label:nth-child(2)').click();
    await expect(page.locator('[data-preview="RadioButton"] div > label:nth-child(2)')).toHaveValue('female');
    expect(await page.locator('[data-preview="RadioButton"] div > label:nth-child(2)').isChecked()).toBeTruthy();

    // other option
    await page.locator('[data-preview="RadioButton"] div > label:nth-child(3)').click();
    await expect(page.locator('[data-preview="RadioButton"] div > label:nth-child(3)')).toHaveValue('other');
    expect(await page.locator('[data-preview="RadioButton"] div > label:nth-child(3)').isChecked()).toBeTruthy();

    await page.close();
  });
});
