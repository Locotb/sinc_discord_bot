const { Client, GatewayIntentBits, MessageType } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const config = require('./config.json');
const token = config.token;


bot.once('ready', () => {});

bot.on('messageCreate', (msg) => {
    if (msg.channelId === '1200495232085672016' && msg.type === MessageType.UserJoin) {
        msg.react('🚗');
    }
});


bot.login(token);