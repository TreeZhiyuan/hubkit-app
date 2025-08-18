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

const tweets = await twitterClient.v2.userTimeline('1397504889283092480', {
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