// //const { test, expect } = require('@playwright/test');


// const {test} = require('@playwright/test')

// test ('sign up',async({browser})=>{
//     const context =await browser.newContext();
//     const page = await context.newPage()
//    // page.goto('https://letcode.in/signup')
//    page.goto('https://google.com')
//     await page.pause()
//     await page.locator('#name').fill('Jason Dsouza')
//     await page.pause()
//     await page.locator('//*[@id="email"]').fill('jason.dsouza@10pearls.com');
//     await page.pause()
//     await page.getByPlaceholder('Enter your password').fill('10@Pearls');
//     await page.getByLabel('I agree to the terms and').check();
//     await page.pause()
//     await page.getByRole('button', { name: 'SIGN UP' }).click();
//     await page.pause()
    


// })

const { test } = require('@playwright/test');

test('sign up', async ({ browser }) => {
  // Create a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the correct sign-up page
  await page.goto('https://letcode.in/signup');
  
  // Fill out the form fields
  await page.locator('#name').fill('Jason Dsouza'); // Use a CSS selector for name
  await page.locator('#email').fill('jason.dsouza@10pearls.com'); // Direct CSS selector for email
  await page.locator('[placeholder="Enter your password"]').fill('10@Pearls'); // Using placeholder for password

  // Check the checkbox
  await page.locator('label[for="terms"]').check(); // Label linked to terms checkbox

  // Click the sign-up button
  await page.locator('button[type="submit"]').click(); // Use button type if available
  
  // Optional: Pause the execution to inspect the page
  await page.pause();
});
