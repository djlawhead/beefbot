const { Client, GatewayIntentBits } = require('discord.js');
const console = require("node:console");

/**
 * Triggers a callback function when the bot is ready.
 *
 * @param {function} stream - The callback function to be called when the bot is ready.
 * @returns {undefined}
 */
let ready = stream => console.log('Bot ready!', stream.name);

/**
 * Logs the failed state of the bot along with the reason.
 *
 * @param {string} reason - The reason for the failure.
 * @returns {void}
 */
let failed = reason => console.log(`Bot failed! Reason: ${reason}`);

/**
 * Prints a log message indicating that the bot stopped, along with a provided token.
 *
 * @param {string} token - The token to include in the log message.
 * @returns {void}
 */
let stopped = token => console.log(`Bot stopped ${token}`);

/**
 * Logs the bot in with the provided token.
 * @param {string} token - The token used to authenticate the bot.
 */
const start =  token => {
    client.login(token)
        .then(() => console.log('Bot logged in!'))
        .catch(reason => failed(reason))
}

/**
 * Stops the given stream by closing it and invoking the `stopped` callback once the stream is closed.
 *
 * @param {Client<true>} stream - The stream to be stopped.
 */
const stop =  stream => stream.close().then(stopped)

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', async (stream) => {
    ready(stream);
})

module.exports = {
    ready,
    failed,
    stopped,
    start,
    stop
}