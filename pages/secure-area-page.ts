import { expect, type Locator, type Page } from '@playwright/test';

export class SecureAreaPage {
  readonly page: Page;
  readonly header: Locator;
  readonly flashMsgs: Locator;

  constructor(page: Page) {
    this.page = page;
    this.flashMsgs = page.locator('#flash-messages');
    this.header = page.locator('h2');
  }

  async goto() {
    await this.page.goto('/secure');
  }

}