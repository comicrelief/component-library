const { test, expect } = require('@playwright/test');

test.describe('donate component', () => {
  const AMOUNT_ERROR_MESSAGE = 'Please enter an amount between £1 and £25000 and up to 2 decimal places';

  test('Donate-example-1 - Single Donation', async ({ page }) => {
    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-1"]')).toBeVisible();

    // moneybuy 1
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('50');
    await page.locator('[data-testid="Donate-example-1"] input[id$="moneyBuy-box1"][aria-label="£25.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('25');

    const moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £25 now');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-1"] input[id$="moneyBuy-box2"][aria-label="£50.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('50');

    const moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £50 now');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-1"] input[id$="moneyBuy-box3"][aria-label="£100.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('100');

    const moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £100 now');

    // amount field validation
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').type('0');
    await expect(page.locator('[data-testid="Donate-example-1"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').type('25001');
    await expect(page.locator('[data-testid="Donate-example-1"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').type('12.99');
    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £12.99 now');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-1 - Monthly Donation', async ({ page }) => {
    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-1"]')).toBeVisible();

    // click monthly donation
    await page.locator('[data-testid="Donate-example-1"] [for="give-monthly--mship-1"]').click();

    // moneybuy 1
    await page.locator('[data-testid="Donate-example-1"] input[id$="moneyBuy-box1"][aria-label="£5.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('5');

    const moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £5 monthly');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-1"] input[id$="moneyBuy-box2"][aria-label="£10.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('10');

    const moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £10 monthly');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-1"] input[id$="moneyBuy-box3"][aria-label="£25.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]')).toHaveValue('25');

    const moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £25 monthly');

    // amount field validation
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').type('0');
    await expect(page.locator('[data-testid="Donate-example-1"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').type('25001');
    await expect(page.locator('[data-testid="Donate-example-1"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-1"] input[name="membership_amount"]').type('12.99');
    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £12.99 monthly');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-3 - high value cart', async ({ page }) => {
    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-3"]')).toBeVisible();

    // moneybuy 1
    await page.locator('[data-testid="Donate-example-3"] input[id$="moneyBuy-box1"][aria-label="£7777"]').click();
    await expect(page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]')).toHaveValue('7777');

    const moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £7777 now');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-3"] input[id$="moneyBuy-box2"][aria-label="£8888"]').click();
    await expect(page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]')).toHaveValue('8888');

    const moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £8888 now');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-3"] input[id$="moneyBuy-box3"][aria-label="£9999"]').click();
    await expect(page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]')).toHaveValue('9999');

    const moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £9999 now');

    // amount field validation
    await page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]').type('0');
    await expect(page.locator('[data-testid="Donate-example-3"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]').type('25001');
    await expect(page.locator('[data-testid="Donate-example-3"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-3"] input[name="membership_amount"]').type('22000');
    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £22000 now');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-5 - Single Giving', async ({ page }) => {
    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-5"]')).toBeVisible();

    // moneybuy 1
    await page.locator('[data-testid="Donate-example-5"] input[id$="moneyBuy-box1"][aria-label="£10"]').click();
    await expect(page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]')).toHaveValue('10');

    const moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £10 now');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-5"] input[id$="moneyBuy-box2"][aria-label="£20"]').click();
    await expect(page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]')).toHaveValue('20');

    const moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £20 now');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-5"] input[id$="moneyBuy-box3"][aria-label="£30"]').click();
    await expect(page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]')).toHaveValue('30');

    const moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £30 now');

    // amount field validation
    await page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]').type('0');
    await expect(page.locator('[data-testid="Donate-example-5"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]').type('25001');
    await expect(page.locator('[data-testid="Donate-example-5"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-5"] input[name="membership_amount"]').type('20.01');
    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £20.01 now');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-7 - Single Giving "No Money Buys"', async ({ page }) => {
    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-7"]')).toBeVisible();

    await expect(page.locator('[data-testid="Donate-example-7"] button[type="submit"]')).toContainText('Donate £20');

    // amount field validation
    await page.locator('[data-testid="Donate-example-7"] input[name="membership_amount"]').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-7"] input[name="membership_amount"]').type('0');
    await expect(page.locator('[data-testid="Donate-example-7"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-7"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-7"] input[name="membership_amount"]').type('25001');
    await expect(page.locator('[data-testid="Donate-example-7"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-7"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-7"] input[name="membership_amount"]').type('20.01');
    await expect(page.locator('[data-testid="Donate-example-7"] button[type="submit"]')).toContainText('Donate £20.01');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-7"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-9 - Single Giving "No Money Buys" with overridden manual input value', async ({ page }) => {
    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-9"]')).toBeVisible();

    await expect(page.locator('[data-testid="Donate-example-9"] button[type="submit"]')).toContainText('Donate £567.89');

    // amount field validation
    await page.locator('[data-testid="Donate-example-9"] input[name="membership_amount"]').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-9"] input[name="membership_amount"]').type('0');
    await expect(page.locator('[data-testid="Donate-example-9"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-9"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-9"] input[name="membership_amount"]').type('25001');
    await expect(page.locator('[data-testid="Donate-example-9"] .error--amount')).toContainText(AMOUNT_ERROR_MESSAGE);

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-9"] input[name="membership_amount"]').fill('');
    await page.locator('[data-testid="Donate-example-9"] input[name="membership_amount"]').type('20.01');
    await expect(page.locator('[data-testid="Donate-example-9"] button[type="submit"]')).toContainText('Donate £20.01');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-9"] button[type="submit"]').click();

    await page.close();
  });
});
