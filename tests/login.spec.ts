// import { test } from '../fixtures/page_fixtures';
// import { readCSV } from '../utils/readCSV';


// test.describe('Login validation with invalid mobile numbers', () => {
//   const testData = readCSV('data/login_test_data.csv');

//   for (const row of testData) {
//     test(`Validate error for mobile: ${row.Mobile}`, async ({ pages }) => {
//       await pages.login.navigateToLogin();
//       await pages.login.register(row.Name, row.Email, row.Mobile);
//       await pages.login.verifyMobileError();
//     });
//   }
// });
