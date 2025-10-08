import { test } from '../fixtures/page_fixtures';

test('Verify advertisement manual downloads (PDF & PPT)', async ({ pages }) => {
  await pages.advertise.navigateToAdvertiseSection();
  await pages.advertise.downloadAdvertisementManuals();
});
