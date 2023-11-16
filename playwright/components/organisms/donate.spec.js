const { test, expect } = require('@playwright/test');

test.describe('donate component', () => {
  test('Donate-example-1 - Single Donation', async ({ page }) => {

    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-1"]')).toBeVisible();

    // moneybuy 1
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('20');
    await page.locator('[data-testid="Donate-example-1"] #mship-1--moneyBuy-box1[aria-label="£12.10"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('12.10');

    let moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £12.10 now');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-1"] #mship-1--moneyBuy-box2[aria-label="£20.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('20');

    let moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £20 now');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-1"] #mship-1--moneyBuy-box3[aria-label="£30.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('30');

    let moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £30 now');

    // amount field validation
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Donate-example-1"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Donate-example-1"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').type('12.99');
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
    await page.locator('[data-testid="Donate-example-1"] #mship-1--moneyBuy-box1[aria-label="£5.50"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('5.50');

    let moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £5.50 monthly');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-1"] #mship-1--moneyBuy-box2[aria-label="£10.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('10');

    let moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £10 monthly');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-1"] #mship-1--moneyBuy-box3[aria-label="£20.00"]').click();
    await expect(page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput')).toHaveValue('20');

    let moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £20 monthly');

    // amount field validation
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Donate-example-1"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Donate-example-1"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-1"] input#mship-1--MoneyBuy-userInput').type('12.99');
    await expect(page.locator('[data-testid="Donate-example-1"] button[type="submit"]')).toContainText('Donate £12.99 monthly');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-1"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-3 - high value cart', async ({ page }) => {

    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-3"]')).toBeVisible();

    // moneybuy 1
    await page.locator('[data-testid="Donate-example-3"] #mship-2--moneyBuy-box1[aria-label="£7777"]').click();
    await expect(page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput')).toHaveValue('7777');

    let moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £7777 now');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-3"] #mship-2--moneyBuy-box2[aria-label="£8888"]').click();
    await expect(page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput')).toHaveValue('8888');

    let moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £8888 now');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-3"] #mship-2--moneyBuy-box3[aria-label="£9999"]').click();
    await expect(page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput')).toHaveValue('9999');

    let moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £9999 now');

    // amount field validation
    await page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Donate-example-3"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Donate-example-3"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-3"] input#mship-2--MoneyBuy-userInput').type('22000');
    await expect(page.locator('[data-testid="Donate-example-3"] button[type="submit"]')).toContainText('Donate £22000 now');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-3"] button[type="submit"]').click();

    await page.close();
  });

  test('Donate-example-5 - Single Giving', async ({ page }) => {

    await page.goto('/#donate');

    await expect(page.locator('[data-testid="Donate-example-5"]')).toBeVisible();

    // moneybuy 1
    await page.locator('[data-testid="Donate-example-5"] #mship-3--moneyBuy-box1[aria-label="£10"]').click();
    await expect(page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput')).toHaveValue('10');

    let moneybuyOneButtonText = await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyOneButtonText);

    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £10 now');

    // moneybuy 2
    await page.locator('[data-testid="Donate-example-5"] #mship-3--moneyBuy-box2[aria-label="£20"]').click();
    await expect(page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput')).toHaveValue('20');

    let moneybuyTwoButtonText = await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyTwoButtonText);

    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £20 now');

    // moneybuy 3
    await page.locator('[data-testid="Donate-example-5"] #mship-3--moneyBuy-box3[aria-label="£30"]').click();
    await expect(page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput')).toHaveValue('30');

    let moneybuyThreeButtonText = await page.locator('[data-testid="Donate-example-5"] button[type="submit"]').textContent();
    console.log('buttonText:', moneybuyThreeButtonText);

    await expect(page.locator('[data-testid="Donate-example-5"] button[type="submit"]')).toContainText('Donate £30 now');

    // amount field validation
    await page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Donate-example-5"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Donate-example-5"] p:nth-child(4)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-5"] input#mship-3--MoneyBuy-userInput').type('20.01');
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
    await page.locator('[data-testid="Donate-example-7"] input#mship-4--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-7"] input#mship-4--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Donate-example-7"] p:nth-child(3)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-7"] input#mship-4--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-7"] input#mship-4--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Donate-example-7"] p:nth-child(3)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-7"] input#mship-4--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-7"] input#mship-4--MoneyBuy-userInput').type('20.01');
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
    await page.locator('[data-testid="Donate-example-9"] input#mship-4--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Donate-example-9"] input#mship-4--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Donate-example-9"] p:nth-child(3)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Donate-example-9"] input#mship-4--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-9"] input#mship-4--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Donate-example-9"] p:nth-child(3)')).toContainText('Please enter an amount between £1 and £25000 and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Donate-example-9"] input#mship-4--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Donate-example-9"] input#mship-4--MoneyBuy-userInput').type('20.01');
    await expect(page.locator('[data-testid="Donate-example-9"] button[type="submit"]')).toContainText('Donate £20.01');

    // clicking the submit button should take to donate.comicrelief.com
    await page.locator('[data-testid="Donate-example-9"] button[type="submit"]').click();

    await page.close();
  });
});
