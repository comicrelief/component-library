const { test, expect } = require('@playwright/test');

// Global variables accessible by all tests:
let thisExample; let filterCardNode; let filterButtonsWrapper; let clearSelectionButton;
let tagAButton; let tagBButton; let tagCButton; let tagDButton;
let showHideFiltersButton; let totalResults; let filterCardNodeHeading;

test.describe('FilterCard component', () => {
  // Assign the global variables now the `page` object is in scope;
  test.beforeEach(async ({ page }) => {
    // Controls up top:
    filterCardNode = page.locator('[data-testid="FilterCard-Node"]');
    showHideFiltersButton = page.locator('[data-testid="FilterCard-ShowHideButton"]');
    totalResults = page.locator('[data-testid="FilterCard-Results"]');
    clearSelectionButton = page.locator('button[data-testid="FilterCard-ClearSelectionButton"]');
    filterCardNodeHeading = page.locator('[data-testid="FilterCard-Node--Heading"]');

    // Tag buttons:
    filterButtonsWrapper = page.locator('[data-testid="FilterCard-FilterButtonsWrapper"]');
    tagAButton = page.locator('button[data-testid="FilterCard-FilterButton"][value="Tag A"]');
    tagBButton = page.locator('button[data-testid="FilterCard-FilterButton"][value="Tag B"]');
    tagCButton = page.locator('button[data-testid="FilterCard-FilterButton"][value="Tag C"]');
    tagDButton = page.locator('button[data-testid="FilterCard-FilterButton"][value="Tag D"]');

    // Let's a-go
    await page.goto('/#filtercard');
  });

  // Focuses on the general filter functionality:
  test('FilterCard: test filtering on Standard example', async ({ page }) => {
    thisExample = page.locator('#filtercard--standard');

    // Assert this example:
    await expect(thisExample).toBeVisible();

    // Assert number of nodes, based on the test data object:
    await expect(thisExample.locator(filterCardNode)).toHaveCount(4);
    await expect(thisExample.locator(totalResults)).toHaveText('4 results');

    // Filter buttons shouldn't be visible yet:
    await expect(thisExample.locator(filterButtonsWrapper)).not.toBeVisible();

    // No active filters should mean the 'clear' button is disabled:
    await expect(thisExample.locator(clearSelectionButton)).toBeDisabled();

    // Show filters with the toggle:
    await thisExample.locator(showHideFiltersButton).click();

    // Filters should now be visible:
    await expect(thisExample.locator(filterButtonsWrapper)).toBeVisible();
    await expect(thisExample.locator(
      tagAButton, tagBButton, tagCButton, tagDButton
    )).toBeVisible();

    // Check before and after clicking a filter button:
    await expect(thisExample.locator(tagCButton)).toHaveAttribute('aria-pressed', 'false');
    await thisExample.locator(tagCButton).click();
    await expect(thisExample.locator(tagCButton)).toHaveAttribute('aria-pressed', 'true');

    // Now we've got filters active, the 'clear' button should be enabled:
    await expect(thisExample.locator(clearSelectionButton)).toBeEnabled();

    // Re-assert the number of nodes now we've filtered; only one
    // Node in our component test data has the 'Tag C' tag:
    await expect(thisExample.locator(filterCardNode)).toHaveCount(1);

    // Verify the content of our single Node
    await expect(thisExample.locator(filterCardNodeHeading).locator('nth=0'))
      .toHaveText('Filter Card heading (tags A, B, C & D)');

    // Check the Results display:
    await expect(thisExample.locator(totalResults)).toHaveText('1 result');

    // Add in a second filter:
    await thisExample.locator(tagDButton).click();
    await expect(thisExample.locator(filterCardNode)).toHaveCount(2);

    // Verify the content of our new second Node
    await expect(thisExample.locator(filterCardNodeHeading).locator('nth=1'))
      .toHaveText('Filter Card heading (tags A & D, no description)');

    // Re-check the results display:
    await expect(thisExample.locator(totalResults)).toHaveText('2 results');

    // Finally, add the remaining filters, which should result in ALL 4 Nodes being rendered:
    await thisExample.locator(tagAButton).click();
    await thisExample.locator(tagBButton).click();
    await expect(thisExample.locator(filterCardNode)).toHaveCount(4);
    await expect(thisExample.locator(totalResults)).toHaveText('4 results');

    // Reset filters, all 4 filter buttons should now be unselected:
    await thisExample.locator(clearSelectionButton).click();
    await expect(thisExample.locator(tagAButton)).toHaveAttribute('aria-pressed', 'false');
    await expect(thisExample.locator(tagBButton)).toHaveAttribute('aria-pressed', 'false');
    await expect(thisExample.locator(tagCButton)).toHaveAttribute('aria-pressed', 'false');
    await expect(thisExample.locator(tagDButton)).toHaveAttribute('aria-pressed', 'false');

    // And the 'clear' button disbled once again:
    await expect(thisExample.locator(clearSelectionButton)).toBeDisabled();

    await page.close();
  });
});
