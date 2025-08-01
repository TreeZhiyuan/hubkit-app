console.log("This is a demo script for Hubkit App");


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

// Tell typescript it's a readonly app
const readOnlyClient = twitterClient.readOnly;

// Play with the built in methods
const user = await readOnlyClient.v2.userByUsername('czydmm');
console.log(user);