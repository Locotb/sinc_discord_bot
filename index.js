const { Client, GatewayIntentBits, MessageType, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const config = require('./config.json');
const token = config.token;


bot.once('ready', () => {
    const buttons = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('1')
                .setLabel('Junior')
                .setStyle('Primary'),

                new ButtonBuilder()
                .setCustomId('2')
                .setLabel('Senior')
                .setStyle('Danger'),
    );


    const channel = bot.channels.cache.get('1201972636650045570');
    channel.send({ content: 'message', components: [buttons] });
});

bot.on('messageCreate', (msg) => {
    if (msg.channelId === '1200495232085672016' && msg.type === MessageType.UserJoin) {
        msg.react('🚗');
    }
});




bot.login(token);