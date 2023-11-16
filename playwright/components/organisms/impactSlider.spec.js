const { test, expect } = require('@playwright/test');

test.describe('impact slider component - 1', () => {
  test('impact slider - sliding to £70', async ({ page }) => {

    await page.goto('/#impactslider');

    // Ensure that the slider and its handle are visible
    await expect(page.locator('[data-testid="ImpactSlider-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    // slider selector
    const sliderSelector = '[data-testid="ImpactSlider-example-1"] #ImpactSlider';
    const slider = await page.$(sliderSelector);

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    const moneyBuyText = await moneyBuyElement.innerText();
    console.log('Target initially: ', moneyBuyText);

    if (slider) {
      // Get the bounding box of the slider
      let sliderBound = await slider.boundingBox();

      // Get the target position for the mouse move to a donation of £70
      const targetPosition = sliderBound.width * (70 / 100);

      // Perform mouse actions to simulate dragging the slider handle
      await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2);
      await page.mouse.down();

      while (sliderBound.width * (parseFloat(await moneyBuyElement.innerText()) / 100) !== targetPosition) {
        await page.mouse.move(sliderBound.x + targetPosition, sliderBound.y + sliderBound.height / 2);
        sliderBound = await slider.boundingBox();
      }

      await page.mouse.up();
    }

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > p')).toContainText('A donation of £70 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('70');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('7');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('4');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('3');

    // donate now button should have the amount as £70
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] button[type="submit"]')).toContainText('Donate £70 now');

    await page.waitForTimeout(5000);
    await page.close();
  });

  test('impact slider - sliding to the maximum amount £100', async ({ page }) => {

    await page.goto('/#impactslider');

    // Ensure that the slider and its handle are visible
    await expect(page.locator('[data-testid="ImpactSlider-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    // slider selector
    const sliderSelector = '[data-testid="ImpactSlider-example-1"] #ImpactSlider';
    const slider = await page.$(sliderSelector);

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    const moneyBuyText = await moneyBuyElement.innerText();
    console.log('Target initially: ', moneyBuyText);

    if (slider) {
      // Get the bounding box of the slider
      let sliderBound = await slider.boundingBox();

      // Get the target position for the mouse move to a donation of £100
      const targetPosition = sliderBound.width * (100 / 100);

      // Perform mouse actions to simulate dragging the slider handle
      await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2);
      await page.mouse.down();

      while (sliderBound.width * (parseFloat(await moneyBuyElement.innerText()) / 100) !== targetPosition) {
        await page.mouse.move(sliderBound.x + targetPosition, sliderBound.y + sliderBound.height / 2);
        sliderBound = await slider.boundingBox();
      }

      await page.mouse.up();
    }

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > p')).toContainText('A donation of £100 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('100');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('10');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('6');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('5');

    // donate now button should have the amount as £100
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] button[type="submit"]')).toContainText('Donate £100 now');

    await page.waitForTimeout(5000);
    await page.close();
  });

  test('impact slider - sliding to the minimum amount £25', async ({ page }) => {

    await page.goto('/#impactslider');

    // Ensure that the slider and its handle are visible
    await expect(page.locator('[data-testid="ImpactSlider-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    // slider selector
    const sliderSelector = '[data-testid="ImpactSlider-example-1"] #ImpactSlider';
    const slider = await page.$(sliderSelector);

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    const moneyBuyText = await moneyBuyElement.innerText();
    console.log('Target initially: ', moneyBuyText);

    if (slider) {
      // Get the bounding box of the slider
      let sliderBound = await slider.boundingBox();

      // Get the target position for the mouse move to a donation of £25
      const targetPosition = sliderBound.width * (25 / 100);

      // Perform mouse actions to simulate dragging the slider handle
      await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2);
      await page.mouse.down();

      while (sliderBound.width * (parseFloat(await moneyBuyElement.innerText()) / 100) !== targetPosition) {
        await page.mouse.move(sliderBound.x + targetPosition, sliderBound.y + sliderBound.height / 2);
        sliderBound = await slider.boundingBox();
      }

      await page.mouse.up();
    }

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > p')).toContainText('A donation of £25 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('25');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('2');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('1');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('1');

    // donate now button should have the amount as £25
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] button[type="submit"]')).toContainText('Donate £25 now');

    await page.waitForTimeout(5000);
    await page.close();
  });

  test('impact slider - moving the slider to £80 and then back to £50', async ({ page }) => {
    await page.goto('/#impactslider');

    // Ensure that the slider and its handle are visible
    await expect(page.locator('[data-testid="ImpactSlider-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    const sliderSelector = '[data-testid="ImpactSlider-example-1"] #ImpactSlider';
    const slider = await page.$(sliderSelector);

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    const moneyBuyText = await moneyBuyElement.innerText();
    console.log('Target initially: ', moneyBuyText);

    let targetAmountBeforeMoving;
    let sliderBound;

    // drag the slider to the right to increase the amount to £80
    if (slider) {
      // Get the bounding box of the slider
      sliderBound = await slider.boundingBox();

      // Get the target position for the mouse move to a donation of £80
      const targetPosition80 = sliderBound.width * (80 / 100);

      // Perform mouse actions to simulate dragging the slider handle to 80
      await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2);
      await page.mouse.down();

      while (sliderBound.width * (parseFloat(await moneyBuyElement.innerText()) / 100) !== targetPosition80) {
        await page.mouse.move(sliderBound.x + targetPosition80, sliderBound.y + sliderBound.height / 2);
        sliderBound = await slider.boundingBox();
      }

      await page.mouse.up();

      // Update targetAmountBeforeMoving after the first slider move
      targetAmountBeforeMoving = parseFloat(await moneyBuyElement.innerText());
      console.log('Slider increased to amount: ', targetAmountBeforeMoving);
    }

    // Validate that the slider is at £80
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > p')).toContainText('A donation of £80 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('80');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('8');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('5');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('4');

    // donate now button should have the amount as £80
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] button[type="submit"]')).toContainText('Donate £80 now');

    // add a short wait for the slider to move back from £80 to £50
    await page.waitForTimeout(5000);

    // drag the slider to the left to decrease the amount to £50
    if (slider) {
      // Get the bounding box of the slider
      sliderBound = await slider.boundingBox();

      // Get the target position for the mouse move to a donation of £80
      const targetPosition45 = sliderBound.width * (50 / 100);

      // Perform mouse actions to simulate dragging the slider handle to 80
      await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2);
      await page.mouse.down();

      while (sliderBound.width * (parseFloat(await moneyBuyElement.innerText()) / 100) !== targetPosition45) {
        await page.mouse.move(sliderBound.x + targetPosition45, sliderBound.y + sliderBound.height / 2);
        sliderBound = await slider.boundingBox();
      }

      await page.mouse.down();

      await page.waitForTimeout(2000);

      // Update targetAmountBeforeMoving after the first slider move
      targetAmountBeforeMoving = parseFloat(await moneyBuyElement.innerText());
      console.log('Slider decreased to amount: ', targetAmountBeforeMoving);
    }

    await page.waitForTimeout(2000);

    // Validate that the slider is at £50
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > p')).toContainText('A donation of £50 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('50');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('5');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('3');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('2');

    // donate now button should have the amount as £50
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] button[type="submit"]')).toContainText('Donate £50 now');

    await page.close();
  });
});

test.describe('impact slider component - 2', () => {
  test('impact slider - sliding to £45', async ({ page }) => {

    await page.goto('/#impactslider');

    // Ensure that the slider and its handle are visible
    await expect(page.locator('[data-testid="ImpactSlider-example-3"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-3"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    // slider selector
    const sliderSelector = '[data-testid="ImpactSlider-example-3"] #ImpactSlider';
    const slider = await page.$(sliderSelector);

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-3"] [data-testid="impact-slider--moneybuy-1"]');
    const moneyBuyText = await moneyBuyElement.innerText();
    console.log('Target initially: ', moneyBuyText);

    if (slider) {
      // Get the bounding box of the slider
      let sliderBound = await slider.boundingBox();

      // Get the target position for the mouse move to a donation of £45
      const targetPosition = sliderBound.width * (45 / 100);

      // Perform mouse actions to simulate dragging the slider handle
      await page.mouse.move(sliderBound.x, sliderBound.y + sliderBound.height / 2);
      await page.mouse.down();

      while (sliderBound.width * (parseFloat(await moneyBuyElement.innerText()) / 100) !== targetPosition) {
        await page.mouse.move(sliderBound.x + targetPosition, sliderBound.y + sliderBound.height / 2);
        sliderBound = await slider.boundingBox();
      }

      await page.mouse.up();
    }

    await expect(page.locator('[data-testid="ImpactSlider-example-3"] > [data-preview="ImpactSlider"] > div > div > div > p')).toContainText('A donation of £45 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-3"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('45');
    await expect(page.locator('[data-testid="ImpactSlider-example-3"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('4');
    await expect(page.locator('[data-testid="ImpactSlider-example-3"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('3');
    await expect(page.locator('[data-testid="ImpactSlider-example-3"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('2');

    // donate now button should have the amount as £45
    await expect(page.locator('[data-testid="ImpactSlider-example-3"] button[type="submit"]')).toContainText('Donate £45 now');

    await page.waitForTimeout(5000);
    await page.close();
  });
});
