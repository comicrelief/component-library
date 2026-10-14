const { test, expect } = require('@playwright/test');

test.describe('FilterCard component', () => {
  test.skip('FilterCard: standard example', async ({ page }) => {
    await page.goto('/#filtercard');

    const StandardExample = page.locator('#filtercard-STANDARD');
    const HeroExample = page.locator('#filtercard-HERO');
    const ExpandedExample = page.locator('#filtercard--EXPANDED');
    const ExpandedLoaderExample = page.locator('#filtercard--EXPANDED-LOADER');
    const ExpandedLoaderHeroExample = page.locator('#filtercard--EXPANDED-LOADER-HERO');

    await expect(StandardExample).toBeVisible();
    await expect(HeroExample).toBeVisible();
    await expect(ExpandedExample).toBeVisible();
    await expect(ExpandedLoaderExample).toBeVisible();
    await expect(ExpandedLoaderHeroExample).toBeVisible();

    console.log(StandardExample.locator('[data-testid="FilterCard-Node]').toHaveCount(1));

    await page.close();
  });
});
