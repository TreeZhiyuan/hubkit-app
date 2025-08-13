// https://developer.x.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets

import { readOnlyClient } from "./common.ts";

let maxResults = 1;
let userId:string = '1661187544476975104';
readOnlyClient.userLikedTweets(userId, {
    max_results: maxResults,
    'tweet.fields': ['author_id', 'created_at', 'text', 'public_metrics'],
}).then((likes) => {
    console.log('User Likes:', likes.data);
}).catch((error) => {
    console.error('Error fetching user likes:', error);
});