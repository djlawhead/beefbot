const { Client, GatewayIntentBits } = require('discord.js');
const console = require("node:console");

export let ready = (stream: Client<true>) => console.log('Bot ready!');
export let failed = (reason) => console.log(`Bot failed! Reason: ${reason}`);
export let stopped = (token: string) => console.log(`Bot stopped ${token}`);
export const start =  (token: string) => {
    client.login(token)
        .then(() => console.log('Bot logged in!'))
        .catch((reason) => failed(reason))
}
export const stop =  (stream: Client<true>) => {
    stream.close().then(stopped);
}

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