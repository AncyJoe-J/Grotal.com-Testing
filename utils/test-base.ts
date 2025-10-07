import { Page } from '@playwright/test';

export class TestBase {
  constructor(public page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(selector: string) {
    await this.page.locator(selector).click();
  }

  async fill(selector: string, value: string) {
    await this.page.locator(selector).fill(value);
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }
}
