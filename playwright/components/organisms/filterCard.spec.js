const { test, expect } = require('@playwright/test');

// Global variables accessible by all tests:
let thisExample; let filterCardNode; let filterButtonsWrapper; let clearSelectionButton;
let tagAButton; let tagBButton; let tagCButton; let tagDButton; let showMoreButton;
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

    // Show More button:
    showMoreButton = page.locator('button[data-testid="FilterCard-ShowMoreButton"]');

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
    await expect(thisExample.locator(tagCButton)).toHaveAttribute('aria-checked', 'false');
    await thisExample.locator(tagCButton).click();
    await expect(thisExample.locator(tagCButton)).toHaveAttribute('aria-checked', 'true');

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
    await expect(thisExample.locator(tagAButton)).toHaveAttribute('aria-checked', 'false');
    await expect(thisExample.locator(tagBButton)).toHaveAttribute('aria-checked', 'false');
    await expect(thisExample.locator(tagCButton)).toHaveAttribute('aria-checked', 'false');
    await expect(thisExample.locator(tagDButton)).toHaveAttribute('aria-checked', 'false');

    // And the 'clear' button disbled once again:
    await expect(thisExample.locator(clearSelectionButton)).toBeDisabled();

    await page.close();
  });

  // Focuses on the Show More functionality:
  test('FilterCard: test filtering on expanded loader hero example', async ({ page }) => {
    thisExample = page.locator('#filtercard--expanded-loader-hero');

    // Assert this example:
    await expect(thisExample).toBeVisible();

    // Only 7 should be currently _visible_; the default 6 when using the loader, + the Hero'd node:
    await expect(thisExample.locator(filterCardNode)).toHaveCount(7);

    // But the Result display lists how many _potential_ Nodes are available to this filter state.
    // Since we're not filtering yet, this is the full array of content:
    await expect(thisExample.locator(totalResults)).toHaveText('20 results');

    // Show filters with the toggle:
    await thisExample.locator(showHideFiltersButton).click();

    // Click the Tag A filter button:
    await thisExample.locator(tagAButton).click();

    // We've now got a smaller potential of Nodes:
    await expect(thisExample.locator(totalResults)).toHaveText('15 results');
    // But still _rendering_ 7:
    await expect(thisExample.locator(filterCardNode)).toHaveCount(7);

    // Verify our Hero'd Node's title:
    await expect(thisExample.locator(filterCardNodeHeading).locator('nth=0')).toHaveText('Filter Card heading (tag A)');
    // And asserting that it's a heading tag (h2) rather than the non-Hero p tag;
    await expect(thisExample.getByRole('heading', { name: 'Filter Card heading (tag A)' })).toBeVisible();

    // Find and click ShowMore button render 6 more Nodes:
    await expect(thisExample.locator(showMoreButton)).toBeVisible();
    await thisExample.locator(showMoreButton).click();

    // Again, the _total_ possible should be unchanged:
    await expect(thisExample.locator(totalResults)).toHaveText('15 results');
    // But we've now got 6 additional Nodes rendered:
    await expect(thisExample.locator(filterCardNode)).toHaveCount(13);

    // _Try_ to load 6 more Nodes:
    await thisExample.locator(showMoreButton).click();
    // But since there's only 15 Nodes using this Tag in total, we only get 15:
    await expect(thisExample.locator(filterCardNode)).toHaveCount(15);
    // And now the Show More button should've disappeared:
    await expect(thisExample.locator(showMoreButton)).not.toBeVisible();

    // Changing the filter state in any way will reset the Show More display, so unselect Tag A:
    await thisExample.locator(tagAButton).click();
    // And we're back to the start:
    await expect(thisExample.locator(showMoreButton)).toBeVisible();
    await expect(thisExample.locator(totalResults)).toHaveText('20 results');
    await expect(thisExample.locator(filterCardNode)).toHaveCount(7);

    // Select Tag C:
    await thisExample.locator(tagCButton).click();

    // Way fewer Nodes tagged with this tag:
    await expect(thisExample.locator(totalResults)).toHaveText('5 results');
    await expect(thisExample.locator(filterCardNode)).toHaveCount(5);

    // And since we're already showing everything available, we don't show the Show More button:
    await expect(thisExample.locator(showMoreButton)).not.toBeVisible();

    // Add another tag to combine filters, and show the lot:
    await thisExample.locator(tagDButton).click();
    await thisExample.locator(showMoreButton).click();
    await expect(thisExample.locator(totalResults)).toHaveText('10 results');
    await expect(thisExample.locator(filterCardNode)).toHaveCount(10);
    // So no more Show More:
    await expect(thisExample.locator(showMoreButton)).not.toBeVisible();

    // Clear both filters, back to the start;
    await thisExample.locator(clearSelectionButton).click();
    await expect(thisExample.locator(totalResults)).toHaveText('20 results');
    await expect(thisExample.locator(filterCardNode)).toHaveCount(7);
    await expect(thisExample.locator(showMoreButton)).toBeVisible();

    await page.close();
  });
});
