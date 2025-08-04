// https://developer.x.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets

import { readOnlyClient } from './common';

let userId = '1661187544476975104';
readOnlyClient.userLikedTweets('1661187544476975104', {
    max_results: 5,
    'tweet.fields': ['author_id', 'created_at', 'text', 'public_metrics', ''],
}).then((likes) => {
    console.log('User Likes:', likes);
}).catch((error) => {
    console.error('Error fetching user likes:', error);
});