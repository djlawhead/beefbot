const Rss = require('rss-parser');

export async function fetch(uri: String, limit: number) {
    const parser = new Rss();
    const feed = await parser.parseURL(uri);
    return feed.items.map(item => ({
        title: item.title,
        link: item.link,
    })).slice(limit * -1);
}