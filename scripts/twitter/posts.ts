import { readOnlyClient } from './common';

// https://developer.x.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets

// zhiha
readOnlyClient.userTimeline('1397504889283092480', {
    max_results: 5,
    'tweet.fields': ['author_id', 'created_at', 'text', 'public_metrics'],
}).then((tweets) => {
    console.log('User Tweets:', tweets);
}).catch((error) => {
    console.error('Error fetching user tweets:', error);
});