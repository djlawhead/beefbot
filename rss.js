const Rss = require('rss-parser');

/**
 * Fetches the RSS feed from the given URI and returns an array of items with their titles and links.
 * @param {string} uri - The URI of the RSS feed.
 * @param {number} limit - The maximum number of items to return from the feed.
 * @returns {Promise<Array<{link: string, title: string}>>} - A promise that resolves to an array of objects containing the title and link of each item in the RSS feed.
 */
async function fetch(uri, limit) {
    const parser = new Rss();
    const feed = await parser.parseURL(uri);
    return feed.items.map(item => ({
        title: item.title,
        link: item.link,
    })).slice(limit * -1);
}

module.exports = {
    fetch
};