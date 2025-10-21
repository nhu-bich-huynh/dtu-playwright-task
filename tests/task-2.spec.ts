import { test, expect } from '@playwright/test';

// Task 2:
// Create a test that verifies that it is possible to add 1 quantity of first bundle option
// (seems to always be 3 bundle options) for any type of tulip to the cart. Verify cart
// content.

// There are 17 different types of tulips to choose from (updated on 21/10/2025), I created one test per type.
// Note that for each type there are different options of tulip to choose from,
// many types have more than one options, while some have just one, 
// for simplicity I chose the first option for all types.

// 1. Botanical tulips
test('Tulip_Botanical tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.store-switcher__trigger').click();
  await page.getByRole('complementary').getByText('English').click();
  
  // Navigate to Tulips section, select Botanical tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Botanical tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/botanical-tulips'); 

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  // Click Add to cart
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible(); 
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Acuminata')).toBeVisible(); 
});


// 2. Darwin hybrid tulips
test('Tulip_Darwin hybrid tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Darwin hybrid tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Darwin hybrid tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/darwin-hybrid-tulips');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Apeldoorn')).toBeVisible();
});


// 3. Double early tulp
test('Tulip_Double early tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Double early tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Double early tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/double-early-tulips-1');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Foxtrot')).toBeVisible();
});


// 4. Double fringed tulips
test('Tulip_Double fringed tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();
  
  // Navigate to Tulips section, select Double fringed tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Double fringed tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/double-fringed-tulips');
  
  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first undle option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Brisbane')).toBeVisible();
});


// 5. Double late tulips
test('Tulip_Double late tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Double late tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Double late tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/double-late-tulips-1');

  // Add first bundle option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Akebono')).toBeVisible();    
});


// 6. Double parrot tulips
test('Tulip_Double parrot tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();


  // Navigate to Tulips section, select Double parrot tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Double parrot tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/double-parrot-tulips');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select > .icon').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Rococo double')).toBeVisible();
});


// 7. Fosteriana tulips
test('Tulip_Fosteriana tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Fosteriana tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Fosteriana tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/fosteriana-tulips-1');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Candela')).toBeVisible();
});

// 8. Fringed tulips
test('Tulip_Fringed tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();
  

  // Navigate to Tulips section
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  // Note: Used this selector as alternative to filter by text, since there is overlapping text with other categories
  await page.locator('li:nth-child(16) > .checkbox').check(); 
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/fringed-tulips-1');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Burgundy lace')).toBeVisible();
});


// 9. Greigii tulips
test('Tulip_Greigii tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Greigii tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Greigii tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/greigii-tulips');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first bundle option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Cape cod')).toBeVisible();
});


// 10. Kaufmanniana tulips
test('Tulip_Kaufmanniana tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.store-switcher__trigger').click();
  await page.getByRole('complementary').getByText('English').click();


  // Navigate to Tulips section, select Kaufmanniana tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Kaufmanniana tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/kaufmanniana-tulips');
 
 // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Giuseppe verdi')).toBeVisible();
});


// 11. Lily flowering tulips
test('Tulip_Lily flowering tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Lily flowering tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Lily flowering tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/lily-flowering-tulips-1');
  
  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Ballerina')).toBeVisible();
});


// 12. Parrot tulips
test('Tulip_Parrot tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();
  
  // Navigate to Tulips section
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  // Select Parrot tulips category, note that add '9 items' to uniquely identify the category (should be updated if site changes)
  await page.getByRole('listitem').filter({ hasText: 'Parrot tulips 9 items' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/parrot-tulips');
  
  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  
  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Black parrot')).toBeVisible();
});


// 13. Single early tulips
test('Tulip_Single early tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Single early tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Single early tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/single-early-tulips-1');

  // Add first bundle option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Aafke')).toBeVisible();
});

// 14. Single late tulips
test('Tulip_Single late tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Single late tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Single late tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/single-late-tulips');
  
  
  // Add first bundle option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Blue heaven')).toBeVisible();
});

// 15. Triumph tulips
test('Tulip_Triumph tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Triumph tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Triumph tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/triumph-tulips');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Abu hassan')).toBeVisible();
});


// 16. Various
test('Tulip_Various', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Various category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Various' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/various-1');

  // Add first bundle option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Picking garden mix deluxe')).toBeVisible();
});


// 17. Viridiflora tulips
test('Tulip_Viridiflora tulips', async ({ page }) => {
  // Navigate to the website, accept cookies, change language to English
  await page.goto('https://www.bulbi.nl/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();
  await page.getByRole('complementary').getByText('English').click();

  // Navigate to Tulips section, select Viridiflora tulips category
  await page.getByRole('link', { name: 'Tulips Tulips' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Viridiflora tulips' }).getByLabel('groep').check();
  //await page.goto('https://www.bulbi.nl/en/spring-flowering-bulbs/tulips/viridiflora-tulips');

  // Add first option to cart
  await page.getByRole('button', { name: 'Show options' }).first().click();
  // Select first option
  await page.locator('.product-grouped-options__option-select > .icon').first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify cart content:
  // Verify 1 item in cart
  await expect(page.getByText('1 item in cart €')).toBeVisible();
  await expect(page.getByRole('spinbutton')).toHaveValue('1');
  // Verify specific tulip added (should be updated if site changes)
  await expect(page.getByLabel('My Cart').getByText('Groenland')).toBeVisible();
});



