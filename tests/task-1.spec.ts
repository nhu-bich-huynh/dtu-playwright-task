import { test, expect } from '@playwright/test';

// Task 1:
// Create a test that checks that the webpage www.bulbi.nl/en loads and shows the
// “Most popular varieties” and that each of the actual varieties are shown.


test('Most popular varieties', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.bulbi.nl/en/');
  // Accept cookies
  await page.getByRole('button', { name: 'Allow all' }).click();
  // Change language to English (if not already)
  await page.locator('.store-switcher__trigger').click();
  await page.getByRole('complementary').getByText('English').click();
  

  // Verify that "Most popular varieties" is visible
  await expect(page.getByText('Most popular varieties')).toBeVisible();
  await expect(page.locator('#maincontent')).toContainText('Most popular varieties');

  // Check for each variety link (should be updated if the site changes)
  await expect(page.getByText('Tulips Hyacinths Daffodils')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Tulips Tulips' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Hyacinths Hyacinths' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Daffodils Daffodils' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Crocus Crocus' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Allium Allium' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Galanthus Galanthus' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Anemones Anemones' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Lilies Lilies' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Muscari Muscari' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Scilla Scilla' })).toBeVisible();
});