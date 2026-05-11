const { test, expect } = require('@playwright/test');

test.describe('simple school lookup component', () => {
  test('simple school lookup', async ({ page, context }) => {
    await page.route('**/schools/lookup**', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: {
            schools: [
              { name: "St Paul's School", post_code: 'SW13 9JT' },
              { name: "St Paul's Cathedral School", post_code: 'EC4M 8AD' },
              { name: 'EC4M 9AD School', post_code: 'EC4M 9AD' }
            ]
          }
        })
      });
    });

    await page.goto('/#simpleschoollookup');

    // simple school lookup elements should be visible
    await expect(page.locator('[data-testid="SimpleSchoolLookup-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="SimpleSchoolLookup"]')).toBeVisible();

    const inputElement = page.locator('#school_lookup');

    // Get the 'placeholder' attribute
    const placeholderAttribute = await inputElement.getAttribute('placeholder');

    // Verify the 'placeholder' attribute
    expect(placeholderAttribute).toBe('Enter name or postcode...');

    // enter school name and click find address button
    await page.locator('input#school_lookup').type('St Paul');
    await expect(page.locator('[data-preview="SimpleSchoolLookup"] > div > div > button[type="button"]')).toBeVisible();
    await page.locator('[data-preview="SimpleSchoolLookup"] > div > div > button[type="button"]').click();
    await expect(page.locator('label[for="school_lookup"] ~ div > ul[role="listbox"]')).toBeVisible();

    // clear school name and enter school postcode
    await page.locator('input#school_lookup').fill('');
    await page.locator('input#school_lookup').fill('EC4M 9AD');
    await expect(page.locator('[data-preview="SimpleSchoolLookup"] > div > div > button[type="button"]')).toBeVisible();
    await page.locator('[data-preview="SimpleSchoolLookup"] > div > div > button[type="button"]').click();

    await expect(page.locator('label[for="school_lookup"] ~ div > ul[role="listbox"]')).toBeVisible();
    await page.close();
  });
});
