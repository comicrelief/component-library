const { test, expect } = require('@playwright/test');

const SLIDER_MIN = 5;
const SLIDER_MAX = 100;

async function setSliderValue(page, testid, value) {
  const slider = page.locator(`[data-testid="${testid}"] #ImpactSlider`);
  await slider.scrollIntoViewIfNeeded();
  const box = await slider.boundingBox();
  if (box) {
    const fraction = Math.min((value - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN), 0.98);
    const clickX = box.x + box.width * fraction;
    const clickY = box.y + box.height / 2;
    await page.mouse.click(clickX, clickY);
  }
}

test.describe('impact slider component - 1', () => {
  test('impact slider - sliding to £70', async ({ page }) => {
    await page.goto('/#impactslider');

    // Ensure that the slider and its handle are visible
    await expect(page.locator('[data-testid="ImpactSlider-example-1"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    console.log('Target initially: ', await moneyBuyElement.innerText());

    await setSliderValue(page, 'ImpactSlider-example-1', 70);

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > div > p')).toContainText('A donation of £70 could help pay for:');
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

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    console.log('Target initially: ', await moneyBuyElement.innerText());

    await setSliderValue(page, 'ImpactSlider-example-1', 100);

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > div > p')).toContainText('A donation of £100 could help pay for:');
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

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    console.log('Target initially: ', await moneyBuyElement.innerText());

    await setSliderValue(page, 'ImpactSlider-example-1', 25);

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > div > p')).toContainText('A donation of £25 could help pay for:');
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

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"]');
    console.log('Target initially: ', await moneyBuyElement.innerText());

    // drag the slider to the right to increase the amount to £80
    await setSliderValue(page, 'ImpactSlider-example-1', 80);
    console.log('Slider increased to amount: ', await moneyBuyElement.innerText());

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > div > p')).toContainText('A donation of £80 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('80');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('8');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('5');
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('4');

    // donate now button should have the amount as £80
    await expect(page.locator('[data-testid="ImpactSlider-example-1"] button[type="submit"]')).toContainText('Donate £80 now');

    await page.waitForTimeout(5000);

    // drag the slider to the left to decrease the amount to £50
    await setSliderValue(page, 'ImpactSlider-example-1', 50);
    console.log('Slider decreased to amount: ', await moneyBuyElement.innerText());

    await page.waitForTimeout(2000);

    await expect(page.locator('[data-testid="ImpactSlider-example-1"] > [data-preview="ImpactSlider"] > div > div > div > div > p')).toContainText('A donation of £50 could help pay for:');
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
    await expect(page.locator('[data-testid="ImpactSlider-example-2"]')).toBeVisible();
    await expect(page.locator('[data-testid="ImpactSlider-example-2"] #ImpactSlider > div:nth-child(4)')).toBeVisible();

    const moneyBuyElement = page.locator('[data-testid="ImpactSlider-example-2"] [data-testid="impact-slider--moneybuy-1"]');
    console.log('Target initially: ', await moneyBuyElement.innerText());

    await setSliderValue(page, 'ImpactSlider-example-2', 45);

    await expect(page.locator('[data-testid="ImpactSlider-example-2"] > [data-preview="ImpactSlider"] > div > div > div > div > p')).toContainText('A donation of £45 could help pay for:');
    await expect(page.locator('[data-testid="ImpactSlider-example-2"] [data-testid="impact-slider--moneybuy-1"] [data-testid="moneybuy-amount"]')).toContainText('45');
    await expect(page.locator('[data-testid="ImpactSlider-example-2"] [data-testid="impact-slider--moneybuy-2"] [data-testid="moneybuy-amount"]')).toContainText('4');
    await expect(page.locator('[data-testid="ImpactSlider-example-2"] [data-testid="impact-slider--moneybuy-3"] [data-testid="moneybuy-amount"]')).toContainText('3');
    await expect(page.locator('[data-testid="ImpactSlider-example-2"] [data-testid="impact-slider--moneybuy-4"] [data-testid="moneybuy-amount"]')).toContainText('2');

    // donate now button should have the amount as £45
    await expect(page.locator('[data-testid="ImpactSlider-example-2"] button[type="submit"]')).toContainText('Donate £45 now');

    await page.waitForTimeout(5000);
    await page.close();
  });
});
