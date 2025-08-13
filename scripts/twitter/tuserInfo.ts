// https://developer.x.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username

import { readOnlyClient } from "./common";

// Play with the built in methods
const user = await readOnlyClient.userByUsername('czydmm');

console.log(user);