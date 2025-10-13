import { test } from '../fixtures/page_fixtures';
import { readCSV } from '../utils/readCSV';

const testData = readCSV('data/carwash_data.csv');

for (const { City, Service } of testData) {
  test(`Retrieve ${Service} services in ${City}`, async ({ pages }) => {
    await pages.carwash.searchCarWash(City, Service);
    await pages.carwash.extractServiceDetails();
  });
}
