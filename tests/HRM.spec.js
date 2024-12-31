import { test, expect } from '@playwright/test';
 
 
test.describe('My test suite', () => {
 
  test('Sync. Case 1', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.click('input[name="username"]');
    await page.locator('input[name="username"]').fill("Admin");
    await page.locator('//input[@class="oxd-input oxd-input--active"]').fill('admin123');
    await page.click('button[type="submit"].oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button');
    await page.waitForTimeout(12000);
    await page.waitForSelector('text=Dashboard');
});
 
 
  test('Sync. Case 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Admin').nth(2).click();
  await expect(page.getByRole('table')).toContainText('Admin');
   });
  });