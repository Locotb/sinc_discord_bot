const { Client, GatewayIntentBits } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds] });
const config = require('./config.json');
const token = config.token;


bot.once('ready', () => {});


bot.login(token);