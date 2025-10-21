import { test, expect } from '@playwright/test';

// Task 3:
// Create a test that verifies that it is possible to add 4 quantities of the second bundle
// option for any type of crocus to the cart. Verify cart content.

// There are 3 different types of crocus to choose from (updated on 21/10/2025), I created one test per type.
// Note that for each type there are different options of crocus to choose from,
// many types have more than one options, while some have just one, 
// for simplicity I chose the first option for all types.

// 1. Other
test('Crocus_Other', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();


  // Navigate to Crocus section, select Other category
  await page.getByRole('link', { name: 'Crocus Crocus' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Other' }).getByLabel('groep').click();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/crocus/other-1');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Add 4 quantities
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  // Choose second bundle option
  await page.locator('div:nth-child(2) > .product-grouped-options__option-select > .icon').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  await expect(page.getByRole('spinbutton')).toHaveValue('4');
  await expect(page.getByLabel('My Cart')).toContainText('4 items in cart');
  await expect(page.getByLabel('My Cart').getByRole('link', { name: 'Sativus', exact: true })).toBeVisible();
});

// 2. Specie
test('Crocus_Specie', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Crocus section, select Specie category
  await page.getByRole('link', { name: 'Crocus Crocus' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Specie 11 items' }).getByLabel('groep').click();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/crocus/specie');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Add 4 quantities
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  // Choose second bundle option
  await page.locator('div:nth-child(2) > .product-grouped-options__option-select > .icon').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  await expect(page.getByRole('spinbutton')).toHaveValue('4');
  await expect(page.getByLabel('My Cart')).toContainText('4 items in cart');
  await expect(page.getByLabel('My Cart').getByRole('link', { name: 'Ard schenk chrysanthus', exact: true })).toBeVisible();
});

// 3. Vernus, large flowering
test('Crocus_Vernus', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Crocus section, select Vernus, large flowering category
  await page.getByRole('link', { name: 'Crocus Crocus' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Vernus, large flowering 6' }).getByLabel('groep').click();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/crocus/vernus-large-flowering');
  
  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Add 4 quantities
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  // Choose second bundle option
  await page.locator('div:nth-child(2) > .product-grouped-options__option-select > .icon').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  await expect(page.getByRole('spinbutton')).toHaveValue('4');
  await expect(page.getByLabel('My Cart')).toContainText('4 items in cart');
  await expect(page.getByLabel('My Cart').getByRole('link', { name: 'Flower record large flowering', exact: true })).toBeVisible();
});