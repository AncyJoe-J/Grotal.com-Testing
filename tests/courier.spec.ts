import { test } from '../fixtures/page_fixtures';

test('Validate Bulk Courier Services results', async ({ pages }) => {
  await pages.courier.navigateToBulkCourierServices();
  await pages.courier.validateBulkCourierResults();
});
