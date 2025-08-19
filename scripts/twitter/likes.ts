// https://developer.x.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets

import { twitterV2Client } from "./common.ts";

let maxResults = 6;
let userId:string = '1661187544476975104';
twitterV2Client.readOnly.userLikedTweets(userId, {
    max_results: maxResults,
    'tweet.fields': ['author_id', 'created_at', 'text', 'public_metrics'],
}).then((likes) => {
    console.log('User Likes:', likes.data);
}).catch((error) => {
    console.error('Error fetching user likes:', error);
});
