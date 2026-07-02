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
  // MARK: smoke test
  test('smoke test', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    await page.close();
  });

  test('gallery column props', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-customised"]');

    // expect four gallery columns
    await expect(gallery.locator('.gallery-column')).toHaveCount(4);

    await page.close();
  });

  // MARK: responsive columns
  test('responsive gallery columns', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // expect three gallery columns
    await expect(gallery.locator('.gallery-column')).toHaveCount(3);

    // resize the page to a small width
    await page.setViewportSize({ width: 700, height: 1000 });

    // expect two gallery columns
    await expect(gallery.locator('.gallery-column')).toHaveCount(2);

    // resize the page to a medium width
    await page.setViewportSize({ width: 320, height: 1000 });

    // expect one gallery column
    await expect(gallery.locator('.gallery-column')).toHaveCount(1);

    await page.close();
  });

  // MARK: chunk mode
  test('chunk mode test', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // expect 25 images to be visible
    await expect(gallery.locator('.gallery-node')).toHaveCount(25);

    // find the "load more" button and click it
    await gallery.locator('button:has-text("Show more")').click();

    // expect 50 images to be visible
    await expect(gallery.locator('.gallery-node')).toHaveCount(50);

    // expect the "load more" button to be hidden
    await expect(gallery.locator('button:has-text("Show more")')).toBeHidden();

    await page.close();
  });

  // MARK: non-chunk mode
  test('non-chunk mode test', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-customised"]');

    // expect all 30 images to be visible
    await expect(gallery.locator('.gallery-node')).toHaveCount(30);

    // expect the "load more" button to be hidden
    await expect(gallery.locator('button:has-text("Show more")')).toBeHidden();

    await page.close();
  });

  // MARK: tabbing
  test('gallery tabbing', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // focus the first gallery node
    await gallery.locator('.gallery-node').first().focus();

    await page.waitForTimeout(3000);

    // first tab should focus the first node in the first column
    const firstNode = gallery.locator('.gallery-column').first().locator('.gallery-node').first();
    await firstNode.focus();
    await expect(firstNode).toBeFocused();

    // tab to the first node in the second column
    await page.keyboard.press('Tab');
    const secondNode = gallery.locator('.gallery-column').nth(1).locator('.gallery-node').first();
    await expect(secondNode).toBeFocused();

    // tab back to the first node in the first column
    await page.keyboard.press('Shift+Tab');
    await expect(firstNode).toBeFocused();

    await page.close();
  });

  // MARK: tabbing out
  test('gallery tabbing should allow tabbing out of the gallery', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    await page.waitForTimeout(3000);

    const gallery = page.locator('[data-testid="gallery-customised"]');

    // focus the last gallery node
    const galleryNodes = await gallery.locator('.gallery-node').all();
    await gallery.locator(`[data-node-index="${galleryNodes.length - 1}"]`).focus();

    // press tab
    await page.keyboard.press('Tab');
    const galleryContainer = gallery.locator('.gallery-container');

    // assert that the focus has moved outside the gallery
    expect(
      await galleryContainer.evaluate(
        el => !el.contains(document.activeElement)
      )
    ).toBe(true);
    await page.close();
  });

  // MARK: colours
  test('custom page background and text colour', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const galleryContainer = page.locator('[data-testid="gallery-customised"] .gallery-container');

    const backgroundColor = await galleryContainer.evaluate(el => window.getComputedStyle(el).getPropertyValue('background-color'));
    expect(backgroundColor).toBe(hexToRgb('#0565D1'));

    const textColor = await galleryContainer.evaluate(el => window.getComputedStyle(el).getPropertyValue('color'));
    expect(textColor).toBe(hexToRgb('#FFFFFF'));

    await page.close();
  });

  // MARK: lightbox mode
  test('check lightbox mode', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // find the first gallery node
    const galleryNode = gallery.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // expect the lightbox to be visible
    await expect(gallery.locator('dialog')).toBeVisible();

    await page.waitForTimeout(1000);
    await page.keyboard.press('Escape');
    await expect(gallery.locator('dialog')).toBeHidden();

    // focus the gallery node and press enter
    await galleryNode.focus();
    await page.keyboard.press('Enter');

    // expect the lightbox to be visible
    await expect(gallery.locator('dialog')).toBeVisible();

    await page.close();
  });

  // MARK: lightbox focus
  test('check lightbox auto-focus', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // find the first gallery node
    const galleryNode = gallery.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // the close button should not be focused after opening the lightbox with the mouse
    await expect(gallery.locator('.close-button')).not.toBeFocused();
    await page.keyboard.press('Escape');

    // the close button should be focused after opening the lightbox with the keyboard
    await galleryNode.focus();
    await page.keyboard.press('Enter');
    await expect(gallery.locator('.close-button')).toBeFocused();

    await page.close();
  });

  // MARK: lightbox navigation
  test('lightbox navigation', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // find the first gallery node
    const galleryNode = gallery.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // expect the lightbox and caption to be visible
    await expect(gallery.locator('dialog')).toBeVisible();
    await expect(page.getByText('Lightbox: This is the body for image 0')).toBeVisible();

    await page.waitForTimeout(1000);

    // navigate to the next image
    await page.keyboard.press('ArrowRight');
    await expect(page.getByText('Lightbox: This is the body for image 1')).toBeVisible();

    await page.close();
  });

  // MARK: lightbox pointer close
  test('lightbox pointer close', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-basic"]');

    // find the first gallery node
    const galleryNode = gallery.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // click the close button
    await gallery.locator('.close-button').click();

    // expect the lightbox to be hidden
    await expect(gallery.locator('dialog')).toBeHidden();

    await page.close();
  });

  // MARK: non-lightbox mode
  test('check non-lightbox mode', async ({ page }) => {
    await page.goto('/#dynamicgallery');

    const gallery = page.locator('[data-testid="gallery-customised"]');

    // find the first gallery node
    const galleryNode = gallery.locator('.gallery-node').first();

    // click it
    await galleryNode.click();

    // expect the lightbox to be hidden
    await expect(gallery.locator('dialog')).toBeHidden();

    // focus the gallery node and press enter
    await galleryNode.focus();
    await page.keyboard.press('Enter');

    // expect the lightbox to be hidden
    await expect(gallery.locator('dialog')).toBeHidden();

    await page.close();
  });
});
