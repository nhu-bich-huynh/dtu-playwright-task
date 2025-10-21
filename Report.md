# Report

To run the tests on all browsers (Chromium, Firefox, WebKit), use:  
`npx playwright test`

To run tests on a specific browser, use:  
`npx playwright test --project=chromium`

To run a specific task file, use:  
`npx playwright test name_of_test_file`  
For example: `npx playwright test task-1.spec.ts`

All the tests passed for **Chromium** and **Webkit** within a few minutes without noticeable issues.  
For **Firefox**, sometimes the test fails with:  
`Test timeout of 120000ms exceeded`  
This usually happens at:  
`await page.locator('.icon.icon__stroke.icon--chevron-down > use').click();`

I have created tests for **Task 1** to **Task 4**. **Task 5** is not yet completed.

---

### Refactoring Ideas

For **Tasks 2, 3, and 4**, I would refactor the code to use a single helper function that takes three arguments:  
1. The type of flower (e.g., tulip, crocus, or lily)  
2. The number of quantities  
3. The bundle option  

Moreoer, when verifying the cart, the test should dynamically check the name of selected flower on the website and compare it with the content in the cart.  

Currently, the code selects the first option for each flower type. It would be better to select one randomly by extracting the number of available options for each type and choosing one randomly.

---

### Plan for Task 5

If I had more time, I would create a helper function that takes three arguments, where each represents a flower type, for example: (function(tulip, tulip, lily)), as the task requires three different items (not necessarily from different types)  

Then, for each type, the function would randomly select one option as described above for task 2 to 4.   

To verify that the cart subtotal equals the sum of the subtotals for each item, I would dynamically extract the prices from the website, calculate the total, and assert that the displayed subtotal is correct.

---

### Time Spent

- **1 hour** learning Playwright and TypeScript (no prior experience)  
- **4 hours** working on the tasks, writing and testing the code  
- **1.5 hours** writing documentation, adding comments, and preparing this report

Note that, the time spent waiting for the final test execution is not included.
