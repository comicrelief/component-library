const { test, expect } = require('@playwright/test');

function hexToRgb(hex) {
  // Remove the '#' if it's included in the input
  const hexValue = hex.replace(/^#/, '');

  // Parse the hex values into separate R, G, and B values
  const red = parseInt(hexValue.substring(0, 2), 16);
  const green = parseInt(hexValue.substring(2, 4), 16);
  const blue = parseInt(hexValue.substring(4, 6), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

test.describe('dynamic gallery component', () => {
  test('smoke test', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    await page.close();
  });

  test('gallery column props', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/5');

    // expect three gallery columns
    await expect(page.locator('.gallery-column')).toHaveCount(4);

    await page.close();
  });

  test('responsive gallery columns', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/3');

    // expect three gallery columns
    await expect(page.locator('.gallery-column')).toHaveCount(3);

    // resize the page to a small width
    await page.setViewportSize({ width: 700, height: 1000 });

    // expect one gallery column
    await expect(page.locator('.gallery-column')).toHaveCount(2);

    // resize the page to a medium width
    await page.setViewportSize({ width: 320, height: 1000 });

    // expect one gallery column
    await expect(page.locator('.gallery-column')).toHaveCount(1);

    await page.close();
  });

  test('chunk mode test', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/3');

    // expect 25 images to be visible
    await expect(page.locator('.gallery-node')).toHaveCount(25);

    // find the "load more" button and click it
    await page.locator('button:has-text("Show more")').click();

    // expect 50 images to be visible
    await expect(page.locator('.gallery-node')).toHaveCount(50);

    // expect the "load more" button to be hidden
    await expect(page.locator('button:has-text("Show more")')).toBeHidden();

    await page.close();
  });

  test('non-chunk mode test', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/5');

    // expect all 30 images to be visible
    await expect(page.locator('.gallery-node')).toHaveCount(30);

    // expect the "load more" button to be hidden
    await expect(page.locator('button:has-text("Show more")')).toBeHidden();

    await page.close();
  });

  test('gallery tabbing', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/3');

    // focus the first gallery node
    await page.locator('.gallery-node').first().focus();

    await page.waitForTimeout(3000);

    // first tab should focus the first node in the first column
    const firstNode = page.locator('.gallery-column').first().locator('.gallery-node').first();
    await firstNode.focus();
    await expect(firstNode).toBeFocused();

    // tab to the first node in the second column
    await page.keyboard.press('Tab');
    const secondNode = page.locator('.gallery-column').nth(1).locator('.gallery-node').first();
    await expect(secondNode).toBeFocused();

    // tab back to the first node in the first column
    await page.keyboard.press('Shift+Tab');
    await expect(firstNode).toBeFocused();

    await page.close();
  });

  test('gallery tabbing should allow tabbing out of the gallery', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/5');

    await page.waitForTimeout(3000);

    // focus the first gallery node
    const galleryNodes = await page.locator('.gallery-node').all();
    await page.locator(`[data-node-index="${galleryNodes.length - 1}"]`).focus();

    // press tab
    await page.keyboard.press('Tab');
    const galleryContainer = page.locator('.gallery-container');

    // asset that the focus has moved outside the gallery
    expect(
      await galleryContainer.evaluate(
        el => !el.contains(document.activeElement)
      )
    ).toBe(true);
    await page.close();
  });

  test('custom page background and text colour', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/5');

    const galleryContainer = page.locator('.gallery-container');

    const backgroundColor = await galleryContainer.evaluate(el => window.getComputedStyle(el).getPropertyValue('background-color'));
    expect(backgroundColor).toBe(hexToRgb('#0565D1'));

    const textColor = await galleryContainer.evaluate(el => window.getComputedStyle(el).getPropertyValue('color'));
    expect(textColor).toBe(hexToRgb('#FFFFFF'));

    await page.close();
  });

  test('check lightbox mode', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/3');

    // find the first gallery node
    const galleryNode = page.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // expect the lightbox to be visible
    await expect(page.locator('dialog')).toBeVisible();

    await page.waitForTimeout(1000);
    await page.keyboard.press('Escape');
    await expect(page.locator('dialog')).toBeHidden();

    // focus the gallery node and press enter
    await galleryNode.focus();
    await page.keyboard.press('Enter');

    // expect the lightbox to be visible
    await expect(page.locator('dialog')).toBeVisible();

    await page.close();
  });

  test('lightbox navigation', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/3');

    // find the first gallery node
    const galleryNode = page.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // expect the lightbox and caption to be visible
    await expect(page.locator('dialog')).toBeVisible();
    await expect(page.getByText('Lightbox: This is the body for image 0')).toBeVisible();

    await page.waitForTimeout(1000);

    // navigate to the next image
    await page.keyboard.press('ArrowRight');
    await expect(page.getByText('Lightbox: This is the body for image 1')).toBeVisible();

    await page.close();
  });

  test('lightbox pointer close', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/3');

    // find the first gallery node
    const galleryNode = page.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // click the close button
    await page.locator('.close-button').click();

    // expect the lightbox to be hidden
    await expect(page.locator('dialog')).toBeHidden();

    await page.close();
  });

  test('check non-lightbox mode', async ({ page }) => {
    await page.goto('/#!/DynamicGallery/5');

    // find the first gallery node
    const galleryNode = page.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // expect the lightbox to be hidden
    await expect(page.locator('dialog')).toBeHidden();

    // focus the gallery node and press enter
    await galleryNode.focus();
    await page.keyboard.press('Enter');

    // expect the lightbox to be hidden
    await expect(page.locator('dialog')).toBeHidden();

    await page.close();
  });
});
