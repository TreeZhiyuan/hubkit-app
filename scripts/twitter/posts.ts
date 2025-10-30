import { twitterV2Client } from "./common.ts";

// Fetching the latest tweets from a specific user

const followingAccounts = [
{
    id: '1397504889283092480',
    name: '哈芝咪经济'
}, 
// {
//     id: '1523583150449778689',
//     name: '擒龙捉妖.陆地神仙.菜问'
// },
{
    id: '1003908754813935621',
    name: 'Rocky'
}
];

// Set to the start of today in UTC
let startTime = new Date();
startTime.setUTCHours(0, 0, 0, 0);

for (const account of followingAccounts) {
    console.log(`------ fetching tweets for ${account.name} (ID: ${account.id})`);

    const tweets = await twitterV2Client.userTimeline(account.id, {
        max_results: 5,
        start_time: startTime.toISOString(),
        exclude: ['retweets', 'replies'],
        'tweet.fields': ['created_at', 'text', 'public_metrics']
    });

    for await (const tweet of tweets) {
        console.log({
            id: tweet.id,
            text: tweet.text,
            created_at: tweet.created_at,
            metrics: tweet.public_metrics,
        });
    }
}

