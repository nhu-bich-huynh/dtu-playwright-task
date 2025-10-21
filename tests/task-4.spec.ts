import { test, expect } from '@playwright/test';

// Task 4:
// Create a test that verifies that it is possible to add 7 quantities of the bundle option
// for any type of lily. Verify cart content.


// There are 8 different types of lily to choose from (updated on 21/10/2025), I created one test per type.
// Note that for each type there are different options of lily to choose from,
// many types have more than one options, while some have just one, 
// for simplicity I chose the first option for all types.

// Since there is no specific requirement of the bundle option, I decided to create a variable named bundle_option
// to easily change the bundle option number for all types of lilies.

const bundle_option = 1; // Change the bundle option number as needed


// 1. Asiatic lily
test('Lily_Asiatic', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Asiatic lily 7 items' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/asiatic-lily');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
  // Asiatic mixed
});

// 2. Double asiatic lily
test('Lily_Double_asiatic', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Double asiatic lily' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/double-asiatic-lily-1');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
  //Asiatic double mix
});

// 3. Longiflorum lily
test('Lily_Longiflorum', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Longiflorum lily' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/longiflorum-lily-1');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click(); 
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
  // Longiflorum mix
});


// 4. Martagon 
test('Lily_Martagon', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Martagon' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/martagon-1');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click(); 
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
});


// 5. O.T. hybrid
test('Lily_OT_hybrid', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'O.T. hybrid' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/o-t-hybrid');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon `).click(); 
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
});    


// 6. Tiger lily 
test('Lily_Tiger', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();   
  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Tiger lily' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/tiger-lily');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click(); 
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
});



// 7. Trumpet
test('Lily_Trumpet', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Trumpet' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/trumpet');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click(); 
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
});

// 8. Various
test('Lily_Various', async ({ page }) => {
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  await page.getByRole('link', { name: 'Lilies Lilies' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Various' }).getByLabel('groep').check();
  // await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/lilies/various-1');
  await page.getByRole('button', { name: 'Show options' }).first().click();
  await page.locator(`div:nth-child(${bundle_option}) > .product-grouped-options__option-select > .icon`).click(); 
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('spinbutton')).toHaveValue('7');
});