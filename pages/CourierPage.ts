import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class CourierPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToBulkCourierServices() {
    await this.page.goto('https://www.grotal.com/');
    await this.page.locator(locators.courier.categoryXPath).click();
    await this.page.getByText('Bulk Courier Services').click();
    await this.page.waitForSelector(locators.courier.resultRow);
  }

  async validateBulkCourierResults(): Promise<void> {
    const resultRows = await this.page.locator(locators.courier.resultRow).allInnerTexts();
    const filteredResults = resultRows.filter(text => !text.includes('Sponsored Links'));

    console.log('Bulk Courier Services Results:\n');
    filteredResults.forEach((text, index) => {
      console.log(`Result ${index + 1}: ${text}`);
      expect(text).toContain('Bulk Courier Services');
    });
  }
}
