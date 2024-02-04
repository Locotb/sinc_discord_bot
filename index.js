const { Client, GatewayIntentBits, MessageType, ButtonStyle } = require('discord.js');
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const utils = require('./utils.js');
const config = require('./config.json');
const token = config.token;


bot.once('ready', () => {
    const buttonsData = [
        { id: '1', label: 'junior', style: ButtonStyle.Success },
        { id: '2', label: 'senior', style: ButtonStyle.Danger },
    ];
    const buttons = utils.createBtns(buttonsData);
    const channel = bot.channels.cache.get('1201972636650045570');

    channel.send({ content: 'message', components: buttons });
});

bot.on('interactionCreate', interaction => {
    if (interaction.customId === '1') {
        interaction.member.roles.add('1200515468524539994');
    } else if (interaction.customId === '2') {
        interaction.member.roles.add('1200515418457124905');
    }

    interaction.reply({ content: 'ПОШОЛ ТЫ НАХУЙ', ephemeral: true });
});

bot.on('messageCreate', (msg) => {
    if (msg.channelId === '1200495232085672016' && msg.type === MessageType.UserJoin) {
        msg.react('🚗');
    }
});


bot.login(token);