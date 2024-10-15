const { test, expect } = require('@playwright/test');

test('Login to JPetStore', async ({ page }) => {
  console.log('Navigating to the login page');
  await page.goto('https://jpetstore.aspectran.com/account/signonForm');

  console.log('Filling in the username and password');
  await page.fill('input[name="username"]', 'j2ee');
  await page.fill('input[name="password"]', 'j2ee');

  console.log('Clicking the login button');
  await page.click('//button[text()="Login"]');

  console.log('Checking if the login was successful');
  await expect(page).toHaveURL('https://jpetstore.aspectran.com/');
});
