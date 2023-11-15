const { test, expect } = require('@playwright/test');

test.describe('membership component', () => {
  test('membership', async ({ page }) => {

    await page.goto('/#membership');

    await expect(page.locator('[data-testid="Membership-example-1"]')).toBeVisible();

    // moneybuy 1
    await expect(page.locator('[data-testid="Membership-example-1"] [aria-label="£5"]')).toBeVisible();
    await page.locator('[data-testid="Membership-example-1"] [aria-label="£5"]').click();
    await expect(page.locator('[data-testid="Membership-example-1"] form > fieldset > p')).toContainText('a regular supply of toiletries for someone living in a refugee camp in Serbia.');

    // moneybuy 2
    await expect(page.locator('[data-testid="Membership-example-1"] [aria-label="£10"]')).toBeVisible();
    await page.locator('[data-testid="Membership-example-1"] [aria-label="£10"]').click();
    await expect(page.locator('[data-testid="Membership-example-1"] form > fieldset > p')).toContainText('a potentially lifesaving call for a man at risk of suicide in the UK.');

    // moneybuy 3
    await expect(page.locator('[data-testid="Membership-example-1"] [aria-label="£20"]')).toBeVisible();
    await page.locator('[data-testid="Membership-example-1"] [aria-label="£20"]').click();
    await expect(page.locator('[data-testid="Membership-example-1"] form > fieldset > p')).toContainText('the distribution of enough surplus food for a school breakfast club to feed 80 children.');

    // amount field validation
    await page.locator('[data-testid="Membership-example-1"] input#mship-1--MoneyBuy-userInput').fill('');

    // enter amount 0 should show error message
    await page.locator('[data-testid="Membership-example-1"] input#mship-1--MoneyBuy-userInput').type('0');
    await expect(page.locator('[data-testid="Membership-example-1"] form > fieldset > p')).toContainText('Please enter a number between 1 and 25000, and up to 2 decimal places');

    // enter amount 25001 should show error message
    await page.locator('[data-testid="Membership-example-1"] input#mship-1--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Membership-example-1"] input#mship-1--MoneyBuy-userInput').type('25001');
    await expect(page.locator('[data-testid="Membership-example-1"] form > fieldset > p')).toContainText('Please enter a number between 1 and 25000, and up to 2 decimal places');

    // enter own amount in decimals should not show error message
    await page.locator('[data-testid="Membership-example-1"] input#mship-1--MoneyBuy-userInput').fill('');
    await page.locator('[data-testid="Membership-example-1"] input#mship-1--MoneyBuy-userInput').type('12.99');
    await expect(page.locator('[data-testid="Membership-example-1"] form > fieldset > p')).toContainText('Your donation will help us fund amazing projects in the UK and around the world.');

    // clicking the submit button should take to donate.comicrelief.com/form/giftaid
    await page.locator('[data-testid="Membership-example-1"] form > fieldset > input[type="submit"]').click();

    await page.close();
  });
});
