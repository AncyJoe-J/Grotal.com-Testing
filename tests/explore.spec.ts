import { test } from '../fixtures/page_fixtures';
 
test('Explore Chandigarh comment submission and invalid login', async ({ pages }) => {
  await pages.explore.navigateToExploreChandigarh();
  await pages.explore.submitCommentAndLoginInvalid(
    'xxxxxxxxxxxx',
    'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'xx@gmail.com',
    'xxxxxxxxxxxxxxxxxx'
  );
});