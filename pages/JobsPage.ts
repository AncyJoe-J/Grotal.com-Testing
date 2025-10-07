import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class JobsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openResearchOfficerPDF(): Promise<void> {
    await this.page.goto('https://www.grotal.com/');
    await this.page.locator(locators.jobs.headerIcon).click();

    const jobsPopup = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Jobs/Results' }).click();
    const jobsPage = await jobsPopup;

    const pdfPopup = jobsPage.waitForEvent('popup');
    await jobsPage.getByRole('link', {
      name: 'Jobs for The Post of Research Officer Pathology in Central Council for Research'
    }).click();
    const pdfPage = await pdfPopup;

    console.log('✅ PDF view opened successfully');
  }
}
