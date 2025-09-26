// https://developer.x.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username

import { twitterV2Client } from "./common.ts";

// Play with the built in methods
const user = await twitterV2Client.readOnly.userByUsername('czydmm');

console.log(user);