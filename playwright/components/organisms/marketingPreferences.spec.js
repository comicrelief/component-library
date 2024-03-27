const { test, expect } = require('@playwright/test');

test.describe('marketing preferences component', () => {
  test('marketing preferences', async ({ page }) => {

    await page.goto('/#marketingpreferencesdsform');

    await expect(page.locator('[data-testid="MarketingPreferencesDSForm-example-1"]')).toBeVisible();

    // Email field should be visible when the checkbox is clicked
    await expect(page.locator('div#marketing-preferences--default label[for="mp_permissionEmail-yes"]')).toBeVisible();
    await page.locator('div#marketing-preferences--default label[for="mp_permissionEmail-yes"]').click();
    await expect(page.locator('div#marketing-preferences--default input#mp_email')).toBeVisible();
    expect(await page.locator('div#marketing-preferences--default label[for="mp_permissionEmail-yes"]').isChecked()).toBeTruthy();

    // Post field should be visible when the checkbox is clicked
    await expect(page.locator('div#marketing-preferences--default label[for="mp_permissionPost-yes"]')).toBeVisible();
    await page.locator('div#marketing-preferences--default label[for="mp_permissionPost-yes"]').click();
    await expect(page.locator('div#marketing-preferences--default input#mp_address1')).toBeVisible();
    await expect(page.locator('div#marketing-preferences--default input#mp_address2')).toBeVisible();
    await expect(page.locator('div#marketing-preferences--default input#mp_address3')).toBeVisible();
    await expect(page.locator('div#marketing-preferences--default input#mp_town')).toBeVisible();
    await expect(page.locator('div#marketing-preferences--default input#mp_postcode')).toBeVisible();
    await expect(page.locator('div#marketing-preferences--default input#mp_country')).toBeVisible();

    // Text field should be visible when the checkbox is clicked
    await expect(page.locator('div#marketing-preferences--default label[for="mp_permissionSMS-yes"]')).toBeVisible();
    await page.locator('div#marketing-preferences--default label[for="mp_permissionSMS-yes"]').click();
    await expect(page.locator('div#marketing-preferences--default input#mp_mobile')).toBeVisible();
    expect(await page.locator('div#marketing-preferences--default label[for="mp_permissionSMS-yes"]').isChecked()).toBeTruthy();

    // Text field should be visible when the checkbox is clicked
    await expect(page.locator('div#marketing-preferences--default label[for="mp_permissionPhone-yes"]')).toBeVisible();
    await page.locator('div#marketing-preferences--default label[for="mp_permissionPhone-yes"]').click();
    await expect(page.locator('div#marketing-preferences--default input#mp_phone')).toBeVisible();
    expect(await page.locator('div#marketing-preferences--default label[for="mp_permissionPhone-yes"]').isChecked()).toBeTruthy();

    // submit button should be visible
    await expect(page.locator('div#marketing-preferences--default ~ input[type="submit"]')).toBeVisible();

    // submitting button without entering input values should show error messages
    await page.locator('div#marketing-preferences--default ~ input[type="submit"]').click();

    // email field empty error message
    await expect(page.locator('div#marketing-preferences--default div.field-email > div > label[for="mp_email"] > span > span')).toContainText('Please enter your email address');

    // postal address fields empty error messages
    // address line 1 error message
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_address1"] > span > span')).toContainText('Please enter the first line of your address');
    // town error message
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_town"] > span > span')).toContainText('Please enter your town');
    // postcode error message
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_postcode"] > span > span')).toContainText('Please enter your postcode');
    // country error message
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_country"] > span > span')).toContainText('Please enter your country');
    // text empty error message
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toContainText('Please enter your mobile number');
    // phone error message
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toContainText('Please enter your phone number');

    // text field empty error message
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toContainText('Please enter your mobile number');

    // phone field empty error message
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toContainText('Please enter your phone number');

    // validate email field
    await page.locator('div#marketing-preferences--default input#mp_email').type('email-signup@email.sls.comicrelief.com');
    await page.locator('div#marketing-preferences--default input#mp_email').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address1').click();
    await expect(page.locator('div#marketing-preferences--default div.field-email > div > label[for="mp_email"] > span > span')).toContainText('Please enter your email address');

    // email that has : should show error message
    await page.locator('div#marketing-preferences--default input#mp_email').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_email').type('test:@£$%£test@comicrelief.com');
    await page.locator('div#marketing-preferences--default input#mp_address1').click();
    await expect(page.locator('div#marketing-preferences--default div.field-email > div > label[for="mp_email"] > span > span')).toContainText('Please enter a valid email address');

    // email that has mix of special chars that's valid and not valid should show error message
    await page.locator('div#marketing-preferences--default input#mp_email').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_email').type('Test0-9!#$%&\'*+/=?^_{|}~-@comicrelief_9-8.com.uk');
    await page.locator('div#marketing-preferences--default input#mp_address1').click();
    await expect(page.locator('div#marketing-preferences--default div.field-email > div > label[for="mp_email"] > span > span')).toBeHidden('');

    // postal address fields validation
    // validate address line 1 field
    await page.locator('div#marketing-preferences--default input#mp_address1').type('Comic Relief');
    await page.locator('div#marketing-preferences--default input#mp_address1').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_address1"] > span > span')).toContainText('Please enter the first line of your address');

    // address line 1 with special characters should show error message
    await page.locator('div#marketing-preferences--default input#mp_address1').type('Comic @% Relief');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_address1"] > span > span')).toContainText('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

    // address line 1 with valid input should not show error message
    await page.locator('div#marketing-preferences--default input#mp_address1').fill('Comic Relief'); // clear the email field
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_address1"] > span > span')).toBeHidden('');

    // address line 2 optional field should not show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_address2').type('Comic Relief');
    await page.locator('div#marketing-preferences--default input#mp_address2').fill(''); // clear the email field
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_address2"] > span > span')).toBeHidden('');

    // address line 3 optional field should not show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_address3').type('White Chapel');
    await page.locator('div#marketing-preferences--default input#mp_address3').fill(''); // clear the email field
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_address2"] > span > span')).toBeHidden('');

    // town field should show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_town').type('London');
    await page.locator('div#marketing-preferences--default input#mp_town').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_town"] > span > span')).toContainText('Please enter your town');

    // town field with special characters should show error message
    await page.locator('div#marketing-preferences--default input#mp_town').type('Lon@%don ');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_town"] > span > span')).toContainText('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

    // town field with valid input should not show error message
    await page.locator('div#marketing-preferences--default input#mp_town').fill('LONDON'); // clear the email field
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_town"] > span > span')).toBeHidden('');

    // postcode field should show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_postcode').type('E1 8QS');
    await page.locator('div#marketing-preferences--default input#mp_postcode').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_postcode"] > span > span')).toContainText('Please enter your postcode');

    // postcode field with a space should show error message
    await page.locator('div#marketing-preferences--default input#mp_postcode').type('E 1 8QS');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_postcode"] > span > span')).toContainText('Please enter a valid postcode');

    // postcode field with a space in second part should show error message
    await page.locator('div#marketing-preferences--default input#mp_postcode').type('E1 8 QS');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_postcode"] > span > span')).toContainText('Please enter a valid postcode');

    // postcode field with valid input should not show error message
    await page.locator('div#marketing-preferences--default input#mp_postcode').fill('E1 8QS'); // clear the email field
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_postcode"] > span > span')).toBeHidden('');

    // country field should show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_country').type('United Kingdom');
    await page.locator('div#marketing-preferences--default input#mp_country').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_country"] > span > span')).toContainText('Please enter your country');

    // country field with special characters should show error message
    await page.locator('div#marketing-preferences--default input#mp_country').type('United £$^3 Kingdom');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_country"] > span > span')).toContainText('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

    // country field with valid input should not show error message
    await page.locator('div#marketing-preferences--default input#mp_country').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_country').fill('United Kingdom'); // clear the email field
    await expect(page.locator('div#marketing-preferences--default div.field-post > div > label[for="mp_country"] > span > span')).toBeHidden('');

    // sms field should show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_mobile').type('07123456789');
    await page.locator('div#marketing-preferences--default input#mp_mobile').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toContainText('Please enter your mobile number');

    // sms field with 10 digits should show error message
    await page.locator('div#marketing-preferences--default input#mp_mobile').type('0712345678');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toContainText('Please enter a valid UK mobile number');

    // sms field with 12 digits should show error message
    await page.locator('div#marketing-preferences--default input#mp_mobile').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_mobile').type('071234567890');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toContainText('Please enter a valid UK mobile number');

    // sms field starting with a space should show error message
    await page.locator('div#marketing-preferences--default input#mp_mobile').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_mobile').type(' 07123456789');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toContainText('Please enter a valid UK mobile number');

    // sms field with valid input should not show error message
    await page.locator('div#marketing-preferences--default input#mp_mobile').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_mobile').fill('07123456789');
    await expect(page.locator('div#marketing-preferences--default div.field-sms > div > label[for="mp_mobile"] > span > span')).toBeHidden('');

    // phone field should show error message when value is not entered
    await page.locator('div#marketing-preferences--default input#mp_phone').type('02081234567');
    await page.locator('div#marketing-preferences--default input#mp_phone').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toContainText('Please enter your phone number');

    // phone field with 10 digits should show error message
    await page.locator('div#marketing-preferences--default input#mp_phone').type('0208123456');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toContainText('Please enter a valid UK phone number');

    // phone field with 12 digits should show error message
    await page.locator('div#marketing-preferences--default input#mp_phone').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_phone').type('020812345678');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toContainText('Please enter a valid UK phone number');

    // phone field starting with a space should show error message
    await page.locator('div#marketing-preferences--default input#mp_phone').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_phone').type(' 02081234567');
    await page.locator('div#marketing-preferences--default input#mp_address2').click();
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toContainText('Please enter a valid UK phone number');

    // phone field with valid input should not show error message
    await page.locator('div#marketing-preferences--default input#mp_phone').fill(''); // clear the email field
    await page.locator('div#marketing-preferences--default input#mp_phone').fill('02081234567');
    await expect(page.locator('div#marketing-preferences--default div.field-phone > div > label > span > span')).toBeHidden('');

    await page.close();
  });
});
