const Discord = require('discord.js');
const client = new Discor.Client();

client.on('ready', () => {
     console.log('I am ready!');
})

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

//THIS MUST BE THIS WAY
client.login(process.evn.Bot_TOKEN);
