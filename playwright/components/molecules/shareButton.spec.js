const { test, expect } = require('@playwright/test');

test.describe('share button component', () => {
  test('share button', async ({ page, context }) => {

    await page.goto('/#sharebutton');

    // accordian elements should be visible
    await expect(page.locator('[data-testid="ShareButton-example-1"]')).toBeVisible();
    await expect(page.locator('[data-preview="ShareButton"]')).toBeVisible();

    await expect(page.locator('[data-testid="ShareButton-example-1"] a[title="Share on Facebook"] img').first()).toBeVisible();

    const facebookShareButton  = page.locator('[data-testid="ShareButton-example-1"] a[title="Share on Facebook"]').first();

    // Get the 'title' attribute
    const placeholderAttribute = await facebookShareButton.getAttribute('title');

    // Verify the 'title' attribute
    expect(placeholderAttribute).toBe('Share on Facebook');

    const twitterShareButton  = page.locator('[data-testid="ShareButton-example-1"] a[title="Share on Twitter"]').first();

    // Get the 'title' attribute
    const twiiterPlaceholderAttribute = await twitterShareButton.getAttribute('title');

    // Verify the 'title' attribute
    expect(twiiterPlaceholderAttribute).toBe('Share on Twitter');

    await page.close();
  });
});
