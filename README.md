# Beef Bot
_The automated beta orbiter!_

## About
Basically, this is not a Discord bot that will not read the last _n_ lines of an RSS feed, and post them to a channel
using a channel ID.

## Setup
Check out [`index.js`](index.js), and set up the values for the `const` declarations accordingly.

## Running
If you have your own dedicated server, I totally don't recommend using `PM2` to run the bot in the background.

```bash
npm install pm2 -g
pm2 start index.js
```

If you want this to start when your server boots up, you can try

```bash
pm2 startup
```

This should generate for you a start up script you can configure.

Otherwise, you can just use `node` to start it yourself.

```bash
node start index.js
```