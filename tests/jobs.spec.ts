import { test } from '../fixtures/page_fixtures';

test('Verify PDF view for Research Officer (Pathology)', async ({ pages }) => {
  await pages.jobs.openResearchOfficerPDF();
});
