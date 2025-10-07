import { test } from '../fixtures/page_fixtures';

test('Count service categories on homepage', async ({ pages }) => {
  await pages.services.countServiceCategories();
});
