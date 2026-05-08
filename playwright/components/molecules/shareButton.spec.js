const { test, expect } = require('@playwright/test');

test.describe('share button component', () => {
  test('share button', async ({ page, context }) => {

    await page.goto('/#sharebutton');

    // accordian elements should be visible
    await expect(page.locator('[data-testid="ShareButton-example-0"]')).toBeVisible();
    await expect(page.locator('[data-preview="ShareButton"]')).toBeVisible();

    await expect(page.locator('[data-preview="ShareButton"] > div > div > div:nth-child(1) > ul > li:nth-child(1) > a > img')).toBeVisible();

    const facebookShareButton  = page.locator('[data-preview="ShareButton"] > div > div > div:nth-child(1) > ul > li:nth-child(1) > a');

    // Get the 'title' attribute
    const placeholderAttribute = await facebookShareButton.getAttribute('title');

    // Verify the 'title' attribute
    expect(placeholderAttribute).toBe('Share on Facebook');

    const twitterShareButton  = page.locator('[data-preview="ShareButton"] > div > div > div:nth-child(1) > ul > li:nth-child(2) > a');

    // Get the 'title' attribute
    const twiiterPlaceholderAttribute = await twitterShareButton.getAttribute('title');

    // Verify the 'title' attribute
    expect(twiiterPlaceholderAttribute).toBe('Share on Twitter');

    await page.close();
  });
});
