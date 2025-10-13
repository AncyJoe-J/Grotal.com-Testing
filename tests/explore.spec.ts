import { test } from '../fixtures/page_fixtures';
import { readCSV } from '../utils/readCSV';

const commentData = readCSV('data/explore_comment_data.csv');

for (const { Name, Comment, Email, Password } of commentData) {
  test(`Submit comment and test invalid login for ${Name}`, async ({ pages }) => {
    await pages.explore.navigateToExploreChandigarh();
    await pages.explore.submitCommentAndLoginInvalid(Name, Comment, Email, Password);
  });
}
