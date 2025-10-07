import { test } from '../fixtures/page_fixtures';
 
test('Search college and capture screenshot', async ({ pages }) => {
  await pages.education.searchCollege('Anna University Chennai', 'screenshots/anna-university-results.png');
});