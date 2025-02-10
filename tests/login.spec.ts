import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

// we're using a page fixture here, which means that a new browser profile will be used for this test,
// ensuring the test has a fresh environment and no cookies or cache data from previous tests.
test('login test', async ({ page }) => {
  // In local environments, we can use a .env file to store environment variables for sensitive
  // or environment-specific data. On CI, we can set these envirionment variables using the CI software.
  // Sensitive data should be defined as a secret, and environment-specific data can be set as a regular
  // environment variable.
  const loginUser = process.env.LOGIN_USER || '';
  const loginPass = process.env.LOGIN_PASS || '';

  if (!loginUser || !loginPass) {
    throw new Error('Environment variables LOGIN_USER and LOGIN_PASS must be set');
  }

  // Navigate to the login page. We've set up our base URL in the playwright.config.ts file (which
  // gets the actual value from an environment variable), which means we can just use a relative
  // path here, making the test easier to read and maintain.
  await page.goto('/login');

  // Fill in the login credentials. We can get input fields by html locator - xpath, css, id etc,
  // or we can get the input field by label. The benefit of getting by label is that the test
  // can be more readable, and less brittle if developers change IDs in the future or, in the case
  // of xpaths, if the structure of the page changes. The downside is that this might not be the
  // preferred option if the webpage needs to be tested in different languages.
  await page.getByLabel('Username').fill(loginUser);
  await page.getByLabel('Password').fill(loginPass);

  // Click the login button. We're going to look specifically for a button with the text 'Login'.
  await page.getByRole('button', { name: 'Login' }).click();

  // await page.waitForTimeout(5000); DON'T USE EXPLICIT WAITS IN UI TESTS

  // There's no need to wait 5 seconds for the page to load - we can rely instead on Playwright
  // functionality to check that the new page has been loaded. Waiting dynamically will save time, and
  // make the test more robust. The expectations below will poll the page until either the condition
  // is met or the timeout is reached. This means the test will be faster if the page loads quickly,
  // but will still work if the page takes a little longer to load.

  await expect(page).toHaveURL('/secure'); // we can assert that the URL has changed

  // We can also assert that the page contains specific text, or that an element is visible.
  await expect(page.getByText('You logged into a secure area!')).toBeVisible(); // the alert should be visible
  await expect(page.locator('h2')).toHaveText('Secure Area'); // the page should have an h2 element with this text

  // await browser.close(); NO NEED TO DO THIS

  // Since we're using the Playwright test runner (@playwright/test), there's no need
  // to close the browser explicitly ourselves - the test runner will do it for us
});