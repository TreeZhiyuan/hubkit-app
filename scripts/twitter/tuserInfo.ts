// https://developer.x.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username

import { TwitterApi } from 'twitter-api-v2';

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(
  {
    appKey: process.env.APP_KEY || '',
    appSecret: process.env.APP_SECRET || '',
    accessToken: process.env.ACCESS_TOKEN || '',
    accessSecret: process.env.ACCESS_SECRET || '',
  }
);
// Play with the built in methods
const user = await twitterClient.v2.readOnly.userByUsername('czydmm');

console.log(user);