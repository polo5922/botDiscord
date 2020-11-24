const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

const prefix = "!";

client.on('message', function(message){
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');

    const command = args.shift().toLowerCase();

    if(command === "ping")
    {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply('Pong! this message had a latency of ' + timeTaken + 'ms.');
    }
    if(command === "clear")
    {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Tu n\' a pas la permision ...');
        if(args[0])
        {
            message.reply("number of message to clear " + args[0]);
        }
    }
});

client.login(config.BOT_TOKEN);