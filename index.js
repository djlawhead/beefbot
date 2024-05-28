const rss = require("rss");
const bot = require("bot");

const RSS_URL = 'YOUR_RSS_FEED_URL';
const BOT_TOKEN = 'YOUR_BOT_TOKEN';
const CHANNEL_ID = 'YOUR_DISCORD_CHANNEL_ID';
// Defaults to every ten minutes (in milliseconds)
const REFRESH_INTERVAL = (60 * 1000) * 10;
// do I need this?
// const PERMISSION_ID = '137439266880';

// Starts checking RSS feed on refresh interval
setInterval(refresh, REFRESH_INTERVAL);

// Read from RSS URL & send to Discord channel
function refresh() {
    // 1: Fetch last RSS article
    rss.fetch(RSS_URL, 1)
        // 2: Then...
        .then((articles) => {
            // ... ready our bot!
            bot.start(BOT_TOKEN);
            bot.ready = async (client) => {
                // 3: Send message
                await client.channels.cache.get(CHANNEL_ID).send(articles[0].link);
                // 4: Disconnect bot
                bot.stop();
            };
        });
}