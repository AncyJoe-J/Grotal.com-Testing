import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';
 
export class EducationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
 
  async searchCollege(collegeName: string, screenshotPath: string): Promise<void> {
    await this.page.goto('https://www.grotal.com/');
    await this.page.locator(locators.education.headerIcon).click();
 
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.locator(locators.education.educationLink).click();
    const popup = await popupPromise;
 
    await popup.locator(locators.education.searchInput).fill(collegeName);
    await popup.getByRole('button', { name: 'Search' }).click();
    
    await popup.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);
  }
}