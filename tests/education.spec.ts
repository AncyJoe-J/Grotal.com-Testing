import { test } from '../fixtures/page_fixtures';
import { readCSV } from '../utils/readCSV';

const collegeData = readCSV('data/college_data.csv');

for (const { College } of collegeData) {
  test(`Search and capture screenshot for ${College}`, async ({ pages }) => {
    const safeFileName = College.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const screenshotPath = `screenshots/${safeFileName}.png`;
    await pages.education.searchCollege(College, screenshotPath);
  });
}
