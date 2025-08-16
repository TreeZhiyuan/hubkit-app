import { twitterV2Client } from "./common.ts";

// Fetching the latest tweets from a specific user
// 1397504889283092480 哈芝咪经济
const tweets = await twitterV2Client.userTimeline('1397504889283092480', {
    max_results: 5,
    exclude: ['retweets', 'replies'], // Optional: exclude retweets and replies
    'tweet.fields': ['created_at', 'text', 'public_metrics'], // Specify fields you want
});

for await (const tweet of tweets) {
    console.log({
        id: tweet.id,
        text: tweet.text,
        created_at: tweet.created_at,
        metrics: tweet.public_metrics,
    });
}