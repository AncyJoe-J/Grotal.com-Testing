import { test } from '../fixtures/page_fixtures';
 
test('Retrieve car washing services in Chennai', async ({ pages }) => {
  await pages.carwash.searchCarWash('Chennai', 'Car Washing');
  await pages.carwash.extractServiceDetails();
});