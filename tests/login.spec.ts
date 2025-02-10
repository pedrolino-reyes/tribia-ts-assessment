import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

import { credentials } from '../helpers/credentials';
import { LoginPage } from '../pages/login-page';
import { SecureAreaPage } from '../pages/secure-area-page';

dotenv.config();

test('login test', async ({ page }) => {
  // Using a page object gives us a more declarative API for our tests
  const loginPage = new LoginPage(page);
  loginPage.goto();
  loginPage.logIn(credentials.loginUser, credentials.loginPass);

  // The assertions should always be done by the test, not the page object,
  // but the locator details are kept in the scope of the page object
  await expect(page).toHaveURL('/secure');
  const secureAreaPage = new SecureAreaPage(page);
  await expect(secureAreaPage.flashMsgs).toContainText('You logged into a secure area!');
  await expect(secureAreaPage.header).toHaveText('Secure Area');
});