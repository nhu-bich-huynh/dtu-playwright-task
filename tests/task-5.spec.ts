import { test, expect } from '@playwright/test';

// Task 5:
// Create a test that adds 3 different items to the cart in different quantities (any bundle option) 
// and verify that the subtotal for the cart is the sum of the subtotal of each item.

// Unfinished test
test('test', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();
  
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Close minicart' }).click();
  await page.getByRole('button', { name: 'Show options' }).nth(1).click();
  await page.locator('div:nth-child(2) > .product-grouped-options__option-select').click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Close minicart' }).click();
  await page.getByRole('button', { name: 'Show options' }).nth(2).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByLabel('My Cart').getByText('€9.95').click();
  await page.getByText('€39.95').click();
  await page.getByLabel('My Cart').getByText('€8.95').click();
  await page.getByText('€308.20').click();
});