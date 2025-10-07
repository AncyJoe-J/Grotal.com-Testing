import { test } from '../fixtures/page_fixtures';
 
test('Retrieve Gym submenu items from Fitness section', async ({ pages }) => {
  await pages.gym.navigateToGyms();
  await pages.gym.displayGymSubmenuItems();
});