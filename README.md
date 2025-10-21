# DTU Test Developer Coding Tasks

## Goal

Create Playwright UI tests against www.bulbi.nl/en (English version). You have no
control over this external site.

## Requirements
• Use TypeScript
• Use Playwright as test runner (codegen can help create the tests)
• Ensure tests run against the English site (handle language if needed)
• Keep any additional structure, tooling, comments, or documentation to what you judge appropriate

## Task 1:
Create a test that checks that the webpage www.bulbi.nl/en loads and shows the
“Most popular varieties” and that each of the actual varieties are shown.

## Task 2:
Create a test that verifies that it is possible to add 1 quantity of first bundle option
(seems to always be 3 bundle options) for any type of tulip to the cart. Verify cart
content.

## Task 3:
Create a test that verifies that it is possible to add 4 quantities of the second bundle
option for any type of crocus to the cart. Verify cart content.

## Task 4:
Create a test that verifies that it is possible to add 7 quantities of the bundle option
for any type of lily. Verify cart content.

## Task 5:
Create a test that adds 3 different items to the cart in different quantities (any bundle option) and verify that the subtotal for the cart is the sum of the subtotal of each
item.